import { FaCoins, FaWallet } from 'react-icons/fa';
import { TbBooks } from 'react-icons/tb';

import { DetailScholarship } from '@/types/entities/scholarship';

export const DETAIL_SCHOLARSHIP: DetailScholarship[] = [
  {
    id: 1,
    slug: 'beasiswa-unggulan',
    title: 'Beasiswa Unggulan',
    organizer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.',
    image: {
      src: '/images/scholarship-info/detail/banner.png',
      alt: 'Scholarship Course',
      width: 1080,
      height: 352,
    },
    description:
      'Beasiswa Unggulan adalah pemberian biaya pendidikan oleh pemerintah Indonesia kepada putra-putri terbaik bangsa Indonesia pada perguruan tinggi penerima peserta didik program Beasiswa Unggulan pada jenjang S1, S2, dan S3.',
    benefit: [
      {
        id: 1,
        title: 'Bantuan Biaya Pendidikan / UKT',
        description:
          'S1, biaya kuliah gratis selama 8 semester. S2, biaya kuliah gratis selama 4 semester. S3, biaya kuliah gratis selama 6 semester.',
        icon: FaCoins,
      },
      {
        id: 2,
        title: 'Bantuan Biaya Hidup',
        description:
          'Untuk jenjang S1, bantuan ini mencapai Rp1,4 juta per bulan.',
        icon: FaWallet,
      },
      {
        id: 3,
        title: 'Bantuan Pengadaan Buku',
        description:
          'Mahasiswa penerima beasiswa juga akan mendapat bantuan pengadaan buku selama kuliah yang tidak termasuk biaya penelitian',
        icon: TbBooks,
      },
    ],
    timeline: [
      {
        id: 1,
        date: '03 - 17 Agustus',
        title: 'Pendaftaran Beasiswa Unggulan',
      },
      {
        id: 2,
        date: '18 - 22 Agustus',
        title: 'Seleksi Tahap I',
      },
      {
        id: 3,
        date: '23 Agustus',
        title: 'Pengumuman Hasil Seleksi Tahap I',
      },
      {
        id: 4,
        date: '04 - 12 September',
        title: 'Seleksi Tahap II',
      },
      {
        id: 5,
        date: '18 September',
        title: 'Pengumuman Hasil Seleksi Tahap II',
      },
      {
        id: 6,
        date: '21 - 30 September',
        title: 'Penanda- tanganan Kontrak',
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
];
