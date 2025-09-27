export const runtime = 'experimental-edge';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';
import { SiGoogledocs } from 'react-icons/si';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Input from '@/components/form/Input';
import withAuth from '@/components/hoc/withAuth';
import ImagePreview from '@/components/ImagePreview';
import ButtonLink from '@/components/links/ButtonLink';
import Loading from '@/components/Loading';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import useMutationToast from '@/hooks/useMutationToast';
import AdminDashboard from '@/layouts/AdminDashboard';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';
import {
  EssayDetail,
  PostEssayReview,
  UpdateStatus,
} from '@/types/entities/detailadmin';
import axios from 'axios';

export default withAuth(AdminDetailEssayBoost, 'admin');
function AdminDetailEssayBoost() {
  const router = useRouter();
  const { slug } = router.query;

const { data: EssayDetailData, isLoading: EssayDetailLoading } = useQuery<ApiReturn<EssayDetail>>({
  queryKey: ['/booster/essay', slug],
  queryFn: async () => {
    const res = await axios.get<ApiReturn<EssayDetail>>(`/booster/essay/${slug}`);
    return res.data;
  },
});

  const methods = useForm<PostEssayReview>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;

  const { mutate: PostReviewMutate, isPending: PostReviewLoading } =
    useMutationToast<void, PostEssayReview>(
      useMutation({
        mutationFn: async (data) => {
          await api.post(`/booster/essay/review/${slug}`, data);
        },
        onSuccess: () => {
          showToast('Hasil review berhasil disimpan!', SUCCESS_TOAST);
        },
        onError: (error) => {
          showToast(`${error.message}`, DANGER_TOAST);
        },
      })
    );

  const onSubmit: SubmitHandler<PostEssayReview> = (data) => {
    PostReviewMutate(data);
  };

  const { mutate: UpdateStatusMutate, isPending: UpdateStatusLoading } =
    useMutationToast<void, UpdateStatus>(
      useMutation({
        mutationFn: async (data) => {
          await api.patch(`/booster/verify/${slug}`, data);
        },
        onSuccess: () => {
          showToast('Status berhasil diubah!', SUCCESS_TOAST);
        },
        onError: (error) => {
          showToast(`${error.message}`, DANGER_TOAST);
        },
      })
    );

  const handleStatus: SubmitHandler<UpdateStatus> = (data) => {
    UpdateStatusMutate(data);
  };

  if (EssayDetailLoading) return <Loading />;

  return (
    <AdminDashboard className='flex flex-col w-full gap-2 px-5 py-6 overflow-hidden md:px-14'>
      <div className='flex flex-col justify-between md:flex-row max-md:gap-3 md:items-center'>
        <div className='flex items-center gap-4 md:gap-8 md:justify-center'>
          <IconButton
            size='sm'
            icon={IoArrowBack}
            variant='primary'
            onClick={() => router.back()}
          />
          <Typography
            as='h1'
            variant='h4'
            weight='bold'
            className='text-3xl text-neutral-100'
          >
            Essay Boost
          </Typography>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <Button
            leftIcon={FaRegCheckCircle}
            className='bg-[#6ABC90]'
            onClick={() => handleStatus({ status: 'APPROVED' })}
            isLoading={UpdateStatusLoading}
          >
            Terima
          </Button>
          <Button
            leftIcon={RxCrossCircled}
            className='bg-[#E94759]'
            onClick={() => handleStatus({ status: 'REJECTED' })}
            isLoading={UpdateStatusLoading}
          >
            Tolak
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='breadcrumb'>
          <div className='flex items-center gap-1'>
            <Typography
              variant='p'
              className='text-base text-[#1B7691] font-bold'
            >
              Info Beasiswa
            </Typography>
            <IoIosArrowForward className='text-[#AEAEB6] font-bold' />
            <Typography
              variant='p'
              className='text-base text-[#1B7691] font-bold'
            >
              Detail
            </Typography>
            <IoIosArrowForward className='text-[#AEAEB6] font-bold' />
            <Typography variant='p' className='text-base font-bold'>
              {EssayDetailData?.data.order_name}
            </Typography>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full gap-2 mt-8 md:flex-row md:gap-16'>
        {/* order detail */}
        <div className='md:w-1/2'>
          <Typography weight='bold'>Order Detail</Typography>
          <div className='flex justify-between py-5'>
            <Typography>Nama</Typography>
            <Typography>{EssayDetailData?.data.order_name}</Typography>
          </div>
          <hr />
          <div className='flex justify-between py-5'>
            <Typography>Email</Typography>
            <Typography>{EssayDetailData?.data.email}</Typography>
          </div>
          <hr />
          <div className='flex flex-col justify-between gap-2 py-5'>
            <Typography>Bukti Pembayaran</Typography>
            <ImagePreview
              imgSrc={`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/file/${EssayDetailData?.data.payment_proof}`}
              alt='button'
            />
          </div>
        </div>
        {/* essay detail */}
        <div className='md:w-1/2'>
          <Typography weight='bold'>Essay Detail</Typography>
          <div className='flex justify-between py-5'>
            <div className='flex items-center'>
              <Typography>Dokumen Essay</Typography>
            </div>
            <ButtonLink
              variant='primary'
              href={`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/file/${EssayDetailData?.data.file_essay}`}
              leftIcon={SiGoogledocs}
              leftIconClassName='mr-2'
              className='px-4 py-2 text-center'
            >
              Lihat Dokumen Essay
            </ButtonLink>
          </div>
          <hr />
          <div className=''>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col w-full gap-2 py-5'
              >
                <Typography>Hasil Review</Typography>
                <Input
                  id='file_link'
                  placeholder='Masukkan link drive disini'
                />
                <div className='flex justify-end'>
                  <Button isLoading={PostReviewLoading} type='submit'>
                    Simpan
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
}
