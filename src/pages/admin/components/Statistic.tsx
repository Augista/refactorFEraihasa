import { IconType } from 'react-icons';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type StatisticProps = {
  title: string;
  value: number | string;
  icon: IconType;
  textClassName?: string;
  iconClassName?: string;
};

export default function Statistic({
  title,
  value,
  icon: Icon,
  textClassName,
  iconClassName,
}: StatisticProps) {
  return (
    <div className='flex items-center justify-center gap-5'>
      <div
        className={clsxm(
          'w-14 h-14 rounded-full flex items-center justify-center',
          iconClassName
        )}
      >
        <Icon className='text-white w-10 h-10' />
      </div>
      <div>
        <Typography
          as='h4'
          variant='t'
          weight='medium'
          className={clsxm(textClassName)}
        >
          {title}
        </Typography>
        <Typography variant='h6' weight='bold' className={clsxm(textClassName)}>
          {value}
        </Typography>
      </div>
    </div>
  );
}
