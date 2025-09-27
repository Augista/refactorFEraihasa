import React from 'react';
import Layout from '@/layouts/Layout';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';

export default function Trial() {
  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='Trial - Raih Asa' />
      <main className='min-h-screen flex items-center justify-center bg-[#4EA4BE]'>
        <div className='text-center px-4'>
          <Typography className='text-white text-4xl md:text-6xl font-bold mb-4'>
            Mulai Trial Gratis
          </Typography>
          <Typography className='text-white text-lg md:text-xl'>
            Selamat datang di halaman trial Raih Asa!
          </Typography>
        </div>
      </main>
    </Layout>
  );
}
