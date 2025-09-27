import 'swiper/css';
import 'swiper/css/navigation';

import { useQuery } from '@tanstack/react-query';
import React from 'react';

import withAuth from '@/components/hoc/withAuth';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import { MobileSidebar, SidebarUser } from '@/layouts/UserDashboard';
import api from '@/lib/api';

type notifProps = {
  currentPage: number;
  notifications: notificationData[];
  totalPages: number;
  totalResults: number;
};

type notificationData = {
  title: string;
  body: string;
  length: number;
};

export default withAuth(Notification, 'user');

function Notification() {
   const { data: notifQuery, isLoading, error } = useQuery<notifProps>({
    queryKey: ["/scholarship/notification"],
    queryFn: async () => {
      const res = await api.get<notifProps>("/scholarship/notification");
      return res.data;
    },
  });

  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='Notification Page' />
      <main className='overflow-hidden mt-20 px-4 xl:px-[60px] bg-[#E4E4E7]'>
        <section className='grid grid-cols-1 gap-8 my-12 xl:min-h-screen xl:grid-cols-12 xl:my-20'>
          <div className='hidden xl:col-span-3 xl:block card'>
            <SidebarUser />
          </div>

          <div className='py-8 bg-white xl:col-span-9 rounded-2xl'>
            <div className='relative grid header place-items-center '>
              <MobileSidebar />
              <div className='bg-[#1B7691] relative py-4  px-8 text-white text-shadow-lg'>
                <Typography variant='h5' weight='semibold'>
                  Notifications
                </Typography>
                <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='68'
                    height='68'
                    viewBox='0 0 68 68'
                    fill='none'
                  >
                    <g clip-path='url(#clip0_2509_1059)'>
                      <g filter='url(#filter0_d_2509_1059)'>
                        <path
                          d='M40.5628 13.5619C32.2003 10.7404 23.1338 15.2322 20.3123 23.5947L17.2591 32.6439L14.8726 33.8263C13.9073 34.3045 13.3251 35.3171 13.3976 36.3919C13.47 37.4667 14.1828 38.392 15.2035 38.7364L45.4868 48.9541C46.5075 49.2985 47.6352 48.9941 48.344 48.1829C49.0527 47.3717 49.2031 46.2134 48.7248 45.2481L47.5425 42.8616L50.5957 33.8124C53.4172 25.4499 48.9253 16.3834 40.5628 13.5619Z'
                          fill='#F39636'
                        />
                        <path
                          d='M26.9392 53.9397C22.7579 52.5289 20.512 47.9957 21.9227 43.8144L37.0644 48.9233C35.6537 53.1045 31.1204 55.3505 26.9392 53.9397Z'
                          fill='#F39636'
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id='filter0_d_2509_1059'
                        x='9.3916'
                        y='8.71899'
                        width='46.0471'
                        height='49.6421'
                        filterUnits='userSpaceOnUse'
                        color-interpolation-filters='sRGB'
                      >
                        <feFlood
                          flood-opacity='0'
                          result='BackgroundImageFix'
                        />
                        <feColorMatrix
                          in='SourceAlpha'
                          type='matrix'
                          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                          result='hardAlpha'
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation='2' />
                        <feComposite in2='hardAlpha' operator='out' />
                        <feColorMatrix
                          type='matrix'
                          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
                        />
                        <feBlend
                          mode='normal'
                          in2='BackgroundImageFix'
                          result='effect1_dropShadow_2509_1059'
                        />
                        <feBlend
                          mode='normal'
                          in='SourceGraphic'
                          in2='effect1_dropShadow_2509_1059'
                          result='shape'
                        />
                      </filter>
                      <clipPath id='clip0_2509_1059'>
                        <rect
                          width='53.2677'
                          height='53.2677'
                          fill='white'
                          transform='translate(17.0295) rotate(18.6445)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className='grid grid-flow-row gap-4 px-4 mt-8 place-items-center xl:gap-8 xl:px-16'>
                   {notifQuery?.notifications?.map((e, index) => (
                // /* // {NOTIFICATION.map((e, index) => ( */
                <div
                  key={index}
                  className='flex flex-col p-4 rounded-md shadow-card xl:py-8 xl:px-6 gap-1/2'
                >
                  <Typography
                    variant='h1'
                    className='!text-sm md:!text-md font-bold'
                  >
                    {e.title}
                  </Typography>
                  <Typography variant='p' className='!text-xs md:!text-sm'>
                    {/* {notifQuery?.notifications[0].body} */}
                    {e.body}
                  </Typography>
                </div>
              ))}
            </div>
            {/* <div className='relative grid w-full py-8 pagination place-items-center'>
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
                  className='rounded flex items-center w-10 h-10 border border-[#37384C] hover:text-zinc-400'
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
                  className='rounded flex items-center w-10 h-10 border border-[#37384C] hover:text-zinc-400'
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
            </div> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
