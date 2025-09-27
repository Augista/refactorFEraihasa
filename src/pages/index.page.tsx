'use client';

import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';


import Aos from 'aos';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import PromoPopup from '@/components/Popups/PromoPopups';
import ProgramCardLanding from '@/components/card/ProgramCardLanding';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import { NumberTicker } from '@/components/TextCustom/NumberTicker';
import { VelocityScroll } from '@/components/TextCustom/ScrollBasedVelocity';
import SparklesText from '@/components/TextCustom/SparklesText';
import Typography from '@/components/Typography';
import { TESTIMONIALS } from '@/contents/landing';
import { Sponsor } from '@/contents/sponsor';
import Layout from '@/layouts/Layout';

export default function Home() {
  const aboutRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <Layout withNavbar={true} withFooter={true}>
          <div className="p-8 text-4xl text-white bg-red-500">
      Test Tailwind - Ini harus merah dengan text putih
    </div>
      <SEO title='Home' />
      <PromoPopup />
      <main className='scroll-smooth overflow-hidden bg-[#fff]'>
        <section className='relative grid py-20 mt-12 place-items-center md:min-h-screen'>
          <div className='container mx-auto grid grid-cols-1 xl:grid-cols-2 md:px-10 px-4 !place-items-center z-20'>
            <div className='flex flex-col items-center order-2 col-span-1 gap-2 mt-5 xl:order-none xl:items-start xl:mt-0'>
              <Typography
                variant='h5'
                weight='regular'
                className='text-sm md:text-[20px] text-[#1B7691] text-center xl:text-left'
                data-aos='zoom-in'
                data-aos-delay='600'
              >
                <i>Temukan kesempatan, wujudkan impian</i>
              </Typography>
              <Typography
                data-aos='zoom-in'
                data-aos-delay='600'
                className='font-bold text-3xl md:text-[60px] text-[#FB991A] mt-3 leading-none text-center xl:text-left'
              >
                Raih Beasiswa Impianmu dengan Lebih Mudah
              </Typography>
              <Typography
                data-aos='zoom-in'
                data-aos-delay='600'
                className='text-sm md:text-[20px] text-[#1B7691] mt-3 text-center xl:text-left'
              >
                Jelajahi kesempatan beasiswa terbaik dari seluruh Indonesia dan
                dunia. Temukan peluang pendidikan yang sesuai dengan passion dan
                cita-citamu!
              </Typography>
              <ButtonLink
                href='/rekomendasi-beasiswa'
                data-aos='zoom-in'
                data-aos-delay='600'
                variant='primary'
                size='lg'
                className='max-w-sm px-5 mt-4 md:mt-8 font-poppins'
              >
                <Typography className='flex items-center gap-2'>
                  Ambil Kesempatan Sekarang <FaArrowRightLong />{' '}
                </Typography>
              </ButtonLink>
            </div>

            <NextImage
              src='/images/landing/haira-hero-desktop.png'
              width={590}
              height={625}
              quality={100}
              alt='Haira Raih Asa'
              className='hidden lg:block lg:relative w-full max-w-[590px] h-auto'
              priority
              data-aos='fade-left'
            />

            <NextImage
              src='/images/landing/haira-hero-mobile.png'
              width={295}
              height={328}
              quality={100}
              alt='Haira Raih Asa'
              className='block lg:hidden relative w-full max-w-[295px]'
              imgClassName='w-auto h-auto object-contain'
              priority
              data-aos='fade-left'
            />
          </div>

          <NextImage
            src={'/images/landing/hero-b.png'}
            width={264}
            height={264}
            quality={100}
            alt='Haira Raih Asa'
            className='absolute bottom-0 left-0 w-1/3 md:w-[220px] z-10'
            data-aos='fade-right'
          />
          <NextImage
            src={'/images/landing/bg-bot-hero-desktop.png'}
            width={1440}
            height={540}
            quality={100}
            priority
            alt='Haira Raih Asa'
            className='absolute inset-x-0 bottom-0 z-0 hidden w-full md:block'
            imgClassName='object-cover w-full h-full'
            data-aos='fade-right'
          />
          <NextImage
            src={'/images/landing/bg-bot-hero-mobile.png'}
            width={425}
            height={722}
            quality={100}
            priority
            alt='Haira Raih Asa'
            className='absolute inset-x-0 bottom-0 z-0 block w-full md:hidden'
            imgClassName='object-cover w-full h-full'
            data-aos='fade-right'
          />
        </section>

        <section
          className='bg-[#4EA4BE] relative pt-32 pb-24 z-20'
          ref={aboutRef}
        >
          <div className='flex absolute top-0 rotate-3 md:-rotate-1 bg-gradient-to-r from-[#FB991A] to-[#C0172A] w-full py-5 justify-center gap-8 shadow-[0_62px_26px_0_rgba(0,0,0,0.20)]'>
            <VelocityScroll
              text=' KENAPA HARUS RAIH ASA ?'
              default_velocity={2}
              className='text-xl font-bold text-white sm:text-2xl md:text-5xl whitespace-nowrap opacity-60'
            />
          </div>
          <div className='flex absolute top-0 -rotate-3 md:rotate-1 bg-gradient-to-r from-[#FB991A] to-[#C0172A] w-full py-5 justify-center gap-8 shadow-[0_62px_26px_0_rgba(0,0,0,0.20)]'>
            <VelocityScroll
              text=' KENAPA HARUS RAIH ASA ?'
              default_velocity={2}
              className='text-xl font-bold text-white sm:text-2xl md:text-5xl whitespace-nowrap opacity-60'
            />
            <VelocityScroll
              text=' KENAPA HARUS RAIH ASA ?'
              default_velocity={2}
              className='text-xl font-bold text-white sm:text-2xl md:text-5xl whitespace-nowrap opacity-80'
            />
            <VelocityScroll
              text=' KENAPA HARUS RAIH ASA ?'
              default_velocity={2}
              className='text-xl font-bold text-white sm:text-2xl md:text-5xl whitespace-nowrap opacity-60'
            />
          </div>
          {/* <div className='relative px-4 mt-12 top-1/3'>
            <div className='flex flex-row flex-wrap justify-center gap-5 '>
              {WHY_US_CARD.map((card, index) => {
                return (
                  <div
                    key={index}
                    data-aos='fade-right'
                    data-aos-delay={400 * (index + 1)}
                    className='flex flex-col w-[329px] p-4 items-center bg-primary-white rounded-[16px] shadow-md'
                  >
                    <div className='flex flex-col items-center self-stretch gap-4'>
                      <div
                        className={`${card.color2} flex items-center gap-3 self-stretch rounded-[8px] pr-4`}
                      >
                        <div
                          className={`${card.color} flex w-12 h-[74px] p-[10px] justify-center items-center gap-[10px] rounded-[8px]`}
                        >
                          <card.link_icon className='w-8 h-8 text-primary-light' />
                        </div>
                        <Typography className='text-[#272D4E] text-xl font-[700] tracking-[2px] leading-6'>
                          {card.title}
                        </Typography>
                      </div>
                      <Typography className='text-base font-[400] tracking-[1px] leading-6'>
                        {card.description}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </section>

        <section className='relative px-4 md:px-10'>
          <div className='py-11 '>
            <div
              className='bg-[#1B7691] w-full text-center -rotate-[.6deg]'
              data-aos='fade-up'
            >
              <SparklesText
                className='lg:text-[60px] text-2xl py-3 lg:py-7 font-bold !text-white text-shadow-md shadow-[-8px_8px_0_0_rgba(0,0,0,0.25)]'
                text='PROGRAM UNGGULAN'
              />
            </div>

            <div className='flex flex-col lg:flex-row justify-center gap-5 md:gap-8 py-[60px] items-center'>
              <ProgramCardLanding
                data-aos='fade-right'
                data-aos-delay='400'
                gradientColor='from-[#C0172AB5] to-[#12121280]'
                buttonClassName='bg-[#E94759] hover:bg-[#ff99a5]'
                title='Scholarships Fair'
                desc='Program singkat yang dikurasi khusus untuk raih beasiswa yang kamu impikan!'
                img='images/landing/card-1.png'
                href='/programs/scholarship-fair/scholarship-camp'
              />

              <ProgramCardLanding
                data-aos='fade-right'
                data-aos-delay='600'
                gradientColor='from-[#E47F1A] to-[#12121280]'
                buttonClassName='bg-[#FB991A] hover:bg-[#ffc77d]'
                title='Booster Series: A La Carte'
                desc='Tingkatkan kualitas satuan berkas beasiswamu secepat kilat!'
                img='images/landing/card-2.png'
                href='/programs/booster-series-a-la-carte/cv-boost'
              />
            </div>
          </div>

          <NextImage
            src={'/images/landing/uvp-b.png'}
            width={1260}
            height={104}
            alt='UVP Background'
            className='relative bottom-0 z-10 w-full'
            data-aos='zoom-in-up'
          />
        </section>

        <section className='relative pb-[500px] lg:pb-0 lg:min-h-screen'>
          <div
            data-aos='fade-up'
            className='relative z-30 grid gap-3 title place-items-center'
            data-aos-delay='600'
          >
            <Typography className='text-xl md:text-[32px] text-[#1B7691]'>
              Maju bersama
            </Typography>
            <Typography className='font-extrabold text-4xl md:text-[80px] text-[#FB991A] mt-3'>
              RAIH ASA
            </Typography>
          </div>
          <NextImage
            src={'/images/landing/trust-element-t.png'}
            width={1440}
            height={104}
            alt='Trust element ornament'
            className='absolute top-0 z-40 w-full'
            data-aos='zoom-in-up'
          />
          <div className='grid place-items-center'>
            <NextImage
              src={'/images/landing/peta.png'}
              width={1318}
              height={520}
              quality={100}
              alt='Peta Indonesia'
              data-aos='zoom-in-up'
              className='absolute top-[20%] md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 w-[540px] md:w-[800px] lg:w-[1318px] z-0'
            />
          </div>
          <div className='bg-white border-2 border-[#1B7691] px-5 py-4 rounded-[42px] rounded-tl-none absolute right-1/2 md:right-auto top-1/4 md:top-1/2 md:-translate-y-1/2 lg:-translate-y-1/3  md:left-[10%] 2xl:left-1/4'>
            <NextImage
              src={'/images/landing/univ.png'}
              width={240}
              height={198}
              alt='List Universitas'
              className='w-28 md:w-[240px]'
            />
          </div>
          <div className='absolute bottom-1/4 md:bottom-[10%] left-1/2 lg:left-1/2 -translate-x-1/2 min-w-[200px] sm:min-w-[400px] flex flex-wrap lg:flex-nowrap justify-center md:justify-center items-center lg:justify-normal gap-2 md:gap-4 lg:gap-0 py-3 md:py-5 px-2 md:px-4 lg:px-[60px] rounded-[20px] bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.32)] max-w-[95vw] lg:max-w-none'>
            <div className='border-r-2 lg:border-r-4 border-[#E4E4E7] pr-2 lg:pr-10 w-[45%] sm:w-auto'>
              <div className='flex flex-col items-center whitespace-nowrap'>
                <div className='flex flex-row w-fit'>
                  <NumberTicker
                    className='font-bold text-lg sm:text-[28px] lg:text-7xl !text-[#FB991A] text-shadow-yellow'
                    value={100}
                    suffix='K'
                  />
                  <Typography className='font-bold text-lg sm:text-[28px] lg:text-7xl !text-[#FB991A] text-shadow-yellow'>
                    +
                  </Typography>
                </div>
                <Typography className='text-[8px] sm:text-[10px] md:text-xl text-[#1B7691] text-center'>
                  <b>Community </b>
                  member
                </Typography>
              </div>
            </div>
            <div className='border-r-2 lg:border-r-4 border-[#E4E4E7] px-2 lg:px-10 w-[45%] sm:w-auto'>
              <div className='flex flex-col items-center whitespace-nowrap'>
                <div className='flex flex-row w-fit'>
                  <NumberTicker
                    className='font-bold text-lg sm:text-[28px] lg:text-7xl !text-[#FB991A] text-shadow-yellow'
                    value={3000}
                  />
                  <Typography className='font-bold text-lg sm:text-[28px] lg:text-7xl !text-[#FB991A] text-shadow-yellow'>
                    +
                  </Typography>
                </div>
                <Typography className='text-[8px] sm:text-[10px] md:text-xl text-[#1B7691] text-center'>
                  <b>Peraih </b>
                  asa
                </Typography>
              </div>
            </div>
            <div className='border-r-2 lg:border-r-4 border-[#E4E4E7] lg:px-10 px-2 w-[45%] sm:w-auto'>
              <div className='flex flex-col items-center whitespace-nowrap'>
                <div className='flex flex-row w-fit'>
                  <NumberTicker
                    className='font-bold text-lg sm:text-[28px] lg:text-7xl !text-[#FB991A] text-shadow-yellow'
                    value={100}
                  />
                  <Typography className='font-bold text-lg sm:text-[28px] lg:text-7xl !text-[#FB991A] text-shadow-yellow'>
                    +
                  </Typography>
                </div>
                <Typography className='text-[8px] sm:text-[10px] md:text-xl text-[#1B7691] text-center'>
                  <b>Universitas</b> di
                </Typography>
              </div>
            </div>
            <div className='lg:pl-10 w-[45%] sm:w-auto'>
              <div className='flex flex-col items-center whitespace-nowrap'>
                <div className='flex flex-row w-fit'>
                  <NumberTicker
                    className='font-bold text-lg sm:text-[28px] lg:text-7xl !text-[#FB991A] text-shadow-yellow'
                    value={35}
                  />
                  <Typography className='font-bold text-lg sm:text-[28px] lg:text-7xl !text-[#FB991A] text-shadow-yellow'>
                    +
                  </Typography>
                </div>
                <Typography className='text-[8px] sm:text-[10px] md:text-xl text-[#1B7691] text-center'>
                  <b>provinsi Indonesia</b>
                </Typography>
              </div>
            </div>
          </div>
        </section>

        <section className='relative min-h-screen '>
          <div className='flex bg-gradient-to-l from-[#FB991A] to-[#C0172A] w-full py-8 justify-center gap-8 shadow-[0_20px_12px_0_rgba(0,0,0,0.20)]'>
            <VelocityScroll
              text=' APA KATA MEREKA ? '
              default_velocity={2}
              className='text-2xl md:text-[60px] font-bold py-2 text-white whitespace-nowrap opacity-80'
            />
          </div>
          <div className='grid place-items-center gap-10 col-span-2 lg:grid-cols-12 py-[60px] lg:px-20 md:px-4'>
            <div className='lg:col-span-4 2xl:col-span-3'>
              <NextImage
                data-aos='fade-right'
                data-aos-delay='200'
                src={'/images/landing/testimoni.gif'}
                width={360}
                height={700}
                alt='Testimoni Mockup'
                className='w-[300px] sm:w-[360px]'
              />
            </div>
            <div className='lg:col-span-8 2xl:col-span-9 relative w-full mt-12 pb-[420px] lg:pb-0 lg:h-full '>
              <Typography
                className='text-[28px] font-medium text-[#1B7691] px-4 lg:px-0'
                data-aos='fade-right'
                data-aos-delay='400'
              >
                Mereka yang berhasil me-<b>Raih Asa</b>-nya bersama kami!
              </Typography>
              <Swiper
                data-aos='fade-right'
                data-aos-delay='800'
                spaceBetween={20}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  1440: {
                    slidesPerView: 2,
                  },
                  1560: {
                    slidesPerView: 3,
                  },
                }}
                navigation={{ prevEl: '.prev', nextEl: '.next' }}
                loop={true}
                modules={[Autoplay, Navigation]}
                className='mySwiper !absolute w-full !py-8 md:!py-12'
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    className='flex flex-col gap-10 px-10 py-6 bg-white drop-shadow-lg md:py-10'
                  >
                    <div className='flex flex-col min-h-[340px] justify-between'>
                      <Typography className='text-lg text-black-200'>
                        {testimonial.description}
                      </Typography>
                      <div className='flex flex-row items-center gap-2'>
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
                          <Typography className='text-sm font-bold'>
                            {testimonial.name}
                          </Typography>
                          <div className='flex flex-col'>
                            <Typography>{testimonial.university}</Typography>
                            <Typography className='italic'>
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
            <div className='absolute z-30 justify-between hidden w-2/3 2xl:w-2/3 2xl:left-1/2 2xl:pl-6 2xl:-translate-x-1/3 xl:flex top-1/2 right-6'>
              <div className='prev text-3xl bg-[#2F9A97] text-white p-4 rounded-[50px] cursor-pointer'>
                <FaArrowLeft />
              </div>
              <div className='next text-3xl bg-[#2F9A97] text-white p-4 rounded-[50px] cursor-pointer'>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </section>

        {/* <section className='w-screen mt-12 mb-24' id='FAQ'>
          <div className='flex flex-col items-center justify-center gap-6 mx-auto'>
            <Typography
              data-aos='fade-up'
              className='text-[#FB991A] text-3xl lg:text-6xl uppercase font-bold text-center px-4'
            >
              FREQUENTLY ASKED QUESTIONS
            </Typography>
            <div className='lg:w-[920px]  w-full rounded-xl bg-white py-2 px-4 flex flex-col gap-y-4'>
              {FAQ.map((e, index) => {
                return (
                  <Disclosure as='div' key={index}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          data-aos='fade-up'
                          data-aos-delay='400'
                          className={`${
                            open ? 'font-bold' : 'font-medium'
                          } shadow-md flex w-full justify-between items-center rounded-lg bg-[#1B7691] px-6 py-4 text-left text-xl md:text-2xl  text-[#f5f5f5]  focus:outline-none`}
                        >
                          <span className='w-fit '>{e.title}</span>
                          <HiChevronUp
                            className={`${
                              open
                                ? 'rotate-180 transform transition ease-in-out duration-200 '
                                : ''
                            }  text-[#f5f5f5] h-8 w-8`}
                          />
                        </Disclosure.Button>
                        <Transition
                          enter='transition duration-100 ease-out'
                          enterFrom='transform scale-95 opacity-0'
                          enterTo='transform scale-100 opacity-100'
                          leave='transition duration-75 ease-out'
                          leaveFrom='transform scale-100 opacity-100'
                          leaveTo='transform scale-95 opacity-0'
                        >
                          <Disclosure.Panel className='shadow-md px-4 pb-2 pt-4 text-base text-black-100 border bg-[#f5f5f5] rounded-b-lg'>
                            {e.content}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                );
              })}
            </div>
          </div>
        </section> */}
        <section>
          <div className='bg-[#FB991A] '>
            <div className='py-6 md:py-5 bg-primary-blue -rotate-[1.25deg] flex justify-center items-center w-full'>
              <SparklesText
                data-aos='fade-up'
                className='!text-white !text-center md:text-[48px] md:leading-[64px]'
                text='Partner yang telah Berkolaborasi'
              />
            </div>
          </div>
          <div className='flex flex-wrap justify-center pt-5 pb-20 mt-10 max-lg:px-4 md:grid-cols-3 gap-x-6 gap-y-10'>
            {Sponsor.map((img, index) => (
              <div
                data-aos='fade-right'
                data-aos-delay={400 * (index + 1)}
                key={index}
                className='flex flex-col items-center justify-center gap-4'
              >
                <NextImage {...img} className='' />
                <Typography>{img.alt}</Typography>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
