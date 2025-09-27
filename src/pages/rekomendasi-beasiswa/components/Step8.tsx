import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowRightLong } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import SelectInput from '@/components/form/SelectInput';
import Typography from '@/components/Typography';
import { useGetJurusanByFakultasId } from '@/pages/rekomendasi-beasiswa/_hooks/@get/useGetFakultas';
import TitleStep from '@/pages/rekomendasi-beasiswa/components/TitleStep';
import { StepProps } from '@/types/form/helper';

type Step8Props = {
  facultyId: string | number; // Assuming facultyId can be string or number
} & StepProps;

export default function Step8({ onNext, onBack, facultyId }: Step8Props) {
  const { data } = useGetJurusanByFakultasId(facultyId);
  const { watch } = useFormContext();
  const majorId = watch('major_id');

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col gap-16 items-center justify-center max-w-[898px] text-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <TitleStep
            title='Apa jurusan kamu sekarang?'
            description='Yuk, kasih tahu biar kita bisa filter beasiswa yang paling cocok.'
          />

          <div className='max-w-[668px] w-full'>
            <SelectInput
              id='major_id'
              label='Jurusan'
              placeholder='Masukkan jurusan kamu saat ini'
              className='w-full'
              validation={{ required: 'Jurusan harus diisi' }}
            >
              {data?.map((jurusan) => (
                <option key={jurusan.id} value={jurusan.id}>
                  {jurusan.major_name}
                </option>
              ))}
            </SelectInput>
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
            onClick={onNext}
            disabled={!majorId}
            className='w-full rounded-[12px] md:w-[200px] flex gap-2 items-center justify-center py-[12px] px-6 disabled:opacity-50 disabled:cursor-not-allowed'
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
