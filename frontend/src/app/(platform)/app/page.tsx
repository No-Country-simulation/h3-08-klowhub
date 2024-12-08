'use client'
import { ExpertPersonsList } from '@/components/list/expert-persons-list'
import { RecommendedCoursesList } from '@/components/list/recommended-courses-list'
import { RecommendedProductsList } from '@/components/list/recommended-products-list'
import { CourseProgressSection } from '@/components/section/course-progress-section'
import { RecommendedCoursesListSkeleton } from '@/components/skeleton/recommended-courses-list-skeleton'
import { RecommendedProductsListSkeleton } from '@/components/skeleton/recommended-products-list-skeleton'
import { Button } from '@/components/ui/button'
import { Product } from '@/models'
import { Routes } from '@/utils'
import Link from 'next/link'
import useSWR from 'swr'

function AppPage() {
  const { data: recommendedCourses, isLoading: isLoadingRecommendedCourses } = useSWR<Product[]>(
    '/api/products?type=course&limit=3'
  )
  const { data: recommendedApps, isLoading: isLoadingRecommendedApps } = useSWR<Product[]>(
    '/api/products?type=app&limit=4'
  )

  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-16 px-5 py-8 lg:px-10 lg:py-8'>
      <ul className='relative grid items-center gap-x-6 bg-banner before:absolute before:inset-0 before:size-full before:bg-black/50 xsm:grid-cols-2 lg:grid-cols-4'>
        <li className='z-10 p-7 text-center text-xl font-bold'>Aprende en Knowhub</li>
        <li className='z-10 p-7 text-center text-xl font-bold'>Encuentra aplicaciones</li>
        <li className='z-10 p-7 text-center text-xl font-bold'>Publica proyectos</li>
        <li className='z-10 p-7 text-center text-xl font-bold'>Consultas técnicas</li>
      </ul>
      <CourseProgressSection />
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h2 className='text-base font-bold'>Cursos recomendados</h2>
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
      <section className='relative flex flex-col gap-y-3 bg-banner px-7 py-14 before:absolute before:inset-0 before:size-full before:bg-black/50'>
        <h4 className='z-10 text-xl font-bold'>Conecta con Expertos</h4>
        <p className='z-10 text-sm'>
          Aprende de los mejores: Impulsa tu conocimiento con nuestros mentores especializados
        </p>
      </section>
      <section className='flex flex-col gap-y-6'>
        <ExpertPersonsList />
        <Button className='mx-auto w-full max-w-64' variant='outline' asChild>
          <Link href={Routes.Consultations}>Ver más</Link>
        </Button>
      </section>
    </main>
  )
}

export default AppPage
