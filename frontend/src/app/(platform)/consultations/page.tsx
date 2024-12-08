'use client'
import { ExpertPersonsList } from '@/components/list/expert-persons-list'
import { ProductFilterSheet } from '@/components/sheet/product-filter-sheet'
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
import { Routes } from '@/utils'
import { ListOrderedIcon, SearchIcon } from 'lucide-react'

function AppConsultationsPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-8 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.App}>Plataforma</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Consultoría</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='flex flex-col gap-y-6'>
        <h1 className='text-base font-bold'>Encuentra mentores expertos para tu consultoría online</h1>
        <header className='flex items-center gap-x-6'>
          <div className='relative grow'>
            <Input className='pl-12' placeholder='Buscar mentores' />
            <SearchIcon className='absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500' size={20} />
          </div>
          <div className='flex items-center gap-x-3'>
            <ProductFilterSheet />
            <Button variant='outline'>
              <ListOrderedIcon /> <span className='hidden md:block'>Ordenar por</span>
            </Button>
          </div>
        </header>
        <ExpertPersonsList quantity={16} />
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

export default AppConsultationsPage
