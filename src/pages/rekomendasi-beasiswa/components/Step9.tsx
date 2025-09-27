import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowRightLong } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import Typography from '@/components/Typography';
import TitleStep from '@/pages/rekomendasi-beasiswa/components/TitleStep';
import { StepProps } from '@/types/form/helper';

export default function Step9({ onNext, onBack }: StepProps) {
  const { watch, setValue, register } = useFormContext();
  const ipk = watch('ipk');

  const handleIpkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Validasi input hanya angka dan titik (format float)
    const floatRegex = /^(\d+)?\.?(\d{0,2})?$/;

    // Jika input kosong atau sesuai dengan pola angka float, update nilai
    if (value === '' || floatRegex.test(value)) {
      // Validasi tambahan untuk memastikan nilai tidak melebihi 4.00
      if (value === '' || parseFloat(value) <= 4.0) {
        setValue('ipk', value);
      }
    }
  };

  // Validasi nilai IPK saat submit
  const validateIpk = (value: string) => {
    if (!value) return 'IPK harus diisi';

    const numValue = parseFloat(value);
    if (isNaN(numValue)) return 'IPK harus berupa angka';
    if (numValue < 0) return 'IPK tidak boleh kurang dari 0';
    if (numValue > 4) return 'IPK tidak boleh lebih dari 4.00';

    return true;
  };

  // Handle submit dengan konversi nilai ke float
  const handleSubmit = () => {
    if (ipk) {
      // Convert ipk to float before submitting
      setValue('ipk', parseFloat(ipk), { shouldDirty: true });
      if (onNext) {
        onNext();
      }
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col gap-16 items-center justify-center max-w-[898px] text-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <TitleStep
            title='IPK-mu berapa sekarang?'
            description='Tenang, ini rahasia kok. Biar kita bisa pilihkan beasiswa yang tepat buat kamu!'
          />

          <Input
            id='ipk'
            label='IPK'
            placeholder='Contoh: 3.50'
            divClassName='max-w-[668px]'
            {...register('ipk', {
              required: 'IPK harus diisi',
              validate: validateIpk,
              pattern: {
                value: /^\d*\.?\d{0,2}$/,
                message: 'Format IPK tidak valid',
              },
            })}
            value={ipk || ''}
            onChange={handleIpkChange}
            helperText='Masukkan IPK dengan format angka desimal (Maks: 4.00)'
            type='text' // Menggunakan text, bukan number, untuk kontrol presisi desimal
          />
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
            onClick={handleSubmit}
            className='w-full rounded-[12px] md:w-[200px] flex gap-2 items-center justify-center py-[12px] px-6 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={!ipk}
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
