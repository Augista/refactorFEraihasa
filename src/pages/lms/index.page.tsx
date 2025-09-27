import 'aos/dist/aos.css';

import { Avatar, Button, Image, Input } from '@heroui/react';
import { useQuery,keepPreviousData, } from '@tanstack/react-query';
import Aos from 'aos';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';

import IconButton from '@/components/buttons/IconButton';
import SEO from '@/components/SEO';
import { NumberTicker } from '@/components/TextCustom/NumberTicker';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import ModulCard from '@/pages/lms/component/ModulCard';
import ProductCard from '@/pages/lms/component/ProductCard';
import { ApiReturn } from '@/types/api';
import { PaginatedApiReturn } from '@/types/api';

type ProductLMS = {
  id: string;
  program_id: string;
  name: string;
  harga: number;
  masa_aktif: number;
  deskripsi: string;
  harga_diskon: number;
};

type ModulLMS = {
  id: string;
  name: string;
  deskripsi: string;
  ModuleProduct: string;
  ThumbnailModule: string;
  is_authorize: boolean;
};

export default function LMSPage() {
  React.useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);

 const { data: ModulLMSData } = useQuery<PaginatedApiReturn<ModulLMS[]>>({
    queryKey: ['modul-lms', currentPage],
    queryFn: async () => {
      const res = await api.get(`/lms/modul?page=${currentPage}&limit=4`);
      return res.data;
    },
    placeholderData: keepPreviousData,
  });


  const pageCount = ModulLMSData?.metadata?.page_count || 1;

  const handleNext = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const isSubscribed = ModulLMSData?.data?.some((item) => item.is_authorize);

  const { data: ProductLMSData } = useQuery<ApiReturn<ProductLMS[]>>({
    queryKey: ['product-lms'],
    queryFn: async () => {
      const res = await api.get('/products/lms');
      return res.data;
    },
  });

  function formatRupiah(value: number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    })
      .format(value)
      .replace('IDR', 'Rp')
      .replace(',00', '');
  }

  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='LMS Home' />
      <main>
        <section className='flex flex-col items-center justify-center gap-10 mx-auto lg:grid lg:grid-cols-2 lg:place-items-center max-lg:py-12 max-lg:mt-20 max-w-7xl lg:min-h-screen'>
          <div>
            <Image
              src='/images/lms/hero-landing.png'
              width={530}
              height={425}
              className=' max-lg:w-[251px] max-lg:!h-[204px]'
              alt='Haira'
              data-aos='fade-right'
            />
          </div>
          <div className='flex flex-col w-full gap-6 px-6 max-lg:justify-center max-lg:items-center max-lg:text-center'>
            <Typography
              variant='h4'
              className='text-[#FB991A] font-medium text-xl'
              data-aos='zoom-in'
            >
              Raih Beasiswa Impianmu bersama <b>Raih Asa!</b>
            </Typography>
            <Typography variant='t' data-aos='zoom-in' data-aos-delay='200'>
              Akses kelas strategi dalam meraih impian kamu kapanpun dan
              dimanapun!
            </Typography>
            <div>
              <Button
                color='secondary'
                className='bg-[#1B7691]'
                data-aos='zoom-in'
                data-aos-delay='400'
              >
                Lihat Pilihan Paket
              </Button>
            </div>
          </div>
        </section>
        {!isSubscribed && (
          <section className='relative bg-[#1B7691]'>
            <div className='w-screen h-[74px] bg-white rounded-[529px] lg:rounded-[1440px] absolute top-0 -translate-y-1/2 ' />
            <div className='grid h-full gap-6 mx-auto place-items-center py-28 lg:gap-12 max-w-7xl max-xl:px-6'>
              <div className='flex flex-col gap-6 text-center'>
                <Typography
                  variant='h4'
                  className='font-bold text-white text-[28px]'
                  data-aos='zoom-in'
                >
                  Jadi salah satu dari mereka!
                </Typography>
                <Typography
                  className='text-xs font-medium text-white lg:text-2xl'
                  data-aos='zoom-in'
                >
                  Yuk intip Peraih Asa yang berhasil meraih asanya bersama kami!
                </Typography>
              </div>
              <div className='flex max-lg:flex-col justify-center gap-[75px]'>
                <div
                  className='bg-white flex flex-col p-8 lg:px-12 gap-8 lg:w-[530px]'
                  data-aos='fade-right'
                  data-aos-delay='200'
                >
                  <Typography variant='t'>
                    {'"'}BU Power Camp Raih Asa sangat membantu saya. Terutama
                    Essay Review, membantu saya menyusun esai sebaik mungkin
                    sehingga saya bisa lolos seleksi. Saya sangat
                    merekomendasikan mentoring ini bagi para calon awardee
                    beasiswa.{'"'}
                  </Typography>
                  <div className='flex items-center gap-4'>
                    <Avatar src='/images/lms/avatar.png' size='lg' />
                    <div className='flex flex-col'>
                      <Typography className='text-sm font-bold'>
                        Enrico Joseph I. W.
                      </Typography>
                      <Typography className='!text-xs italic '>
                        Universitas Tarumanagara <br />
                        Beasiswa Unggulan Fair
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-6'>
                  <div
                    className='flex flex-col w-[166px] lg:w-[208px]'
                    data-aos='zoom-in'
                  >
                    <div className='flex flex-row w-fit'>
                      <NumberTicker
                        className='font-semibold text-white !text-5xl !md:text-[64px] !md:leading-[84px]'
                        value={1000}
                      />
                      <Typography
                        variant='h5'
                        className='text-5xl font-semibold text-white'
                      >
                        +
                      </Typography>
                    </div>
                    <Typography
                      variant='p'
                      className='text-sm font-medium text-justify text-white'
                    >
                      Alumni yang Telah Berhasil Meraih Asa Beasiswa Impiannya!
                    </Typography>
                  </div>
                  <Image
                    src='/images/lms/haira-reading.png'
                    width={228}
                    height={243}
                    alt='Haira Reading'
                    className=' max-lg:!w-[129px] max-lg:!h-[137px]'
                    data-aos='fade-left'
                    data-aos-delay='400'
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        <section className='relative w-full py-16'>
          {!isSubscribed && (
            <Image
              src='/images/lms/1.png'
              width={97}
              height={65}
              alt='1'
              removeWrapper
              radius='none'
              className='absolute top-0 right-0 '
              data-aos='zoom-in'
            />
          )}
          <Image
            src='/images/lms/7.png'
            width={199}
            height={199}
            alt='1'
            removeWrapper
            radius='none'
            className=' absolute right-0 bottom-0 max-md:w-[78px] max-md:!h-[78px]'
            data-aos='fade-left'
          />
          <Image
            src='/images/lms/2.png'
            width={204}
            height={404}
            alt='1'
            removeWrapper
            radius='none'
            className='absolute left-0 translate-y-1/2 bottom-1/2'
            data-aos='fade-right'
          />
          <div className='flex flex-col mx-auto max-w-7xl'>
            <Typography
              variant='h4'
              className='text-[#FB991A] font-bold text-center text-[32px]'
              data-aos='zoom-in'
            >
              {!isSubscribed
                ? 'Dapatkan Akses Kelas Unggulan!'
                : 'Akses dan Pelajari Kelas Pilihan!'}
            </Typography>
            {isSubscribed && (
              <Input
                data-aos='zoom-in'
                isClearable
                variant='bordered'
                classNames={{
                  mainWrapper: 'max-xl:px-4',
                  input: 'outline-none border-none focus:outline-none',
                }}
                className='w-full mt-8'
                size='lg'
                placeholder='Cari modul yang kamu diinginkan'
                startContent={<FaSearch className='text-xl' />}
              />
            )}
            <div className='relative z-20 grid grid-cols-1 gap-10 md:grid-cols-2 place-items-center xl:grid-cols-4 mt-11'>
              {ModulLMSData?.data?.map((e, index) => (
                <ModulCard
                  key={index}
                  id={e.id}
                  name={e.name}
                  deskripsi={e.deskripsi}
                  isAuthorize={e.is_authorize}
                  data-aos='fade-right'
                  data-aos-delay={150 * (index + 1)}
                />
              ))}
            </div>
            <div
              className='flex flex-row items-center justify-center gap-3 mt-6'
              data-aos='zoom-in'
            >
              <IconButton
                icon={FaArrowLeft}
                onClick={handlePrev}
                variant='warning'
              />
              <Typography>
                Page {currentPage} of {pageCount}
              </Typography>
              <IconButton
                icon={FaArrowRight}
                onClick={handleNext}
                variant='warning'
              />
            </div>
          </div>
        </section>
        <section className='relative py-16'>
          <Image
            src='/images/lms/6.png'
            width={199}
            height={199}
            alt='1'
            removeWrapper
            radius='none'
            className=' absolute right-0 top-0 max-md:w-[78px] max-md:!h-[78px]'
            data-aos='fade-left'
          />
          <div className='flex flex-col mx-auto max-w-7xl'>
            <Typography
              variant='h4'
              className='text-[#FB991A] font-bold text-center text-[32px]'
            >
              Ambil Paket Pilihanmu!
            </Typography>
            <div className='relative z-20 grid grid-cols-1 gap-6 md:grid-cols-2 place-items-center xl:grid-cols-4 mt-11'>
              {ProductLMSData?.data?.map((e, index) => (
                <ProductCard
                  data-aos='fade-right'
                  data-aos-delay={150 * (index + 1)}
                  key={index}
                  name={e.name}
                  harga={e.harga ? formatRupiah(e.harga) : ''}
                  deskripsi={e.deskripsi}
                  harga_diskon={
                    e.harga_diskon ? formatRupiah(e.harga_diskon) : 'FREE'
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
