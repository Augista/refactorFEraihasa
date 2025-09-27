import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';

import Button from '@/components/buttons/Button';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import { useGetAllRekomendasi } from '@/pages/rekomendasi-beasiswa/_hooks/@get/useGetAllRekomendasi';
import CardRekomendasiAll from '@/pages/rekomendasi-beasiswa/components/CardRekomendasiAll';
import { HasilRekomendasi } from '@/pages/rekomendasi-beasiswa/types/recommendation-scholarship';
import useAuthStore from '@/store/useAuthStore';

export type RekomendasiAllBeasiswaProps = {
  berdasarkan: string;
  rekomendasi: HasilRekomendasi[];
};

export default function RekomendasiAllBeasiswa() {
  const router = useRouter();
  const { isReady } = router;
  const rekomendasiId = router.query.rekomendasi_id as string;
  const isAuthenticated = useAuthStore.useIsAuthenticated();

  // State for infinite scroll
  const [page, setPage] = React.useState(1);
  const [allScholarships, setAllScholarships] = React.useState<
    HasilRekomendasi[]
  >([]);
  const [totalCount, setTotalCount] = React.useState(0);

  // State for non-authenticated users dummy data
  const [displayedCount, setDisplayedCount] = React.useState<number>(0);

  // State to track scroll position restoration
  const [scrollRestorationData, setScrollRestorationData] = React.useState<{
    shouldRestore: boolean;
    targetScrollY: number;
  } | null>(null);

  // Get data for current page
  const {
    data: rekomendasiData,
    isLoading,
    isFetching,
    error,
  } = useGetAllRekomendasi(rekomendasiId ?? '', page);

  // Initialize data on first load
  React.useEffect(() => {
    if (rekomendasiData && page === 1) {
      setAllScholarships(rekomendasiData.scholarships || []);
      setTotalCount(rekomendasiData.count?.total || 0);
      setDisplayedCount(rekomendasiData.scholarships?.length || 0);
    }
  }, [rekomendasiData, page]);

  // Generate dummy data for non-authenticated users with random distribution
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

  // Handle infinite scroll - append new data
  React.useEffect(() => {
    if (rekomendasiData && page > 1) {
      const newScholarships = rekomendasiData.scholarships || [];
      if (newScholarships.length > 0) {
        setAllScholarships((prev) => [...prev, ...newScholarships]);
        setDisplayedCount((prev) => prev + newScholarships.length);
      }
      // Update total count in case it changed
      if (rekomendasiData.count?.total) {
        setTotalCount(rekomendasiData.count.total);
      }
    }
  }, [rekomendasiData, page]);

  // Combine real data with dummy data for non-authenticated users
  const extendedScholarships = React.useMemo(() => {
    if (isAuthenticated) {
      return allScholarships;
    }

    // For non-authenticated users, add dummy data beyond the real data
    if (displayedCount > allScholarships.length) {
      const dummyCount = displayedCount - allScholarships.length;
      const dummyData = Array.from({ length: dummyCount }, (_, index) =>
        generateDummyScholarship(allScholarships.length + index + 1)
      );
      return [...allScholarships, ...dummyData];
    }

    return allScholarships;
  }, [
    allScholarships,
    isAuthenticated,
    displayedCount,
    generateDummyScholarship,
  ]);

  // Scroll position preservation - restore once after loading completes
  React.useEffect(() => {
    if (!isFetching && scrollRestorationData?.shouldRestore) {
      const { targetScrollY } = scrollRestorationData;

      const restoreScrollPosition = () => {
        // Maintain exact scroll position without any movement
        // Use direct scrollTo without behavior to prevent any smooth scrolling animation
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
  }, [isFetching, scrollRestorationData]);

  // Additional effect to maintain scroll position during loading
  React.useEffect(() => {
    if (isFetching && scrollRestorationData?.shouldRestore) {
      const { targetScrollY } = scrollRestorationData;

      const maintainScrollPosition = () => {
        window.scrollTo(0, targetScrollY);
      };

      // Continuously maintain position during loading
      const intervalId = setInterval(maintainScrollPosition, 16); // ~60fps

      return () => clearInterval(intervalId);
    }
  }, [isFetching, scrollRestorationData]);

  // Memoized load more function with scroll preservation
  const loadMoreRekomendasi = React.useCallback(() => {
    if (isFetching) return;

    // For non-authenticated users, just load more dummy data
    if (!isAuthenticated) {
      const increment = 10; // Load 10 more dummy items
      const newDisplayedCount = Math.min(
        displayedCount + increment,
        totalCount
      );
      setDisplayedCount(newDisplayedCount);
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

    setPage((prev) => prev + 1);
  }, [isFetching, isAuthenticated, displayedCount, totalCount]);

  // Memoized condition for showing load more button
  const shouldShowLoadMore = React.useMemo(() => {
    if (isAuthenticated) {
      const limit = 10;
      const maxPage = Math.ceil(totalCount / limit);
      return page < maxPage && allScholarships.length < totalCount;
    } else {
      // For non-authenticated users, show load more if displayed count is less than total count
      return displayedCount < totalCount;
    }
  }, [
    page,
    totalCount,
    allScholarships.length,
    isAuthenticated,
    displayedCount,
  ]);

  // Utility function to check if registration is still open
  const isRegistrationOpen = React.useCallback((closeRegistration: Date) => {
    const currentDate = new Date();
    const closeDate = new Date(closeRegistration);
    return currentDate < closeDate;
  }, []);

  // Separate recommendations based on registration status
  const { openScholarships, closedScholarships } = React.useMemo(() => {
    const open: HasilRekomendasi[] = [];
    const closed: HasilRekomendasi[] = [];

    extendedScholarships.forEach((item) => {
      if (isRegistrationOpen(item.close_registration)) {
        open.push(item);
      } else {
        closed.push(item);
      }
    });

    return { openScholarships: open, closedScholarships: closed };
  }, [extendedScholarships, isRegistrationOpen]);

  // Memoized scholarship cards for authenticated users - open scholarships
  const authenticatedOpenCards = React.useMemo(() => {
    return openScholarships.map((item, index) => (
      <CardRekomendasiAll
        key={`auth-open-${item.id}-${index}`}
        {...item}
        status_disabled={false}
      />
    ));
  }, [openScholarships]);

  // Memoized scholarship cards for authenticated users - closed scholarships
  const authenticatedClosedCards = React.useMemo(() => {
    return closedScholarships.map((item, index) => (
      <CardRekomendasiAll
        key={`auth-closed-${item.id}-${index}`}
        {...item}
        status_disabled={false}
      />
    ));
  }, [closedScholarships]);

  // Memoized scholarship cards for non-authenticated users - open scholarships
  const nonAuthenticatedOpenCards = React.useMemo(() => {
    return openScholarships.map((item, index) => {
      const isDummy = item.id.startsWith('dummy-');
      const realDataCount = allScholarships.length;
      const previewLimit = Math.ceil(realDataCount / 1);

      // Find the global index in the extended scholarships
      const globalIndex = extendedScholarships.findIndex(
        (scholarship) => scholarship.id === item.id
      );

      const isLocked =
        !isAuthenticated && (globalIndex >= previewLimit || isDummy);

      return (
        <CardRekomendasiAll
          key={`non-auth-open-${item.id}-${index}`}
          {...item}
          status_disabled={isLocked}
        />
      );
    });
  }, [
    openScholarships,
    allScholarships,
    extendedScholarships,
    isAuthenticated,
  ]);

  // Memoized scholarship cards for non-authenticated users - closed scholarships
  const nonAuthenticatedClosedCards = React.useMemo(() => {
    return closedScholarships.map((item, index) => {
      const isDummy = item.id.startsWith('dummy-');
      const realDataCount = allScholarships.length;
      const previewLimit = Math.ceil(realDataCount / 1);

      // Find the global index in the extended scholarships
      const globalIndex = extendedScholarships.findIndex(
        (scholarship) => scholarship.id === item.id
      );

      const isLocked =
        !isAuthenticated && (globalIndex >= previewLimit || isDummy);

      return (
        <CardRekomendasiAll
          key={`non-auth-closed-${item.id}-${index}`}
          {...item}
          status_disabled={isLocked}
        />
      );
    });
  }, [
    closedScholarships,
    allScholarships,
    extendedScholarships,
    isAuthenticated,
  ]);

  // Show loading while router is not ready or initial data is loading
  if (!isReady || (isLoading && page === 1)) {
    return <Loading />;
  }

  // Handle error state
  if (error) {
    return (
      <Layout withFooter withNavbar>
        <main className='overflow-hidden bg-[#fff]'>
          <section className='relative flex h-full min-h-screen w-screen overflow-hidden pt-[200px] lg:pt-[140px] px-[16px] pb-16'>
            <div className='flex flex-col items-center justify-center w-full'>
              <Typography
                className='text-balance text-red-500 text-[24px] md:text-[32px] text-center'
                weight='bold'
              >
                Terjadi kesalahan saat memuat rekomendasi beasiswa
              </Typography>
              <Typography className='text-gray-600 text-center mt-4'>
                Silakan coba lagi atau kembali ke halaman sebelumnya
              </Typography>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  // Handle case where no data is found
  if (!rekomendasiData && allScholarships.length === 0) {
    return (
      <Layout withFooter withNavbar>
        <main className='overflow-hidden bg-[#fff]'>
          <section className='relative flex h-full min-h-screen w-screen overflow-hidden pt-[200px] lg:pt-[140px] px-[16px] pb-16'>
            <div className='flex flex-col items-center justify-center w-full'>
              <Typography
                className='text-balance text-gray-500 text-[24px] md:text-[32px] text-center'
                weight='bold'
              >
                Rekomendasi beasiswa tidak ditemukan
              </Typography>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  return (
    <Layout withFooter withNavbar>
      <main className='overflow-hidden bg-[#fff]'>
        <section className='relative flex h-full min-h-screen w-screen overflow-hidden pt-[200px] lg:pt-[140px] px-[16px] pb-16'>
          <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex flex-col gap-8 items-center justify-center max-w-[1130px] text-center'>
              <div className='flex flex-col gap-2 items-center justify-center max-w-[1130px] text-center'>
                <Typography
                  className='text-balance text-[#1B7691] text-[28px] md:text-[36px] lg:text-[48px] text-center'
                  weight='bold'
                >
                  Kamu mendapatkan {totalCount} Rekomendasi Beasiswa yang
                  Sesuai!
                </Typography>
              </div>
              <div className='flex flex-col gap-5 items-center justify-center w-full'>
                {/* Open Scholarships Section */}
                {openScholarships.length > 0 && (
                  <div className='flex flex-col gap-5 items-center justify-center w-full'>
                    <Typography
                      weight='bold'
                      className='text-balance text-[#FB991A] text-[28px] md:text-[36px] lg:text-[48px]  w-full text-center'
                    >
                      Sedang Dibuka
                    </Typography>
                    <div className='flex flex-col gap-5 items-center justify-center w-full'>
                      {isAuthenticated
                        ? authenticatedOpenCards
                        : nonAuthenticatedOpenCards}
                    </div>
                  </div>
                )}

                {/* Closed Scholarships Section */}
                {closedScholarships.length > 0 && (
                  <div className='flex flex-col gap-5 items-center justify-center w-full'>
                    <Typography
                      weight='bold'
                      className='text-balance text-[#FB991A] text-[28px] md:text-[36px] lg:text-[48px]  w-full text-center'
                    >
                      Pendaftaran Ditutup
                    </Typography>
                    <div className='flex flex-col gap-5 items-center justify-center w-full'>
                      {isAuthenticated
                        ? authenticatedClosedCards
                        : nonAuthenticatedClosedCards}
                    </div>
                  </div>
                )}
              </div>
              {shouldShowLoadMore && (
                <Button
                  className='w-full rounded-[12px] md:w-[250px] flex gap-2 items-center justify-center py-[12px] px-6 transition-opacity duration-200'
                  onClick={loadMoreRekomendasi}
                  disabled={isAuthenticated ? isFetching : false}
                >
                  <Typography
                    className='flex gap-2 items-center text-[16px] font-semibold'
                    variant='bt'
                  >
                    Lihat Lebih Banyak
                    {isFetching && isAuthenticated ? (
                      <ImSpinner8 className='animate-spin text-xl' />
                    ) : (
                      <FaArrowDown />
                    )}
                  </Typography>
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
