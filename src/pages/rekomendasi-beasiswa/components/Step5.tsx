import { useFormContext } from 'react-hook-form';
import { FaArrowRightLong } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import Typography from '@/components/Typography';
import { StepProps } from '@/types/form/helper';

import TitleStep from './TitleStep';

export default function Step5({ onNext, onBack }: StepProps) {
  const { watch, register } = useFormContext();

  const education_level = watch('education_level');
  const institusi = watch('institusi');

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col gap-16 items-center justify-center max-w-[898px] text-center'>
        <div className='flex flex-col md:gap-4 items-center justify-center'>
          <TitleStep
            title='Sekarang kamu lagi sekolah atau kuliah di mana?'
            description='Yuk, tulis nama sekolah atau kampusmu. Siapa tahu, ada peluang spesial buat almamater kamu!'
          />
          <div className='flex flex-col gap-3 w-full max-w-[668px]'>
            <div className='flex space-x-1 flex-1 mt-10 md:mt-0'>
              <Typography
                font='inter'
                variant='c1'
                weight='semibold'
                className='text-sm'
              >
                Jenjang Pendidikan
              </Typography>
              <Typography className='text-red'>*</Typography>
            </div>
            <SelectInput
              {...register('education_level')}
              id='education_level'
              name='education_level'
              placeholder='Masukan jenjang pendidikan kamu saat ini'
              className='py-3 w-full'
            >
              <option value='SMA'>SMA</option>
              <option value='S1'>S1</option>
              <option value='S2'>S2</option>
              <option value='S3'>S3</option>
            </SelectInput>
          </div>
          <div className='flex flex-col gap-3 w-full max-w-[668px]'>
            <Input
              id='institusi'
              label='Institusi'
              type='text'
              placeholder='Masukkan Institusi kamu saat ini'
              divClassName='max-w-[668px]'
              {...register('institusi')}
              validation={{
                required: 'Institusi harus diisi',
              }}
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
            onClick={onNext}
            disabled={!education_level || !institusi}
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
