import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import SEO from '@/components/SEO';
import { showToast, SUCCESS_TOAST } from '@/components/Toast';
import { PRODUCT_CARD_DATA } from '@/contents/product';
import Layout from '@/layouts/Layout';
import Custom404 from '@/pages/404.page';

export default withAuth(CheckoutProduct, 'user');

function CheckoutProduct() {
  const router = useRouter();
  const { slug } = router.query;

  const [count, setCount] = React.useState<number>(1);
  const [paymentState, setPaymentState] = React.useState<'checkout' | 'pay'>(
    'checkout'
  );

  const product = PRODUCT_CARD_DATA.find((data) => data.slug === slug);

  if (!product) {
    return <Custom404 />;
  }

  return (
    <Layout withFooter={true} withNavbar={true}>
      <SEO title={`Checkout ${product.title}`} />
      <main className='bg-gradient-to-b to-primary-bluegreen via-primary-orange from-primary-light min-h-screen w-full flex flex-col justify-center items-center'>
        <section className='w-3/4 mx-auto my-24 bg-white flex flex-col gap-8 px-4 py-12 md:px-12 rounded-2xl drop-shadow-lg'>
          {paymentState === 'checkout' ? (
            <>
              <div className='flex flex-col lg:flex-row gap-6 w-full justify-center'>
                <div className='flex flex-col w-full lg:w-1/3'>
                  <div className='flex flex-col items-center justify-center'>
                    <NextImage
                      src='/images/logo.png'
                      alt='logo'
                      width={254}
                      height={177}
                      className='w-1/5 lg:w-1/3'
                    />
                  </div>
                  <div className='flex flex-col w-full px-4 py-8 items-center justify-between gap-[52px] bg-primary-white rounded-2xl'>
                    <div className='flex flex-col items-center gap-6 self-stretch'>
                      <div
                        className={`${product.color2} flex items-center gap-3 self-stretch rounded-[8px]`}
                      >
                        <div
                          className={`${product.color} flex w-12 h-[74px] p-[10px] justify-center items-center gap-[10px] rounded-[8px]`}
                        >
                          <product.icon className='w-10 h-10 text-white' />
                        </div>
                        <div className='text-darkslategray text-[16px] font-[700] tracking-[2px] leading-6'>
                          {product.title}
                        </div>
                      </div>
                      <div className='text-[14px] font-[400] tracking-[1px] leading-6 text-justify'>
                        {product.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-full lg:w-2/3 gap-8'>
                  <h4 className='text-center text-2xl font-bold leading-[40px] font-primary'>
                    Rincian Pembayaran
                  </h4>
                  <div className='flex flex-col gap-5'>
                    <div className='bg-primary-light rounded-xl py-6 px-8 flex flex-row justify-between items-center'>
                      <div className='flex flex-col'>
                        <p className='font-primary font-bold text-lg leading-8'>
                          {product.title}
                        </p>
                        <p className='font-primary font-regular text-sm leading-6'>
                          {count} kali
                        </p>
                        <p className='font-primary font-medium text-base leading-6'>
                          {(product.price * count).toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                          })}
                        </p>
                      </div>
                      <div className='flex flex-row h-10 w-fit rounded-lg relative bg-transparent'>
                        <button
                          onClick={() => setCount(Math.max(1, count - 1))}
                          className='bg-white text-black-200 h-full w-10 rounded-l-lg cursor-pointer outline-none'
                        >
                          <span className='text-2xl font-normal'>-</span>
                        </button>
                        <span className='text-center px-1.5 bg-white font-semibold text-md flex items-center text-black-200'>
                          {count}
                        </span>
                        <button
                          onClick={() => setCount(count + 1)}
                          className='bg-white text-black-200 h-full w-10 rounded-r-lg cursor-pointer outline-none'
                        >
                          <span className='text-2xl font-normal'>+</span>
                        </button>
                      </div>
                    </div>
                    <div className='bg-primary-light rounded-xl py-6 px-8 flex flex-row justify-end items-center'>
                      <div className='flex flex-col text-right'>
                        <p className='font-primary font-bold text-base leading-8'>
                          Total Bayar
                        </p>
                        <p className='font-primary font-medium text-2xl leading-6'>
                          {(product.price * count).toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col-reverse md:flex-row gap-6 justify-between'>
                <Button
                  className='text-base font-semibold font-primary text-primary-white flex w-full md:w-52 px-10 py-2 h-[50px] rounded-[20px] justify-center items-center bg-primary-bluegreen border-[2px] border-primary-bluegreen'
                  onClick={() => router.push(`/product/${slug}`)}
                >
                  Kembali
                </Button>
                <Button
                  className='text-base font-semibold font-primary text-primary-light flex w-full md:w-52 px-10 py-2 h-[50px] rounded-[20px] justify-center items-center bg-primary-orange'
                  onClick={() => setPaymentState('pay')}
                >
                  Beli Paket
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className='flex flex-col items-center justify-center'>
                <NextImage
                  src='/images/logo.png'
                  alt='logo'
                  width={254}
                  height={177}
                  className='w-1/12'
                />
              </div>
              <div className='flex flex-col gap-6'>
                <p className='text-2xl font-primary font-medium leading-7 text-red'>
                  <span className='text-primary-bluegreen'>Total:</span>{' '}
                  {product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </p>
                <p className='text-base font-primary font-medium leading-6'>
                  Silahkan melakukan pembayaran pada salah satu rekening di
                  bawah ini :
                </p>
                <div className='flex flex-col gap-1'>
                  <p className='text-base font-primary font-medium leading-6'>
                    BNI : 00000000000
                  </p>
                  <p className='text-base font-primary font-medium leading-6'>
                    MANDIRI : 00000000000000
                  </p>
                  <p className='text-base font-primary font-medium leading-6'>
                    BCA : 00000000000
                  </p>
                </div>
                <p className='text-base font-primary font-medium leading-6'>
                  Jika sudah, silahkan upload bukti pembayaran pada link berikut
                  ini ya,{' '}
                  <Link
                    className='text-base font-primary font-medium leading-6 text-primary-bluegreen'
                    href='https://docs.google.com/forms/'
                  >
                    link form pembayaran
                  </Link>
                </p>
              </div>
              <div className='flex justify-end'>
                <Button
                  className='text-base font-semibold font-primary text-primary-light flex w-[200px] mx-3 px-10 py-2 h-[50px] rounded-[20px] justify-center items-center bg-primary-orange'
                  onClick={() => {
                    showToast('Produk berhasil dibeli', SUCCESS_TOAST);
                    router.push('/');
                  }}
                >
                  Selesai
                </Button>
              </div>
            </>
          )}
        </section>
      </main>
    </Layout>
  );
}
