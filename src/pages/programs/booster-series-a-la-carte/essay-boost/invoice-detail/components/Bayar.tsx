import { useMutation } from '@tanstack/react-query';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FaRegCopy } from 'react-icons/fa';
import { FaArrowLeft, FaCircleExclamation } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import FileInput from '@/components/form/FileInput';
import SEO from '@/components/SEO';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import useMutationToast from '@/hooks/useMutationToast';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import { PaketProps } from '@/pages/programs/booster-series-a-la-carte/cv-boost/invoice-detail/index.page';

type PaymentForm = {
  file: string;
  bukti_tf: string;
};

type BayarProps = {
  PrevPage: () => void;
  paket?: PaketProps;
};

export default function Bayar({ PrevPage, paket }: BayarProps) {
  const rekMandiri = '1822718328';

  const router = useRouter();

  const { mutate } = useMutationToast<void, PaymentForm>(
    useMutation({
      mutationFn: async (data) => {
        await api.post('/booster/essay/buy', data);
      },
      onSuccess: () => {
        showToast('Pembayaran berhasil!', SUCCESS_TOAST);
        router.push('/programs/booster-series-a-la-carte/complete');
      },
      onError: (error) => {
        showToast(`${error.message}`, DANGER_TOAST);
      },
    })
  );

  const methods = useForm<PaymentForm>({
    mode: 'onTouched',
  });

  const { handleSubmit } = methods;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(rekMandiri);
      showToast('Rekening berhasil dicopy!', SUCCESS_TOAST);
    } catch (err) {
      showToast('Gagal menyalin rekening!', DANGER_TOAST);
    }
  };

  const onSubmit: SubmitHandler<PaymentForm> = (data) => {
    const payload = {
      bukti_tf: data.bukti_tf,
      file: data.file,
      product_id: paket?.id,
    };

    mutate(payload);
  };

  return (
    <Layout withNavbar={true} withFooter={true}>
      <SEO title='Payment Page' />
      <main className='scroll-smooth overflow-hidden bg-gradient-to-t from-[#E47F1A] to-[#FB991A]'>
        <section className='min-h-screen mt-40 '>
          <div className='header grid grid-cols-4 md:grid-cols-3 items-center px-8 pb-11 xl:px-24 lg:pb-32'>
            <div className=''>
              <IconButton
                icon={FaArrowLeft}
                onClick={PrevPage}
                className='p-2 md:p-3 border-none !rounded-full text-white bg-[#1B7691] hover:bg-[#32abd0]'
              />
            </div>
            <div className='bg-[#1B7691] py-2 md:px-8 col-span-2 md:col-span-1 text-center'>
              <Typography
                variant='h5'
                className='text-base md:text-lg lg:!text-[32px]  font-semibold !text-white text-shadow-lg md:py-4 '
              >
                Pembayaran
              </Typography>
            </div>
            <div className=''></div>
          </div>
          <div className='bg-[#E4E4E7] relative min-h-screen pb-24 lg:pb-0 px-12 lg:px-24 flex flex-col xl:flex-row gap-4 xl:gap-12 z-20'>
            <div className='items flex-grow'>
              <div className='rounded-lg mt-6 xl:mt-0 pb-16 p-8 flex flex-col gap-4 xl:gap-8 xl:-translate-y-[83px] bg-white'>
                <Typography variant='h5' weight='bold' className='text-base'>
                  Pilihan Nomor Rekening
                </Typography>
                <Typography className='max-w-3xl text-[#4C4E60] md:text-base text-xs'>
                  Silakan melakukan pembayaran melalui salah satu rekening{' '}
                  <br className='hidden md:block' /> di bawah ini :
                </Typography>
                <hr />
                <div className='flex flex-col gap-[6px] md:gap-3'>
                  <NextImage
                    src={'/images/checkout/bni.png'}
                    width={100}
                    height={28}
                    alt='Bank BNI'
                    className='px-2.5 py-1'
                  />
                  <div className='bg-[#E4E4E7] px-6 py-3 flex justify-between rounded-xl'>
                    <div className='flex flex-col gap-1'>
                      <Typography
                        variant='p'
                        weight='medium'
                        className='text-[8px] md:text-base text-[#666776]'
                      >
                        ANIS AUFAR MAKARIM
                      </Typography>
                      <Typography
                        variant='p'
                        weight='medium'
                        className='text-[9px] md:text-lg text-[#666776]'
                      >
                        {rekMandiri}
                      </Typography>
                    </div>
                    <Button
                      className='flex justify-center bg-transparent text-[#7C7D8A]'
                      onClick={copyToClipboard}
                    >
                      <FaRegCopy />
                    </Button>
                  </div>
                  <div className='bg-[#E4E4E7] mt-2 md:mt-6 px-6 py-3 flex gap-5 items-center rounded-xl'>
                    <FaCircleExclamation />
                    <Typography
                      variant='p'
                      className='text-[9px] md:!text-base'
                    >
                      Untuk metode pembayaran lainnya akan segera{' '}
                      <br className='hidden md:block' /> hadir
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className='details flex-grow'>
              <div className='rounded-lg p-8 flex flex-col gap-8 xl:-translate-y-[83px] bg-white'>
                <div className='flex flex-col gap-[6px]'>
                  <Typography
                    variant='t'
                    weight='bold'
                    className='text-sm md:text-xl'
                  >
                    Total Pembayaran
                  </Typography>
                  <Typography
                    variant='t'
                    weight='medium'
                    className='text-lg md:text-[28px] text-[#E62A3A]'
                  >
                    Rp{paket?.harga.toLocaleString('id-ID')}
                  </Typography>
                </div>
                <hr />
                <div className='flex flex-col gap-3'>
                  {/* <Typography
                    variant='p'
                    weight='semibold'
                    className=''
                  >
                    Upload Bukti Transfer{' '}
                    <sup className=' text-[#FF4D4D]'>*</sup>
                  </Typography> */}
                  <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                      <div className='flex flex-col gap-4 md:gap-6'>
                        <FileInput
                          id='file'
                          label='Upload Essay'
                          validation={{ required: 'CV must be filled' }}
                          accept={{
                            'application/pdf': ['.pdf'],
                          }}
                          helperText='Ukuran maksimal file 10 Mb dengan format .pdf'
                        />
                        <FileInput
                          id='bukti_tf'
                          label='Upload Bukti Transfer'
                          validation={{
                            required: 'Bukti Transfer must be filled',
                          }}
                          accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                          helperText='Ukuran maksimal file 10 Mb dengan format .jpg dan .png'
                        />
                      </div>
                      <Button
                        type='submit'
                        variant='primary'
                        size='base'
                        className='w-full bg-primary-blue mt-12'
                      >
                        <Typography
                          variant='t'
                          weight='regular'
                          className='py-1 '
                        >
                          Konfirmasi Pembayaran
                        </Typography>
                      </Button>
                    </form>
                  </FormProvider>
                </div>
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
