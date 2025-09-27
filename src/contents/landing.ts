import { IconType } from 'react-icons';
import { HiAcademicCap, HiSparkles, HiUserGroup } from 'react-icons/hi';

type whyUsCard = {
  title: string;
  description: string;
  color: string;
  color2: string;
  link_icon: IconType;
};

export const WHY_US_CARD: whyUsCard[] = [
  {
    title: 'Personalized Scholarship',
    description: 'Fitur rekomendasi beasiswa khusus untuk KAMU! ',
    color: 'bg-[#FB991A]',
    color2: 'bg-[#FFE0B8]',
    link_icon: HiAcademicCap,
  },
  {
    title: 'Exclusive Class (Kelas Eksklusif)',
    description:
      '1 on 1 session eksklusif dengan Awardee buat maksimalin hasil feedback mu!',
    color: 'bg-[#CD3C3C]',
    color2: 'bg-[#FFC1B8]',
    link_icon: HiSparkles,
  },
  {
    title: 'Peer Teaching (Tutor Sebaya)',

    description: 'Mempertemukan kamu dengan awardee sesuai jenjangmu! ',
    color: 'bg-[#1B7691]',
    color2: 'bg-[#92C9DA]',
    link_icon: HiUserGroup,
  },
];

type testimonials = {
  description: string;
  name: string;
  university: string;
  awards: string;
  avatar: string;
};

export const TESTIMONIALS: testimonials[] = [
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

type FAQContent = {
  title: string;
  content: string;
};

export const FAQ: FAQContent[] = [
  {
    title: 'Raih Asa itu apa sih, Haira?',
    content:
      'Raih Asa itu platform mentoring beasiswa berbasis peer mentoring dimana kalian bakal dimentori sama awardee-awardee beasiswa tahun lalu nih. Ga hanya itu, karena metode nya sendiri 1 on 1, nantinya Peraih Asa bakalan bisa lebih akrab dan ga canggung sama mentornyaa, asik banget kann!! 😍',
  },
  {
    title: 'Apa mentoring nya termasuk simulasi interview juga?',
    content:
      'Ga hanya simulasi interview nihh, Peraih Asa bakal di review motivation letter nya lewat program kita yang namanya ESSAY BOOSTER. Bahkan, kalau dibutuhin CV, bisa kita review juga nih, kita udah siapin program gong namanya CV BOOSTER supaya makin mantepp dan siap seleksi beasiswa nya ntarr🔥🔥',
  },
  {
    title: 'Buat beasiswa nya apa termasuk ke luar negeri juga kah?',
    content:
      'Buat sementara, mentoring terkhusus pada beasiswa dalam negeri ya, Peraih Asa😉',
  },
  {
    title: 'Kalau program nya itu free atau berbayar ga nih, Haira?',
    content:
      'Program nya berbayar yaps😉 tapi tenang, Haira bakal ngadain free program webinar nantinya khusus buat para Peraih Asa nihh, stay tuned yak 🙌🤗',
  },
];
