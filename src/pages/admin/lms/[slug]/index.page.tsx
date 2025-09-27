export const runtime = 'experimental-edge';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { SubmitHandler } from 'react-hook-form';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import withAuth from '@/components/hoc/withAuth';
import ImagePreview from '@/components/ImagePreview';
import Loading from '@/components/Loading';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import useMutationToast from '@/hooks/useMutationToast';
import AdminDashboard from '@/layouts/AdminDashboard';
import api from '@/lib/api';
import { formatRupiah } from '@/lib/currency';
import { ApiReturn } from '@/types/api';
import { LMSDetail, UpdateStatus } from '@/types/entities/detailadmin';
import axios from 'axios';

export default withAuth(AdminDetailLMS, 'admin');
function AdminDetailLMS() {
  const router = useRouter();
  const { slug } = router.query;

const { data: LMSDetailData, isLoading: LMSDetailLoading } =
  useQuery<ApiReturn<LMSDetail>>({
    queryKey: ['/lms/order', slug],
    queryFn: async () => {
      const res = await axios.get<ApiReturn<LMSDetail>>(`/lms/order/${slug}`);
      return res.data;
    },
  });

  const { mutate: UpdateStatusMutate, isPending: UpdateStatusLoading } =
    useMutationToast<void, UpdateStatus>(
      useMutation({
        mutationFn: async (data) => {
          await api.patch(`/lms/verify/${slug}?status=${data.status}`);
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

  if (LMSDetailLoading) return <Loading />;

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
            LMS Order
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
              LMS Order
            </Typography>
            <IoIosArrowForward className='text-[#AEAEB6] font-bold' />
            <Typography
              variant='p'
              className='text-base text-[#1B7691] font-bold'
            >
              Detail
            </Typography>
          </div>
        </div>
      </div>
      <Typography weight='bold' className='mt-8'>
        Order Detail
      </Typography>
      <div className='flex flex-col w-full gap-2 md:flex-row md:gap-16'>
        {/* order detail */}
        <div className='md:w-1/2'>
          <div className='flex justify-between py-5'>
            <Typography>Paket</Typography>
            <Typography>{LMSDetailData?.data.paket}</Typography>
          </div>
          <hr />
          <div className='flex justify-between py-5'>
            <Typography>Tanggal Mulai Paket</Typography>
            <Typography>{LMSDetailData?.data.start}</Typography>
          </div>
          <hr />
          <div className='flex justify-between py-5'>
            <Typography>Tanggal Selesai Paket</Typography>
            <Typography>{LMSDetailData?.data.end}</Typography>
          </div>
          <hr />
          <div className='flex justify-between py-5'>
            <Typography>Masa Aktif</Typography>
            <Typography>{LMSDetailData?.data.masa_aktif} bulan</Typography>
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='flex justify-between py-5'>
            <Typography>Harga</Typography>
            <Typography>
              {formatRupiah(LMSDetailData?.data.harga ?? 0)}
            </Typography>
          </div>
          <hr />
          <div className='flex justify-between py-5'>
            <Typography>Total Bayar</Typography>
            <Typography>
              {formatRupiah(LMSDetailData?.data.total_bayar ?? 0)}
            </Typography>
          </div>
          <hr />
          <div className='flex flex-col justify-between gap-2 py-5'>
            <Typography>Bukti Pembayaran</Typography>
            <ImagePreview
              imgSrc={`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/file/${LMSDetailData?.data.bukti_bayar}`}
              alt='button'
            />
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
}
