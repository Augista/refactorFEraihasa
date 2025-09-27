import NextImage from 'next/image';
import React from 'react';

import { showToast, SUCCESS_TOAST } from '@/components/Toast';
import { DetailScholarship } from '@/types/entities/scholarship';

export default function HeroSection({
  scholarship,
}: {
  scholarship: DetailScholarship;
}) {
  return (
    <div className='w-full relative h-fit flex flex-rol'>
      <div className='w-full h-fit relative -z-10'>
        <NextImage
          src={scholarship.image.src}
          alt='Hero'
          width={scholarship.image.width}
          height={scholarship.image.height}
          className='rounded-t-[16px] w-full min-h-[300px]'
        />
      </div>
      <div className='w-full h-full absolute flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-primary-light text-4xl md:text-[52px] leading-[48px] md:leading-[64px] font-bold space-y-6 text-center font-primary'>
            {scholarship.title}
          </h2>
          <h2 className='text-primary-light text-sm md:text-base leading-2 md:leading-6 font-medium space-y-6 text-center font-primary'>
            {scholarship.organizer}
          </h2>
        </div>
        <button
          className='flex w-fit justify-center items-center gap-4 cursor-pointer h-[60px] px-[70px] py-[15px] rounded-[20px] bg-primary-orange text-[18px] font-[600] text-primary-light'
          onClick={() =>
            showToast('Pengingat telah ditambahkan', SUCCESS_TOAST)
          }
        >
          Ingatkan Saya
        </button>
      </div>
    </div>
  );
}
