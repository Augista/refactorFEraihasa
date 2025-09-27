import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { HasilRekomendasi } from '@/pages/rekomendasi-beasiswa/types/recommendation-scholarship';
import { useBeasiswaStore } from '@/store/useBeasiswaStore';

// Fungsi untuk memformat tanggal menjadi format "1 Juni 2026"
export function formatDeadlineDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('id-ID', options);
}

// Fungsi untuk truncate teks
export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text;
}

export type CardRekomendasiProps = {
  status_disabled?: boolean;
} & HasilRekomendasi;

export default function CardRekomendasi(props: CardRekomendasiProps) {
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
  const [isHovering, setIsHovering] = useState(false);
  const disabled = props.status_disabled || false;
  const deadlineDate = new Date(props.close_registration);
  // const [randomImageIndex] = useState(() =>
  //   Math.floor(Math.random() * assetHaira.length)
  // );
  const { setSelected } = useBeasiswaStore();

  const handleClick = () => {
    setSelected(props);
    sessionStorage.setItem('selectedBeasiswa', JSON.stringify(props));
  };

  const nama = props.nama || 'Beasiswa Tanpa Nama';
  const benefit = props.benefit || 'Tidak ada informasi benefit tersedia';
  // Truncate benefit text jika lebih dari 100 karakter
  const truncatedBenefit = truncateText(benefit, 100);

  return (
    <>
      {!disabled && (
        <Link href={`/rekomendasi-beasiswa/detail/${props.id}`}>
          <div
            onClick={handleClick}
            className='p-6 md:p-8 hover:bg-gray-100 duration-300 transition-all flex flex-col gap-6 bg-white rounded-2xl max-w-[354px]  min-h-[200px]  h-full w-full drop-shadow-lg items-center justify-start mx-auto'
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
            <div className='flex h-full justify-between flex-col gap-4 w-full '>
              <div className='flex flex-col gap-2 w-full text-left'>
                <Typography
                  className='text-primary-blue text-[20px] line-clamp-2'
                  weight='bold'
                >
                  {nama}
                </Typography>
                <div className='relative'>
                  <Typography
                    className='text-[#7C7D8A] text-[12px] md:text-[14px] hover:cursor-pointer'
                    variant='c1'
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {truncatedBenefit}
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
              </div>
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
              <Link href={`/rekomendasi-beasiswa/detail/${props.id}`}>
                <div className='px-3 py-1 bg-primary-blue hover:bg-[#10586E] transition-all duration-300 rounded-lg'>
                  <Typography
                    className='text-white text-[12px] text-center'
                    weight='medium'
                    variant='c2'
                  >
                    Lihat Detail
                  </Typography>
                </div>
              </Link>
            </div>
          </div>
        </Link>
      )}
      {disabled && (
        <div className='p-6 md:p-8 flex flex-col gap-6 bg-white rounded-2xl max-w-[354px] min-h-[200px] w-full drop-shadow-lg items-center justify-start mx-auto'>
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
              <div className='relative'>
                <Typography
                  className='text-[#7C7D8A] text-[12px] md:text-[14px] hover:cursor-pointer'
                  variant='c1'
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {truncatedBenefit}
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
            </div>
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
          <Link
            href={`/rekomendasi-beasiswa/detail/${props.id}`}
            className='w-full'
          >
            <Button className='w-full rounded-lg font-normal'>
              Lihat Detail
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
