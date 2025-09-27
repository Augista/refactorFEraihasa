import 'aos/dist/aos.css';

import Aos from 'aos';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import useAuthStore from '@/store/useAuthStore';
import { StepProps } from '@/types/form/helper';

export default function StepHero({ onNext }: StepProps) {
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const user = useAuthStore.useUser();
  const name = isAuthenticated && user ? user.name : 'Pejuang Beasiswa';

  React.useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div className='flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center'>
      <NextImage
        src='/images/rekomendasi/haira-hero.png'
        width={298}
        height={280}
        quality={100}
        alt='Haira Raih Asa'
        className='w-[240px] h-auto md:w-[298px] relative'
        imgClassName='object-cover absolute -translate-x-[12px]'
        priority
        data-aos='fade-right'
      />
      <div className='flex flex-col gap-6 md:gap-7 items-center md:items-start justify-center w-full max-w-[768px] text-center md:text-left'>
        <Typography
          className='text-balance text-[#FB991A] text-[28px] md:text-[36px] lg:text-[48px]'
          weight='bold'
          data-aos='zoom-in'
          data-aos-delay='600'
        >
          Hai {name}, mari mulai petualangan beasiswamu!
        </Typography>
        <Typography
          className='text-balance text-[#1B7691] text-[14px] md:text-[20px] lg:text-[28px]'
          data-aos='zoom-in'
          data-aos-delay='600'
        >
          Yuk, isi informasi berikut dengan lengkap supaya kami bisa menemukan
          peluang terbaik untukmu!
        </Typography>
        <Button
          className='w-full md:w-[200px] flex gap-2 items-center justify-center py-[12px] px-6 rounded-[12px]'
          data-aos='zoom-in'
          data-aos-delay='600'
          onClick={onNext}
        >
          <Typography
            className='flex gap-2 items-center text-[16px] font-semibold'
            variant='bt'
          >
            Mulai Sekarang
            <FaArrowRightLong />
          </Typography>
        </Button>
      </div>
    </div>
  );
}
