type Notification = {
  description: string;
};
export const NOTIFICATION: Notification[] = [
  {
    description:
      '🚨 Batas akhir pendaftaran Beasiswa Prestasi Global tinggal 1 hari lagi! Segera daftarkan diri Anda di www.[websitebeasiswa].com/pendaftaran. 🎓',
  },
  {
    description:
      '🚨 Batas akhir pendaftaran Beasiswa Prestasi Global tinggal 1 hari lagi! Segera daftarkan diri Anda di www.[websitebeasiswa].com/pendaftaran. 🎓',
  },
  {
    description:
      '🚨 Batas akhir pendaftaran Beasiswa Prestasi Global tinggal 1 hari lagi! Segera daftarkan diri Anda di www.[websitebeasiswa].com/pendaftaran. 🎓',
  },
  {
    description:
      '🚨 Batas akhir pendaftaran Beasiswa Prestasi Global tinggal 1 hari lagi! Segera daftarkan diri Anda di www.[websitebeasiswa].com/pendaftaran. 🎓',
  },
  {
    description:
      '🚨 Batas akhir pendaftaran Beasiswa Prestasi Global tinggal 1 hari lagi! Segera daftarkan diri Anda di www.[websitebeasiswa].com/pendaftaran. 🎓',
  },
];

type transaction = {
  title: string;
  border: string;
  quantity: number;
  price: string;
  status: Status[];
};
type Status = {
  variant: string;
  description: string;
  background: string;
  text: string;
};

export const TRANSACTION: transaction[] = [
  {
    title: 'Kelas Eksekutif',
    border: 'border-[#FB991A]',
    quantity: 1,
    price: '99.000',
    status: [
      {
        variant: 'warning',
        description: 'Pembayaran',
        background: 'bg-[#FFF3E2]',
        text: 'text-[#FB991A]',
      },
    ],
  },
  {
    title: 'Kelas Eksekutif',
    border: 'border-[#6ABC90]',
    quantity: 1,
    price: '99.000',
    status: [
      {
        variant: 'success',
        description: 'Lunas',
        background: 'bg-[#E7FAE8]',
        text: 'text-[#4B8767]',
      },
    ],
  },
  {
    title: 'Kelas Eksekutif',
    border: 'border-[#E62A3A]',
    quantity: 1,
    price: '99.000',
    status: [
      {
        variant: 'fail',
        description: 'Gagal',
        background: 'bg-[#FFE0E0]',
        text: 'text-[#E62A3A]',
      },
    ],
  },
];

type Activity = {
  date: string;
  time: string;
  title: string;
  status: Status[];
};

export const ACTIFITY: Activity[] = [
  {
    date: '2 Okt',
    time: '10:00',
    title: 'Webinar Beasiswa',
    status: [
      {
        variant: 'warning',
        description: 'Segera',
        background: 'bg-[#FFF3E2]',
        text: 'text-[#FB991A]',
      },
    ],
  },
  {
    date: '2 Okt',
    time: '10:00',
    title: 'Webinar Beasiswa',
    status: [
      {
        variant: 'success',
        description: 'Hadir',
        background: 'bg-[#E7FAE8]',
        text: 'text-[#6ABC90]',
      },
    ],
  },
  {
    date: '2 Okt',
    time: '10:00',
    title: 'Webinar Beasiswa',
    status: [
      {
        variant: 'success',
        description: 'Hadir',
        background: 'bg-[#E7FAE8]',
        text: 'text-[#6ABC90]',
      },
    ],
  },
  {
    date: '2 Okt',
    time: '10:00',
    title: 'Webinar Beasiswa',
    status: [
      {
        variant: 'success',
        description: 'Hadir',
        background: 'bg-[#E7FAE8]',
        text: 'text-[#6ABC90]',
      },
    ],
  },
  {
    date: '2 Okt',
    time: '10:00',
    title: 'Webinar Beasiswa',
    status: [
      {
        variant: 'success',
        description: 'Hadir',
        background: 'bg-[#E7FAE8]',
        text: 'text-[#6ABC90]',
      },
    ],
  },
  {
    date: '2 Okt',
    time: '10:00',
    title: 'Webinar Beasiswa',
    status: [
      {
        variant: 'success',
        description: 'Hadir',
        background: 'bg-[#E7FAE8]',
        text: 'text-[#6ABC90]',
      },
    ],
  },
];
