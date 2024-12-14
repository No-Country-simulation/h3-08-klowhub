import { MyCoursesList } from '@/components/list/my-courses-list'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Routes } from '@/utils'
import Link from 'next/link'
import { LatestSalesSection } from './components/latest-sales-section'

function DashboardCoursesPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-9 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.Dashboard}>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Mis cursos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='flex flex-wrap items-center gap-2 text-base font-bold'>
        Mis cursos
        <Button className='ml-auto md:w-full md:max-w-60' asChild>
          <Link href={Routes.DashboardCoursesNew}>Crear curso</Link>
        </Button>
      </h1>
      <LatestSalesSection />
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h3 className='text-base font-bold'>Cursos publicados</h3>
          <p className='text-sm'>
            Lista de todos los cursos publicados en Knowhub. Puedes editar o eliminar los cursos que hayas creado.
          </p>
        </header>
        <MyCoursesList />
      </section>
    </main>
  )
}

export default DashboardCoursesPage
