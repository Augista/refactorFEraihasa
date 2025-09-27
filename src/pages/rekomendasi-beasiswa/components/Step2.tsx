'use client';
import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowRightLong } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import Typography from '@/components/Typography';
import { StepProps } from '@/types/form/helper';

import TitleStep from './TitleStep';

export default function Step2({ onNext, onBack }: StepProps) {
  const { watch, setValue, register, unregister } = useFormContext();

  const tanggal = watch('tanggal');
  const bulan = watch('bulan');
  const tahun = watch('tahun');
  const bod = watch('bod');

  useEffect(() => {
    if (bod && typeof bod === 'string') {
      const parts = bod.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];

        if (!watch('tahun')) {
          setValue('tahun', year);
        }
        if (!watch('bulan')) {
          setValue('bulan', String(Number(month)));
        }
        if (!watch('tanggal')) {
          setValue('tanggal', String(Number(day)));
        }
      }
    }
  }, [bod, setValue, watch]);

  useEffect(() => {
    if (tanggal && bulan && tahun) {
      const formattedDate = `${tahun}-${bulan.padStart(2, '0')}-${tanggal
        .toString()
        .padStart(2, '0')}`;
      setValue('bod', formattedDate);
    }
  }, [tanggal, bulan, tahun, setValue]);

  const handleNext = useCallback(() => {
    unregister('tanggal');
    unregister('bulan');
    unregister('tahun');
    if (onNext) {
      onNext();
    }
  }, [unregister, onNext]);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col gap-16 items-center justify-center max-w-[898px] text-center'>
        <div className='flex flex-col md:gap-4'>
          <TitleStep
            title='Kapan kamu lahir?'
            description='Siapa tahu, kesempatan beasiswa menunggumu di tahun ini!'
          />
          <div className='flex space-x-1 flex-1 mt-16 md:mt-0'>
            <Typography
              font='inter'
              variant='c1'
              weight='semibold'
              className='text-sm'
            >
              Pilih tanggal lahirmu
            </Typography>
            <Typography className='text-red'>*</Typography>
          </div>
          <div className='flex flex-col md:flex-row gap-3 w-full'>
            <div className='w-full md:w-1/3'>
              <SelectInput
                {...register('tanggal')}
                name='tanggal'
                id='tanggal'
                placeholder='Tanggal'
                className='py-3 w-full'
                validation={{ required: 'Tanggal harus diisi' }}
              >
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </SelectInput>
            </div>

            <div className='flex flex-row gap-3 w-full md:w-2/3'>
              <SelectInput
                {...register('bulan')}
                name='bulan'
                id='bulan'
                placeholder='Bulan'
                className='py-3 md:flex-1 w-full'
                validation={{ required: 'Bulan harus diisi' }}
              >
                <option value='1'>Januari</option>
                <option value='2'>Februari</option>
                <option value='3'>Maret</option>
                <option value='4'>April</option>
                <option value='5'>Mei</option>
                <option value='6'>Juni</option>
                <option value='7'>Juli</option>
                <option value='8'>Agustus</option>
                <option value='9'>September</option>
                <option value='10'>Oktober</option>
                <option value='11'>November</option>
                <option value='12'>Desember</option>
              </SelectInput>

              <Input
                {...register('tahun')}
                name='tahun'
                id='tahun'
                placeholder='Tahun'
                type='number'
                className='py-3 md:flex-1 w-full'
                validation={{
                  required: 'Tahun harus diisi',
                  min: {
                    value: 1900,
                    message: 'Tahun tidak boleh kurang dari 1900',
                  },
                  max: {
                    value: new Date().getFullYear(),
                    message: `Tahun tidak boleh lebih dari ${new Date().getFullYear()}`,
                  },
                }}
              />
            </div>
          </div>

          {/* Hidden input untuk store "bod" */}
          <input type='hidden' {...register('bod')} />
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
            disabled={!tanggal || !bulan || !tahun}
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
