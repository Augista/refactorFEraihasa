import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';

import Aos from 'aos';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import { DOCS_CARD } from '@/contents/docs';
import Layout from '@/layouts/Layout';
export default function ScholarshipWebinar() {
  React.useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const aboutRef = React.useRef<HTMLElement>(null);
  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='Detail Program' />
      <main className='scroll-smooth overflow-hidden bg-[#fff] font-[Poppins]'>
        <section className='relative overflow-hidden md:mt-20 lg:mt-28'>
          <NextImage
            src={'/images/detail-program/Ornaments.png'}
            width={1563}
            height={580}
            quality={100}
            alt='Ornaments'
            className='hidden md:block object-cover 2xl:hidden'
            data-aos='zoom-in'
          />

          <NextImage
            src={'/images/detail-program/Ornaments.png'}
            width={1563}
            height={580}
            quality={100}
            alt='Ornaments'
            className='hidden 2xl:block w-full'
            data-aos='zoom-in'
          />
          <NextImage
            src={'/images/detail-program/Ornaments-sm.png'}
            width={375}
            height={593}
            alt='Ornaments'
            quality={100}
            className='md:hidden w-full'
            data-aos='zoom-in'
          />
          <div className='flex flex-col items-center left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2 z-20'>
            <div
              className='bg-[#E94759] px-3 lg:px-10 py-3'
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <Typography
                variant='h1'
                className='font-bold !text-[28px] md:!text-5xl lg:!text-[80px] text-shadow-lg whitespace-nowrap text-white'
              >
                Scholarship Webinar
              </Typography>
            </div>
            <Typography
              variant='p'
              className='text-center text-sm md:text-xl max-w-2xl mt-7'
              data-aos='zoom-in'
              data-aos-delay='600'
            >
              <b>Scholarship Webinar</b> adalah salah satu program{' '}
              <b>Scholarship Fair</b> yang diadakan untuk memberi gambaran
              mengenai tips & trik dari awardee langsung beasiswa tahun lalu.
            </Typography>
            <Button
              className='mt-12 bg-[#E94759] text-white font-medium hover:bg-[#ff7384]'
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
              Lihat Selengkapnya
            </Button>
          </div>
        </section>

        <section
          className='relative lg:h-screen bg-gradient-to-b from-[#C0172A] to-[#E94759]'
          ref={aboutRef}
        >
          <div className='flex -rotate-3 md:-rotate-1 bg-gradient-to-r from-[#C0172A] to-[#C0172A] w-full py-10 justify-center gap-8 shadow-[0_62px_26px_0_rgba(0,0,0,0.20)]'>
            <Typography
              variant='h4'
              className='text-xl sm:text-2xl lg:text-5xl font-bold text-white whitespace-nowrap opacity-60 text-center'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              Yuk Cari Tahu Lebih Lanjut !
            </Typography>
          </div>
          <div className='flex absolute top-0 rotate-3 md:rotate-1 bg-gradient-to-r from-[#C0172A] to-[#C0172A] w-full  py-10 justify-center gap-8 shadow-[0_62px_26px_0_rgba(0,0,0,0.20)]'>
            <Typography
              variant='h4'
              className='text-xl sm:text-2xl lg:text-5xl font-bold text-white whitespace-nowrap text-center'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              Yuk Cari Tahu Lebih Lanjut !
            </Typography>
          </div>
          <div
            className='relative'
            id='about-scholarship-camp'
            data-aos='zoom-in'
          >
            <NextImage
              src={'/images/detail-program/bg-about.png'}
              width={1724}
              height={535}
              quality={100}
              alt='Background about'
              className='w-full absolute'
            />
            <div className='flex flex-col xl:flex-row justify-center place-items-center'>
              <NextImage
                src={'/images/detail-program/Haira-3-sm.png'}
                width={240}
                height={360}
                quality={100}
                alt='Haira Icon'
                className='xl:hidden'
              />
              <div className='relative -translate-y-2/3 lg:-translate-y-1/4'>
                <NextImage
                  src={'/images/detail-program/about-text.png'}
                  width={705}
                  height={378}
                  quality={100}
                  alt='Text Background'
                  className='w-[353px] lg:w-[705px]'
                />
                <Typography
                  variant='p'
                  className='absolute z-20 top-1/2 max-w-[608px] -translate-y-1/2 w-[80%] lg:w-full right-1/2 translate-x-1/2 !text-sm lg:!text-[28px] !leading-4 lg:!leading-7 text-center font-medium'
                >
                  <b>Scholarship Webinar</b> merupakan webinar yang diadakan
                  bertujuan untuk memberi gambaran mengenai <b>tips & trik</b>{' '}
                  dan ketentuan-ketentuan tambahan serta <b>essay review</b>{' '}
                  dengan dipandu{' '}
                  <b>
                    mentor berpengalaman yang merupakan awardee langsung
                    beasiswa tahun lalu.
                  </b>
                </Typography>
              </div>
              <div className=''>
                <NextImage
                  src={'/images/detail-program/Haira-3.png'}
                  width={615}
                  height={921}
                  quality={100}
                  alt='Haira Icon'
                  className='hidden xl:block'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='min-h-screen py-12 grid place-items-center relative bg-white'>
          <NextImage
            src={'/images/detail-program/about-top.png'}
            width={271}
            height={181}
            quality={100}
            alt='Ornaments'
            className='absolute top-0 left-0 w-[100px] lg:w-[271px]'
          />
          <div className='flex place-items-center justify-center flex-col xl:flex-row items-center gap-[56px] md:gap-[143px]'>
            <Typography
              variant='p'
              className='text-[32px] md:text-7xl font-bold text-[#E94759] max-w-xl text-center lg:text-end'
              data-aos='fade-up'
            >
              Benefitnya apa aja ya?
            </Typography>
            <div className='flex flex-col gap-9'>
              <div
                data-aos='fade-up'
                data-aos-delay='200'
                className='w-[262px] md:w-[523px] h-[120px] lg:h-[160px] bg-[#E94759] grid place-items-center rounded-3xl'
              >
                <Typography
                  variant='p'
                  className='text-white font-medium text-sm lg:text-[28px] !leading-8 text-center'
                >
                  Mendapatkan <b>Tips & Trik</b> untuk mendapatkan beasiswa
                </Typography>
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='400'
                className='w-[262px] md:w-[523px] h-[120px] lg:h-[160px] border-[6px] border-[#E94759] grid place-items-center rounded-3xl'
              >
                <Typography
                  variant='p'
                  className='font-medium text-sm lg:text-[28px] !leading-8 text-center'
                >
                  <b>Essay Review</b> bersama mentor yang merupakan{' '}
                  <b>awardee</b> <b>beasiswa</b> tahun lalu
                </Typography>
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='600'
                className='w-[262px] md:w-[523px] h-[120px] lg:h-[160px] border-[6px] border-[#E94759] grid place-items-center rounded-3xl'
              >
                <Typography
                  variant='p'
                  className='font-medium text-sm lg:text-[28px] !leading-8 text-center'
                >
                  Berkonsultasi secara <b>gratis</b> mengenai beasiswa
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* <section className='bg-[#E94759] py-12 relative'>
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
                {TESTIMONIALS_WEBINAR.map((testimonial, index) => (
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
                            quality={100}
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

        <section className='relative pb-20 lg:pb-0  lg:h-screen bg-gradient-to-b from-[#E94759] to-[#C0172A] grid place-items-center'>
          <NextImage
            src={'/images/detail-program/docs-bg.png'}
            width={1724}
            height={535}
            quality={100}
            alt='Documentation Background'
            className='w-full bottom-0 absolute'
          />
          <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center justify-center flex-col lg:flex-row'>
            <div className='relative flex' data-aos='fade-right'>
              <div className='relative -translate-y-2/3 lg:translate-y-1/4'>
                <NextImage
                  src={'/images/detail-program/doc-text.png'}
                  width={448}
                  height={240}
                  quality={100}
                  alt='Text Background'
                  className='w-[224px] lg:w-[448px]'
                />
                <div className='absolute text-start text-[#E94759] z-20 top-1/2 max-w-[608px] -translate-y-1/2 right-1/4 translate-x-1/3'>
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
                quality={100}
                alt='Haira'
                className='absolute bottom-2/3 lg:bottom-auto lg:top-0 right-1/2 w-[151px] lg:w-[302px]'
              />
            </div>
            <div className='relative w-full' data-aos='fade-left'>
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
                {DOCS_CARD.map((docs, index) => (
                  <SwiperSlide
                    key={index}
                    className='!flex flex-col items-center pb-20 xl:pb-12'
                  >
                    <NextImage
                      src={docs.img}
                      width={544}
                      height={434}
                      alt={docs.name}
                      className='w-[249px] lg:w-[544px]'
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
        </section>
      </main>
    </Layout>
  );
}
