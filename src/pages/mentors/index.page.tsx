import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

import NextImage from 'next/image';
import React from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ButtonLink from '@/components/links/ButtonLink';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import { VelocityScroll } from '@/components/TextCustom/ScrollBasedVelocity';
import Typography from '@/components/Typography';
import { MENTOR } from '@/contents/mentor';
import Layout from '@/layouts/Layout';
export default function MentorPage() {
  const [isLoading] = React.useState(true);

  // const route = useRouter();
  // React.useEffect(() => {
  //   route.push('/coming-soon');

  //   Aos.init({ once: true });
  // }, []);

  if (isLoading) {
    <Loading />;
  }

  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='MentorPage' />
      <section className='overflow-hidden relative py-28'>
        <div className='grid lg:grid-cols-12 grid-cols-1'>
          <div className='lg:col-span-5 grid place-items-center order-1 mt-5 lg:mt-0 lg:order-none'>
            <div className='flex flex-col gap-4 lg:gap-[29px] items-center'>
              <div className='flex flex-col gap-3'>
                <Typography
                  variant='h6'
                  weight='medium'
                  className='text-[#1B7691]'
                  data-aos='zoom-in'
                >
                  Get a scholarship with a peer
                </Typography>

                <Typography
                  data-aos='zoom-in'
                  variant='h1'
                  className='font-extrabold text-[32px] bg-[#FB991A] pl-[27px] pr-[15px] text-white text-center'
                >
                  MENTORS!
                </Typography>
              </div>
              <div className=''>
                <ButtonLink
                  href='#mentors'
                  className='px-[26px] py-3 !rounded'
                  variant='primary'
                  data-aos='zoom-in'
                  data-aos-delay='400'
                >
                  Lihat Selengkapnya!
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className='lg:col-span-7 grid place-items-center relative'>
            <NextImage
              src={'/images/mentor/star.png'}
              width={100}
              height={100}
              className='absolute top-0 left-0 translate-x-3/4 w-[50px] lg:w-[100px]'
              alt='Mentor'
              data-aos='zoom-in'
              data-aos-delay='1000'
              data-aos-anchor='#main-hero'
              // ! Bug anchor jadi kurang rapih
              // data-aos-offset='500'
            />
            <NextImage
              src={'/images/mentor/mentor-br.png'}
              width={120}
              height={120}
              className='absolute bottom-0 right-0 -translate-x-3/4 z-20 w-[50px] lg:w-[100px]'
              alt='Mentor'
              data-aos='fade-left'
              data-aos-delay='1000'
              data-aos-anchor='#main-hero'
              // ! Bug anchor jadi kurang rapih
              // data-aos-offset='500'
            />
            <NextImage
              src={'/images/mentor/hero.png'}
              width={739}
              height={537}
              quality={100}
              alt='Mentor'
              priority
              data-aos='zoom-in'
              data-aos-delay='600'
              id='main-hero'
            />
          </div>
        </div>
        <NextImage
          src={'/images/mentor/mentor-bl.png'}
          width={240}
          height={120}
          className='absolute bottom-0 left-0 w-[120px] lg:w-[240px]'
          alt='Mentor'
          data-aos='fade-right'
          data-aos-delay='1000'
        />
      </section>

      <section className='relative h-screen overflow-hidden'>
        <div className='relative'>
          <div className='flex absolute top-0 rotate-3 md:-rotate-1 bg-gradient-to-r from-[#FB991A] to-[#C0172A] w-full py-7 justify-center gap-8 shadow-[0_62px_26px_0_rgba(0,0,0,0.20)]'>
            <VelocityScroll
              text=' MENTOR INI SEBAYA DENGANMU LHO! '
              default_velocity={2}
              className='text-xl sm:text-2xl md:text-5xl font-bold text-white whitespace-nowrap opacity-60'
            />
          </div>
          <div className='flex absolute top-0 -rotate-3 md:rotate-1 bg-gradient-to-r from-[#FB991A] to-[#C0172A] w-full py-7 justify-center gap-8 shadow-[0_62px_26px_0_rgba(0,0,0,0.20)]'>
            <VelocityScroll
              text=' MENTOR INI SEBAYA DENGANMU LHO! '
              default_velocity={2}
              className='text-xl sm:text-2xl md:text-5xl font-bold text-white whitespace-nowrap opacity-60'
            />
            <VelocityScroll
              text=' MENTOR INI SEBAYA DENGANMU LHO! '
              default_velocity={2}
              className='text-xl sm:text-2xl md:text-5xl font-bold text-white whitespace-nowrap opacity-80'
            />
            <VelocityScroll
              text=' MENTOR INI SEBAYA DENGANMU LHO! '
              default_velocity={2}
              className='text-xl sm:text-2xl md:text-5xl font-bold text-white whitespace-nowrap opacity-60'
            />
          </div>
        </div>
        <div
          className='relative w-4/6 mx-auto flex top-1/3 md:top-1/2 -translate-y-1/3 flex-row'
          id='mentors'
        >
          <Swiper
            spaceBetween={24}
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
            pagination={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            className='mySwiper !w-full !px-3 !py-12 md:!py-7 !grid !place-items-center'
          >
            {MENTOR.map((mentor, index) => (
              <SwiperSlide
                data-aos='zoom-in'
                key={index}
                className='flex flex-col py-7 lg:mb-5 px-9 h-[300px] md:!h-[438px] bg-[#fff] shadow-[0_0_12px_0_rgba(0,0,0,0.12)] rounded-[21px]'
              >
                <div className='grid place-items-center'>
                  <NextImage
                    src={mentor.image.src}
                    width={mentor.image.width}
                    height={mentor.image.height}
                    alt={mentor.image.alt}
                  />
                </div>
                <div className='flex flex-col text-center mt-9'>
                  <Typography variant='p'>Awardee of</Typography>
                  <Typography
                    variant='h6'
                    weight='bold'
                    className='text-[#1B7691]'
                  >
                    Beasiswa <br />
                    {mentor.awardee}
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          data-aos='zoom-in'
          className='absolute w-full flex justify-between px-3 md:px-12 lg:px-20 top-3/4 md:top-1/2 -translate-y-3/4 md:translate-y-1/2 z-30'
        >
          <div className='prev text-lg md:text-3xl border bg-[#1B7691] text-white p-4 rounded-[50px] cursor-pointer'>
            <FaArrowLeft />
          </div>
          <div className='next text-lg md:text-3xl border bg-[#1B7691] text-white p-4 rounded-[50px] cursor-pointer'>
            <FaArrowRight />
          </div>
        </div>
        <NextImage
          src={'/images/mentor/list-br.png'}
          width={180}
          height={180}
          className='absolute bottom-0 right-0 w-[90px] lg:w-[180px]'
          alt='Mentor'
          data-aos='fade-left'
        />
      </section>
      <section className='relative lg:py-0 h-screen grid place-items-center'>
        <NextImage
          src={'/images/mentor/contact-tr.png'}
          width={180}
          height={180}
          className='absolute top-0 right-0 w-[90px] lg:w-[180px]'
          alt='Mentor'
          data-aos='fade-left'
        />
        <div className='grid grid-cols-12 relative' data-aos='zoom-in'>
          <div className='lg:col-span-3 col-span-2'></div>
          <div className='card bg-[#FB991A] px-10 py-5 lg:py-[65px] lg:pl-[55px] lg:pr-[187px] col-span-8 lg:col-span-6 rounded-xl'>
            <Typography
              variant='h6'
              weight='medium'
              className='lg:text-[28px] text-white text-xs text-center lg:text-start'
            >
              Jika kamu memiliki semangat untuk berbagi pengetahuan dan{' '}
              <b>ingin menjadi mentor</b>, jangan ragu untuk menghubungi tim
              RaihAsa di bawah ini!
            </Typography>
            <div className='flex mt-10 lg:mt-12 lg:gap-8 gap-2 sm:gap-3 justify-center'>
              <ButtonLink
                href=''
                variant='primary'
                leftIcon={FaInstagram}
                className='px-[6px] sm:px-[10px] lg:px-[26px] py-2 gap-1 lg:gap-2'
              >
                Instagram
              </ButtonLink>
              <ButtonLink
                href=''
                variant='primary'
                leftIcon={FaWhatsapp}
                className='px-[6px] sm:px-[10px] lg:px-[26px] py-2 gap-1 lg:gap-2'
              >
                Instagram
              </ButtonLink>
            </div>
          </div>
          <NextImage
            src={'/images/mentor/haira.png'}
            width={498}
            height={498}
            className='absolute top-0 -translate-y-1/2 md:right-1/2 md:translate-x-1/2 lg:top-0 lg:left-3/4 lg:translate-y-0 lg:-translate-x-2/4 -z-20 lg:z-0'
            alt='Mentor'
          />
        </div>
        <NextImage
          src={'/images/mentor/contact-bl.png'}
          width={180}
          height={120}
          className='absolute bottom-0 left-0 w-[90px] lg:w-[180px]'
          alt='Mentor'
          data-aos='fade-right'
        />
      </section>
    </Layout>
  );
}
