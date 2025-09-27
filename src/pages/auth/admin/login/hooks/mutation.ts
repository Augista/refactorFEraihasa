// @ts-nocheck
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';

type loginForm = {
  email: string;
  password: string;
};

export const useLoginMutation = () => {
  const login = useAuthStore.useLogin();
  const router = useRouter();
  const result = useMutationToast<void, loginForm>(
    useMutation(async (data) => {
      const res = await api.post('/users/admin/sign-in', data);

      if (!res.data.data) {
        throw new Error('Sesi login tidak valid');
      }
      const token = res.data.data.token;
      setToken(token);

      login({ ...res.data.data, token: token });
      router.back();
    })
  );
  return {
    ...result,
  };
};
