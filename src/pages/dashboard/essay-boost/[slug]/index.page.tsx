export const runtime = 'experimental-edge';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { IoIosArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import { SiGoogledocs } from 'react-icons/si';

import IconButton from '@/components/buttons/IconButton';
import withAuth from '@/components/hoc/withAuth';
import ImagePreview from '@/components/ImagePreview';
import ButtonLink from '@/components/links/ButtonLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import AdminDashboard from '@/layouts/AdminDashboard';
import { ApiReturn } from '@/types/api';
import { EssayDetail } from '@/types/entities/detailadmin';

export default withAuth(DetailEssayBoost, 'user');
function DetailEssayBoost() {
  const router = useRouter();
  const { slug } = router.query;

 const { data: EssayDetailData, isLoading: EssayDetailLoading } = useQuery<ApiReturn<EssayDetail>>({
  queryKey: ['/booster/essay', slug],
  queryFn: async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/booster/essay/${slug}`
    );
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  },
});
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
            <div className='flex flex-col w-full gap-2 py-5'>
              <Typography>Hasil Review</Typography>
              {EssayDetailData?.data.link_review === 'No review link' ? (
                <Typography>-</Typography>
              ) : (
                <PrimaryLink
                  href={EssayDetailData?.data.link_review ?? ''}
                  variant='secondary'
                  className='items-start justify-start'
                >
                  {EssayDetailData?.data.link_review}
                </PrimaryLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
}
