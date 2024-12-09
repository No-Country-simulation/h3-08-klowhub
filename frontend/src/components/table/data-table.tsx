/* eslint-disable multiline-ternary */
'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { PAGE_SIZE_DEFAULT } from '@/utils/const/table.const'
import {
  ColumnDef,
  PaginationState,
  Table as ReactTable,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import React, { memo, useMemo, useState } from 'react'
import { DataTablePagination } from './data-table-pagination'

interface DataTableProps<TData, TValue> {
  /**
   * The columns to render.
   */
  columns: Array<ColumnDef<TData, TValue>>
  /**
   * The data to render.
   */
  data: TData[]
  /**
   * The function to handle the click on a row.
   */
  onClickRow?: (ev: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: Row<TData>) => void
}

export function DataTable<TData, TValue>({ columns, data, onClickRow }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: PAGE_SIZE_DEFAULT,
    pageIndex: 0
  })

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    state: {
      pagination,
      columnVisibility,
      sorting
    }
  })

  /**
   * Calculates the column sizes.
   * @returns The column sizes.
   */
  const columnSizeVars = useMemo(() => {
    const headers = table.getFlatHeaders()
    const colSizes: { [key: string]: number } = {}
    for (let i = 0; i < headers.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const header = headers[i]!
      colSizes[`--header-${header.id}-size`] = header.getSize()
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize()
    }
    return colSizes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.getState().columnSizingInfo, table.getState().columnSizing])

  return (
    <div className='grid gap-y-4 overflow-auto'>
      <Table style={columnSizeVars}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} style={{ width: `calc(var(--header-${header?.id}-size) * 1px)` }}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    <div
                      onDoubleClick={() => header.column.resetSize()}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className='absolute right-0 top-0 z-50 h-full w-1.5 cursor-col-resize touch-none select-none bg-primary-700'
                    />
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        {table.getState().columnSizingInfo.isResizingColumn ? (
          <MemoizedTableBody columns={columns} table={table} />
        ) : (
          <DataTableBody columns={columns} table={table} onClickRow={onClickRow} />
        )}
      </Table>
      <DataTablePagination table={table} />
    </div>
  )
}

interface DataTableBodyProps<TData, TValue> {
  /**
   * The columns to render.
   */
  columns: Array<ColumnDef<TData, TValue>>
  /**
   * The table to render.
   */
  table: ReactTable<TData>
  /**
   * The function to handle the click on a row.
   */
  onClickRow?: (ev: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: Row<TData>) => void
}

function DataTableBody<TData, TValue>({ columns, table, onClickRow }: DataTableBodyProps<TData, TValue>) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length > 0 &&
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            onClick={(ev) => onClickRow?.(ev, row)}
            className={cn(onClickRow && 'cursor-pointer')}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} style={{ width: `calc(var(--col-${cell.column.id}-size) * 1px)` }}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      {table.getRowModel().rows?.length <= 0 && (
        <TableRow>
          <TableCell colSpan={columns.length} className='h-24 text-center'>
            No hay resultados.
          </TableCell>
        </TableRow>
      )}
      {!table.getIsSomeColumnsVisible() && (
        <TableRow>
          <TableCell colSpan={columns.length} className='h-24 text-center'>
            No hay columnas visibles.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}

const MemoizedTableBody = memo(
  DataTableBody,
  (prev, next) => prev.table.options.data === next.table.options.data
) as typeof DataTableBody
