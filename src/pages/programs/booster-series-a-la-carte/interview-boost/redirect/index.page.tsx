import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Redirecting from '@/pages/checkout/container/Redirecting';

export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('https://app.reclaim.ai/m/raihasa');
    }, 3000);
  });

  return <Redirecting />;
}
