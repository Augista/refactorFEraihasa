import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import { ACTIFITY } from '@/contents/notification';
import Layout from '@/layouts/Layout';
import { MobileSidebar, SidebarUser } from '@/layouts/UserDashboard';

export default withAuth(Activity, 'user');

function Activity() {
  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='My Activity' />
      <main className='overflow-hidden mt-20 px-4 xl:px-[60px] bg-[#E4E4E7]'>
        <section className='xl:min-h-screen grid gap-8 grid-cols-1 xl:grid-cols-12 my-12 xl:my-20'>
          <div className='xl:col-span-3 hidden xl:block card'>
            <SidebarUser />
          </div>

          <div className='xl:col-span-9 bg-white py-8 xl:p-16 rounded-2xl'>
            <div className='header relative  grid place-items-center '>
              <MobileSidebar />
              <div className='bg-[#1B7691] py-4 px-8 relative text-white text-shadow-lg'>
                <Typography variant='h5' weight='semibold' className='!text-lg'>
                  Aktivitas Saya
                </Typography>
              </div>
            </div>
            <div className='grid place-items-center grid-flow-row gap-4 xl:gap-8 mt-8 px-4 xl:px-16'>
              {ACTIFITY.map((e, index) => (
                <div
                  className='px-8 flex gap-8 w-full rounded-md shadow-[2px_0_10px_0_rgba(0,0,0,0.25)]'
                  key={index}
                >
                  <div className='flex flex-col gap-1 py-3'>
                    <Typography
                      className='text- whitespace-nowrap'
                      weight='medium'
                    >
                      {e.date}
                    </Typography>
                    <Typography
                      className='text-base text-[#718096]'
                      weight='semibold'
                    >
                      {e.time}
                    </Typography>
                  </div>
                  <div className='flex flex-col md:flex-row border-l-[12px] border-[#1B7691] pl-8 py-2 md:py-0 md:w-full md:items-center justify-between'>
                    <Typography
                      weight='semibold'
                      className='text-sm md:text-2xl'
                    >
                      {e.title}
                    </Typography>

                    {e.status?.map((item, index) => (
                      <div key={index} className='text-center'>
                        <Typography
                          variant='p'
                          weight='semibold'
                          className={`!text-xs ${item.background} p-[6px] ${item.text} rounded-md`}
                        >
                          {item.description}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='pagination grid place-items-center relative w-full py-8'>
              <div className='flex items-center gap-4'>
                <IoIosArrowBack className='w-6 h-6 cursor-pointer' />
                <Button
                  variant='unstyled'
                  className='rounded flex items-center w-10 h-10 border border-[#37384C] hover:text-zinc-400'
                >
                  1
                </Button>
                <Button
                  variant='unstyled'
                  className='rounded md:flex items-center w-10 h-10 border border-[#37384C] hover:text-zinc-400 hidden '
                >
                  ...
                </Button>
                <Button
                  variant='unstyled'
                  className='rounded flex items-center w-10 h-10 border border-[#37384C] hover:text-zinc-400 shadow-pagination'
                >
                  5
                </Button>
                <Button
                  variant='unstyled'
                  className='rounded md:flex items-center w-10 h-10 border border-[#37384C] hover:text-zinc-400 hidden '
                >
                  ...
                </Button>
                <Button
                  variant='unstyled'
                  className='rounded flex items-center w-10 h-10 border border-[#37384C] hover:text-zinc-400'
                >
                  10
                </Button>
                <IoIosArrowForward className='w-6 h-6 cursor-pointer' />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
