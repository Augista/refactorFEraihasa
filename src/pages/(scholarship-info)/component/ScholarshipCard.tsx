import NextImage from 'next/image';
import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

import UnstyledLink from '@/components/links/UnstyledLink';
import { scholarshipTypes } from '@/contents/scholarship';

export default function ScholarshipCard({
  scholarship,
}: {
  scholarship: scholarshipTypes;
}) {
  return (
    <div className='w-full rounded-xl drop-shadow-lg flex flex-col gap-5 p-6 bg-primary-light'>
      <NextImage
        src={scholarship.image.src}
        width={scholarship.image.width}
        height={scholarship.image.height}
        alt={scholarship.image.alt}
        className='rounded-xl w-full drop-shadow-2xl'
      />
      <h1 className='font-primary font-bold text-[26px]'>{scholarship.name}</h1>
      <div className='flex flex-row justify-between gap-4'>
        <div className='flex flex-row gap-2 items-center'>
          <BiUserCircle className='w-10 h-10 text-lightblue' />
          <div className='flex flex-col gap-1'>
            <h2 className='font-bold font-primary text-[12px]'>
              {scholarship.organizer}
            </h2>
          </div>
        </div>
        <div className='flex flex-col gap-1 text-right'>
          <h2 className='font-bold font-primary text-[12px]'>
            {scholarship.jenjang}
          </h2>
          <h2 className='font-bold font-primary text-[12px] text-grey'>
            {scholarship.tuition.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
          </h2>
        </div>
      </div>
      <UnstyledLink
        className='w-full'
        href={`/scholarship-info/${scholarship.slug}`}
      >
        <button className='rounded-2xl bg-primary-orange text-primary-white w-full py-3 font-semibold text-base'>
          Lihat Detail
        </button>
      </UnstyledLink>
    </div>
  );
}
