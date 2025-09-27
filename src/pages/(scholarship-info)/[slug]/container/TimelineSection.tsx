import React from 'react';

import clsxm from '@/lib/clsxm';
import { DetailScholarship } from '@/types/entities/scholarship';

export default function TimelineSection({
  scholarship,
}: {
  scholarship: DetailScholarship;
}) {
  const len = scholarship.timeline?.length ?? 1;
  return (
    <div className='flex flex-col items-start'>
      <div className='flex flex-row justify-normal gap-4'>
        <div className='w-[10px] h-[30px] rounded-[5px] bg-primary-orange translate-y-2'>
          {' '}
        </div>
        <div className='flex items-center gap-4 text-primary-bluegreen md:text-[32px] text-[20px]  font-[700] leading-10'>
          Timeline
        </div>
      </div>
      <div className='w-full mx-auto flex flex-row lg:flex-col justify-center items-center gap-16 my-5 h-fit'>
        <div className='w-full relative lg:-translate-y-1/2 h-fit'>
          <div className='relative flex flex-col gap-8  lg:flex-row justify-around z-10'>
            {scholarship.timeline?.map((data, index) => (
              <div
                className={clsxm(
                  'flex lg:flex-col items-center gap-8 lg:translate-y-1/2',
                  `w-[${100 / len}%]`
                )}
                key={index}
              >
                <div className='block lg:hidden border-white border-2 bg-primary-orange rounded-full w-6 h-6 justify-center items-center drop-shadow-lg'></div>
                <div
                  className={clsxm(
                    'flex flex-col items-start lg:items-center lg:gap-10',
                    `max-w-[${100 / len}]%`
                  )}
                >
                  <p className='font-bold text-black-100 text-lg font-primary'>
                    {data.date}
                  </p>
                  <div className='hidden lg:block border-white border-2 bg-primary-orange rounded-full w-6 h-6 justify-center items-center drop-shadow-lg'></div>
                  <p className='font-medium text-black-100 text-lg font-primary'>
                    {data.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={clsxm(
              'flex lg:flex-row flex-col gap-10 lg:gap-20 bg-primary-bluegreen h-full lg:h-0.5 w-0.5 lg:w-11/12 mx-auto absolute lg:static -translate-y-full translate-x-3 lg:translate-x-2.5'
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}
