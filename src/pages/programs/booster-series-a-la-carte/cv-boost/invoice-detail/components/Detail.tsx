import NextImage from 'next/image';
import * as React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import PilihanPaket from '@/pages/programs/booster-series-a-la-carte/components/PilihanPaket';
import { PaketProps } from '@/pages/programs/booster-series-a-la-carte/cv-boost/invoice-detail/index.page';

type DetailProps = {
  paketData?: PaketProps[];
  NextPage: () => void;
  paket?: PaketProps;
  setPaket: React.Dispatch<React.SetStateAction<PaketProps | undefined>>;
};

export default function Detail({
  paketData,
  NextPage,
  paket,
  setPaket,
}: DetailProps) {
  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='Checkout Page' />
      <main className='scroll-smooth overflow-hidden bg-gradient-to-t from-[#E47F1A] to-[#FB991A]'>
        <section className='min-h-screen mt-40'>
          <div className='header grid grid-cols-3 items-center px-8 pb-11 xl:px-24 lg:pb-32'>
            <div>
              <ButtonLink
                leftIcon={FaArrowLeft}
                href='/programs/booster-series-a-la-carte/cv-boost'
                className='p-2 md:p-3 !rounded-full text-white bg-[#1B7691] hover:bg-[#32abd0]'
              >
                {' '}
              </ButtonLink>
            </div>
            <Typography
              variant='h5'
              className='text-base md:text-lg lg:!text-[32px] bg-[#1B7691] font-semibold !text-white text-shadow-lg md:py-4 py-2 px-2 md:px-8 text-center'
            >
              Draft Invoice
            </Typography>
            <div />
          </div>
          <div className='bg-[#E4E4E7] relative min-h-screen px-12 lg:px-24 flex flex-col xl:flex-row gap-4 xl:gap-12 z-20 justify-center'>
            <div className='items'>
              <div className=' rounded-lg mt-6 xl:mt-0 pb-16 py-8 px-4 md:px-8 flex flex-col gap-4 xl:gap-8 xl:-translate-y-[83px] bg-white'>
                <Typography variant='h5' weight='bold' className='text-base'>
                  CV Boost
                </Typography>
                <div className='flex flex-col gap-4'>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E47F1A] !text-xs md:!text-xl'
                  >
                    Deskripsi
                  </Typography>
                  <Typography className='max-w-3xl text-[#4C4E60] text-xs'>
                    Layanan review curriculum vitae (CV) secara cepat dan
                    profesional. Dalam waktu hanya 48 jam, reviewer
                    berpengalaman akan melakukan proofreading mendetail serta
                    memberikan feedback konstruktif untuk memastikan CV kamu
                    tampil optimal!
                  </Typography>
                </div>
                <hr />
                <div className='flex flex-col'>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E47F1A]  !text-xs md:!text-xl'
                  >
                    Apa sih yang kamu dapetin :
                  </Typography>
                  <ul className='mt-6 flex flex-col gap-4 max-w-sm'>
                    <li className='flex items-center gap-3'>
                      <div className=''>
                        <FaCheckCircle className='text-[#1B7691]' />
                      </div>
                      <Typography
                        variant='c1'
                        className='text-xs md:text-sm md:whitespace-nowrap'
                      >
                        Mendapatkan bimbingan untuk meningkatkan pembuatan CV
                        yang profesional
                      </Typography>
                    </li>
                    <li className='flex items-center gap-3'>
                      <div className=''>
                        <FaCheckCircle className='text-[#1B7691]' />
                      </div>
                      <Typography
                        variant='c1'
                        className='text-xs md:text-sm md:whitespace-nowrap'
                      >
                        Mengetahui bagaimana bentuk-bentuk CV yang tepat dan
                        menarik
                      </Typography>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className='flex flex-col'>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E47F1A]  !text-xs md:!text-xl'
                  >
                    Pilih Paket
                  </Typography>
                  <div className='flex gap-3 mt-3 md:flex-row flex-col'>
                    {paketData?.map((item) => (
                      <PilihanPaket
                        key={item.id}
                        title={item.name}
                        description='Proofreading dan feedback CV.'
                        originalPrice={
                          'Rp' + item.harga.toLocaleString('id-ID')
                        }
                        isActive={paket?.id === item.id}
                        onClick={() => setPaket(item)}
                      />
                    ))}
                  </div>
                </div>
                <hr />
                <div className='flex justify-between'>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E47F1A] !text-xs md:!text-xl'
                  >
                    Harga Program :
                  </Typography>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E62A3A] !text-xs md:!text-xl'
                  >
                    Rp{paket?.harga.toLocaleString('id-ID')}
                  </Typography>
                </div>
              </div>
            </div>
            <div className='details md:min-w-[388px]'>
              <div className='rounded-lg p-8 flex flex-col gap-8 xl:-translate-y-[83px] bg-white'>
                <Typography
                  variant='h5'
                  weight='bold'
                  className='text-base md:text-[28px]'
                >
                  Detail Pembayaran
                </Typography>
                <div className='flex flex-col gap-4'>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E47F1A] !text-xs md:!text-xl'
                  >
                    Program dipilih :
                  </Typography>
                  <Typography
                    variant='t'
                    className='text-[#4C4E60] !text-xs md:!text-xl'
                  >
                    CV Boost
                  </Typography>
                </div>
                <div className='flex flex-col gap-4'>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E47F1A] !text-xs md:!text-xl'
                  >
                    Paket dipilih :
                  </Typography>
                  <Typography
                    variant='t'
                    className='text-[#4C4E60] !text-xs md:!text-xl'
                  >
                    {paket?.name ? paket.name : '-'}
                  </Typography>
                </div>
                <div className='flex flex-col gap-4'>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E47F1A] !text-xs md:!text-xl'
                  >
                    Harga Program :
                  </Typography>
                  <Typography
                    variant='t'
                    className='text-[#4C4E60] !text-xs md:!text-xl'
                  >
                    {paket?.harga
                      ? 'Rp' + paket.harga.toLocaleString('id-ID')
                      : '-'}
                  </Typography>
                </div>
                <hr />
                <div className='flex justify-between'>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#4C4E60] !text-xs md:!text-xl'
                  >
                    Total Pembayaran :{' '}
                  </Typography>
                  <Typography
                    variant='t'
                    weight='semibold'
                    className='text-[#E62A3A] !text-xs md:!text-lg'
                  >
                    Rp{paket?.harga.toLocaleString('id-ID')}
                  </Typography>
                </div>
                <Button size='lg' variant='warning' onClick={NextPage}>
                  Lanjutkan Pembayaran
                </Button>
              </div>
            </div>
            <NextImage
              src={'/images/checkout/bottom.png'}
              width={271}
              height={181}
              alt='Ornament'
              className='absolute bottom-0 right-0 w-[101px] lg:w-[271px] -z-10'
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
