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
      <CourseProgressSection />
      <section className='flex flex-col gap-y-6'>
        <h1 className='text-base font-bold'>Mis cursos</h1>
        <MyCoursesList />
      </section>
    </main>
  )
}

export default AppMyCoursesPage
