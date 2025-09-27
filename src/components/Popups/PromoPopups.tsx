import FingerprintJS from '@fingerprintjs/fingerprintjs';
import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import api from '@/lib/api';
import { User } from '@/types/entities/user';
import { getToken, removeToken } from '@/lib/cookies';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaFileAlt,
  FaCalendarAlt,
} from 'react-icons/fa';
import useAuthStore from '@/store/useAuthStore';
import { DANGER_TOAST, showToast, SUCCESS_TOAST, WARNING_TOAST } from '@/components/Toast';




const PromoPopup : React.FC = () => {
  // const fpPromise = FingerprintJS.load();
  // const fp = await fpPromise;
  // const result = await fp.get();
  // const deviceId = result.visitorId;
  const [deviceId, setDeviceId] = useState<string | null>(null);

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setDeviceId(result.visitorId);
      console.log("Device ID:", result.visitorId);
    };
    loadFingerprint();
  }, []);



 const router = useRouter();
  const user = useAuthStore.useUser() as User | null;

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkTrialStatus = useCallback(async (userId: number, token: string) => {
  try {
    const res = await api.get(`/lms/trial/user/${userId}/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return !res.data.status;
  } catch (err: any) {
    if (err.response?.status === 404) return true;
    console.error('Gagal cek status trial', err);
    return false;
  }
}, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const showPopupWithBlur = () => {
      setShowPopup(true);
      document.body.style.overflow = 'hidden';
      const mainContent = document.querySelector('main');
      if (mainContent) {
        (mainContent as HTMLElement).style.filter = 'blur(2px) brightness(0.4)';
        (mainContent as HTMLElement).style.transition = 'filter 0.3s ease-in-out';
      }
    };

    const runCheck = async () => {
      const token = getToken();
      if (!token) {
        timer = setTimeout(showPopupWithBlur, 1500);
        return;
      }

      if (user?.id && user.token) {
        const hasNoTrial = await checkTrialStatus(user.id, user.token);
        if (hasNoTrial) timer = setTimeout(showPopupWithBlur, 1500);
      }
    };

    runCheck();

    return () => {
      if (timer) clearTimeout(timer);
      document.body.style.overflow = 'unset';
      const mainContent = document.querySelector('main');
      if (mainContent) (mainContent as HTMLElement).style.filter = 'none';
    };
  }, [user, checkTrialStatus]);

  const handleClose = () => {
    setShowPopup(false);
    document.body.style.overflow = 'unset';
    const mainContent = document.querySelector('main');
    if (mainContent) (mainContent as HTMLElement).style.filter = 'none';
  };

 const handleTrialClick = async () => {
  if (!user?.token) {
    showToast('Silahkan Register atau Login Dahulu', WARNING_TOAST);
    router.replace('/auth/register');
    return;
  }

  setLoading(true);

  try {
    await api.get('/auth/me', {
      headers: { Authorization: `Bearer ${user.token}` },
    });

  const res = await api.get('/products/booster?program=LMS', {
    headers: { Authorization: `Bearer ${user.token}` },
  });

  const productId = res.data?.data[0]?.id;
  console.log("Product ID:", productId);

  // if (!productId) {
  //   showToast('Program tidak ditemukan', DANGER_TOAST);
  //   setLoading(false);
  //   return;
  // }

    const trialBody = {
      product_id: productId,
      device_id: deviceId,
    };


    const trialRes = await api.post('/lms/trial', trialBody, {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    const message = trialRes.data?.message || 'Trial berhasil dimulai!';
    showToast(message, SUCCESS_TOAST);

    handleClose();
    router.push('/dashboard');
  } catch (err: any) {
    console.error('Error response:', err.response?.data);

    let message = 'Terjadi kesalahan, coba lagi.';

    if (err.response) {
      const status = err.response.status;
      const serverMessage = err.response.data?.message;

      if (status === 401) {
        message = 'Token tidak valid, silakan login ulang.';
      } else if (status === 409) {
        message = serverMessage || 'Trial sudah pernah dibuat untuk device ini.';
      } else if (status === 400) {
        message = serverMessage || 'Request tidak valid.';
      } else if (status >= 500) {
        showToast("Berhasil Trial", SUCCESS_TOAST);

      } else {
        message = serverMessage || message;
      }
    } else if (err.message) {
      message = err.message;
    }

    showToast(message, DANGER_TOAST);
  } finally {
    setLoading(false);
  }
};


  if (!showPopup) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes popupFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popupSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      <div
        className='fixed inset-0 z-[9999] flex items-center justify-center p-4'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.30)',
          animation: 'popupFadeIn 0.4s ease-out forwards',
        }}
      >
        <div
          className='relative w-full max-w-2xl mx-4 overflow-hidden bg-white shadow-2xl rounded-2xl'
          style={{
            opacity: 0,
            transform: 'translateY(20px) scale(0.96)',
            animation: 'popupSlideIn 0.4s ease-out 0.1s forwards',
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className='absolute z-10 flex items-center justify-center p-2 transition-all duration-200 bg-white rounded-full top-4 right-4 bg-opacity-90 hover:bg-opacity-100 hover:scale-110'
          >
            <X size={20} className='text-gray-600' />
          </button>

          {/* Header */}
          <div
            className='px-6 pt-8 pb-4 text-center text-white'
            style={{
              background: 'linear-gradient(135deg, #1B7691 0%, #FB991A 70%)',
            }}
          >
            <div className='inline-flex items-center justify-center w-16 h-16 mb-4 bg-white rounded-full bg-opacity-20'>
              <Image
                src='/images/landing/haira-hero-mobile.png'
                alt='icon'
                width={64}
                height={64}
                className='w-8 h-8'
              />
            </div>
            <h2 className='mb-2 text-2xl font-bold'>
              Saatnya <span style={{ color: '#26aebe' }}>#JadiBisa</span>{' '}
            </h2>
            <p className='text-sm text-white text-opacity-90'>
              Dapatkan beasiswa yang sesuai dan raih lebih banyak impian!
            </p>
          </div>

          {/* Content */}
          <div className='px-8 py-8'>
            {/* Feature List */}
            <div className='mb-8 space-y-6'>
              <div className='flex items-start space-x-3'>
                <FaGraduationCap size={28} className='mt-1 text-blue-600' />
                <div>
                  <p className='font-semibold text-gray-800'>
                    Rekomendasi Beasiswa Otomatis
                  </p>
                  <p className='text-sm text-gray-600'>
                    100% sesuai profil diri
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <FaChalkboardTeacher
                  size={28}
                  className='mt-1 text-green-600'
                />
                <div>
                  <p className='font-semibold text-gray-800'>
                    Dibimbing Mendaftar Tiap Beasiswa
                  </p>
                  <p className='text-sm text-gray-600'>
                    500+ video kelas dan forum konsultasi
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <FaFileAlt size={28} className='mt-1 text-yellow-600' />
                <div>
                  <p className='font-semibold text-gray-800'>
                    Contoh Dokumen Beasiswa
                  </p>
                  <p className='text-sm text-gray-600'>
                    100+ contoh esai penerima beasiswa
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <FaCalendarAlt size={28} className='mt-1 text-red-600' />
                <div>
                  <p className='font-semibold text-gray-800'>
                    Kalender Event dan Beasiswa
                  </p>
                  <p className='text-sm text-gray-600'>
                    Akses info peluang prestasi dan beasiswa sepanjang tahun
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleTrialClick}
              className='w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg'
              style={{
                background: 'linear-gradient(135deg, #1B7691 0%, #FB991A 100%)',
                boxShadow: '0 4px 15px rgba(27, 118, 145, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 10px 25px rgba(27, 118, 145, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 4px 15px rgba(27, 118, 145, 0.2)';
              }}
            >
              Mulai Rp49K / bulan
            </button>

            <p className='mt-3 text-xs text-center text-gray-500'>
              Tidak ada biaya tersembunyi • Batalkan kapan saja
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoPopup;


