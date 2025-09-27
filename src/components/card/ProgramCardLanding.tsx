import NextImage from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/Typography';

type ProgramCardLandingProps = {
  title?: string;
  desc?: string;
  href?: string;
  img?: string;
  gradientColor?: string;
  buttonClassName?: string;
};

export default function ProgramCardLanding({
  title,
  desc,
  href,
  img,
  gradientColor,
  buttonClassName,
  ...props
}: ProgramCardLandingProps) {
  return (
    <div className='card relative w-[95%] md:w-[608px] h-full' {...props}>
      <div
        className={`absolute h-full w-full bg-gradient-to-t ${gradientColor}  z-30 rounded-3xl`}
      >
        <div className='absolute flex px-5 xl:px-10 py-3 xl:py-7 flex-col gap-1 sm:gap-5 lg:gap-1 h-fit w-full bottom-[1%]'>
          <Typography
            as='h1'
            className='text-lg sm:!text-xl xl:!text-[32px] lg:mb-5 !text-white font-bold text-shadow-lg'
          >
            {title}
          </Typography>
          <Typography
            as='p'
            className='text-xs sm:!text-base xl:!text-xl text-white lg:mb-8'
          >
            {desc}
          </Typography>
          <ButtonLink
            href={`${href}`}
            className={`!flex !items-center lg:mt-2 !rounded-md text-white py-2 px-6 ${buttonClassName} `}
            rightIcon={IoIosArrowForward}
          >
            Lihat Selengkapnya
          </ButtonLink>
        </div>
      </div>
      <NextImage
        src={`/${img}`}
        width={528}
        height={320}
        alt='Card Product'
        className='w-full h-full object-cover rounded-3xl'
      />
    </div>
  );
}
