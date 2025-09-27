import * as React from 'react';

import DashboardTable from '@/pages/dashboard/components/DashboardTable';

export default function DashboardTableContainer({
  event,
}: {
  event: 'cv' | 'essay' | 'interview';
}) {
  const [pageValue, setPageValue] = React.useState(1);

  return (
    <>
      <div className='overflow-auto'>
        <DashboardTable event={event} page={pageValue} setPage={setPageValue} />
      </div>
    </>
  );
}
