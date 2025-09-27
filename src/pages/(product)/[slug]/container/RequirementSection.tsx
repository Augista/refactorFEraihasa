import React from 'react';

import { DetailProduct } from '@/types/entities/product';

export default function RequirementSection({
  product,
}: {
  product: DetailProduct;
}) {
  return (
    <div className='w-full flex flex-col items-start gap-4 pb-16'>
      <div className='flex flex-row justify-normal gap-4'>
        <div className='w-[10px] h-[30px] rounded-[5px] bg-primary-orange translate-y-2'>
          {' '}
        </div>
        <div className='flex items-center gap-4 text-primary-bluegreen md:text-[32px] text-[20px]  font-[700] leading-10'>
          Requirements
        </div>
      </div>
      <ul className='w-full flex flex-col gap-2 translate-x-5'>
        {product.requirements?.map((data) => (
          <li
            key={data.id}
            className='md:text-[16px] text-[12px] tracking-[2px] leading-6 text-primary-typo list-disc translate-y-2 font-primary font-medium'
          >
            {data.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
