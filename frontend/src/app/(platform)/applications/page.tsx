'use client'
import { RecommendedProductsList } from '@/components/list/recommended-products-list'
import { ProductFilterSheet } from '@/components/sheet/product-filter-sheet'
import { RecommendedProductsListSkeleton } from '@/components/skeleton/recommended-products-list-skeleton'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { Product } from '@/models'
import { Routes } from '@/utils'
import { ListOrderedIcon, SearchIcon } from 'lucide-react'
import useSWR from 'swr'

function AppStorePage() {
  const { data: apps, isLoading: isLoadingApps } = useSWR<Product[]>('/api/products?type=app')

  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-8 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.App}>Plataforma</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>AppStore</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='flex flex-col gap-y-6'>
        <h1 className='text-base font-bold'>Encuentra la app que necesitas</h1>
        <header className='flex items-center gap-x-6'>
          <div className='relative grow'>
            <Input className='pl-12' placeholder='Busca por nombre o categoría de la app' />
            <SearchIcon className='absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500' size={20} />
          </div>
          <div className='flex items-center gap-x-3'>
            <ProductFilterSheet />
            <Button variant='outline'>
              <ListOrderedIcon /> <span className='hidden md:block'>Ordenar por</span>
            </Button>
          </div>
        </header>
        {isLoadingApps && <RecommendedProductsListSkeleton quantity={4} />}
        {apps && apps?.length > 0 && <RecommendedProductsList products={apps} />}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  )
}

export default AppStorePage
