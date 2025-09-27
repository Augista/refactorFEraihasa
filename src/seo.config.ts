// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.raihasa.id/',
    siteName: 'Raih Asa',
  },
  titleTemplate: '%s | Raih Asa',
  description: 'Raih mimpimu Asa kemampuanmu bersama Raih Asa',
  defaultTitle: 'Raih Asa',
  additionalLinkTags: [
    {
      rel: 'png',
      href: '/favicon.ico',
    },
  ],
};

export default config;
