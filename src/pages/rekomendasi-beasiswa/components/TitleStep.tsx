import Typography from '@/components/Typography';

interface titleStepProps {
  title: string;
  description?: string;
}

export default function TitleStep({ title, description }: titleStepProps) {
  return (
    <div className='flex flex-col gap-3'>
      <Typography
        className='!text-balance text-[#FB991A] text-[28px] md:text-[36px] lg:text-[48px]'
        weight='bold'
      >
        {title}
      </Typography>
      <Typography className='!text-balance text-[#1B7691] text-[16px] md:text-[20px]'>
        {description}
      </Typography>
    </div>
  );
}
