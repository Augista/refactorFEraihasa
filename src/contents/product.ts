import { IconType } from 'react-icons';
import { HiAcademicCap, HiSparkles, HiUserGroup } from 'react-icons/hi';

type Product = {
  slug: string;
  title: string;
  price: number;
  description: string;
  link_buy: string;
  link_detail: string;
  color: string;
  color2: string;
  icon: IconType;
};

export const PRODUCT_CARD_DATA: Product[] = [
  {
    slug: 'scholarship-course',
    title: 'Scholarship Course',
    price: 299000,
    description:
      'Fitur personalisasi beasiswa akan merekomendasi beasiswa yang sesuai dengan kualifikasi kamu. Jadi kamu engga perlu lagi bingung memilih karena banyaknya jenis beasiswa 🤩',
    link_buy: '/product/scholarship-course/checkout',
    link_detail: '/product/scholarship-course',
    color: 'bg-[#FB991A]',
    color2: 'bg-[#FFE0B8]',
    icon: HiAcademicCap,
  },
  {
    slug: 'scholarship-webinar',
    title: 'Scholarship Webinar',
    price: 159000,
    description:
      'Fitur personalisasi beasiswa akan merekomendasi beasiswa yang sesuai dengan kualifikasi kamu. Jadi kamu engga perlu lagi bingung memilih karena banyaknya jenis beasiswa 🤩',
    link_buy: '/product/scholarship-webinar/checkout',
    link_detail: '/product/scholarship-webinar',
    color: 'bg-[#1B9158]',
    color2: 'bg-[#B8FFA7]',
    icon: HiAcademicCap,
  },
  {
    slug: 'review-cv-dan-essay',
    title: 'Review CV and Essay',
    price: 99000,
    description:
      'Demi membantu kamu mendapatkan beasiswa yang kamu kejar, kami menawarkan kelas beasiswa eksklusif loh 🤗',
    link_buy: '/product/review-cv/checkout',
    link_detail: '/product/review-cv',
    color: 'bg-[#CD3C3C]',
    color2: 'bg-[#FFC1B8]',
    icon: HiSparkles,
  },
  {
    slug: 'interview-course',
    title: 'Interview Course',
    price: 129000,
    description:
      'Dari mahasiswa untuk mahasiswa, disini kami akan mempertemukan kamu dengan awardee dari beasiswa yang kamu inginkan ! 😉',
    link_buy: '/product/interview-course/checkout',
    link_detail: '/product/interview-course',
    color: 'bg-[#1B7691]',
    color2: 'bg-[#92C9DA]',
    icon: HiUserGroup,
  },
];
