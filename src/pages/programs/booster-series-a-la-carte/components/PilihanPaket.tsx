import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type PilihanPaketProps = {
  isActive: boolean;
  title: string;
  description: string;
  originalPrice: string;
  // discountedPrice?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function PilihanPaket({
  isActive,
  title,
  description,
  originalPrice,
  // discountedPrice,
  ...rest
}: PilihanPaketProps) {
  return (
    <div
      className={clsxm(
        'flex gap-2.5 sm:gap-4 px-2.5 sm:px-5 py-3 rounded-md items-center hover:cursor-pointer',
        isActive ? 'bg-primary-orange' : 'ring-2 ring-primary-orange'
      )}
      {...rest}
    >
      <div>
        <div
          className={clsxm(
            'w-7 h-7 rounded-full',
            isActive ? 'border-[6px] border-white' : 'border-2 border-[#E4E4E7]'
          )}
        />
      </div>
      <div>
        <Typography
          as='h6'
          variant='btn'
          weight='bold'
          className={clsxm(
            'text-sm',
            isActive ? 'text-white' : 'text-primary-orange'
          )}
        >
          {title}
        </Typography>
        <Typography
          variant='c2'
          weight='medium'
          className={clsxm(
            'text-xs',
            isActive ? 'text-white' : 'text-[#4C4E60]'
          )}
        >
          {description}
        </Typography>
      </div>
      <div className='flex flex-col gap-0.5'>
        {/* {discountedPrice && (
          <Typography
            variant='c1'
            weight='bold'
            className={clsxm(
              'strikethrough text-sm',
              isActive ? 'text-white' : 'text-primary-orange'
            )}
          >
            {originalPrice}
          </Typography>
        )} */}
        <Typography
          variant='c1'
          weight='bold'
          className={clsxm(
            'text-sm',
            isActive ? 'text-white' : 'text-primary-orange'
          )}
        >
          {originalPrice}
        </Typography>
      </div>
    </div>
  );
}
