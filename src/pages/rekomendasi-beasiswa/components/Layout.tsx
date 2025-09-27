import React from 'react';

import NextImage from '@/components/NextImage';
import Layout from '@/layouts/Layout';

export default function LayoutForm({
  children,
  activeStep = 0,
}: {
  children: React.ReactNode;
  activeStep: number;
}) {
  const percent = Math.round((activeStep / 23) * 100);

  return (
    <Layout withFooter withNavbar>
      <div className='w-full'>
        <div
          style={{ width: `${percent}%` }}
          className='bg-[#F5A524] w-full fixed top-[98px] md:top-[80px] h-[4px] transition-all duration-300 z-30'
        ></div>
      </div>
      <main className='overflow-hidden bg-[#fff]'>
        <section className='relative flex h-full min-h-screen w-screen overflow-hidden pt-[200px] lg:pt-[120px] px-[16px] pb-16'>
          <NextImage
            src={'/images/landing/hero-b.png'}
            width={264}
            height={264}
            quality={100}
            alt='Haira Raih Asa'
            className='absolute bottom-0 left-0 w-1/3 md:w-[220px] z-0'
            data-aos='fade-right'
          />
          {children}
        </section>
      </main>
    </Layout>
  );
}
