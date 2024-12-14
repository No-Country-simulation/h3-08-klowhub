import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Routes } from '@/utils'
import { NewApplicationForm } from '../components/new-application-form'

function DashboardApplicationsNewPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-9 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.Dashboard}>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.DashboardApplications}>Mis aplicaciones</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Nueva aplicación</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h1 className='text-base font-bold'>Presenta tu App : Conéctala con el mundo</h1>
          <p className='text-sm'>
            Crea una aplicación en Knowhub y conéctala con el mundo. Aprende a utilizar las herramientas de Knowhub para
            crear aplicaciones y conectar con los usuarios.
          </p>
        </header>
        <NewApplicationForm />
      </section>
    </main>
  )
}

export default DashboardApplicationsNewPage
