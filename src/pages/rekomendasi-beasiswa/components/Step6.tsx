import { useFormContext } from 'react-hook-form';
import { FaArrowRightLong } from 'react-icons/fa6';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import Typography from '@/components/Typography';
import { StepProps } from '@/types/form/helper';

import TitleStep from './TitleStep';

export default function Step6({ onNext, onBack }: StepProps) {
  const { watch, register, setValue } = useFormContext();
  const semester = watch('semester');

  // Handle input change to ensure numeric value
  const handleSemesterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numeric input
    if (value === '' || /^\d+$/.test(value)) {
      // Convert to number when setting the value
      setValue('semester', value === '' ? '' : parseInt(value, 10));
    }
  };

  // Handle form submission to ensure number is sent
  const handleNext = () => {
    if (semester) {
      // Ensure semester is converted to number before submission
      setValue('semester', parseInt(semester.toString(), 10), {
        shouldDirty: true,
      });
      if (onNext) {
        onNext();
      }
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col gap-16 items-center justify-center max-w-[898px] text-center'>
        <div className='flex flex-col md:gap-4 justify-center items-center'>
          <TitleStep
            title='Udah semester berapa, nih?'
            description='Semakin tinggi semester, semakin banyak peluang menantimu!'
          />
          <Input
            id='semester'
            label='Semester'
            type='number'
            placeholder='Masukkan semester kamu saat ini'
            divClassName='max-w-[668px]'
            {...register('semester', {
              required: 'Semester harus diisi',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Semester harus berupa angka',
              },
              max: {
                value: 14,
                message: 'Semester maksimal adalah 14',
              },
              min: {
                value: 1,
                message: 'Semester minimal adalah 1',
              },
            })}
            onChange={handleSemesterChange}
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
            onClick={handleNext}
            className='w-full rounded-[12px] md:w-[200px] flex gap-2 items-center justify-center py-[12px] px-6 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={
              !semester ||
              isNaN(Number(semester)) ||
              Number(semester) <= 0 ||
              Number(semester) > 14
            }
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
