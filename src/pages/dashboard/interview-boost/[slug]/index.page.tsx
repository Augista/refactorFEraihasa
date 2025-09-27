export const runtime = 'experimental-edge';

import { parseDateTime } from '@internationalized/date';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';

import IconButton from '@/components/buttons/IconButton';
import DatePicker from '@/components/form/DatePicker';
import withAuth from '@/components/hoc/withAuth';
import ImagePreview from '@/components/ImagePreview';
import PrimaryLink from '@/components/links/PrimaryLink';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import AdminDashboard from '@/layouts/AdminDashboard';
import { ApiReturn } from '@/types/api';
import {
  InterviewDetail,
  PostInterviewSchedule,
} from '@/types/entities/detailadmin';

export default withAuth(DetailInterviewBoost, 'user');
function DetailInterviewBoost() {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: InterviewDetailData,
    isLoading: InterviewDetailLoading,
    error: InterviewDetailError,
  } = useQuery<ApiReturn<InterviewDetail>>({
    queryKey: ["/booster/interview", slug],
    queryFn: async () => {
      if (!slug) throw new Error("Slug belum ada");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/booster/interview/${slug}`
      );
      if (!res.ok) throw new Error("Gagal fetch detail interview");
      return res.json();
    },
    enabled: !!slug, // hanya jalan kalau slug sudah ada
  });

  const methods = useForm<PostInterviewSchedule>({
    mode: "onTouched",
  });
  if (InterviewDetailLoading) return <Loading />;
    if (InterviewDetailError) return <p>Error loading interview</p>;

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
            Interview Boost
          </Typography>
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
              {InterviewDetailData?.data.order_name}
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
            <Typography>{InterviewDetailData?.data.order_name}</Typography>
          </div>
          <hr />
          <div className='flex justify-between py-5'>
            <Typography>Email</Typography>
            <Typography>{InterviewDetailData?.data.email}</Typography>
          </div>
          <hr />
          <div className='flex flex-col justify-between gap-2 py-5'>
            <Typography>Bukti Pembayaran</Typography>
            <ImagePreview
              imgSrc={`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/file/${InterviewDetailData?.data.payment_proof}`}
              alt='button'
            />
          </div>
        </div>
        {/* interview detail */}
        <div className='md:w-1/2'>
          <Typography weight='bold'>Interview Detail</Typography>

          <div className=''>
            <FormProvider {...methods}>
              <form className='flex flex-col w-full gap-2'>
                <div className='flex flex-col justify-between w-full py-5 md:flex-row max-md:gap-2'>
                  <div className='flex items-center w-3/4'>
                    <Typography>Jadwal Interview</Typography>
                  </div>
                  <DatePicker
                    id='schedule'
                    variant='bordered'
                    granularity='minute'
                    hideTimeZone
                    showMonthAndYearPickers
                    aria-label='schedule'
                    value={
                      InterviewDetailData?.data.jadwal
                        ? (parseDateTime(
                            InterviewDetailData.data.jadwal.split('.')[0]
                          ) as unknown as undefined)
                        : undefined
                    }
                  />
                </div>
                <hr />
                <div className='flex flex-col justify-between gap-2 py-5'>
                  <Typography>Zoom Meeting</Typography>
                  {InterviewDetailData?.data.link_zoom === 'No Zoom link' ? (
                    <Typography>-</Typography>
                  ) : (
                    <PrimaryLink
                      href={InterviewDetailData?.data.link_zoom ?? ''}
                      variant='secondary'
                      className='items-start justify-start'
                    >
                      {InterviewDetailData?.data.link_zoom}
                    </PrimaryLink>
                  )}
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
}
