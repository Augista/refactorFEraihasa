type SidebarDetail = {
  title: string;
  slug: string;
  btaction: BtAction[];
};
type BtAction = {
  name: string;
};

export const SIDEBAR: SidebarDetail[] = [
  {
    title: 'Jenis Beasiswa',
    slug: 'jenis',
    btaction: [
      {
        name: 'FULL',
      },
      {
        name: 'Partially Funded',
      },
    ],
  },
  // {
  //   title: 'Jenjang Beasiswa',
  //   slug: 'jenjang-beasiswa',
  //   btaction: [
  //     {
  //       name: 'D1-D4',
  //     },
  //     {
  //       name: 'S1',
  //     },
  //     {
  //       name: 'S2',
  //     },
  //     {
  //       name: 'S3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Program Beasiswa',
  //   slug: 'program-beasiswa',
  //   btaction: [
  //     {
  //       name: 'Skripsi',
  //     },
  //     {
  //       name: 'Magang',
  //     },
  //   ],
  // },
  {
    title: 'Skala',
    slug: 'skala',
    btaction: [
      {
        name: 'Nasional',
      },
      {
        name: 'Internasional',
      },
    ],
  },
];
