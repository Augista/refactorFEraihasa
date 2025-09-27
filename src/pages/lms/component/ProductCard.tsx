import { Button, Chip } from '@heroui/react';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';

export default function ProductCard({
  key,
  name,
  harga,
  harga_diskon,
  deskripsi,
  ...props
}: {
  key: number;
  name: string;
  harga: string | number;
  harga_diskon: string | number;
  deskripsi: string;
}) {
  return (
    <div className='relative' key={key} {...props}>
      {harga_diskon === 0 && (
        <Chip
          radius='sm'
          size='lg'
          color='warning'
          className='font-semibold text-white absolute right-0 translate-x-5 -translate-y-1/2 text-xl'
        >
          30% Off
        </Chip>
      )}
      <div className='flex flex-col bg-white p-6 pt-12 items-center text-center rounded-xl shadow-[0_5px_24px_0_rgba(0,0,0,0.15)] gap-6'>
        <div className='flex flex-col gap-3'>
          <Typography variant='h6' className=' font-semibold text-[#FB991A]'>
            {name}
          </Typography>
          <Typography variant='t' className='text-xl text-[#7C7D8A]'>
            {deskripsi}
          </Typography>
        </div>
        <div className='flex flex-col gap-2'>
          <Typography
            variant='t'
            className=' line-through decoration-red text-[#7C7D8A] font-medium'
          >
            {harga}
          </Typography>
          <Typography variant='h5' className='text-[#FB991A] font-bold'>
            {harga_diskon}
          </Typography>
        </div>
        <UnstyledLink
          href='/programs/lms/invoice-detail'
          className='flex flex-col'
        >
          <Button
            color='warning'
            className='text-white font-semibold text-base'
            fullWidth
          >
            Pilih Paket Ini
          </Button>
        </UnstyledLink>
      </div>
    </div>
  );
}
