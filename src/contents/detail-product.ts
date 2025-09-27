import { TbCertificate } from 'react-icons/tb';

import { DetailProduct } from '@/types/entities/product';

export const DETAIL_PRODUCT: DetailProduct[] = [
  {
    id: 1,
    slug: 'scholarship-course',
    title: 'Scholarship Course',
    image: {
      src: '/images/product/detail/scholarship-course.png',
      alt: 'Scholarship Course',
      width: 1046,
      height: 320,
    },
    price: 299000,
    description:
      'Lorem ipsum dolor sit amet consectetur. Enim quis in metus vulputate dictumst nunc integer suspendisse a. Ipsum urna sed elementum augue sed nisl neque. Sapien tellus rutrum faucibus aliquam scelerisque aliquet vel mauris.',
    benefit: [
      {
        id: 1,
        title: 'Bersertifikat',
        description: 'Lorem ipsum dolor sit amet consectetur',
        icon: TbCertificate,
      },
    ],
    timeline: [
      {
        id: 1,
        date: '22 Sep 2023',
        title: 'CV dan Resume',
      },
      {
        id: 2,
        date: '30 Sep 2023',
        title: 'Webinar Class',
      },
      {
        id: 3,
        date: '2 Okt 2023',
        title: 'Motivation Letter',
      },
      {
        id: 4,
        date: '7 Okt 2023',
        title: 'Interview',
      },
    ],
    requirements: [
      {
        id: 1,
        title: 'Curriculum Vitae - Resume',
      },
      {
        id: 2,
        title: 'Motivation Letter',
      },
      {
        id: 3,
        title: 'Interview',
      },
    ],
  },
  {
    id: 2,
    slug: 'scholarship-webinar',
    title: 'Scholarship Webinar',
    image: {
      src: '/images/product/detail/scholarship-webinar.png',
      alt: 'Scholarship Webinar',
      width: 1046,
      height: 320,
    },
    price: 159000,
    description:
      'Lorem ipsum dolor sit amet consectetur. Enim quis in metus vulputate dictumst nunc integer suspendisse a. Ipsum urna sed elementum augue sed nisl neque. Sapien tellus rutrum faucibus aliquam scelerisque aliquet vel mauris.',
    benefit: [
      {
        id: 1,
        title: 'Bersertifikat',
        description: 'Lorem ipsum dolor sit amet consectetur',
        icon: TbCertificate,
      },
    ],
    timeline: [
      {
        id: 1,
        date: '22 Sep 2023',
        title: 'CV dan Resume',
      },
      {
        id: 2,
        date: '30 Sep 2023',
        title: 'Webinar Class',
      },
      {
        id: 3,
        date: '2 Okt 2023',
        title: 'Motivation Letter',
      },
      {
        id: 4,
        date: '7 Okt 2023',
        title: 'Interview',
      },
      {
        id: 5,
        date: '7 Okt 2023',
        title: 'Interview',
      },
      {
        id: 6,
        date: '7 Okt 2023',
        title: 'Interview',
      },
    ],
    requirements: [
      {
        id: 1,
        title: 'Curriculum Vitae - Resume',
      },
      {
        id: 2,
        title: 'Motivation Letter',
      },
      {
        id: 3,
        title: 'Interview',
      },
    ],
  },
  {
    id: 3,
    slug: 'review-cv-dan-essay',
    title: 'Review CV dan Essay',
    image: {
      src: '/images/product/detail/review-cv.png',
      alt: 'Review CV dan Essay',
      width: 1046,
      height: 320,
    },
    price: 99000,
    description:
      'Lorem ipsum dolor sit amet consectetur. Enim quis in metus vulputate dictumst nunc integer suspendisse a. Ipsum urna sed elementum augue sed nisl neque. Sapien tellus rutrum faucibus aliquam scelerisque aliquet vel mauris.',
    benefit: [
      {
        id: 1,
        title: 'Bersertifikat',
        description: 'Lorem ipsum dolor sit amet consectetur',
        icon: TbCertificate,
      },
    ],
  },
  {
    id: 4,
    slug: 'interview-course',
    title: 'Interview Course',
    image: {
      src: '/images/product/detail/interview-course.png',
      alt: 'Interview Course',
      width: 1046,
      height: 320,
    },
    price: 129000,
    description:
      'Lorem ipsum dolor sit amet consectetur. Enim quis in metus vulputate dictumst nunc integer suspendisse a. Ipsum urna sed elementum augue sed nisl neque. Sapien tellus rutrum faucibus aliquam scelerisque aliquet vel mauris.',
    benefit: [
      {
        id: 1,
        title: 'Bersertifikat',
        description: 'Lorem ipsum dolor sit amet consectetur',
        icon: TbCertificate,
      },
    ],
  },
];
