import { MyApplicationsList } from '@/app/(platform)/components/list/my-applications-list'
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
import { LatestSalesSection } from '../../components/section/latest-sales-section'

function AppMyApplicationsPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-9 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.Dashboard}>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Mis aplicaciones</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='flex flex-wrap items-center gap-2 text-base font-bold'>
        Mis aplicaciones <Button className='ml-auto'>Crear aplicación</Button>
      </h1>
      <LatestSalesSection />
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h3 className='text-base font-bold'>Aplicaciones publicadas</h3>
          <p className='text-sm'>
            Lista de todas las aplicaciones publicadas en KlowHub. Puedes editar o eliminar las aplicaciones que hayas
            creado.
          </p>
        </header>
        <MyApplicationsList />
      </section>
    </main>
  )
}

export default AppMyApplicationsPage
