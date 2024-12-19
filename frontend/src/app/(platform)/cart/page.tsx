'use client'
import { RecommendedCoursesList } from '@/components/list/recommended-courses-list'
import { RecommendedProductsList } from '@/components/list/recommended-products-list'
import { PurchaseSummarySection } from '@/components/section/purchase-summary-section'
import { RecommendedCoursesListSkeleton } from '@/components/skeleton/recommended-courses-list-skeleton'
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
import { Product } from '@/models'
import { Routes } from '@/utils'
import Link from 'next/link'
import useSWR from 'swr'

function CartPage() {
  const { data: recommendedApps, isLoading: isLoadingRecommendedApps } = useSWR<Product[]>(
    '/api/products?type=app&limit=4'
  )
  const { data: recommendedCourses, isLoading: isLoadingRecommendedCourses } = useSWR<Product[]>(
    '/api/products?type=course&limit=3'
  )

  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-8 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.App}>Plataforma</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Carrito de compras</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PurchaseSummarySection />
      <div className='my-8 flex flex-col items-center justify-center gap-y-6'>
        <p className='text-center text-xs font-medium text-[#95979D]'>
          ¿Tenés alguna pregunta? No dudes en escribirnos a Klowhub@soporte.com o visitar nuestro centro de ayuda.
          ¡Estamos aquí para asistirte!
        </p>
        <div className='flex items-center justify-center gap-x-5 text-center text-xs'>
          <Link className='text-[#7CB4FF]' href={Routes.HelpCenter}>
            Centro de ayuda
          </Link>
          <Link className='text-[#7CB4FF]' href={Routes.Support}>
            Soporte
          </Link>
        </div>
      </div>
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h3 className='text-base font-bold'>Aplicaciones recomendadas</h3>
          <p className='text-sm'>
            Explorá soluciones listas para usar. Encontrá la app perfecta para tu proyecto y empezá a trabajar de
            inmediato.
          </p>
        </header>
        {isLoadingRecommendedApps && <RecommendedProductsListSkeleton quantity={4} />}
        {recommendedApps && recommendedApps?.length > 0 && <RecommendedProductsList products={recommendedApps} />}
        <Button className='mx-auto w-full max-w-64' variant='outline' asChild>
          <Link href={Routes.Applications}>Ver más</Link>
        </Button>
      </section>
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h3 className='text-base font-bold'>Cursos recomendados</h3>
          <p className='text-sm'>
            Descubre los cursos más destacados y lleva tus habilidades al siguiente nivel. Aprende de expertos y aplica
            tus conocimientos en proyectos reales.
          </p>
        </header>
        {isLoadingRecommendedCourses && <RecommendedCoursesListSkeleton quantity={3} />}
        {recommendedCourses && recommendedCourses?.length > 0 && (
          <RecommendedCoursesList products={recommendedCourses} />
        )}
        <Button className='mx-auto w-full max-w-64' variant='outline' asChild>
          <Link href={Routes.Courses}>Ver más</Link>
        </Button>
      </section>
    </main>
  )
}

export default CartPage
