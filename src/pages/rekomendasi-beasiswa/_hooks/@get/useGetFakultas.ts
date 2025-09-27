import { useQuery } from '@tanstack/react-query';

import api from '@/lib/api';
import {
  FakultasResponse,
  JurusanResponse,
} from '@/pages/rekomendasi-beasiswa/types/fakultas';
import { ApiReturn } from '@/types/api';

export const useGetAllFakultas = () => {
  const result = useQuery<FakultasResponse[], Error>({
    queryKey: ['fakultas'],
    queryFn: async () => {
      const response = await api.get<ApiReturn<FakultasResponse[]>>(
        '/scholarship/faculty'
      );

      return response.data.data;
    },
  });
  return result;
};

export const useGetJurusanByFakultasId = (facultyId: number | string) => {
  const result = useQuery<JurusanResponse[], Error>({
    queryKey: ['jurusan', facultyId],
    queryFn: async () => {
      const response = await api.get<ApiReturn<JurusanResponse[]>>(
        `/scholarship/faculty/${facultyId}`
      );
      return response.data.data;
    },
  });
  return result;
};
