import { useMutation } from '@tanstack/react-query';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import withAuth from '@/components/hoc/withAuth';
import SEO from '@/components/SEO';
import { showToast, SUCCESS_TOAST } from '@/components/Toast';
import useMutationToast from '@/hooks/useMutationToast';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { ApiError, ApiReturn } from '@/types/api';
import { User } from '@/types/entities/user';
import { AxiosError, AxiosResponse } from 'axios';

type LoginForm = {
  email: string;
  password: string;
};

export default withAuth(LoginPage, 'public');
function LoginPage() {
  const methods = useForm<LoginForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  const router = useRouter();
  const login = useAuthStore.useLogin();

  const loginMutationRaw = useMutation<
  AxiosResponse<ApiReturn<void>> | void,
  AxiosError<ApiError>,
  LoginForm
>({
  mutationFn: async (data: LoginForm) => {
    const res = await api.post('/users/admin/sign-in', data);
    const { token } = res.data;
    setToken(token);

    const user = await api.get<ApiReturn<User>>('/users/user-detail');

    if (!user.data.data) {
      throw new Error('Sesi login tidak valid');
    }

    login({ ...user.data.data, token });
    showToast('Berhasil login', SUCCESS_TOAST);
    router.push('/');
  },
});

const { mutate: loginMutation, isPending } = useMutationToast<void, LoginForm>(
  loginMutationRaw
);

  // const { mutate: loginMutation, isPending } = useMutationToast<
  //   void,
  //   LoginForm
  // >(
  //   useMutation(async (data) => {
  //     const res = await api.post('/users/admin/sign-in', data);
  //     const { token } = res.data;
  //     setToken(token);

  //     const user = await api.get<ApiReturn<User>>('/users/user-detail');

  //     if (!user.data.data) {
  //       throw new Error('Sesi login tidak valid');
  //     }

  //     login({ ...user.data.data, token });
  //     showToast('Berhasil login', SUCCESS_TOAST);
  //     router.push('/');
  //   })
  // );

  const onSubmit = (data: LoginForm) => {
    loginMutation(data);
  };

  return (
    <Layout withFooter={true} withNavbar={true}>
      <SEO title='Login Admin' description='Login Admin Page' />
      <main className='grid items-center py-24 mt-20 place-items-center xl:grid-cols-12'>
        <section className='xl:col-span-7'>
          <NextImage
            src={'/images/auth/hero.png'}
            width={687}
            height={508}
            alt='Auth Hero'
            className=''
          />
        </section>
        <section className='w-full mx-auto mt-16 bg-white xl:col-span-5 xl:mt-0 '>
          <div className='w-4/5 p-6 mx-auto space-y-4 shadow-xl md:w-3/5 md:space-y-6 sm:p-8 rounded-2xl'>
            <div className='flex flex-col items-center justify-center mb-6 '>
              <NextImage
                src='/images/logo.png'
                alt='logo'
                width='254'
                height='177'
                className='w-16 md:w-24'
              />
            </div>

            <FormProvider {...methods}>
              <form
                className='space-y-4 md:space-y-6'
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  id='email'
                  label='Email'
                  placeholder='Masukkan Email'
                  validation={{
                    required: 'Email tidak boleh kosong',
                  }}
                />
                <Input
                  id='password'
                  label='Password'
                  type='password'
                  placeholder='Password'
                  validation={{
                    required: 'Password tidak boleh kosong',
                  }}
                />

                <Button
                  isLoading={isPending}
                  type='submit'
                  variant='primary'
                  className='w-full'
                >
                  Masuk
                </Button>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </Layout>
  );
}
