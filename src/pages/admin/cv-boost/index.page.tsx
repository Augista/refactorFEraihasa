import * as React from 'react';
import { BsExclamationLg } from 'react-icons/bs';
import { FaFileExport } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { PiLightningFill } from 'react-icons/pi';
import { TbChartArcs } from 'react-icons/tb';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';
import AdminDashboard from '@/layouts/AdminDashboard';
import Statistic from '@/pages/admin/components/Statistic';
import TableSorting from '@/pages/admin/container/TableSorting';

export default withAuth(AdminCVBoost, 'admin');
function AdminCVBoost() {
  return (
    <AdminDashboard
      withSidebar
      className='px-5 md:px-14 py-6 flex gap-2 flex-col overflow-hidden'
    >
      <div className='flex md:flex-row flex-col max-md:gap-2 justify-between items-center'>
        <Typography
          as='h1'
          variant='h4'
          weight='bold'
          className='text-neutral-100 text-3xl'
        >
          Program CV Boost Raihasa
        </Typography>
        <Button leftIcon={FaFileExport}>Export to CSV</Button>
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

        <div className='flex max-sm:flex-col flex-wrap items-start md:items-center max-md:px-10 gap-5 py-0.5 justify-around xl:gap-14'>
          <Statistic
            title='Unverified'
            value='9999'
            icon={BsExclamationLg}
            iconClassName='bg-[#A1A1AA]'
            textClassName='text-[#71717A]'
          />
          <Statistic
            title='Confirmed'
            value='9999'
            icon={PiLightningFill}
            iconClassName='bg-primary-blue'
            textClassName='text-primary-blue'
          />
          <Statistic
            title='Rejected'
            value='9999'
            icon={IoClose}
            iconClassName='bg-[#E94759]'
            textClassName='text-[#E94759]'
          />
          <Statistic
            title='Waiting'
            value='9999'
            icon={TbChartArcs}
            iconClassName='bg-[#FB991A]'
            textClassName='text-[#FB991A]'
          />
          <Statistic
            title='Complete'
            value='9999'
            icon={FaCheck}
            iconClassName='bg-[#6ABC90]'
            textClassName='text-[#6ABC90]'
          />
        </div>
        <TableSorting event='cv' />
      </div>
    </AdminDashboard>
  );
}
