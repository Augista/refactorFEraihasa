'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { ImSpinner8 } from 'react-icons/im';

import Button from '@/components/buttons/Button';
import Typography from '@/components/Typography';
import { usePostStepData } from '@/pages/rekomendasi-beasiswa/_hooks/@post/usePostStepData';
import CardRekomendasi from '@/pages/rekomendasi-beasiswa/components/CardRekomendasi';
import {
  Count,
  HasilRekomendasi,
  RecommendationScholarshipRequest,
} from '@/pages/rekomendasi-beasiswa/types/recommendation-scholarship';
import useAuthStore from '@/store/useAuthStore';

interface RekomendasiBeasiswaProps {
  onNext: () => void;
  onBack: () => void;
  payload?: Record<string, unknown>;
  data: HasilRekomendasi[];
  filter?: string;
  count?: Count;
  stepFields?: string[];
}

export default function RekomendasiBeasiswa({
  onNext,
  onBack,
  payload: _payload = {},
  data,
  filter = '[Filter]',
  count,
  stepFields,
}: RekomendasiBeasiswaProps) {
  const [rekomendasi, setRekomendasi] =
    React.useState<HasilRekomendasi[]>(data);
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const [page, setPage] = React.useState<number>(1);
  const totalCount = count?.total || 0;

  // State for non-authenticated users
  const [displayedCount, setDisplayedCount] = React.useState<number>(
    isAuthenticated ? rekomendasi.length : 3
  );

  // Generate dummy data for non-authenticated users
  const generateDummyScholarship = React.useCallback(
    (index: number): HasilRekomendasi => {
      // Randomly determine if scholarship is open or closed (50/50 chance)
      // This ensures dummy data is distributed between both sections
      const isOpen = Math.random() < 0.5;

      // Set registration dates based on open/closed status
      const openDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
      const closeDate = isOpen
        ? new Date(Date.now() + (10 + Math.random() * 50) * 24 * 60 * 60 * 1000) // 10-60 days from now (open)
        : new Date(Date.now() - (1 + Math.random() * 30) * 24 * 60 * 60 * 1000); // 1-31 days ago (closed)

      // Random scholarship types and names for variety
      const scholarshipTypes = [
        'Prestasi',
        'Ekonomi',
        'Regional',
        'Internasional',
        'Penelitian',
      ];
      const organizations = [
        'Yayasan Pendidikan',
        'Pemerintah Daerah',
        'Perusahaan',
        'Universitas',
        'Lembaga Internasional',
      ];
      const levels = ['S1', 'S2', 'S3', 'D3', 'D4'];

      const randomType =
        scholarshipTypes[Math.floor(Math.random() * scholarshipTypes.length)];
      const randomOrg =
        organizations[Math.floor(Math.random() * organizations.length)];
      const randomLevel = levels[Math.floor(Math.random() * levels.length)];

      return {
        id: `dummy-${index}`,
        nama: `Beasiswa ${randomType} ${index}`,
        jenis: randomType,
        penyelenggara: randomOrg,
        benefit:
          'Informasi benefit akan tersedia setelah login. Daftar sekarang untuk melihat detail lengkap dan persyaratan beasiswa ini.',
        open_registration: openDate,
        close_registration: closeDate,
        khusus_daerah_tertentu: Math.random() < 0.3, // 30% chance
        asal_daerah: '',
        status_batas_usia: Math.random() < 0.4, // 40% chance
        min_umur: 17,
        max_umur: 25,
        status_gender_khusus: false,
        gender: '',
        jenjang: randomLevel,
        status_semester_khusus: false,
        semester_khusus: 0,
        status_fakultas_khusus: false,
        status_jurusan_khusus: false,
        status_kebutuhan_ipk: Math.random() < 0.6, // 60% chance
        min_ipk: 3.0 + Math.random() * 0.5, // 3.0-3.5
        status_beasiswa_double: false,
        status_keluarga_tidak_mampu: Math.random() < 0.4, // 40% chance
        status_disabilitas: false,
        img_path: '',
        is_open: isOpen,
        kampus_bisa_daftar: [],
        link_guidebook: '',
        link_pendaftaran: '',
        persyaratan: [],
        lainnya: [],
        deskripsi: 'Deskripsi lengkap akan tersedia setelah login.',
      };
    },
    []
  );

  // Combine real data with dummy data for non-authenticated users
  const extendedRekomendasi = React.useMemo(() => {
    if (isAuthenticated) {
      return rekomendasi;
    }

    const realData = rekomendasi.slice(0, 3); // Only first 3 real scholarships
    const dummyCount = Math.min(
      displayedCount - realData.length,
      totalCount - realData.length
    );
    const dummyData = Array.from(
      { length: Math.max(0, dummyCount) },
      (_, index) => generateDummyScholarship(realData.length + index + 1)
    );

    return [...realData, ...dummyData];
  }, [
    rekomendasi,
    isAuthenticated,
    displayedCount,
    totalCount,
    generateDummyScholarship,
  ]);

  // Separate recommendations based on registration status
  const { openRekomendasi, closedRekomendasi } = React.useMemo(() => {
    const open: HasilRekomendasi[] = [];
    const closed: HasilRekomendasi[] = [];

    extendedRekomendasi.forEach((item) => {
      if (item.is_open) {
        open.push(item);
      } else {
        closed.push(item);
      }
    });

    return { openRekomendasi: open, closedRekomendasi: closed };
  }, [extendedRekomendasi]);

  // Memoized authenticated recommendations - open scholarships
  const authenticatedOpenRekomendasi = React.useMemo(() => {
    return openRekomendasi.map((item, index) => (
      <CardRekomendasi
        key={`auth-open-${item.id}-${index}`}
        {...item}
        status_disabled={false}
      />
    ));
  }, [openRekomendasi]);

  // Memoized authenticated recommendations - closed scholarships
  const authenticatedClosedRekomendasi = React.useMemo(() => {
    return closedRekomendasi.map((item, index) => (
      <CardRekomendasi
        key={`auth-closed-${item.id}-${index}`}
        {...item}
        status_disabled={false}
      />
    ));
  }, [closedRekomendasi]);

  // Memoized non-authenticated recommendations - open scholarships
  const nonAuthenticatedOpenRekomendasi = React.useMemo(() => {
    return openRekomendasi.map((item, index) => {
      const isDummy = item.id.startsWith('dummy-');
      const isLocked = !isAuthenticated && (index >= 3 || isDummy);

      return (
        <CardRekomendasi
          key={`non-auth-open-${item.id}-${index}`}
          {...item}
          status_disabled={isLocked}
        />
      );
    });
  }, [openRekomendasi, isAuthenticated]);

  // Memoized non-authenticated recommendations - closed scholarships
  const nonAuthenticatedClosedRekomendasi = React.useMemo(() => {
    return closedRekomendasi.map((item, index) => {
      const isDummy = item.id.startsWith('dummy-');
      const isLocked = !isAuthenticated && (index >= 3 || isDummy);

      return (
        <CardRekomendasi
          key={`non-auth-closed-${item.id}-${index}`}
          {...item}
          status_disabled={isLocked}
        />
      );
    });
  }, [closedRekomendasi, isAuthenticated]);

  // Hook for loading more data
  const {
    mutate: mutateStepData,
    data: dataHasilRekomendasi,
    isPending,
  } = usePostStepData();

  // Update rekomendasi when data prop changes
  React.useEffect(() => {
    setRekomendasi(data);
  }, [data]);

  // Update rekomendasi when new data is loaded from infinite scroll
  React.useEffect(() => {
    if (dataHasilRekomendasi?.data.rekomendasi_beasiswa.scholarships) {
      setRekomendasi((prev) => [
        ...prev,
        ...dataHasilRekomendasi.data.rekomendasi_beasiswa.scholarships,
      ]);
    }
  }, [dataHasilRekomendasi]);

  // Memoized condition for showing load more button
  const shouldShowLoadMore = React.useMemo(() => {
    if (isAuthenticated) {
      return page < totalCount / 9;
    } else {
      // For non-authenticated users, show load more if displayed count is less than total count
      return displayedCount < totalCount;
    }
  }, [page, totalCount, isAuthenticated, displayedCount]);

  // Load more function for non-authenticated users (dummy data)
  const loadMoreDummyData = React.useCallback(() => {
    const increment = 6; // Load 6 more dummy items
    const newDisplayedCount = Math.min(displayedCount + increment, totalCount);
    setDisplayedCount(newDisplayedCount);
  }, [displayedCount, totalCount, setDisplayedCount]);

  // Memoized helper functions
  const getStoredData =
    React.useCallback((): RecommendationScholarshipRequest | null => {
      if (typeof window === 'undefined') return null;

      try {
        const item = localStorage.getItem('scholarship_recommendation_data');
        return item ? JSON.parse(item) : null;
      } catch {
        return null;
      }
    }, []);

  const getStoredField = React.useCallback(
    (fieldName: keyof RecommendationScholarshipRequest) => {
      const stored = getStoredData();
      return stored?.[fieldName];
    },
    [getStoredData]
  );

  const getRecommendationId = React.useCallback((): string | null => {
    if (typeof window === 'undefined') return null;

    const storedId = getStoredField('id');
    if (storedId) {
      return String(storedId);
    }
    const storedDataValue = getStoredData();
    if (storedDataValue?.id) {
      return String(storedDataValue.id);
    }

    return null;
  }, [getStoredField, getStoredData]);

  // State to track scroll position restoration
  const [scrollRestorationData, setScrollRestorationData] = React.useState<{
    shouldRestore: boolean;
    targetScrollY: number;
  } | null>(null);

  // Effect to handle scroll position restoration after data loading completes
  React.useEffect(() => {
    if (!isPending && scrollRestorationData?.shouldRestore) {
      const { targetScrollY } = scrollRestorationData;

      const restoreScrollPosition = () => {
        // Maintain exact scroll position without any movement
        // Use 'instant' behavior to prevent any smooth scrolling animation
        window.scrollTo(0, targetScrollY);
      };

      // Use multiple timing approaches to ensure position is locked
      // Immediate restoration
      restoreScrollPosition();

      // Backup attempts to ensure position stays locked
      requestAnimationFrame(restoreScrollPosition);
      requestAnimationFrame(() => {
        requestAnimationFrame(restoreScrollPosition);
      });

      // Additional safety nets with progressive delays
      setTimeout(restoreScrollPosition, 10);
      setTimeout(restoreScrollPosition, 25);
      setTimeout(restoreScrollPosition, 50);
      setTimeout(restoreScrollPosition, 100);

      // Clear the restoration data
      setScrollRestorationData(null);
    }
  }, [isPending, scrollRestorationData]);

  // Additional effect to maintain scroll position during loading
  React.useEffect(() => {
    if (isPending && scrollRestorationData?.shouldRestore) {
      const { targetScrollY } = scrollRestorationData;

      const maintainScrollPosition = () => {
        window.scrollTo(0, targetScrollY);
      };

      // Continuously maintain position during loading
      const intervalId = setInterval(maintainScrollPosition, 16); // ~60fps

      return () => clearInterval(intervalId);
    }
  }, [isPending, scrollRestorationData]);

  const loadMoreRekomendasi = React.useCallback(async () => {
    // For non-authenticated users, just load more dummy data
    if (!isAuthenticated) {
      loadMoreDummyData();
      return;
    }

    // For authenticated users, proceed with API call
    // Save current scroll position before loading new content
    const currentScrollY = window.scrollY;

    // Set up scroll restoration data
    setScrollRestorationData({
      shouldRestore: true,
      targetScrollY: currentScrollY,
    });

    const storedData = getStoredData();
    let completePayload: Record<string, unknown> = {};

    // Start with the stored data from localStorage
    if (storedData) {
      completePayload = { ...storedData };
    }

    // If stepFields are provided, filter to only include relevant fields
    if (stepFields && stepFields.length > 0) {
      const filteredData: Record<string, unknown> = {};
      stepFields.forEach((field) => {
        if (
          storedData &&
          storedData[field as keyof RecommendationScholarshipRequest] !==
            undefined
        ) {
          filteredData[field] =
            storedData[field as keyof RecommendationScholarshipRequest];
        }
      });
      completePayload = filteredData;
    }

    // Add ID if available
    const recommendationId = getRecommendationId();
    if (recommendationId) {
      completePayload.id = recommendationId;
    }

    // Add page number and limit to the payload
    completePayload.page = page;
    completePayload.limit = 9; // Standard limit for authenticated users

    // Update page state first
    setPage((prev) => prev + 1);

    // Execute the mutation - scroll restoration will be handled by the useEffect above
    mutateStepData(completePayload);
  }, [
    isAuthenticated,
    loadMoreDummyData,
    stepFields,
    page,
    mutateStepData,
    getRecommendationId,
    getStoredData,
    setScrollRestorationData,
  ]);

  return (
    <div className='container z-10 flex flex-col items-center justify-center w-full h-full gap-6 m-auto mx-auto'>
      <div className='flex flex-col items-center justify-center w-full gap-16'>
        <div className='flex flex-col items-center justify-center w-full gap-12'>
          <div className='flex flex-col gap-3 items-center justify-center max-w-[898px] text-center'>
            <Typography
              className='text-balance text-[#FB991A] text-[28px] md:text-[36px] lg:text-[48px]'
              weight='bold'
            >
              Kami menemukan Beasiswa Berdasarkan {filter}!
            </Typography>
            <Typography className='text-balance text-[#1B7691] text-[16px] md:text-[20px]'>
              Kami telah menemukan peluang beasiswa terbaik untukmu.
            </Typography>
          </div>
          <div className='flex flex-col items-center justify-start gap-6'>
            {/* Open Scholarships Section */}
            {openRekomendasi.length > 0 && (
              <div className='flex flex-col items-center justify-center w-full gap-3'>
                <Typography
                  weight='bold'
                  className='text-balance text-[#FB991A] text-[28px] md:text-[36px] lg:text-[48px] w-full text-center '
                >
                  Sedang Dibuka
                </Typography>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-[1128px] w-full'>
                  {/*   ↑ Ubah dari flex flex-wrap menjadi grid dengan auto-rows-fr */}
                  {isAuthenticated
                    ? authenticatedOpenRekomendasi
                    : nonAuthenticatedOpenRekomendasi}
                </div>
              </div>
            )}

            {/* Closed Scholarships Section */}
            {closedRekomendasi.length > 0 && (
              <div className='flex flex-col items-center justify-center w-full gap-3'>
                <Typography
                  weight='bold'
                  className='text-balance text-[#FB991A] text-[28px] md:text-[36px] lg:text-[48px]  w-full text-center'
                >
                  Pendaftaran Ditutup
                </Typography>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr max-w-[1128px] w-full'>
                  {/*   ↑ Ubah dari flex flex-wrap menjadi grid dengan auto-rows-fr */}
                  {isAuthenticated
                    ? authenticatedClosedRekomendasi
                    : nonAuthenticatedClosedRekomendasi}
                </div>
              </div>
            )}

            {shouldShowLoadMore && (
              <Button
                className='w-full rounded-[12px] md:w-[250px] flex gap-2 items-center justify-center py-[12px] px-6 transition-opacity duration-200'
                onClick={loadMoreRekomendasi}
                disabled={isAuthenticated ? isPending : false}
              >
                <Typography
                  className='flex gap-2 items-center text-[16px] font-semibold'
                  variant='bt'
                >
                  Lihat Lebih Banyak
                  {isPending ? (
                    <ImSpinner8 className='text-xl animate-spin' />
                  ) : (
                    <FaArrowDown />
                  )}
                </Typography>
              </Button>
            )}
          </div>
        </div>

        <div className='flex flex-col-reverse items-center justify-center w-full gap-4 md:flex-row '>
          <Button
            className='w-full rounded-[12px] md:w-[200px] max-h-[44px] text-[16px] py-[12px] px-6 font-semibold text-primary-blue hover:text-primary-blue active:text-primary-blue hover:border-primary-blue hover:bg-primary-blue/10 active:border-primary-blue active:bg-primary-blue/20 border-2 border-[#D4D4D8]'
            variant='unstyled'
            onClick={onBack}
          >
            Kembali
          </Button>
          <Button
            onClick={onNext}
            className='w-full rounded-[12px] md:w-[200px] flex gap-2 items-center justify-center py-[12px] px-6'
          >
            <Typography
              className='flex gap-2 items-center text-[16px] font-semibold'
              variant='bt'
            >
              Berikutnya
              <FaArrowRightLong />
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}
