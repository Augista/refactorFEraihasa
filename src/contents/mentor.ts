import NextImage from 'next/image';

import { ExtractProps } from '@/types/helper';

type mentor = {
  image: ExtractProps<typeof NextImage>;
  awardee: string;
};

export const MENTOR: mentor[] = [
  {
    image: {
      src: '/images/mentor/mentor/mentor-1.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'KSE',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-2.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-3.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Djarum',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-4.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-5.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-6.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-7.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-8.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'BSI',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-9.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-10.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'BSI',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-11.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-12.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
  {
    image: {
      src: '/images/mentor/mentor/mentor-13.png',
      alt: 'mentor',
      width: 192,
      height: 250,
    },
    awardee: 'Unggulan',
  },
];
