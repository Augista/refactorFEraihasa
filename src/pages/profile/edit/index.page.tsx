import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdOutlineSaveAlt } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import withAuth from '@/components/hoc/withAuth';
import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import { REG_EMAIL, REG_YEAR } from '@/constants/regex';
import useMutationToast from '@/hooks/useMutationToast';
import Layout from '@/layouts/Layout';
import { MobileSidebar, SidebarUser } from '@/layouts/UserDashboard';
import api from '@/lib/api';

type EditProfileFormValues = {
  full_name: string;
  username: string;
  email: string;
  phone_number: string;
  institusi: string;
  angkatan: number;
  jurusan: string;
  program: string;
  agama: string;
  password: string;
  jenis_kelamin: string;
};

function EditProfile() {
  const methods = useForm<EditProfileFormValues>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const router = useRouter();

  const { mutate: handleRegister, isPending } = useMutation({
    mutationFn: async (data: EditProfileFormValues) => {
      await api.post("/sign-up", data);
    },
    onSuccess: () => {
      showToast("Pendaftaran akun berhasil", SUCCESS_TOAST);
      router.push("/login");
    },
    onError: () => {
      showToast("Terjadi kesalahan, coba lagi", DANGER_TOAST);
    },
  });

  const onSubmit = (data: EditProfileFormValues) => {
    handleRegister(data);
  };

  return (
    <Layout withFooter={true} withNavbar={true}>
      <SEO title='Edit Profile' description='Edit Profile ' />

      <main className='overflow-hidden mt-20 lg:px-4 xl:px-[60px] lg:bg-[#E4E4E7]'>
        <section className='grid grid-cols-1 gap-8 my-12 xl:min-h-screen xl:grid-cols-12 xl:my-20'>
          <div className='hidden xl:col-span-3 xl:block card'>
            <SidebarUser />
          </div>

          <div className='bg-white xl:col-span-9 rounded-2xl'>
            <div className='relative grid header lg:py-9 xl:py-0 place-items-center '>
              <MobileSidebar />
            </div>
            <div className=''>
              <FormProvider {...methods}>
                <form
                  className='space-y-4 md:space-y-6'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className='grid lg:grid-cols-12 gap-9 p-8 xl:p-16 bg-white rounded-2xl xl:shadow-[0_0_25px_0_rgba(0,0,0,0.25)]'>
                    <div className='grid lg:col-span-12 place-items-center'>
                      <div className=''>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='96'
                          height='96'
                          viewBox='0 0 96 96'
                          fill='none'
                        >
                          <g clip-path='url(#clip0_2524_5931)'>
                            <rect
                              width='96'
                              height='96'
                              rx='48'
                              fill='#E2EFFF'
                            />
                            <path
                              d='M64.957 36.2666C64.957 45.6923 57.3512 53.3333 47.969 53.3333C38.5868 53.3333 30.981 45.6923 30.981 36.2666C30.981 26.841 38.5868 19.2 47.969 19.2C57.3512 19.2 64.957 26.841 64.957 36.2666Z'
                              fill='#1B7691'
                            />
                            <path
                              d='M47.969 66.1333C31.5501 66.1333 18.24 79.5051 18.24 96H77.6981C77.6981 79.5051 64.3879 66.1333 47.969 66.1333Z'
                              fill='#1B7691'
                            />
                            <path
                              d='M64.957 36.2666C64.957 45.6923 57.3512 53.3333 47.969 53.3333C38.5868 53.3333 30.981 45.6923 30.981 36.2666C30.981 26.841 38.5868 19.2 47.969 19.2C57.3512 19.2 64.957 26.841 64.957 36.2666Z'
                              stroke='#1B7691'
                              stroke-width='12'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M47.969 66.1333C31.5501 66.1333 18.24 79.5051 18.24 96H77.6981C77.6981 79.5051 64.3879 66.1333 47.969 66.1333Z'
                              stroke='#1B7691'
                              stroke-width='12'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_2524_5931'>
                              <rect
                                width='96'
                                height='96'
                                rx='48'
                                fill='white'
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className='flex flex-col gap-5 lg:col-span-6'>
                      <Input
                        id='full_name'
                        label='Nama Lengkap'
                        placeholder='Masukkan Nama'
                        validation={{ required: 'Nama Lengkap harus diisi' }}
                      />
                      <Input
                        id='username'
                        label='Username'
                        placeholder='Jhondhoe24'
                        validation={{ required: 'Username harus diisi' }}
                      />
                      <Input
                        id='email'
                        label='Email'
                        placeholder='Masukkan Email'
                        helperText='Email harus berformat example@mail.com'
                        validation={{
                          required: 'Email harus diisi',
                          pattern: {
                            value: REG_EMAIL,
                            message: 'Email tidak sesuai format',
                          },
                        }}
                      />

                      <Input
                        id='phone_number'
                        label='Nomor Telpon'
                        placeholder='Masukkan Nomor Telpon'
                        validation={{ required: 'Nomor Telpon harus diisi' }}
                      />
                    </div>
                    <div className='flex flex-col gap-5 lg:col-span-6'>
                      <Input
                        id='agama'
                        label='Agama'
                        placeholder='Masukkan Agama'
                        validation={{ required: 'Agama harus diisi' }}
                      />
                      <div className='flex flex-col gap-2 mt-[18px]'>
                        <Typography
                          font='inter'
                          variant='c1'
                          weight='semibold'
                          className='text-sm'
                        >
                          Jenis Kelamin
                        </Typography>
                        <div className='flex items-center gap-6'>
                          <div className='flex items-center gap-2'>
                            <input
                              type='radio'
                              name='jenis-kelamin'
                              id='jenis_kelamin'
                              value={'laki-laki'}
                            />
                            <label htmlFor=''>Laki-laki</label>
                          </div>
                          <div className='flex items-center gap-2'>
                            <input
                              type='radio'
                              name='jenis-kelamin'
                              id='jenis_kelamin'
                              value={'perempuan'}
                            />
                            <label htmlFor=''>Perempuan</label>
                          </div>
                        </div>
                      </div>

                      <Input
                        id='angkatan'
                        label='Jenjang'
                        placeholder='Masukkan Tahun Angkatan'
                        validation={{
                          required: 'Angkatan harus diisi',
                          pattern: {
                            value: REG_YEAR,
                            message: 'Angkatan harus berupa angka',
                          },
                        }}
                        helperText='Contoh: 2020'
                      />
                      <Input
                        id='jurusan'
                        label='Asal Jurusan'
                        placeholder='Masukkan Asal Jurusan'
                        validation={{ required: 'Asal Jurusan harus diisi' }}
                      />
                    </div>

                    <div className='lg:col-span-12 '>
                      <Typography
                        variant='t'
                        className='mb-5'
                        weight='semibold'
                      >
                        Pilihan Beasiswa
                      </Typography>
                      <div className='grid pb-8 lg:grid-cols-12 gap-9'>
                        <div className='col-span-6'>
                          <Input
                            id='program'
                            label='Program'
                            placeholder='Masukkan Program'
                            validation={{ required: 'Program harus diisi' }}
                          />
                        </div>
                        <div className='col-span-6'>
                          <Input
                            id='program'
                            label='Jenis Beasiswa'
                            placeholder='Masukkan Jenis Beasiswa'
                            validation={{
                              required: 'Janis Beasiswa harus diisi',
                            }}
                          />
                        </div>
                      </div>

                      <div className='grid gap-4 mt-8 lg:grid-cols-2 lg:gap-9'>
                        <ButtonLink
                          href=''
                          variant='unstyled'
                          className='w-full bg-[#E94759] py-2 text-white !rounded-[4px] hover:bg-[#ff697b] order-1 lg:order-none'
                        >
                          Batal
                        </ButtonLink>
                        <Button
                          isLoading={isPending}
                          type='submit'
                          leftIcon={MdOutlineSaveAlt}
                          variant='primary'
                          className='w-full'
                        >
                          Simpan Perubahan
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </section>
        {/* <section className='mt-20 lg:p-16 '>
          <FormProvider {...methods}>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='grid lg:grid-cols-12 gap-9 p-8 lg:p-16 bg-white rounded-2xl shadow-[0_0_25px_0_rgba(0,0,0,0.25)]'>
                <div className='grid lg:col-span-12 place-items-center'>
                  <div className=''>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='96'
                      height='96'
                      viewBox='0 0 96 96'
                      fill='none'
                    >
                      <g clip-path='url(#clip0_2524_5931)'>
                        <rect width='96' height='96' rx='48' fill='#E2EFFF' />
                        <path
                          d='M64.957 36.2666C64.957 45.6923 57.3512 53.3333 47.969 53.3333C38.5868 53.3333 30.981 45.6923 30.981 36.2666C30.981 26.841 38.5868 19.2 47.969 19.2C57.3512 19.2 64.957 26.841 64.957 36.2666Z'
                          fill='#1B7691'
                        />
                        <path
                          d='M47.969 66.1333C31.5501 66.1333 18.24 79.5051 18.24 96H77.6981C77.6981 79.5051 64.3879 66.1333 47.969 66.1333Z'
                          fill='#1B7691'
                        />
                        <path
                          d='M64.957 36.2666C64.957 45.6923 57.3512 53.3333 47.969 53.3333C38.5868 53.3333 30.981 45.6923 30.981 36.2666C30.981 26.841 38.5868 19.2 47.969 19.2C57.3512 19.2 64.957 26.841 64.957 36.2666Z'
                          stroke='#1B7691'
                          stroke-width='12'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M47.969 66.1333C31.5501 66.1333 18.24 79.5051 18.24 96H77.6981C77.6981 79.5051 64.3879 66.1333 47.969 66.1333Z'
                          stroke='#1B7691'
                          stroke-width='12'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_2524_5931'>
                          <rect width='96' height='96' rx='48' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className='flex flex-col gap-5 lg:col-span-6'>
                  <Input
                    id='full_name'
                    label='Nama Lengkap'
                    placeholder='Masukkan Nama'
                    validation={{ required: 'Nama Lengkap harus diisi' }}
                  />
                  <Input
                    id='username'
                    label='Username'
                    placeholder='Jhondhoe24'
                    validation={{ required: 'Username harus diisi' }}
                  />
                  <Input
                    id='email'
                    label='Email'
                    placeholder='Masukkan Email'
                    helperText='Email harus berformat example@mail.com'
                    validation={{
                      required: 'Email harus diisi',
                      pattern: {
                        value: REG_EMAIL,
                        message: 'Email tidak sesuai format',
                      },
                    }}
                  />

                  <Input
                    id='phone_number'
                    label='Nomor Telpon'
                    placeholder='Masukkan Nomor Telpon'
                    validation={{ required: 'Nomor Telpon harus diisi' }}
                  />
                </div>
                <div className='flex flex-col gap-5 lg:col-span-6'>
                  <Input
                    id='agama'
                    label='Agama'
                    placeholder='Masukkan Agama'
                    validation={{ required: 'Agama harus diisi' }}
                  />
                  <div className='flex flex-col gap-2 mt-[18px]'>
                    <Typography
                      font='inter'
                      variant='c1'
                      weight='semibold'
                      className='text-sm'
                    >
                      Jenis Kelamin
                    </Typography>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='jenis-kelamin'
                          id='jenis_kelamin'
                          value={'laki-laki'}
                        />
                        <label htmlFor=''>Laki-laki</label>
                      </div>
                      <div className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='jenis-kelamin'
                          id='jenis_kelamin'
                          value={'perempuan'}
                        />
                        <label htmlFor=''>Perempuan</label>
                      </div>
                    </div>
                  </div>

                  <Input
                    id='angkatan'
                    label='Jenjang'
                    placeholder='Masukkan Tahun Angkatan'
                    validation={{
                      required: 'Angkatan harus diisi',
                      pattern: {
                        value: REG_YEAR,
                        message: 'Angkatan harus berupa angka',
                      },
                    }}
                    helperText='Contoh: 2020'
                  />
                  <Input
                    id='jurusan'
                    label='Asal Jurusan'
                    placeholder='Masukkan Asal Jurusan'
                    validation={{ required: 'Asal Jurusan harus diisi' }}
                  />
                </div>

                <div className='lg:col-span-12 '>
                  <Typography variant='t' className='mb-5' weight='semibold'>
                    Pilihan Beasiswa
                  </Typography>
                  <div className='grid pb-8 lg:grid-cols-12 gap-9'>
                    <div className='col-span-6'>
                      <Input
                        id='program'
                        label='Program'
                        placeholder='Masukkan Program'
                        validation={{ required: 'Program harus diisi' }}
                      />
                    </div>
                    <div className='col-span-6'>
                      <Input
                        id='program'
                        label='Jenis Beasiswa'
                        placeholder='Masukkan Jenis Beasiswa'
                        validation={{ required: 'Janis Beasiswa harus diisi' }}
                      />
                    </div>
                  </div>

                  <div className='grid gap-4 mt-8 lg:grid-cols-2 lg:gap-9'>
                    <ButtonLink
                      href=''
                      variant='unstyled'
                      className='w-full bg-[#E94759] py-2 text-white !rounded-[4px] hover:bg-[#ff697b] order-1 lg:order-none'
                    >
                      Batal
                    </ButtonLink>
                    <Button
                      isLoading={isLoading}
                      type='submit'
                      leftIcon={MdOutlineSaveAlt}
                      variant='primary'
                      className='w-full'
                    >
                      Simpan Perubahan
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </FormProvider>
        </section> */}
      </main>
    </Layout>
  );
}

export default withAuth(EditProfile, "user");