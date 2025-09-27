import { useQuery } from '@tanstack/react-query';
import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import { DANGER_TOAST, showToast } from '@/components/Toast';
import api from '@/lib/api';
import Bayar from '@/pages/programs/booster-series-a-la-carte/cv-boost/invoice-detail/components/Bayar';
import Detail from '@/pages/programs/booster-series-a-la-carte/cv-boost/invoice-detail/components/Detail';
import { ApiReturn } from '@/types/api';

export type PaketProps = {
  harga: number;
  id: string;
  program_id: string;
  name: string;
};

export default withAuth(CheckoutCvBoostPage, 'user');
function CheckoutCvBoostPage() {
  const [page, setPage] = React.useState<1 | 2>(1);
  const [paket, setPaket] = React.useState<PaketProps>();

  const { data } = useQuery<ApiReturn<PaketProps[]>>({
    queryKey: ['paket'],
    queryFn: async () => {
      const res = await api.get('/products/booster?program=CVBOOST');

      return res.data;
    },
  });

  const paketData = data?.data;

  const NextPage = () => {
    if (!paket) return showToast('Pilih paket terlebih dahulu!', DANGER_TOAST);
    setPage(2);
  };

  const PrevPage = () => {
    setPage(1);
  };

  return (
    <>
      {page === 1 && (
        <Detail
          paketData={paketData}
          NextPage={NextPage}
          paket={paket}
          setPaket={setPaket}
        />
      )}
      {page === 2 && <Bayar PrevPage={PrevPage} paket={paket} />}
    </>
  );
}
