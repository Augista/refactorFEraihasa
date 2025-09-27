import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn, ApiError } from '@/types/api';
import { AxiosResponse, AxiosError } from 'axios';

type loginForm = {
  email: string;
  password: string;
};

export const useLoginMutation = () => {
  const login = useAuthStore.useLogin();
  const router = useRouter();
    const mutation = useMutation<
    AxiosResponse<ApiReturn<void>> | void,
    AxiosError<ApiError>,
    loginForm
  >({
    mutationFn: async (data: loginForm) => {
      const res = await api.post<ApiReturn<{ token: string; [key: string]: any }>>(
        '/users/sign-in',
        data
      );

      if (!res.data.data) {
        throw new Error('Sesi login tidak valid');
      }

      const token = res.data.data.token;
      setToken(token);

      login({
        ...res.data.data, token,
        id: undefined,
        angkatan: null,
        asal_instansi: null,
        email: '',
        jurusan: null,
        name: '',
        role: 'USER'
      });
      router.back();
    },
  });

  return useMutationToast<void, loginForm>(mutation);
};
