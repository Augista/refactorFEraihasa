import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import { useBeasiswaStore } from '@/store/useBeasiswaStore';

export default function Page() {
  const router = useRouter();
  const { selected, setSelected } = useBeasiswaStore();

  const [benefit, setBenefit] = useState<string[]>([]);

  useEffect(() => {
    if (selected) {
      const benefitsArray = selected.benefit ? selected.benefit.split('|') : [];
      setBenefit(benefitsArray);
    }
  }, [selected]);

  useEffect(() => {
    if (!selected) {
      const savedData = sessionStorage.getItem('selectedBeasiswa');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setSelected(parsedData);
      } else {
        router.push('/rekomendasi-beasiswa');
      }
    }
  }, [router, selected, setSelected]);

  if (!selected) return <p>Loading atau redirect fallback...</p>;

  const jenjangColors: Record<string, string> = {
    SMP: 'bg-blue-100 text-blue-800',
    'SMA/SMK Sederajat': 'bg-green-100 text-green-800',
    S1: 'bg-yellow-100 text-yellow-800',
    S2: 'bg-purple-100 text-purple-800',
    S3: 'bg-red-100 text-red-800',
  };
  const jenjangClass =
    jenjangColors[selected.jenjang?.toUpperCase() || ''] ||
    'bg-gray-100 text-gray-800';

  const isBeasiswaOpen = new Date(selected.close_registration) > new Date();

  const pendanaanColor: Record<string, string> = {
    'fully funded': 'bg-blue-100 text-blue-800',
    'partially funded': 'bg-purple-100 text-purple-800',
    riset: 'bg-yellow-100 text-yellow-800',
    mentoring: 'bg-green-100 text-green-800',
    partial: 'bg-purple-100 text-purple-800',
  };
  const pendanaanClass =
    pendanaanColor[selected.jenis?.toLowerCase() || ''] ||
    'bg-gray-100 text-gray-800';

  return (
    <>
      <SEO title={`Detail Beasiswa | ${selected.nama}`} />
      <Layout withFooter={true} withNavbar={true}>
        <div className='mt-20 py-10 px-4 md:px-10 lg:px-20'>
          <Typography className='font-bold' variant='h5'>
            {selected.nama ?? '-'}
          </Typography>
          <div className='flex items-center justify-normal gap-3'>
            <Typography
              className='text-gray-600 font-semibold text-[14px] lg:text-[18px]'
              variant='btn'
            >
              Oleh: {selected.penyelenggara ?? '-'}
            </Typography>
            <Typography>|</Typography>
            <Typography
              className={`text-[12px] lg:text-[14px] px-2 py-1 rounded-full ${jenjangClass}`}
              variant='p'
            >
              {selected.jenjang ?? '-'}
            </Typography>
          </div>
          <Typography className='text-gray-600 mt-4' variant='p'>
            {selected.deskripsi ?? '-'}
          </Typography>
          <hr className='border-[1.2px] rounded-full my-2 lg:my-4 border-gray-300' />
          <div
            className={`mt-3 py-3 px-4 rounded-lg ${
              isBeasiswaOpen ? 'bg-green-100' : 'bg-rose-100'
            }`}
          >
            <Typography
              variant='btn'
              className='mb-3 text-[12px] lg:text-[14px] font-semibold text-gray-600'
            >
              {isBeasiswaOpen
                ? 'ⓘ Daftar Sekarang, Beasiswa Masih Dibuka'
                : 'ⓘ Beasiswa Sudah Ditutup'}
            </Typography>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-start gap-x-6 '>
              <div className='md:border-r-[1.5px] border-none md:border-gray-600'>
                <Typography className='font-semibold' variant='p'>
                  Mulai Pendaftaran
                </Typography>
                <Typography className='text-gray-600' variant='p'>
                  {selected.open_registration
                    ? new Date(selected.open_registration).toLocaleDateString()
                    : '-'}
                </Typography>
              </div>
              <div>
                <Typography className='font-semibold' variant='p'>
                  Penutupan Pendaftaran
                </Typography>
                <Typography className='text-gray-600' variant='p'>
                  {selected.close_registration
                    ? new Date(selected.close_registration).toLocaleDateString()
                    : '-'}
                </Typography>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-y-6 gap-x-3'>
            <div>
              <Typography className='font-semibold' variant='p'>
                Kampus yang Bisa Mendaftar
              </Typography>
              {selected.kampus_bisa_daftar.length == 0 ? (
                <Typography className='text-gray-600' variant='p'>
                  -
                </Typography>
              ) : (
                <Typography className='text-gray-600' variant='p'>
                  {selected.kampus_bisa_daftar}
                </Typography>
              )}
            </div>
            <div>
              <Typography className='font-semibold' variant='p'>
                Guidebook
              </Typography>
              {selected.link_guidebook != null ? (
                <Link href={selected.link_guidebook}>
                  <Typography className='text-blue-600 underline ' variant='p'>
                    Akses Guidebook
                  </Typography>
                </Link>
              ) : (
                <Typography className='text-gray-600' variant='p'>
                  Guidebook Tidak Tersedia
                </Typography>
              )}
            </div>
            <div>
              <Typography className='font-semibold' variant='p'>
                Daftar Sekarang
              </Typography>
              {selected.link_pendaftaran != null ? (
                <Link href={selected.link_pendaftaran}>
                  <Typography className='text-blue-600 underline ' variant='p'>
                    Akses Link Pendaftaran
                  </Typography>
                </Link>
              ) : (
                <Typography className='text-gray-600' variant='p'>
                  Link Pendaftaran Tidak Tersedia
                </Typography>
              )}
            </div>
          </div>
          <hr className='border-[1.2px] rounded-full my-6 border-gray-300' />
          <div className='bg-green-100 rounded-lg px-4 py-3'>
            <div>
              <Typography className='font-semibold' variant='p'>
                Tipe Pendanaan
              </Typography>

              <Typography
                className={`${pendanaanClass} mt-2 w-fit px-3 py-1 rounded-sm`}
                variant='p'
              >
                {selected.jenis ?? '-'}
              </Typography>
            </div>

            <div className='mt-4'>
              <Typography className='font-semibold' variant='p'>
                Benefit
              </Typography>

              {benefit.length > 0 ? (
                <ul className='list-disc pl-5 mt-2'>
                  {benefit.map((item, index) => (
                    <li key={index} className='text-gray-600'>
                      <Typography className=''>{item.trim() || '-'}</Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography className='text-gray-600 mt-2' variant='p'>
                  Tidak ada benefit yang tersedia.
                </Typography>
              )}
            </div>
          </div>
          <hr className='border-[1.5px] rounded-full my-6 border-gray-300' />
          <div className='bg-gray-100 py-3 px-4 rounded-lg'>
            <Typography className='font-semibold' variant='p'>
              Persyaratan
            </Typography>
            {selected.persyaratan.map((item, index) => (
              <Typography
                className='text-gray-600 mt-2'
                variant='p'
                key={index}
              >
                {item.trim() || '-'}
              </Typography>
            ))}
            <Typography className='font-semibold mt-3' variant='p'>
              Lainnya
            </Typography>
            {selected.lainnya.map((item, index) => {
              const raw = item.trim();
              const withoutLast = raw.slice(0, raw.length - 1);
              const formatted = withoutLast
                ? withoutLast.charAt(0).toUpperCase() + withoutLast.slice(1)
                : '';

              return (
                <Typography
                  className='text-gray-600 mt-2'
                  variant='p'
                  key={index}
                >
                  {index + 1}. {formatted || '-'}
                </Typography>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
