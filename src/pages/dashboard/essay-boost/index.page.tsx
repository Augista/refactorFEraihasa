import { IoIosArrowForward } from 'react-icons/io';

import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';
import AdminDashboard from '@/layouts/AdminDashboard';

import DashboardTableContainer from '../container/DashboardTableContainer';

export default withAuth(DashboardEssayPage, 'user');
function DashboardEssayPage() {
  return (
    <AdminDashboard
      className='px-5 md:px-14 py-6 flex gap-2 flex-col overflow-hidden'
      withSidebar
    >
      <div className='flex md:flex-row flex-col max-md:gap-2 justify-between items-center'>
        <Typography
          as='h1'
          variant='h4'
          weight='bold'
          className='text-neutral-100 text-3xl'
        >
          Program Essay Boost Raihasa
        </Typography>
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

            <Typography variant='p' className='text-base font-bold'>
              Detail
            </Typography>
          </div>
        </div>
        <DashboardTableContainer event='essay' />
      </div>
    </AdminDashboard>
  );
}
