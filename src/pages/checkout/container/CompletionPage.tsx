import { FaWhatsapp } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';

export default function CompletionPage() {
  return (
    <main>
      <Layout withFooter withNavbar>
        <section className='overflow-hidden relative flex justify-center items-center pt-20 bg-gradient-to-b from-[#E47F1A] to-[#FB991A]'>
          <NextImage
            src={'/images/checkout/background.png'}
            width={2880}
            height={1070}
            alt='background'
            className='w-[200%] md:w-full absolute top-0'
          />
          <div className='z-10 py-16 flex flex-col items-center justify-center gap-8 w-3/4 md:w-1/2'>
            <NextImage
              src={'/images/checkout/logo.png'}
              width={179}
              height={132}
              alt='logo'
              className='w-[30%]'
            />
            <Typography
              variant='h4'
              weight='bold'
              className='text-white text-center'
            >
              Platform Peer Mentoring Beasiswa Kuliah No 1
            </Typography>
          </div>
          <div>
            <NextImage
              src={'/images/checkout/bintang-biru.png'}
              width={139}
              height={139}
              alt='bintang'
              className='absolute bottom-[5%] left-[10%] w-[8%] md:w-[10%]'
            />
            <NextImage
              src={'/images/checkout/bintang-biru.png'}
              width={139}
              height={139}
              alt='bintang'
              className='absolute top-[30%] right-[10%] w-[10%]'
            />
          </div>
        </section>

        <section className='py-12 flex justify-center items-center relative bg-white'>
          <NextImage
            src={'/images/checkout/ornamen-top.png'}
            width={271}
            height={181}
            alt='ornaments'
            className='absolute top-0 left-0 w-[20%]'
          />
          <NextImage
            src={'/images/checkout/ornamen-bottom.png'}
            width={135}
            height={98}
            alt='ornaments'
            className='absolute bottom-0 right-0'
          />
          <NextImage
            src={'/images/checkout/haira.png'}
            width={498}
            height={512}
            alt='haira'
            className='absolute top-[30%] lg:top-[18%] right-0 max-md:hidden w-[35%]'
          />
          <div className='py-44 flex flex-col justify-center items-center gap-6 px-0 md:px-8 w-full md:w-1/2'>
            <Typography
              variant='h4'
              weight='bold'
              className='text-[#1B7691] text-center text-xl'
            >
              PEMESANAN <span className='text-[#FB991A]'>SUKSES!</span>
            </Typography>
            <Typography
              variant='h6'
              className='text-[#1B7691] text-justify w-[80%] text-xl'
            >
              Tahap selanjutnya akan diinformasikan melalui Email atau WhatsApp
              maksimal H+3 dari submission. Cek email kamu secara berkala ya !
              <br />
              Jika kamu memiliki pertanyaan, bisa langsung hubungi kami dibawah
              ini:
            </Typography>
            <div className='flex flex-col md:flex-row gap-6 px-6'>
              <ButtonLink
                variant='warning'
                href='https://www.instagram.com/raihasa.co/'
                leftIcon={IoChatboxEllipsesOutline}
                leftIconClassName='mr-1'
                className='py-3 px-6'
              >
                Instagram RaihAsa
              </ButtonLink>
              <ButtonLink
                variant='warning'
                href='https://wa.me/+6285161940799'
                leftIcon={FaWhatsapp}
                leftIconClassName='mr-1'
                className='py-3 px-6'
              >
                WhatsApp RaihAsa
              </ButtonLink>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
