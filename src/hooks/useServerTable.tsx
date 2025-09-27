import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/react-table';
import * as React from 'react';

type useServerTableProps<T extends object> = {
  pageSize?: number;
  sort?: {
    key: Extract<keyof T, string>;
    type: 'asc' | 'desc';
  };
  columnFilters?: ColumnFiltersState;
};

export type ServerTableState = {
  pagination: PaginationState;
  sorting: SortingState;
  globalFilter: string;
  columnFilters: ColumnFiltersState;
};

export default function useServerTable<T extends object>({
  pageSize = 10,
  sort,
  columnFilters: initialColumnFilters = [],
}: useServerTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>(
    sort
      ? [
          {
            id: sort.key,
            desc: sort.type === 'desc',
          },
        ]
      : []
  );

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });

  const [globalFilter, setGlobalFilter] = React.useState('');

  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialColumnFilters);

  return {
    tableState: {
      pagination,
      sorting,
      globalFilter,
      columnFilters,
    },
    setTableState: {
      setPagination,
      setSorting,
      setGlobalFilter,
      setColumnFilters,
    },
  };
}
