import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import api from '@/lib/api';
import { FinalResultRecommendation } from '@/pages/rekomendasi-beasiswa/types/recommendation-scholarship';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';

export const useGetAllRekomendasi = (rekomendasi_id: string, page = 1) => {
  const router = useRouter();
  const result = useQuery<FinalResultRecommendation, Error>({
    queryKey: ['rekomendasi', rekomendasi_id, page],
    queryFn: async () => {
      if (!rekomendasi_id) {
        throw new Error('Rekomendasi ID is required');
      }
      const isAuthenticated = useAuthStore.getState().isAuthenticated;
      const limit = !isAuthenticated && page === 1 ? 3 : 10;

      const response = await api.get<ApiReturn<FinalResultRecommendation>>(
        `/scholarship/final-result/${rekomendasi_id}?page=${page}&limit=${limit}`,
        {
          validateStatus: () => true,
          data: {
            id: rekomendasi_id,
          },
        }
      );

      if (response.status === 404) {
        router.push('/404');
        throw new Error('Rekomendasi not found');
      }

      if (response.status !== 200) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.data.data;
    },
    enabled: !!rekomendasi_id, // Only run query if rekomendasi_id exists
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  return result;
};
