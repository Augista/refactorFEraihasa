import React from 'react';

import { DetailProduct } from '@/types/entities/product';

export default function DescriptionSection({
  product,
}: {
  product: DetailProduct;
}) {
  return (
    <div className='flex flex-col items-start gap-4'>
      <div className='flex flex-row justify-normal gap-4'>
        <div className='w-[10px] h-[30px] rounded-[5px] bg-primary-orange translate-y-2'>
          {' '}
        </div>
        <div className='flex items-center gap-4 text-primary-bluegreen md:text-[32px] text-[20px]  font-[700] leading-10'>
          Deskripsi
        </div>
      </div>
      <div className='md:text-[16px] text-[12px] font-[400] tracking-[2px] leading-6 text-primary-typo'>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
