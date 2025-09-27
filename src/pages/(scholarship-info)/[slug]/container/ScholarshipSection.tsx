import React from 'react';

import { DetailScholarship } from '@/types/entities/scholarship';

export default function BenefitSection({
  scholarship,
}: {
  scholarship: DetailScholarship;
}) {
  return (
    <div className='flex flex-col items-start gap-4'>
      <div className='flex flex-row justify-normal gap-4'>
        <div className='w-[10px] h-[30px] rounded-[5px] bg-primary-orange translate-y-2'>
          {' '}
        </div>
        <div className='flex items-center gap-4 text-primary-bluegreen md:text-[32px] text-[20px]  font-[700] leading-10'>
          Benefit
        </div>
      </div>
      <div className='flex flex-col gap-5 items-start'>
        {scholarship.benefit.map((benefit, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row items-start gap-8'
          >
            <benefit.icon className='w-10 h-10' />
            <div className='flex flex-col items-start'>
              <div className='md:text-[20px] text-[16px] font-[700] text-primary-typo leading-8 tracking-[2px]'>
                {benefit.title}
              </div>
              <div className='md:text-[16px] text-[12px] font-[400] text-primary-typo leading-6 tracking-[2px]'>
                {benefit.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
