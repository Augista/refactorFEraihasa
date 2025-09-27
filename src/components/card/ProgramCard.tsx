import NextImage from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/Typography';

type ProgramCardProps = {
  title?: string;
  desc?: string;
  href?: string;
  img?: string;
  gradientColor?: string;
  buttonClassName?: string;
};

export default function ProgramCard({
  title,
  desc,
  href,
  img,
  gradientColor,
  buttonClassName,
}: ProgramCardProps) {
  return (
    <div className='card relative w-[280px] h-[220px] sm:w-[300px] sm:h-[240px]  md:w-[320px] md:h-[192px] rounded-lg'>
      <div
        className={`absolute flex flex-col justify-end bottom-0 p-4 h-full w-full bg-gradient-to-t ${gradientColor} z-30 rounded-lg`}
      >
        <div className='mb-2'>
          <Typography
            weight='bold'
            className='text-white text-sm lg:text-sm'
            variant='p'
          >
            <span
              style={{ textShadow: '0px 0px 6.32px rgba(255, 255, 255, 0.52)' }}
            >
              {title}
            </span>
          </Typography>

          <Typography
            weight='regular'
            className='text-white text-xs lg:text-sm !text-justify'
            variant='c2'
          >
            {desc}
          </Typography>
        </div>
        <ButtonLink
          href={`${href}`}
          className={`!flex !items-center text-white py-1 ${buttonClassName}`}
          rightIcon={IoIosArrowForward}
          rightIconClassName='p-1'
        >
          <Typography weight='regular' className='text-white' variant='c2'>
            Lihat Selengkapnya
          </Typography>
        </ButtonLink>
      </div>
      <NextImage
        src={`/images/programs${img}`}
        width={528}
        height={320}
        alt={`${img} image`}
        className='w-full h-full rounded-lg object-cover'
      />
    </div>
  );
}
