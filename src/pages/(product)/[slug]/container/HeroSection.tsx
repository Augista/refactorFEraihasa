import NextImage from 'next/image';
import React from 'react';

import { DetailProduct } from '@/types/entities/product';

export default function HeroSection({ product }: { product: DetailProduct }) {
  return (
    <div className='w-full relative h-fit flex flex-rol'>
      <div className='w-full h-fit relative -z-10'>
        <NextImage
          src={product.image.src}
          alt='Hero'
          width={product.image.width}
          height={product.image.height}
          className='rounded-t-[16px] w-full min-h-[300px]'
        />
      </div>
      <div className='w-full h-full absolute flex flex-row justify-between'>
        <div className='w-full flex flex-col justify-center items-start pl-4 md:pl-16'>
          <h3 className='text-primary-light text-3xl md:text-[40px] leading-[48px] md:leading-[64px] font-bold space-y-6'>
            {product.title}
          </h3>
        </div>
        <div className='w-fit h-full relative'>
          <NextImage
            src='/images/product/detail/object.png'
            alt='object'
            width={290}
            height={320}
            className='h-full object-fill relative z-0'
          />
          <h4 className='text-black-100 font-bold text-xl md:text-[26px] leading-[40px] absolute bottom-[5%] right-[10%]'>
            {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
            })}
          </h4>
        </div>
      </div>
    </div>
  );
}
