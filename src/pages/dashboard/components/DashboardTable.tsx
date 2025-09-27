import {
  Chip,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { useQuery,keepPreviousData } from '@tanstack/react-query';
import React, { useMemo } from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import api from '@/lib/api';
import { PaginatedApiReturn } from '@/types/api';

type DashboardTableProps = {
  event: 'cv' | 'essay' | 'interview';
  search?: string;
  status?: string;
  entries?: string;
  page: number;
  setPage: (page: number) => void;
};

type ApiTableDataProps = {
  product: string;
  name: string;
  program: string;
  status: 'UNVERIFIED' | 'CONFIRMED' | 'REJECTED' | 'WAITING' | 'COMPLETE';
  email: string;
  order_date: Date;
  user_program_id: string;
};

export default function DashboardTable({
  event,
  search = '',
  status,
  entries,
  page,
  setPage,
}: DashboardTableProps) {
  const { data, isLoading } = useQuery<PaginatedApiReturn<ApiTableDataProps[]>>(
    {
      queryKey: ['admin-table', search, status, entries, page],
      queryFn: async () => {
        const res = await api.get('/booster/' + event, {
          params: {
            search: search || undefined,
            status: status || undefined,
            limit: Number(entries) || undefined,
            page: page || undefined,
          },
        });

        return res.data;
      },
      placeholderData: keepPreviousData,
    }
  );

  const columns = [
    {
      key: 'no',
      label: 'No',
    },
    {
      key: 'order_date',
      label: 'order date',
    },
    { key: 'product', label: 'product' },
    { key: 'status', label: 'status' },
    { key: 'action', label: 'action' },
  ];

  const renderCell = React.useCallback(
    // @ts-expect-error user and columnKey type is not defined
    (user, columnKey) => {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case 'no':
          return <>{data?.data ? data?.data?.indexOf(user) + 1 : null}</>;
        case 'order_date':
          return new Date(cellValue).toLocaleDateString();
        case 'status':
          return (
            <>
              {cellValue === 'UNVERIFIED' && (
                <Chip color='default'>{cellValue}</Chip>
              )}
              {cellValue === 'CONFIRMED' && (
                <Chip className='text-white bg-primary-blue'>{cellValue}</Chip>
              )}
              {cellValue === 'REJECTED' && (
                <Chip className='bg-[#E94759] text-white'>{cellValue}</Chip>
              )}
              {cellValue === 'WAITING' && (
                <Chip className='bg-primary-orange text-[#121212]'>
                  {cellValue}
                </Chip>
              )}
              {cellValue === 'COMPLETED' && (
                <Chip className='bg-[#6ABC90] text-[#121212]'>{cellValue}</Chip>
              )}
            </>
          );
        case 'action':
          return (
            <ButtonLink
              size='sm'
              className='text-white bg-primary-blue'
              href={`/dashboard/${event}-boost/${user.user_program_id}`}
            >
              See Details
            </ButtonLink>
          );
        default:
          return cellValue;
      }
    },
    [data?.data, event]
  );

  const TotalPage = useMemo(() => {
    if (!data?.metadata.total || !data?.metadata.limit) return 0;

    return Math.ceil(data?.metadata.total / data?.metadata.limit);
  }, [data?.metadata.total, data?.metadata.limit]);

  return (
    <Table
      aria-label={`Admin Table ${event.toUpperCase} Boost`}
      bottomContent={
        TotalPage > 0 ? (
          <div className='flex justify-end w-full'>
            <Pagination
              page={data?.metadata.page}
              total={TotalPage}
              showShadow={false}
              onChange={(newPage) => setPage(newPage)}
              classNames={{
                item: 'bg-transparent text-[#121212] shadow-none',
                cursor: 'bg-primary-blue text-primary-orange',
              }}
            />
          </div>
        ) : null
      }
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        loadingContent='Loading...'
        loadingState={isLoading ? 'loading' : 'idle'}
        items={data?.data ?? []}
      >
        {(item) => (
          <TableRow key={item.user_program_id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
