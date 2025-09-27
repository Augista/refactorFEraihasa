import { Button, cn, Divider } from '@heroui/react';
import { useState } from 'react';

import Typography from '@/components/Typography';

export default function NavDetailJourney({
  name,
  deskripsi,
}: {
  name: string | undefined;
  deskripsi: string | undefined;
}) {
  const [selectedDetail, setSelectedDetail] = useState('overview');
  return (
    <div className='flex flex-col'>
      <nav className='flex gap-3 py-3.5'>
        <Button
          variant='light'
          className={cn(
            'text-base font-medium',
            selectedDetail == 'overview' && 'font-bold text-[#FB991A]'
          )}
          onClick={() => {
            setSelectedDetail('overview');
          }}
        >
          Overview
        </Button>
        <Button
          variant='light'
          className={cn(
            'text-base font-medium',
            selectedDetail == 'notes' && 'font-bold text-[#FB991A]'
          )}
          onClick={() => {
            setSelectedDetail('notes');
          }}
        >
          Notes
        </Button>
      </nav>
      <Divider />
      {selectedDetail == 'overview' && (
        <div className='flex flex-col mt-4 gap-2'>
          <Typography
            variant='h6'
            className='font-bold text-[#1B7691] text-3xl'
          >
            {name}
          </Typography>
          <Typography className='text-base'>{deskripsi}</Typography>
        </div>
      )}
    </div>
  );
}
