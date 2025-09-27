import { FaInstagram } from 'react-icons/fa';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

export default function Footer() {
  return (
    <footer className='relative z-50 bg-primary-bluegreen flex flex-col items-center content-center font-primary py-6 lg:py-8'>
      <div className='w-10/12 mx-auto flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row justify-between px-5 py-6 lg:py-8 gap-6'>
          <div className='w-fit mx-auto md:mx-0'>
            <UnstyledLink
              href='/'
              className='flex flex-row items-center gap-2 md:gap-4'
            >
              <NextImage
                src='/images/logo.png'
                alt='logo'
                width='254'
                height='177'
                className='w-32 md:w-28'
              />
            </UnstyledLink>
          </div>
          <div className='flex flex-col md:flex-row justify-around gap-8 sm:gap-12'>
            {/* Booster Series */}
            <div className='w-full md:w-fit'>
              <h3 className='mb-6 text-lg font-semibold text-white'>
                Booster Series
              </h3>
              <div className='list flex flex-col gap-4'>
                <a
                  href='https://raihasa.myr.id/course/Booster-C'
                  target='_blank'
                  className='text-white no-underline flex items-center'
                >
                  CV Boost
                </a>
                <a
                  href='https://raihasa.myr.id/course/Booster-C'
                  target='_blank'
                  className='text-white no-underline flex items-center'
                >
                  Essay Boost
                </a>
                <a
                  href='https://raihasa.myr.id/course/booster-i'
                  target='_blank'
                  className='text-white no-underline flex items-center'
                >
                  Interview Boost
                </a>
              </div>
            </div>

            {/* Bimbingan Beasiswa */}
            <div className='w-full md:w-fit'>
              <h3 className='mb-6 text-lg font-semibold text-white'>
                Bimbingan Beasiswa
              </h3>
              <div className='list flex flex-col gap-4'>
                <a
                  href='https://raihasa.myr.id/bundling'
                  target='_blank'
                  className='text-white no-underline flex items-center'
                >
                  EKSPLORA Mini
                </a>
                <a
                  href='https://raihasa.myr.id/bundling'
                  target='_blank'
                  className='text-white no-underline flex items-center'
                >
                  EKSPLORA Lite
                </a>
                <a
                  href='https://raihasa.myr.id/bundling'
                  target='_blank'
                  className='text-white no-underline flex items-center'
                >
                  EKSPLORA Basic
                </a>
                <a
                  href='https://raihasa.myr.id/bundling'
                  target='_blank'
                  className='text-white no-underline flex items-center'
                >
                  EKSPLORA PLUS+
                </a>
              </div>
            </div>

            {/* Bantuan */}
            <div className='w-full md:w-fit'>
              <h3 className='mb-6 text-lg font-semibold text-white'>Bantuan</h3>
              <div className='list flex flex-col gap-4'>
                <a
                  href='#FAQ'
                  className='text-white no-underline flex items-center'
                >
                  FAQs
                </a>
              </div>
            </div>

            {/* Kantor & Hubungi kami */}
            <div className='flex flex-col gap-6 w-full md:w-fit'>
              <div>
                <h3 className='mb-4 text-lg font-semibold text-white'>
                  Kantor
                </h3>
                <p className='text-primary-white'>
                  Jl Raya ITS Sukolilo,
                  <br />
                  Keputih, Surabaya, Jawa
                  <br />
                  Timur 60117
                </p>
              </div>
              <div>
                <h3 className='mb-4 text-lg font-semibold text-white'>
                  Hubungi kami
                </h3>
                <a
                  href='https://www.instagram.com/raihasa.co/'
                  className='flex text-primary-white gap-2 cursor-pointer no-underline items-center'
                >
                  <FaInstagram size={20} />
                  <p>raihasa.co</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-primary-white' />
        <h3 className='text-primary-white text-center'>
          &copy; {new Date().getFullYear()} - Raih Asa. All Rights Reserved
        </h3>
      </div>
    </footer>
  );
}
