import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import api from '@/lib/api';
import { RecommendationScholarshipResponse } from '@/pages/rekomendasi-beasiswa/types/recommendation-scholarship';
import useAuthStore from '@/store/useAuthStore';
import { ApiError, ApiReturn } from '@/types/api';

// Type untuk data per step
export type StepDataRequest = Record<string, unknown> & {
  page?: number;
};

export const usePostStepData = () => {
  return useMutation<
    ApiReturn<RecommendationScholarshipResponse>,
    AxiosError<ApiError>,
    StepDataRequest
  >({
    mutationFn: async (stepData: StepDataRequest) => {
      const page = stepData.page || 1;
      const isAuthenticated = useAuthStore.getState().isAuthenticated;
      const limit = !isAuthenticated && page === 1 ? 3 : 9;
      const response = await api.post<
        ApiReturn<RecommendationScholarshipResponse>
      >(`/scholarship/recommendation?page=${page}&limit=${limit}`, stepData);
      return response.data;
    },
    onSuccess: (response, variables) => {
      const existingData = localStorage.getItem(
        'scholarship_recommendation_data'
      );
      const parsedData = existingData ? JSON.parse(existingData) : {};

      const updatedData = {
        ...parsedData,
        ...variables,
        id: response.data.user_data?.id || parsedData.id,
      };

      localStorage.setItem(
        'scholarship_recommendation_data',
        JSON.stringify(updatedData)
      );
    },

    onError: (error) => {
      toast.error(
        error.response?.data.message || 'Terjadi kesalahan saat mengirim data.',
        {
          id: 'error-post-step-data',
        }
      );
    },
  });
};
