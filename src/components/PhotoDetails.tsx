import React from 'react';

import NextImage from '@/components/NextImage';

interface PhotoDetailsProps {
  src: string;
  alt: string;
}

export default function PhotoDetails({ src, alt }: PhotoDetailsProps) {
  return (
    <div className='mx-auto max-h-[600px] w-[800px] overflow-hidden bg-white'>
      <div className='float-left h-[600px] w-[600px]'>
        <NextImage
          src={src}
          width={600}
          height={600}
          alt={alt}
          className='h-[750px] w-[750px] object-cover'
        />
      </div>
    </div>
  );
}
