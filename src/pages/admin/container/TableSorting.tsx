import { useDebouncedValue } from '@mantine/hooks';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import AdminTable from '@/pages/admin/components/AdminTable';

export default function TableSorting({
  event,
}: {
  event: 'cv' | 'essay' | 'interview' | 'lms';
}) {
  const router = useRouter();
  const methods = useForm();

  const searchValue = router.query.search as string | undefined;
  const initialStatusValue = router.query.status as string | undefined;
  const initialEntriesValue = router.query.entries as string | undefined;
  const initialPageValue = router.query.page as string | undefined;

  const [pageValue, setPageValue] = React.useState(1);
  const [statusValue, setStatusValue] = React.useState('');
  const [entriesValue, setEntriesValue] = React.useState('10');

  React.useEffect(() => {
    if (initialStatusValue) {
      setStatusValue(initialStatusValue);
    }
    if (initialEntriesValue) {
      setEntriesValue(initialEntriesValue);
    }
    if (initialPageValue) {
      setPageValue(Number(initialPageValue));
    }
  }, [initialStatusValue, initialEntriesValue, initialPageValue]);

  const debouncedSearch = useDebouncedValue(searchValue, 500);

  return (
    <>
      <div className='flex flex-col md:flex-row items-center gap-4'>
        <FormProvider {...methods}>
          <Input
            id='search'
            placeholder='Search user here...'
            divClassName='md:basis-3/5'
            value={searchValue}
            onChange={(e) =>
              router.push({
                query: { ...router.query, search: e.target.value },
              })
            }
          />
          <div className='flex items-center w-full md:basis-3/5 gap-4'>
            <SelectInput
              id='status'
              placeholder='Filter by Status'
              className='py-3'
              value={statusValue}
              onChange={(e) => {
                setStatusValue(e.target.value);
                router.push({
                  query: { ...router.query, status: e.target.value },
                });
              }}
            >
              <option value='UNVERIFIED'>Unverified</option>
              <option value='CONFIRMED'>Confirmed</option>
              <option value='REJECTED'>Rejected</option>
              <option value='WAITING'>Waiting</option>
              <option value='COMPLETED'>Complete</option>
            </SelectInput>
            <SelectInput
              id='entries'
              className='py-3'
              value={entriesValue}
              onChange={(e) => {
                setEntriesValue(e.target.value);
                router.push({
                  query: { ...router.query, entries: e.target.value },
                });
              }}
            >
              <option value='10' selected>
                10 Entries
              </option>
              <option value='25'>25 Entries</option>
              <option value='50'>50 Entries</option>
              <option value='100'>100 Entries</option>
            </SelectInput>
          </div>
        </FormProvider>
      </div>
      <div className='overflow-auto'>
        <AdminTable
          event={event}
          search={debouncedSearch[0]}
          status={statusValue}
          entries={entriesValue}
          page={pageValue}
          setPage={setPageValue}
        />
      </div>
    </>
  );
}
