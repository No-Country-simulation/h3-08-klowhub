import { MyCoursesList } from '@/components/list/my-courses-list'
import { CourseProgressSection } from '@/components/section/course-progress-section'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Routes } from '@/utils'

function AppMyCoursesPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-9 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.App}>Plataforma</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Mis cursos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='flex flex-col gap-y-6'>
        <h1 className='text-base font-bold'>Mis cursos</h1>
        <CourseProgressSection />
      </section>
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h3 className='text-base font-bold'>Cursos completados</h3>
          <p className='text-sm'>
            Observa tus progresos y obtén recomendaciones personalizadas para tus cursos. ¡Aprende de los mejores!
          </p>
        </header>
        <MyCoursesList />
      </section>
    </main>
  )
}

export default AppMyCoursesPage
