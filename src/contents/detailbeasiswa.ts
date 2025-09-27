import { DetailBeasiswa } from '@/types/entities/detailbeasiswa';

export const DETAIL_BEASISWA: DetailBeasiswa[] = [
  {
    id: 1,
    slug: 'beasiswa-karya-salemba-empat',
    title: 'Karya Salemba Empat (Reguler & Unggul)',
    jenis: 'Partially Funded',
    jenjang: 'S1',
    organizer: [
      {
        id: 1,
        image: {
          src: '/images/infobeasiswa/beasiswa/organizer/kse-logo.png',
          width: 16,
          height: 11,
          alt: 'Yayasan Karya Salemba Empat',
        },
        name: 'Yayasan Karya Salemba Empat',
      },
    ],
    image: {
      src: '/images/infobeasiswa/beasiswa/beasiswa-1.png',
      width: 392,
      height: 209,
      alt: 'Yayasan Karya Salemba Empat',
    },
    oprec: 'Maret',
    deadline: 'April',
  },
  {
    id: 2,
    slug: 'beasiswa-bakti-bca',
    title: 'Bakti BCA',
    jenis: 'Fully Funded',
    jenjang: 'S1',
    organizer: [
      {
        id: 2,
        image: {
          src: '/images/infobeasiswa/beasiswa/organizer/bakti-bca-logo.png',
          width: 16,
          height: 11,
          alt: 'PT Bank Central Asia',
        },
        name: 'PT Bank Central Asia',
      },
    ],
    image: {
      src: '/images/infobeasiswa/beasiswa/organizer/bakti-bca-logo.png',
      width: 392,
      height: 209,
      alt: 'Bakti BCA',
    },
    oprec: 'September',
    deadline: 'Oktober',
  },
  {
    id: 3,
    slug: 'beasiswa-bsi-prestasi',
    title: 'BSI Prestasi',
    jenis: 'Partially Funded',
    jenjang: 'S1',
    organizer: [
      {
        id: 3,
        image: {
          src: '/images/infobeasiswa/beasiswa/organizer/bsi-logo.png',
          width: 16,
          height: 11,
          alt: 'PT Bank Syariah Indonesia Tbk',
        },
        name: 'PT Bank Syariah Indonesia Tbk',
      },
    ],
    image: {
      src: '/images/infobeasiswa/beasiswa/organizer/bsi-logo.png',
      width: 392,
      height: 209,
      alt: 'BSI Prestasi',
    },
    oprec: 'September',
    deadline: 'November',
  },
  {
    id: 4,
    slug: 'djarum-beasiswa-plus',
    title: 'Djarum Beasiswa Plus',
    jenis: 'PartiallyFunded',
    jenjang: 'D4/S1',
    organizer: [
      {
        id: 4,
        image: {
          src: '/images/infobeasiswa/beasiswa/organizer/djarum-logo.png',
          width: 16,
          height: 11,
          alt: 'PT Djarum',
        },
        name: 'PT Djarum',
      },
    ],
    image: {
      src: '/images/infobeasiswa/beasiswa/organizer/djarum-logo.png',
      width: 392,
      height: 209,
      alt: 'Djarum Beasiswa Plus',
    },
    oprec: 'Maret',
    deadline: 'Agustus',
  },
  {
    id: 5,
    slug: 'beasiswa-bank-indonesia',
    title: 'Bank Indonesia (Regular & Unggulan)',
    jenis: 'Partially Funded',
    jenjang: 'D3/D4/S1',
    organizer: [
      {
        id: 5,
        image: {
          src: '/images/infobeasiswa/beasiswa/organizer/bi-logo.png',
          width: 16,
          height: 11,
          alt: 'Bank Indonesia',
        },
        name: 'Bank Indonesia',
      },
    ],
    image: {
      src: '/images/infobeasiswa/beasiswa/organizer/bi-logo.png',
      width: 392,
      height: 209,
      alt: 'Bank Indonesia (Regular & Unggulan)',
    },
    oprec: '11 Januari 2023',
    deadline: '17 Januari 2023',
  },
  {
    id: 6,
    slug: 'beasiswa-unggulan',
    title: 'Beasiswa Unggulan',
    jenis: 'Fully Funded',
    jenjang: 'S1',
    organizer: [
      {
        id: 6,
        image: {
          src: '/images/infobeasiswa/beasiswa/organizer/bu-logo.png',
          width: 16,
          height: 11,
          alt: '(Kemendikbudristek)',
        },
        name: '(Kemendikbudristek)',
      },
    ],
    image: {
      src: '/images/infobeasiswa/beasiswa/organizer/bu-logo.png',
      width: 392,
      height: 209,
      alt: 'Beasiswa Unggulan',
    },
    oprec: '3 Agustus 2023',
    deadline: '17 Agustus 2023',
  },
];
