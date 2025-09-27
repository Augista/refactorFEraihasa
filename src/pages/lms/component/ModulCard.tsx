import { Button } from '@heroui/react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiLockClosed } from 'react-icons/hi';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';

export default function ModulCard({
  key,
  id,
  name,
  deskripsi,
  isAuthorize,
}: {
  key: number;
  id: string;
  name: string;
  deskripsi: string;
  isAuthorize: boolean;
}) {
  return (
    <div
      key={key}
      className='flex flex-col p-6 w-[290px] h-[500px] justify-between shadow-[0_0_40px_0_rgba(0,0,0,0.10)] rounded-xl bg-white'
    >
      <Image src='/images/lms/card-1.png' width={242} height={151} alt={name} />
      <div className='flex flex-col gap-2 mb-2'>
        <Typography variant='t' className='font-bold text-[#1B7691]'>
          {name}
        </Typography>
        <Typography variant='c1' className='text-[#7C7D8A]'>
          {deskripsi}
        </Typography>
      </div>
      {isAuthorize ? (
        <UnstyledLink href={`/lms/${id}`} className='flex flex-col'>
          <Button
            className='text-white bg-[#1B7691]'
            endContent={<FaArrowRightLong />}
          >
            Lihat Materi
          </Button>
        </UnstyledLink>
      ) : (
        <UnstyledLink
          href='/programs/lms/invoice-detail'
          className='flex flex-col'
        >
          <Button
            className='text-white bg-[#93949F]'
            endContent={<HiLockClosed />}
          >
            Dapatkan Akses
          </Button>
        </UnstyledLink>
      )}
    </div>
  );
}
