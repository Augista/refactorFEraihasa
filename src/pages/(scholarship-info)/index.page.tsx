import React from 'react';

import SEO from '@/components/SEO';
import { SCHOLARSHIP_DATA } from '@/contents/scholarship';
import Layout from '@/layouts/Layout';
import ScholarshipCard from '@/pages/(scholarship-info)/component/ScholarshipCard';

export default function InfoBeasiswa() {
  return (
    <Layout withFooter={true} withNavbar={true}>
      <SEO title='Info Beasiswa' />
      <main className='w-screen min-h-screen flex flex-col my-16 gap-28'>
        <section className='w-fit mx-auto flex flex-col items-center gap-4'>
          <h1 className='font-bold text-[50px] font-primary text-primary-bluegreen'>
            Info Beasiswa
          </h1>
          <h2 className='font-medium text-2xl font-primary'>
            Raih mimpimu, eksplorasi dirimu!
          </h2>
        </section>

        <section className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {SCHOLARSHIP_DATA.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
