import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import SuccessVerify from '@/pages/auth/email-verification/components/SuccesVerify';
import VerifyEmail from '@/pages/auth/email-verification/components/VerifyEmail';

export default function EmailVerificationPage() {
  const [isVerified, setIsVerified] = useState(false);

  const router = useRouter();

  const queryParam = router.query;

  useQuery({
    queryKey: ['token'],
    queryFn: async () => {
      const res = await api.get(`/mailer/verify?token=${queryParam.token}`);

      if (res.data.code === 200) setIsVerified(true);
    },
    enabled: !!queryParam.token,
  });

  return (
    <Layout withFooter withNavbar>
      {isVerified ? <SuccessVerify /> : <VerifyEmail />}
    </Layout>
  );
}
