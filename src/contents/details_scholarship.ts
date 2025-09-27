import { ScholarshipDetails } from '@/types/entities/detailscholarship';

export const SCHOLARSHIP_DETAILS: ScholarshipDetails[] = [
  {
    title: 'Beasiswa Unggulan',
    organizer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.',
    registration: '00 Jan 0000',
    deadline: '00 Jan 0000',
    about: [
      {
        description:
          'Beasiswa Unggulan adalah pemberian biaya pendidikan oleh pemerintah Indonesia kepada putra-putri terbaik bangsa Indonesia pada perguruan tinggi penerima peserta didik program Beasiswa Unggulan pada jenjang S1, S2, dan S3.',
        jenis: 'Full Funded',
      },
    ],
    benefit: [
      {
        pendidikan: [
          {
            list: 'S1, biaya kuliah gratis selama 8 semester.',
          },
          {
            list: 'S3, biaya kuliah gratis selama 6 semester.',
          },
          {
            list: 'S2, biaya kuliah gratis selama 4 semester.',
          },
        ],
        loa: 'Untuk jenjang S1, bantuan ini mencapai Rp1,4 juta per bulan.',
        buku: 'Mahasiswa penerima beasiswa juga akan mendapat bantuan pengadaan buku selama kuliah yang tidak termasuk biaya penelitian',
      },
    ],
    requirement: [
      {
        jenjang: [
          {
            list: 'S1',
          },
          {
            list: 'S2',
          },
        ],
        berkas: [
          {
            list: 'Curriculum Vitae',
          },
          {
            list: 'Full Funded',
          },
        ],
        other: [
          {
            description: 'Tidak ada tambahan.',
          },
        ],
      },
    ],
    timeline: [
      {
        awal: [
          {
            list: [
              {
                title: 'Pendaftaran',
                date: '14 - 20 Oktorber',
              },
            ],
          },
        ],
        seleksi: [
          {
            list: [
              {
                title: 'Tahap Seleksi 1',
                date: '14 - 20 Oktorber',
              },
              {
                title: 'Pengumuman Seleksi Tahap 1',
                date: '14 - 20 Oktorber',
              },
              {
                title: 'Pengumuman Seleksi Tahap 2',
                date: '14 - 20 Oktorber',
              },
            ],
          },
        ],
        akhir: [
          {
            list: [
              {
                title: 'Penandatanganan',
                date: '14 - 20 Oktorber',
              },
            ],
          },
        ],
      },
    ],
  },
];
