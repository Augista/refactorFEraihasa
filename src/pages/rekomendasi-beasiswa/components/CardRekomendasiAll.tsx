// import Link from 'next/link';
import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/buttons/Button';
// import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import {
  CardRekomendasiProps,
  formatDeadlineDate,
  truncateText,
} from '@/pages/rekomendasi-beasiswa/components/CardRekomendasi';
import { useBeasiswaStore } from '@/store/useBeasiswaStore';

export default function CardRekomendasiAll(props: CardRekomendasiProps) {
  // const assetHaira = [
  //   'haira-1.png',
  //   'haira-2.png',
  //   'haira-3.png',
  //   'haira-4.png',
  //   'haira-5.png',
  //   'haira-6.png',
  //   'haira-7.png',
  //   'haira-8.png',
  // ];
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const deadlineDate = new Date(props.close_registration);
  const { setSelected } = useBeasiswaStore();

  const handleClick = () => {
    setSelected(props);
    sessionStorage.setItem('selectedBeasiswa', JSON.stringify(props));
  };

  // Sediakan href fallback jika props.img_path null
  // const linkHref = props.img_path || '#';
  const disabled = props.status_disabled || false;

  const nama = props.nama || 'Beasiswa Tanpa Nama';
  const benefit = props.benefit || 'Tidak ada informasi benefit tersedia';
  // Responsive truncation: 60 chars for mobile, 100 chars for md+
  const truncatedBenefitMobile = truncateText(benefit, 100);
  const truncatedBenefitDesktop = truncateText(benefit, 120);

  return (
    <>
      {!disabled && (
        <Link
          href={`/rekomendasi-beasiswa/detail/${props.id}`}
          className='w-full flex justify-center'
        >
          <div
            onClick={handleClick}
            className='p-6 md:p-8 flex flex-col gap-6 bg-white rounded-2xl max-w-[354px] w-full min-h-[220px] drop-shadow-lg items-center justify-between md:hidden'
          >
            {disabled && (
              <div className='absolute w-full h-full bg-[#8E8E8E] bg-opacity-50 backdrop-blur rounded-2xl flex items-center justify-center z-10'>
                <div className='m-auto flex flex-col gap-8 items-center justify-center rounded-lg'>
                  <NextImage
                    src='/images/rekomendasi/lock-closed.png'
                    alt='Lock Icon'
                    width={80}
                    height={80}
                  />
                  <Link href={'/login'}>
                    <Button className='font-normal'>Login Untuk Melihat</Button>
                  </Link>
                </div>
              </div>
            )}

            <div className='flex flex-col gap-4 w-full'>
              <div className='flex flex-col gap-2 w-full text-left'>
                <Typography
                  className='text-primary-blue text-[20px]'
                  weight='bold'
                >
                  {nama}
                </Typography>
                <Typography
                  className='text-[#7C7D8A] text-[12px] md:text-[14px]'
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {truncatedBenefitMobile}
                </Typography>
                {/* Custom tooltip component yang muncul saat hover */}
                {isHovering && benefit.length > 100 && (
                  <Typography
                    variant='c2'
                    className='absolute z-20 p-2 bg-white text-black  text-[12px] md:text-[12px] rounded-md shadow-lg w-[250px] left-1/2 transform -translate-x-1/2 bottom-full mb-2'
                  >
                    {benefit}
                    {/* Arrow/triangle pada tooltip */}
                    <div className='absolute w-3 h-3 bg-white border transform rotate-45 left-1/2 -translate-x-1/2 bottom-[-6px]'></div>
                  </Typography>
                )}
              </div>
              {props.is_open && (
                <div className='flex items-center justify-center gap-4 '>
                  <Typography
                    className='text-[#37384C] text-[16px]'
                    weight='medium'
                  >
                    Deadline
                  </Typography>
                  <div className='px-3 py-1 bg-primary-orange rounded-lg'>
                    <Typography
                      className='text-white text-[12px] text-center'
                      weight='medium'
                    >
                      {formatDeadlineDate(deadlineDate)}
                    </Typography>
                  </div>
                </div>
              )}
            </div>
            <Link
              href={`/rekomendasi-beasiswa/detail/${props.id}`}
              className='w-full h-[32px]'
            >
              <Button
                className='w-full rounded-lg font-normal h-full '
                size='sm'
                textClassName='text-[12px]'
              >
                Lihat Detail
              </Button>
            </Link>
          </div>
          <div className='p-6 md:p-8  gap-6 bg-white rounded-2xl w-full drop-shadow-lg items-center justify-center hidden md:flex'>
            {disabled && (
              <div className='absolute w-full h-full bg-[#8E8E8E] bg-opacity-50 backdrop-blur rounded-2xl flex items-center justify-center z-10'>
                <div className='m-auto flex gap-8 items-center justify-center rounded-lg'>
                  <NextImage
                    src='/images/rekomendasi/lock-closed.png'
                    alt='Lock Icon'
                    width={80}
                    height={80}
                  />
                  <Link href={'/login'}>
                    <Button className='font-normal'>Login Untuk Melihat</Button>
                  </Link>
                </div>
              </div>
            )}
            <div className='flex flex-col gap-6 w-full items-start justify-center'>
              <div className='flex flex-col gap-4 w-full'>
                <div className='flex gap-2 w-full text-left items-center justify-between'>
                  <Typography
                    className='text-primary-blue text-[20px]'
                    variant='t'
                    weight='bold'
                  >
                    {nama}
                  </Typography>
                  {props.is_open && (
                    <div className='flex items-center justify-center gap-4 '>
                      <Typography
                        className='text-[#37384C] text-[16px]'
                        weight='medium'
                        variant='bt'
                      >
                        Deadline
                      </Typography>
                      <div className='px-3 py-1 bg-primary-orange rounded-lg'>
                        <Typography
                          className='text-white text-[12px] text-center'
                          weight='medium'
                          variant='c2'
                        >
                          {formatDeadlineDate(deadlineDate)}
                        </Typography>
                      </div>
                    </div>
                  )}
                </div>
                <Typography
                  className='text-[#7C7D8A] text-[12px] md:text-[14px] text-left'
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {truncatedBenefitDesktop}
                </Typography>
                {isHovering && benefit.length > 120 && (
                  <Typography
                    variant='c2'
                    className='absolute z-20 p-2 bg-white text-black  text-[12px] md:text-[12px] rounded-md shadow-lg w-[250px] left-1/2 transform -translate-x-1/2 bottom-full mb-2'
                  >
                    {benefit}
                    {/* Arrow/triangle pada tooltip */}
                    <div className='absolute w-3 h-3 bg-white border transform rotate-45 left-1/2 -translate-x-1/2 bottom-[-6px]'></div>
                  </Typography>
                )}
              </div>
              <Link
                href={`/rekomendasi-beasiswa/detail/${props.id}`}
                className='w-[114px] h-[32px]'
              >
                <Button
                  className='rounded-lg font-normal w-full '
                  textClassName='text-[12px]'
                  size='sm'
                >
                  Lihat Detail
                </Button>
              </Link>
            </div>
          </div>
        </Link>
      )}
      {disabled && (
        <>
          <div
            onClick={handleClick}
            className='p-6 md:p-8 flex flex-col gap-6 bg-white rounded-2xl max-w-[354px] min-h-[220px]  drop-shadow-lg items-center justify-between md:hidden'
          >
            {disabled && (
              <div className='absolute w-full h-full bg-[#8E8E8E] bg-opacity-50 backdrop-blur rounded-2xl flex items-center justify-center z-10'>
                <div className='m-auto flex flex-col gap-8 items-center justify-center rounded-lg'>
                  <NextImage
                    src='/images/rekomendasi/lock-closed.png'
                    alt='Lock Icon'
                    width={80}
                    height={80}
                  />
                  <Link href={'/login'}>
                    <Button className='font-normal'>Login Untuk Melihat</Button>
                  </Link>
                </div>
              </div>
            )}
            <div className='flex flex-col gap-4 w-full'>
              <div className='flex flex-col gap-2 w-full text-center'>
                <Typography
                  className='text-primary-blue text-[20px]'
                  weight='bold'
                >
                  {nama}
                </Typography>
                <Typography className='text-[#7C7D8A] text-[12px] md:text-[14px]'>
                  {truncatedBenefitMobile}
                </Typography>
              </div>
              {props.is_open && (
                <div className='flex items-center justify-center gap-4 '>
                  <Typography
                    className='text-[#37384C] text-[16px]'
                    weight='medium'
                  >
                    Deadline
                  </Typography>
                  <div className='px-3 py-1 bg-primary-orange rounded-lg'>
                    <Typography
                      className='text-white text-[12px] text-center'
                      weight='medium'
                    >
                      {formatDeadlineDate(deadlineDate)}
                    </Typography>
                  </div>
                </div>
              )}
            </div>
            <Link
              href={`/rekomendasi-beasiswa/detail/${props.id}`}
              className='w-full h-[32px]'
            >
              <Button
                className='w-full rounded-lg font-normal h-full '
                size='sm'
                textClassName='text-[12px]'
              >
                Lihat Detail
              </Button>
            </Link>
          </div>
          <div className='p-6 md:p-8  gap-6 bg-white rounded-2xl w-full drop-shadow-lg items-center justify-center hidden md:flex min-h-[180px]'>
            {disabled && (
              <div className='absolute w-full h-full bg-[#8E8E8E] bg-opacity-50 backdrop-blur rounded-2xl flex items-center justify-center z-10'>
                <div className='m-auto flex gap-8 items-center justify-center rounded-lg'>
                  <NextImage
                    src='/images/rekomendasi/lock-closed.png'
                    alt='Lock Icon'
                    width={80}
                    height={80}
                  />
                  <Link href={'/login'}>
                    <Button className='font-normal'>Login Untuk Melihat</Button>
                  </Link>
                </div>
              </div>
            )}
            <div className='flex flex-col gap-6 w-full items-start justify-center'>
              <div className='flex flex-col gap-4 w-full'>
                <div className='flex gap-2 w-full text-left items-center justify-between'>
                  <Typography
                    className='text-primary-blue text-[20px]'
                    variant='t'
                    weight='bold'
                  >
                    {nama}
                  </Typography>
                  {props.is_open && (
                    <div className='flex items-center justify-center gap-4 '>
                      <Typography
                        className='text-[#37384C] text-[16px]'
                        weight='medium'
                        variant='bt'
                      >
                        Deadline
                      </Typography>
                      <div className='px-3 py-1 bg-primary-orange rounded-lg'>
                        <Typography
                          className='text-white text-[12px] text-center'
                          weight='medium'
                          variant='c2'
                        >
                          {formatDeadlineDate(deadlineDate)}
                        </Typography>
                      </div>
                    </div>
                  )}
                </div>
                <Typography className='text-[#7C7D8A] text-[12px] md:text-[14px] text-left'>
                  {truncatedBenefitDesktop}
                </Typography>
              </div>
              <Link
                href={`/rekomendasi-beasiswa/detail/${props.id}`}
                className='w-[114px] h-[32px]'
              >
                <Button
                  className='rounded-lg font-normal w-full '
                  textClassName='text-[12px]'
                  size='sm'
                >
                  Lihat Detail
                </Button>
              </Link>
            </div>
          </div>{' '}
        </>
      )}
    </>
  );
}
