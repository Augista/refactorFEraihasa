import NextImage from 'next/image';
import Link from 'next/link';
import React from 'react';

import SEO from '@/components/SEO';
import { PRODUCT_CARD_DATA } from '@/contents/product';
import Layout from '@/layouts/Layout';

export default function ProductPageIndex() {
  return (
    <Layout withFooter={true} withNavbar={true}>
      <SEO title='Our Product' />
      <main>
        <section className='flex flex-col w-11/12 md:w-10/12 mx-auto'>
          <div className='flex flex-row w-full h-auto py-12'>
            <div className='flex flex-col basis-2/5 justify-center items-center p-4 md:p-8'>
              <div className='flex flex-col text-[72px] max-md:text-[20px] font-[700]'>
                <div className='flex text-primary-bluegreen'>
                  Jangan biarkan
                </div>
                <div className='flex text-primary-orange'>kesempatanmu</div>
                <div className='flex text-primary-bluegreen'>terlewat!</div>
                <div className='max-md:text-[10px] text-[16px] font-normal'>
                  Lorem ipsum dolor sit amet consectetur. Enim quis in metus
                  vulputate dictumst
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center p-8 basis-3/5'>
              <div>
                <NextImage
                  src='/images/product/hero.png'
                  width={302}
                  height={296}
                  alt='Orang'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-fit relative'>
          <div className='relative'>
            <div className='absolute t-0 w-full bg-primary-white h-[37px] rounded-b-full z-10'></div>
          </div>
          <div className='relative h-auto py-20 flex flex-col w-full bg-primary-bluegreen justify-center items-center gap-[72px] mb-[93px]'>
            <div className='w-full absolute'>
              <NextImage
                src='/images/background.png'
                width={1440}
                height={1036}
                alt='background'
                className='w-full'
              />
            </div>
            <div className='relative z-10 flex flex-col w-11/12 md:w-10/12 mx-auto gap-8'>
              <p className='text-[56px] max-md:text-[29px] font-[700] text-primary-light leading-[72px] text-center'>
                Segera Daftarkan Dirimu!
              </p>
              <div className='flex flex-row justify-around gap-4 flex-wrap'>
                {PRODUCT_CARD_DATA.map((card, index) => {
                  return (
                    <div
                      key={index}
                      className='flex flex-col w-[280px] px-4 py-8 items-center justify-between gap-[52px] bg-primary-white rounded-[16px] shadow-md'
                    >
                      <div className='flex flex-col items-center gap-6 self-stretch'>
                        <div
                          className={`${card.color2} flex items-center gap-3 self-stretch rounded-[8px]`}
                        >
                          <div
                            className={`${card.color} flex w-12 h-[74px] p-[10px] justify-center items-center gap-[10px] rounded-[8px]`}
                          >
                            <card.icon className='w-10 h-10 text-white' />
                          </div>
                          <div className='text-darkslategray text-[16px] font-[700] tracking-[2px] leading-6'>
                            {card.title}
                          </div>
                        </div>
                        <div className='text-black-100 text-center text-[24px] font-[700]'>
                          {card.price.toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                          })}
                        </div>
                        <div className='text-[14px] font-[400] tracking-[1px] leading-6'>
                          {card.description}
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        <div className='flex mb-2'>
                          <Link
                            className='text-[16px] font-[700] text-[#F5F5F5] flex w-[200px] mx-3 px-[40px] py-2 h-[50px] rounded-[20px] justify-center items-center bg-primary-orange'
                            href={card.link_buy}
                          >
                            Beli Paket
                          </Link>
                        </div>
                        <div className='flex'>
                          <Link
                            className='text-[16px] font-[700] text-primary-bluegreen flex w-[200px] mx-3 px-[40px] py-2 h-[50px] rounded-[20px] justify-center items-center bg-primary-white border-[2px] border-primary-bluegreen'
                            href={card.link_detail}
                          >
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='absolute bottom-0 w-full bg-primary-white h-[37px] rounded-t-full z-20'></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
