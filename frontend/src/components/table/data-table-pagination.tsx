'use client'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PAGE_SIZE_LIST } from '@/utils/const/table.const'
import { Table } from '@tanstack/react-table'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react'

interface DataTablePaginationProps<TData> {
  /**
   * The table to paginate.
   */
  table: Table<TData>
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className='flex flex-wrap items-center justify-end gap-x-4 gap-y-2'>
      <div className='grid grid-cols-[auto_1fr] items-center gap-x-2'>
        <p className='text-sm font-medium'>Filas por página</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className='h-auto gap-x-2 border border-[#D194E2] bg-transparent text-white'>
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side='top'>
            {PAGE_SIZE_LIST.map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <p className='text-sm font-medium'>
        Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
      </p>
      <div className='flex items-center gap-x-2'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeftIcon size={20} />
        </Button>
        <Button
          variant='outline'
          size='icon'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon size={20} />
        </Button>
        <Button variant='outline' size='icon' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          <ChevronRightIcon size={20} />
        </Button>
        <Button
          variant='outline'
          size='icon'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRightIcon size={20} />
        </Button>
      </div>
    </div>
  )
}
