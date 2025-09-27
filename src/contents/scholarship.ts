import NextImage from 'next/image';

import { ExtractProps } from '@/types/helper';

export type scholarshipTypes = {
  id: number;
  slug: string;
  name: string;
  organizer: string;
  jenjang: string;
  tuition: number;
  image: ExtractProps<typeof NextImage>;
};

export const SCHOLARSHIP_DATA: scholarshipTypes[] = [
  {
    id: 1,
    slug: 'beasiswa-unggulan',
    name: 'Beasiswa Unggulan',
    organizer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.',
    jenjang: 'S1',
    tuition: 1400000,
    image: {
      src: '/images/scholarship-info/image.png',
      width: 293,
      height: 209,
      alt: 'Beasiswa Unggulan',
    },
  },
];
