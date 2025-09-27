import React from 'react';

import withAuth from '@/components/hoc/withAuth';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import AdminDashboard from '@/layouts/AdminDashboard';

export default withAuth(DashboardUserPage, 'user');
function DashboardUserPage() {
  return (
    <AdminDashboard
      withSidebar
      className='relative flex flex-col overflow-hidden'
    >
      <div className='h-[550px]'>
        <NextImage
          src='/images/dashboard/texture.png'
          width={1080}
          height={405}
          alt='background'
          className='absolute top-[20.2%] 2xl:top-[-2.9%] w-full h-auto object-cover'
        />
        <NextImage
          src='/images/dashboard/haira.png'
          width={583}
          height={460}
          alt='haira'
          className='absolute top-[9.9%]'
        />
        <NextImage
          src='/images/dashboard/leaf.png'
          width={79}
          height={151}
          alt='leaf'
          className='absolute top-[44.18%]'
        />
        <NextImage
          src='/images/dashboard/bulat.png'
          width={158}
          height={104}
          alt='bulat'
          className='absolute top-[44%] right-[5%]'
        />
        <NextImage
          src='/images/logo.png'
          width={50}
          height={35}
          alt='logo'
          className='absolute top-[5%] left-[5%]'
        />
        <Typography className='absolute top-[20%] text-3xl text-[#1b7691] left-[50%]'>
          Gapai Cita-Citamu <br className='mt-2' />{' '}
          <span className='font-bold text-5xl'>Untuk Raih Beasiswa!</span>
        </Typography>
      </div>
      <div className='px-5 md:px-14 py-8 grid grid-cols-4 gap-4'>
        <div className='py-6 px-6 border rounded-lg border-black flex flex-col gap-10 justify-center items-center'>
          <Typography className='text-center'>CV Boost</Typography>
          <NextImage
            src='/images/dashboard/cv-boost.png'
            width={140}
            height={93}
            alt='cv'
            className=''
          />
          <ButtonLink
            variant='primary'
            href='/dashboard/cv-boost'
            className='px-4 py-2 flex'
          >
            Lihat Rincian
          </ButtonLink>
        </div>
        <div className='py-6 px-6 border rounded-lg border-black flex flex-col gap-10 justify-center items-center'>
          <Typography className='text-center'>Essay Boost</Typography>
          <NextImage
            src='/images/dashboard/essay-boost.png'
            width={140}
            height={93}
            alt='essay'
            className=''
          />
          <ButtonLink
            variant='primary'
            href='/dashboard/essay-boost'
            className='px-4 py-2 flex'
          >
            Lihat Rincian
          </ButtonLink>
        </div>
        <div className='py-6 px-6 border rounded-lg border-black flex flex-col gap-10 justify-center items-center'>
          <Typography className='text-center'>Interview Boost</Typography>
          <NextImage
            src='/images/dashboard/interview-boost.png'
            width={140}
            height={93}
            alt='interview'
            className=''
          />
          <ButtonLink
            variant='primary'
            href='/dashboard/interview-boost'
            className='px-4 py-2 flex'
          >
            Lihat Rincian
          </ButtonLink>
        </div>
        <div className='py-6 px-6 border rounded-lg border-black flex flex-col gap-10 justify-center items-center'>
          <Typography>LMS</Typography>
          <NextImage
            src='/images/dashboard/lms.png'
            width={140}
            height={93}
            alt='lms'
            className=''
          />
          <ButtonLink
            variant='primary'
            href='/dashboard/lms'
            className='px-4 py-2 flex'
          >
            Lihat Rincian
          </ButtonLink>
        </div>
      </div>
    </AdminDashboard>
  );
}
