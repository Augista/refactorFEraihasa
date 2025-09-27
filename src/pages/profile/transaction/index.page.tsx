import 'swiper/css';
import 'swiper/css/navigation';

import { useQuery } from '@tanstack/react-query';
import React from 'react';

import withAuth from '@/components/hoc/withAuth';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import { MobileSidebar, SidebarUser } from '@/layouts/UserDashboard';
import { ApiReturn } from '@/types/api';
import { TransactionHistoryProps } from '@/types/entities/transactionHistory';
import api from '@/lib/api';

export default withAuth(Transaction, 'user');

function Transaction() {
 const { data: transactionQuery, isLoading, error } = useQuery<
  ApiReturn<TransactionHistoryProps[]>
>({
  queryKey: ["/order/history"],
  queryFn: async () => {
    const res = await api.get<ApiReturn<TransactionHistoryProps[]>>(
      "/order/history"
    );
    return res.data;
  },
});
  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='Transaction History' />
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
                  Riwayat Transaksi
                </Typography>
              </div>
            </div>
            <div className='grid grid-flow-row gap-4 px-4 mt-8 place-items-center xl:gap-8 xl:px-16'>
              {transactionQuery?.data?.map((e, index) => (
                <div
                  className={`border-l-[27px] p-4 w-full lg:w-2/3 rounded-md shadow-[2px_0_10px_0_rgba(0,0,0,0.25)]`}
                  key={index}
                >
                  <div className='flex justify-between'>
                    <div className='flex flex-col gap-[6px]'>
                      <Typography variant='t' weight='bold'>
                        {e.productName}
                      </Typography>
                      <Typography variant='p' weight='bold'>
                        1x
                      </Typography>
                    </div>
                    {/* {e.status?.map((item, index) => ( */}
                    <div>
                      <Typography
                        variant='p'
                        weight='semibold'
                        className={`!text-sm  p-[6px]  rounded-md`}
                      >
                        LOREM
                      </Typography>
                    </div>
                    {/* ))} */}
                  </div>
                  <div className='flex flex-col justify-between mt-4 lg:flex-row'>
                    <Typography variant='p' className='!text-base'>
                      Total pembelian :
                    </Typography>
                    <Typography weight='bold' className='text-[#E62A3A]'>
                      {e.price}
                    </Typography>
                  </div>
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
            </div> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
