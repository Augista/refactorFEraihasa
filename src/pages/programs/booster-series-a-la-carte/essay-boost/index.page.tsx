import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';

import Aos from 'aos';
import NextImage from 'next/image';
import React from 'react';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
export default function EssayBoost() {
  React.useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const aboutRef = React.useRef<HTMLElement>(null);

  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='Program Essay Boost' />
      <main className='scroll-smooth overflow-hidden bg-[#fff] font-[Poppins]'>
        <section className='relative overflow-hidden mt-20'>
          <NextImage
            src={'/images/detail-program/yellow/Ornaments.png'}
            width={1563}
            height={580}
            alt='Ornaments'
            className='hidden md:block object-cover 2xl:hidden'
            data-aos='zoom-in'
          />

          <NextImage
            src={'/images/detail-program/yellow/Ornaments.png'}
            width={1563}
            height={580}
            alt='Ornaments'
            className='hidden 2xl:block w-full'
            data-aos='zoom-in'
          />
          <NextImage
            src={'/images/detail-program/yellow/Ornaments-sm.png'}
            width={375}
            height={593}
            alt='Ornaments'
            className='md:hidden w-full'
            data-aos='zoom-in'
          />
          <div className='flex flex-col items-center left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2 z-20'>
            <div className='bg-[#FB991A] px-3 w-[303px] lg:w-[879px] py-3 text-center'>
              <Typography
                data-aos='zoom-in'
                data-aos-delay='400'
                variant='h1'
                className='font-bold !text-[28px] md:!text-5xl lg:!text-[80px] text-shadow-lg whitespace-nowrap text-white'
              >
                Essay Boost
              </Typography>
            </div>
            <Typography
              data-aos='zoom-in'
              data-aos-delay='600'
              variant='p'
              className='text-center text-sm md:text-xl max-w-2xl mt-7'
            >
              <b>Essay Boost</b> adalah layanan yang membantu pendaftar beasiswa
              <b>meningkatkan kualitas esai</b> mereka dengan{' '}
              <b>proofreading dan feedback.</b>
            </Typography>
            <div className='flex mt-12 gap-2 lg:gap-12 flex-col lg:flex-row'>
              <Button
                className=' bg-[#FB991A] text-white font-medium hover:bg-[#ffb657]'
                variant='unstyled'
                size='lg'
                onClick={() =>
                  scrollBy({
                    top: aboutRef.current?.getBoundingClientRect()?.top ?? 0,
                    behavior: 'smooth',
                  })
                }
                data-aos='zoom-in'
                data-aos-delay='800'
              >
                Kenali Lebih Lanjut
              </Button>
              <ButtonLink
                className='bg-[#FB991A] text-white font-medium hover:bg-[#ffb657]'
                variant='unstyled'
                size='lg'
                href='essay-boost/invoice-detail'
                data-aos='zoom-in'
                data-aos-delay='1000'
              >
                Daftar Sekarang
              </ButtonLink>
            </div>
          </div>
        </section>

        <section
          className='relative lg:h-screen bg-gradient-to-b from-[#E47F1A] to-[#FB991A]'
          ref={aboutRef}
        >
          <div className='flex -rotate-3 md:-rotate-1 bg-gradient-to-r from-[#FB991A] to-[#E47F1A] w-full py-10 justify-center gap-8 shadow-[0_62px_26px_0_rgba(0,0,0,0.20)]'>
            <Typography
              variant='h4'
              className='text-xl sm:text-2xl lg:text-5xl font-bold text-white whitespace-nowrap opacity-60 text-center'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              Yuk Cari Tahu Lebih Lanjut !
            </Typography>
          </div>
          <div className='flex absolute top-0 rotate-3 md:rotate-1 bg-gradient-to-r from-[#FB991A to-[#E47F1A] w-full  py-10 justify-center gap-8 shadow-[0_62px_26px_0_rgba(0,0,0,0.20)]'>
            <Typography
              variant='h4'
              className='text-xl sm:text-2xl lg:text-5xl font-bold text-white whitespace-nowrap text-center'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              Yuk Cari Tahu Lebih Lanjut !
            </Typography>
          </div>
          <div className='relative' data-aos='zoom-in'>
            <NextImage
              src={'/images/detail-program/bg-about.png'}
              width={1724}
              height={535}
              alt='Background about'
              className='w-full absolute mt-5'
            />
            <div className='flex relative flex-col xl:flex-row justify-center place-items-center'>
              <NextImage
                src={'/images/detail-program/Haira-3-sm.png'}
                width={240}
                height={360}
                alt='Haira Icon'
                className='xl:hidden'
              />
              <div className='relative -translate-y-2/3 lg:-translate-y-1/4'>
                <NextImage
                  src={'/images/detail-program/about-text.png'}
                  width={705}
                  height={378}
                  alt='Text Background'
                  className='w-[353px] lg:w-[705px]'
                />
                <Typography
                  variant='p'
                  className='absolute z-20 top-1/2 max-w-[608px] -translate-y-1/2 w-[80%] lg:w-full right-1/2 translate-x-1/2 !text-sm lg:!text-[28px] !leading-4 lg:!leading-7 text-center font-medium'
                >
                  <b>Essay Boost</b> adalah salah satu dari Booster Series: A La
                  Carte yang merupakan layanan yang membantu pendaftar beasiswa
                  meningkatkan kualitas esai mereka dengan{' '}
                  <b>proofreading dan feedback profesional</b> dalam memastikan
                  tata bahasa, struktur yang kuat, dan cerita yang meyakinkan
                  dalam esai mereka.
                </Typography>
              </div>
              <div className=''>
                <NextImage
                  src={'/images/detail-program/Haira-3.png'}
                  width={615}
                  height={921}
                  alt='Haira Icon'
                  className='hidden xl:block'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='min-h-screen py-12 grid place-items-center relative bg-white'>
          <NextImage
            src={'/images/detail-program/yellow/benefit-top.png'}
            width={271}
            height={181}
            alt='Ornaments'
            className='absolute top-0 left-0 w-[100px] lg:w-[271px]'
            data-aos='fade-left'
          />
          <NextImage
            src={'/images/detail-program/yellow/benefit-b.png'}
            width={135}
            height={98}
            alt='Ornaments'
            className='absolute bottom-0 right-0 w-[70px] lg:w-[135px]'
            data-aos='fade-left'
          />
          <div className='flex place-items-center justify-center flex-col xl:flex-row items-center gap-[56px] md:gap-[143px]'>
            <Typography
              variant='p'
              className='text-[32px] md:text-7xl font-bold text-[#FB991A] max-w-xl text-center lg:text-end'
              data-aos='fade-up'
            >
              Benefitnya apa aja ya?
            </Typography>
            <div className='flex flex-col gap-9'>
              <div
                data-aos='fade-up'
                data-aos-delay='200'
                className='w-[262px] md:w-[523px] h-[120px] px-2 lg:px-10 lg:h-[160px] bg-[#FB991A] grid place-items-center rounded-3xl'
              >
                <Typography
                  variant='p'
                  className='text-white font-medium text-sm lg:text-[28px] !leading-8 text-center'
                >
                  Mendapatkan bimbingan untuk{' '}
                  <b>meningkatkan penulisan esai yang baik</b>
                </Typography>
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='400'
                className='w-[262px] md:w-[523px] h-[120px] px-2 lg:px-10 lg:h-[160px] border-[6px] border-[#FB991A] grid place-items-center rounded-3xl'
              >
                <Typography
                  variant='p'
                  className='font-medium text-sm lg:text-[28px] !leading-8 text-center'
                >
                  Mengetahui bagaimana bentuk-bentuk{' '}
                  <b>esai dari awardee beasiswa</b>
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* <section className='bg-[#FB991A] py-12 relative'>
          <div className='relative flex flex-col w-10/12 mx-auto h-auto justify-center items-center gap-9 mb-[93px]'>
            <Typography
              variant='h2'
              className='text-4xl lg:text-[72px] font-[700] text-white text-center leading-9'
            >
              Apa kata mereka ?
            </Typography>
            <div className='relative w-11/12 mx-auto flex flex-row mt-10'>
              <Swiper
                spaceBetween={20}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1440: {
                    slidesPerView: 3,
                  },
                }}
                navigation={{ prevEl: '.prev', nextEl: '.next' }}
                loop={true}
                modules={[Autoplay, Navigation]}
                className='mySwiper w-full testimonials'
              >
                {TESTIMONIALS_CVBOOST.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    className='flex flex-col gap-10 bg-white drop-shadow-lg px-10 py-8 h-32 justify-between rounded-3xl'
                  >
                    <div className='flex flex-col gap-y-10 h-full justify-between'>
                      <div className='block'>
                        <p className='font-secondary text-sm md:text-lg text-black-200'>
                          {testimonial.description}
                        </p>
                      </div>
                      <div className='flex flex-row gap-2 items-center'>
                        <div className='w-12 h-12'>
                          <NextImage
                            src={testimonial.avatar}
                            width={48}
                            height={48}
                            alt={testimonial.name}
                            className='rounded-full'
                          />
                        </div>
                        <div className='flex flex-col gap-1'>
                          <Typography
                            variant='p'
                            className='font-primary font-bold text-sm'
                          >
                            {testimonial.name}
                          </Typography>
                          <div className='flex flex-col'>
                            <Typography
                              variant='p'
                              className='text-xs md:text-base'
                            >
                              {testimonial.university}
                            </Typography>
                            <Typography
                              variant='p'
                              className='italic text-xs md:text-base'
                            >
                              {testimonial.awards}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='absolute w-screen hidden lg:flex justify-between px-20 top-1/2 translate-y-1/2 z-30'>
              <div className='prev text-3xl border border-white text-white p-4 rounded-[50px] cursor-pointer'>
                <FaArrowLeft />
              </div>
              <div className='next text-3xl border border-white text-white p-4 rounded-[50px] cursor-pointer'>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </section> */}

        <section className='flex flex-col py-[60px] gap-5 lg:gap-[72px] relative'>
          <NextImage
            src={'/images/product/booster/accent-1.png'}
            width={180}
            height={180}
            alt=' '
            className=' absolute top-0 right-0 max-lg:w-[67px]'
            data-aos='fade-left'
          />
          <NextImage
            src={'/images/product/booster/accent-2.png'}
            width={180}
            height={180}
            alt=' '
            className=' absolute bottom-0 left-0 max-lg:w-[67px]'
            data-aos='fade-right'
          />
          <Typography
            variant='h2'
            weight='bold'
            className='text-center text-[#FB991A] text-[28px] relative'
            data-aos='zoom-in'
          >
            Paket Essay Boost
          </Typography>
          <div className='flex flex-col lg:flex-row justify-center gap-9 max-lg:gap-5 relative max-lg:px-4'>
            <div
              className='flex  flex-col gap-4 rounded-3xl border-[6px] border-[#d8b78c] px-6 py-7 max-w-4xl xl:max-w-6xl'
              data-aos='fade-up'
            >
              <Typography variant='h4' weight='bold' className='text-xl'>
                Kenapa harus Essay Boost Raih Asa?
              </Typography>
              <ul className=' list-disc ml-4'>
                <li>
                  <Typography>
                    Layanan Express 48 Jam: Tidak perlu tunggu lama lama. Essay
                    kamu langsung siap dengan hasil maksimal dalam waktu
                    singkat.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Feedback Konstruktif dari Reviewer Berpengalaman: Dapatkan
                    review mendalam dari mentor sebaya berpengalaman yang tahu
                    persis apa yang dicari penyelenggara beasiswa.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tips dan Trik Terpersonalisasi dari Reviewer: Belajar
                    rahasia sukses langsung dari mentor sebaya berpengalaman
                    dengan saran yang spesifik dan praktis.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Harga Ramah di Kantong: Layanan premium express dengan harga
                    yang bersahabat.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Essay Jadi Makin Profesional: Bantu Essay kamu tampil keren
                    dan memikat, siap mencuri perhatian di mata penyelenggara
                    beasiswa.
                  </Typography>
                </li>
              </ul>
              <Typography
                variant='h5'
                weight='bold'
                className='text-[#1B7691] text-lg'
              >
                Rp75.000
              </Typography>
              <ButtonLink href=' ' variant='warning' size='base'>
                Daftar Sekarang
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* <section className='relative pb-20 lg:pb-0  lg:h-screen bg-gradient-to-b from-[#FB991A] to-[#E47F1A] grid place-items-center'>
          <NextImage
            src={'/images/detail-program/docs-bg.png'}
            width={1724}
            height={535}
            alt='Documentation Background'
            className='w-full bottom-0 absolute'
          />
          <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center justify-center flex-col lg:flex-row'>
            <div className='relative flex'>
              <div className='relative lg:translate-y-1/4'>
                <NextImage
                  src={'/images/detail-program/doc-text.png'}
                  width={448}
                  height={240}
                  alt='Text Background'
                  className='w-[224px] lg:w-[448px]'
                />
                <div className='absolute text-start text-[#FB991A] z-20 top-1/2 max-w-[608px] -translate-y-1/2 right-1/4 translate-x-1/3'>
                  <Typography
                    variant='h4'
                    className='md:translate-x-2 lg:!text-6xl font-bold'
                  >
                    Intip
                  </Typography>
                  <Typography
                    variant='p'
                    className='lg:!text-[32px] font-bold '
                  >
                    Keseruannya !
                  </Typography>
                </div>
              </div>
              <NextImage
                src={'/images/detail-program/haira-head.png'}
                width={302}
                height={306}
                alt='Haira'
                className='absolute lg:bottom-auto lg:top-0 right-1/2 w-[151px] lg:w-[302px]'
              />
            </div>
            <div className='relative w-full max-lg:mt-5'>
              <Swiper
                spaceBetween={20}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                navigation={{ prevEl: '.dprev', nextEl: '.dnext' }}
                loop={true}
                modules={[Autoplay, Navigation]}
                className='mySwiper w-2/3 lg:w-full'
              >
                {DOCS_ESSAY.map((docs, index) => (
                  <SwiperSlide
                    key={index}
                    className='!flex flex-col items-center pb-20 xl:pb-12'
                  >
                    <NextImage
                      src={docs.image.src}
                      width={docs.image.width}
                      height={docs.image.height}
                      alt={docs.image.alt}
                      className=''
                    />
                    <Typography
                      variant='h4'
                      className=' font-bold text-base lg:text-[28px] text-white mt-6 max-w-sm text-center '
                    >
                      {docs.name}
                    </Typography>
                  </SwiperSlide>
                ))}
                <div className='absolute flex w-full justify-center gap-4 lg:gap-0 lg:justify-between px-20 bottom-0 translate-y-1/2 lg:translate-y-1/3 xl:-translate-y-1/2 z-30 pb-12 xl:pb-0'>
                  <div className='dprev text-sm lg:text-3xl border border-white text-white p-4 rounded-[50px] cursor-pointer'>
                    <FaArrowLeft />
                  </div>
                  <div className='dnext text-sm lg:text-3xl border border-white text-white p-4 rounded-[50px] cursor-pointer'>
                    <FaArrowRight />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}
