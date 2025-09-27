import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowRightLong } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import Typography from '@/components/Typography';
import { StepProps } from '@/types/form/helper';

import TitleStep from './TitleStep';

export default function Step4({ onNext, onBack }: StepProps) {
  const { watch, setValue, register, unregister } = useFormContext();

  const kodePos = watch('kodePos');
  const kota = watch('kota');
  const kecamatan = watch('kecamatan');
  const alamatLengkap = watch('alamatLengkap');
  const alamatValue = watch('alamat');

  useEffect(() => {
    if (alamatValue && typeof alamatValue === 'string') {
      const parts = alamatValue.split(', ');
      if (parts.length === 4) {
        const parsedAlamatLengkap = parts[0];
        const parsedKecamatan = parts[1];
        const parsedKota = parts[2];
        const parsedKodePos = parts[3];

        if (!watch('alamatLengkap')) {
          setValue('alamatLengkap', parsedAlamatLengkap);
        }
        if (!watch('kecamatan')) {
          setValue('kecamatan', parsedKecamatan);
        }
        if (!watch('kota')) {
          setValue('kota', parsedKota);
        }
        if (!watch('kodePos')) {
          setValue('kodePos', parsedKodePos);
        }
      }
    }
  }, [alamatValue, setValue, watch]);

  useEffect(() => {
    if (kodePos && kota && kecamatan && alamatLengkap) {
      const fullAddress = `${alamatLengkap}, ${kecamatan}, ${kota}, ${kodePos}`;
      setValue('alamat', fullAddress);
    }
  }, [kodePos, kota, kecamatan, alamatLengkap, setValue]);

  const handleNext = useCallback(() => {
    unregister('kodePos');
    unregister('kota');
    unregister('kecamatan');
    unregister('alamatLengkap');
    if (onNext) {
      onNext();
    }
  }, [unregister, onNext]);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col gap-16 items-center justify-center max-w-[898px] text-center'>
        <div className='flex flex-col md:gap-4 items-center justify-center'>
          <TitleStep
            title='Dimana sih tempat tinggalmu sekarang?'
            description='Siapa tahu, ada beasiswa khusus di kotamu!'
          />
          <div className='flex flex-col md:flex-row gap-3 md:gap-8 w-full max-w-[668px]'>
            <Input
              {...register('kodePos')}
              id='kodePos'
              label='Kode Pos'
              placeholder='Masukkan kode pos tempat tinggal kamu'
              type='text'
              validation={{
                required: 'Kode Pos harus diisi',
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: 'Kode pos harus terdiri dari 5 digit angka',
                },
              }}
            />
            <Input
              {...register('kota')}
              id='kota'
              label='Kota'
              type='text'
              placeholder='Masukkan kota domisili kamu'
              validation={{ required: 'Kota domisili harus diisi' }}
            />
          </div>
          <div className='flex flex-col md:flex-row gap-3 md:gap-8 w-full max-w-[668px]'>
            <Input
              {...register('kecamatan')}
              id='kecamatan'
              label='Kecamatan'
              placeholder='Masukkan kecamatan tempat tinggal kamu'
              validation={{ required: 'Kecamatan harus diisi' }}
            />
            <Input
              {...register('alamatLengkap')}
              id='alamatLengkap'
              label='Alamat'
              placeholder='Masukkan alamat kamu'
              validation={{ required: 'Alamat harus diisi' }}
            />
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row gap-4 items-center justify-center w-full '>
          <Button
            className='w-full rounded-[12px] md:w-[200px] max-h-[44px] text-[16px] py-[12px] px-6 font-semibold text-primary-blue hover:text-primary-blue active:text-primary-blue hover:border-primary-blue hover:bg-primary-blue/10 active:border-primary-blue active:bg-primary-blue/20 border-2 border-[#D4D4D8]'
            variant='unstyled'
            onClick={onBack}
          >
            Kembali
          </Button>
          <Button
            onClick={handleNext}
            className='w-full rounded-[12px] md:w-[200px] flex gap-2 items-center justify-center py-[12px] px-6 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={!kodePos || !kota || !kecamatan || !alamatLengkap}
          >
            <Typography
              className='flex gap-2 items-center text-[16px] font-semibold'
              variant='bt'
            >
              Berikutnya
              <FaArrowRightLong />
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}
