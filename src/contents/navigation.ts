type navigation = {
  name: string;
  href: string;
  icon: React.SVGProps<SVGSVGElement>;
  current: boolean;
  customClass: string;
};

import {
   ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import React from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
export const navigation = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: HomeIcon,
    current: true,
    customClass: 'hover:bg-gray-100 hover:text-primary-blue',
  },

  {
    name: 'User Terdaftar',
    href: '/admin/user-terdaftar',
    icon: UsersIcon,
    current: false,
    customClass: 'hover:bg-gray-100 hover:text-primary-blue',
  },
  {
    name: 'Transaksi User',
    href: '/admin/transaksi-user',
    icon: ClipboardDocumentListIcon,
    current: false,
    customClass: 'hover:bg-gray-100 hover:text-primary-blue',
  },
  {
    name: 'Konfirmasi',
    href: '/admin/konfirmasi',
    icon: ClipboardDocumentCheckIcon,
    current: false,
    customClass: 'hover:bg-gray-100 hover:text-primary-blue',
  },
];
