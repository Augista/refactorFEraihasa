import NextImage from 'next/image';

import { ExtractProps } from '@/types/helper';

type ScholarshipFair = {
  title: string;
  desc: string;
  href: string;
  img: string;
};

export const SCHOLARSHIP_FAIR_CARD_DATA: ScholarshipFair[] = [
  {
    title: 'Scholarship Webinar',
    desc: 'Acara yang diadakan khusus untuk memberi gambaran mengenai tips & trik beasiswa secara komperehensif dan interaktif',
    href: '/programs/scholarship-fair/scholarship-webinar',
    img: '/scholarship-webinar.png',
  },
  {
    title: 'Scholarship Camp',
    desc: 'Rangkaian kelas intensif yang dikurasi ekslusif untuk mempertemukan kamu dengan awardee beasiswa untuk mempersiapkan pemberkasan hingga kamu siap untuk submit pendaftaran! ',
    href: '/programs/scholarship-fair/scholarship-camp',
    img: '/scholarship-camp.png',
  },
];

type testimonialscamp = {
  description: string;
  name: string;
  university: string;
  awards: string;
  avatar: string;
};

export const TESTIMONIALS_CAMP: testimonialscamp[] = [
  {
    description:
      '“Setelah aku ikut webinar BU raihasa dan ikut powercamp esai, aku jadi kebantu banget buat bikin esai, kakaknya baik baik banget waktu aku konsultasi esai🫶buat temen temen semangat juga yaa olll!!! semangat kejar beasiswa jugaa!”',
    name: 'Martha Adelia',
    university: 'Universitas Indonesia',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-1.png',
  },
  {
    description:
      '"Haloo peraih asaa! Terimakasih yaa sudah mau berjuang sama-sama ⭐💫semoga kita diberikan hasil terbaik dan semangat teruss yaaa <33 Jangan lupaa buat terus menginspirasi & jadi generasi unggulan kebanggan Indonesia 💞🫶🏻"',
    name: 'Naila Rizqa',
    university: 'Universitas Syiah Kuala',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-2.png',
  },
  {
    description:
      '"BU Power Camp Raih Asa sangat membantu saya. Terutama Essay Review, membantu saya menyusun esai sebaik mungkin sehingga saya bisa lolos seleksi. Saya sangat merekomendasikan mentoring ini bagi para calon awardee beasiswa."',
    name: 'Enrico Joseph I. W.',
    university: 'Universitas Tarumanagara',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-3.png',
  },
  {
    description:
      '"Beruntung banget ketemu webinarnya Raih Asa untuk persiapan Beasiswa Unggulan 2023. Tips and trick nya bener-bener aku terapin di tahapan seleksi kemarin, dan alhamdulillah bisa lolos sampai tahap akhir, super helpful!" ',
    name: 'Syifa Fauziah',
    university: 'Universitas Pendidikan Indonesia',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-4.png',
  },
  {
    description:
      '"Berhasil adalah hasil, namun yang mahal adalah proses, berproses adalah fase yang tidak akan pernah ternilai dan hanya menghampiri orang orang yang mau memulai"',
    name: 'Joan Sabrina',
    university: 'Universitas Airlangga',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-5.png',
  },
];

type docsCamp = {
  image: ExtractProps<typeof NextImage>;
  name: string;
};

export const DOCS_CAMP: docsCamp[] = [
  {
    name: 'Webinar Pembuatan Esai',
    image: {
      src: '/images/detail-program/docs/camp/docs-1.png',
      alt: 'Scholarship Course',
      width: 668,
      height: 441,
    },
  },
  {
    name: 'Webinar Pembuatan Esai',
    image: {
      src: '/images/detail-program/docs/camp/docs-1.png',
      alt: 'Scholarship Course',
      width: 668,
      height: 441,
    },
  },
  {
    name: 'Webinar Pembuatan Esai',
    image: {
      src: '/images/detail-program/docs/camp/docs-1.png',
      alt: 'Scholarship Course',
      width: 668,
      height: 441,
    },
  },
];

type testimonialswebinar = {
  description: string;
  name: string;
  university: string;
  awards: string;
  avatar: string;
};

export const TESTIMONIALS_WEBINAR: testimonialswebinar[] = [
  {
    description:
      '“Setelah aku ikut webinar BU raihasa dan ikut powercamp esai, aku jadi kebantu banget buat bikin esai, kakaknya baik baik banget waktu aku konsultasi esai🫶buat temen temen semangat juga yaa olll!!! semangat kejar beasiswa jugaa!”',
    name: 'Martha Adelia',
    university: 'Universitas Indonesia',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-1.png',
  },
  {
    description:
      '"Haloo peraih asaa! Terimakasih yaa sudah mau berjuang sama-sama ⭐💫semoga kita diberikan hasil terbaik dan semangat teruss yaaa <33 Jangan lupaa buat terus menginspirasi & jadi generasi unggulan kebanggan Indonesia 💞🫶🏻"',
    name: 'Naila Rizqa',
    university: 'Universitas Syiah Kuala',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-2.png',
  },
  {
    description:
      '"BU Power Camp Raih Asa sangat membantu saya. Terutama Essay Review, membantu saya menyusun esai sebaik mungkin sehingga saya bisa lolos seleksi. Saya sangat merekomendasikan mentoring ini bagi para calon awardee beasiswa."',
    name: 'Enrico Joseph I. W.',
    university: 'Universitas Tarumanagara',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-3.png',
  },
  {
    description:
      '"Beruntung banget ketemu webinarnya Raih Asa untuk persiapan Beasiswa Unggulan 2023. Tips and trick nya bener-bener aku terapin di tahapan seleksi kemarin, dan alhamdulillah bisa lolos sampai tahap akhir, super helpful!" ',
    name: 'Syifa Fauziah',
    university: 'Universitas Pendidikan Indonesia',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-4.png',
  },
  {
    description:
      '"Berhasil adalah hasil, namun yang mahal adalah proses, berproses adalah fase yang tidak akan pernah ternilai dan hanya menghampiri orang orang yang mau memulai"',
    name: 'Joan Sabrina',
    university: 'Universitas Airlangga',
    awards: 'Beasiswa Unggulan Fair',
    avatar: '/images/landing/testimonial/testi-5.png',
  },
];

type docsWebinar = {
  image: ExtractProps<typeof NextImage>;
  name: string;
};

export const DOCS_WEBINAR: docsWebinar[] = [
  {
    name: 'Webinar Beasiswa Unggulan',
    image: {
      src: '/images/detail-program/docs/docs-1.png',
      alt: 'Scholarship Course',
      width: 544,
      height: 434,
    },
  },
  {
    name: 'Webinar Beasiswa Unggulan',
    image: {
      src: '/images/detail-program/docs/docs-1.png',
      alt: 'Scholarship Course',
      width: 544,
      height: 434,
    },
  },
  {
    name: 'Webinar Beasiswa Unggulan',
    image: {
      src: '/images/detail-program/docs/docs-1.png',
      alt: 'Scholarship Course',
      width: 544,
      height: 434,
    },
  },
];
