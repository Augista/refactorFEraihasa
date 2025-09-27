import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface DataDaerah {
  id: string;
  name: string;
}

export const useGetAllProvinsi = () => {
  const result = useQuery({
    queryKey: ['provinsi'],
    queryFn: async (): Promise<DataDaerah[]> => {
      const response = await axios.get<DataDaerah[]>(
        'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json',
        {
          validateStatus: () => true,
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.data;
    },
  });

  return result;
};

export const useGetAllKotaKabupaten = (provinsiCode: string) => {
  const result = useQuery({
    queryKey: ['kota_kabupaten', provinsiCode],
    queryFn: async (): Promise<DataDaerah[]> => {
      if (!provinsiCode) {
        throw new Error('Provinsi ID is required');
      }

      const response = await axios.get<DataDaerah[]>(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiCode}.json`,
        {
          validateStatus: () => true,
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.data;
    },
    enabled: !!provinsiCode, // Only run query if provinsiId exists
  });

  return result;
};
