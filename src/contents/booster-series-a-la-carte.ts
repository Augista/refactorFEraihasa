import NextImage from 'next/image';

import { ExtractProps } from '@/types/helper';

type BoosterSeries = {
  title: string;
  desc: string;
  href: string;
  img: string;
};

export const BOOSTER_SERIES_CARD_DATA: BoosterSeries[] = [
  {
    title: 'CV Boost',
    desc: 'Tingkatkan peluang diterima seleksi berkasmu secepat kilat dengan CV Boost! CV mu akan direview, proofread dan mendapatkan feedback dari awardee berpengalaman.',
    href: 'https://raihasa.myr.id/course/Booster-C',
    img: '/cv-boost.png',
  },
  {
    title: 'Essay Boost',
    desc: 'Maksimalkan esaimu dengan proofread dan feedback awardee berpengalaman untuk kebutuhan seleksi berkasmu!',
    href: 'https://raihasa.myr.id/course/Booster-C',
    img: '/essay-boost.png',
  },
  {
    title: 'Interview Boost',
    desc: 'Jadi percaya diri lewati tahap interview dengan exclusive mock up interview bersama awardee berpengalaman khusus untuk kamu!',
    href: 'https://raihasa.myr.id/course/booster-i',
    img: '/interview-boost.png',
  },
];
type testimonialscvboost = {
  description: string;
  name: string;
  university: string;
  awards: string;
  avatar: string;
};

export const TESTIMONIALS_CVBOOST: testimonialscvboost[] = [
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

type docsCvboost = {
  image: ExtractProps<typeof NextImage>;
  name: string;
};

export const DOCS_CVBOOST: docsCvboost[] = [
  {
    name: 'Monitoring CV',
    image: {
      src: '/images/detail-program/docs/cvboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 354,
      height: 345,
    },
  },
  {
    name: 'Monitoring CV',
    image: {
      src: '/images/detail-program/docs/cvboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 354,
      height: 345,
    },
  },
  {
    name: 'Monitoring CV',
    image: {
      src: '/images/detail-program/docs/cvboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 354,
      height: 345,
    },
  },
];
type docsEssayboost = {
  image: ExtractProps<typeof NextImage>;
  name: string;
};

export const DOCS_ESSAY: docsEssayboost[] = [
  {
    name: 'Essay Boost',
    image: {
      src: '/images/detail-program/docs/essayboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 354,
      height: 345,
    },
  },
  {
    name: 'Essay Boost',
    image: {
      src: '/images/detail-program/docs/essayboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 354,
      height: 345,
    },
  },
  {
    name: 'Essay Boost',
    image: {
      src: '/images/detail-program/docs/essayboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 354,
      height: 345,
    },
  },
];
type docsInterviewboost = {
  image: ExtractProps<typeof NextImage>;
  name: string;
};

export const DOCS_INTERVIEW: docsInterviewboost[] = [
  {
    name: 'Interview Boost',
    image: {
      src: '/images/detail-program/docs/interviewboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 556,
      height: 421,
    },
  },
  {
    name: 'Interview Boost',
    image: {
      src: '/images/detail-program/docs/interviewboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 556,
      height: 421,
    },
  },
  {
    name: 'Interview Boost',
    image: {
      src: '/images/detail-program/docs/interviewboost/docs-1.png',
      alt: 'Scholarship Course',
      width: 556,
      height: 421,
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
