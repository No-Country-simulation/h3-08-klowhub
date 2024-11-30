'use client'
import { CardProductsList } from '@/app/(platform)/components/list/card-products-list'
import { RecommendedCoursesList } from '@/app/(platform)/components/list/recommended-courses-list'
import { RecommendedProductsList } from '@/app/(platform)/components/list/recommended-products-list'
import { RecommendedCoursesListSkeleton } from '@/app/(platform)/components/skeleton/recommended-courses-list-skeleton'
import { RecommendedProductsListSkeleton } from '@/app/(platform)/components/skeleton/recommended-products-list-skeleton'
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
import { Product } from '@/models'
import { Routes } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

function AppCartPage() {
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
      <section className='grid gap-x-12 gap-y-6 lg:grid-cols-[1fr_25.75rem]'>
        <h1 className='col-span-full text-base font-bold'>Tu carrito de compras</h1>
        <CardProductsList />
        <aside className='sticky top-0 flex h-fit flex-col gap-y-6 rounded-lg bg-[#1F2937] p-6'>
          <header className='grid gap-y-2'>
            <p className='mb-2 text-xl font-bold'>Resumen</p>
            <p className='flex items-center justify-between gap-x-2 text-base'>
              Subtotal <span>$60.000</span>
            </p>
            <p className='flex items-center justify-between gap-x-2 text-base'>
              Tarifa del servicio <span>$130</span>
            </p>
          </header>
          <form className='grid gap-x-6 gap-y-2'>
            <p className='text-sm'>Cupón de descuento</p>
            <div className='flex items-center gap-x-2'>
              <Input className='bg-transparent text-white placeholder:text-white' placeholder='Ingresar cupón' />
              <Button className='border border-white bg-transparent text-white placeholder:to-white'>Ingresar</Button>
            </div>
          </form>
          <p className='flex items-center justify-between gap-x-2 text-sm font-semibold'>
            Cupón HotSale
            <span>20%</span>
          </p>
          <p className='flex items-center justify-between gap-x-2 text-base font-bold'>
            Total <span>$60.000</span>
          </p>
          <footer className='grid gap-y-2'>
            <p className='text-sm font-semibold'>Selecciona un método de pago</p>
            <ul className='flex items-center justify-center gap-x-4'>
              <li>
                <Link href={Routes.AppPayment}>
                  <Image
                    className='object-contain'
                    src='/assets/payment-stripe.png'
                    alt='Stripe logo'
                    width={111}
                    height={69}
                  />
                </Link>
              </li>
              <li>
                <Link href={Routes.AppPayment}>
                  <Image
                    className='object-contain'
                    src='/assets/payment-paypal.png'
                    alt='PayPal logo'
                    width={111}
                    height={69}
                  />
                </Link>
              </li>
              <li>
                <Link href={Routes.AppPayment}>
                  <Image
                    className='object-contain'
                    src='/assets/payment-etherium.png'
                    alt='Etherium logo'
                    width={111}
                    height={69}
                  />
                </Link>
              </li>
            </ul>
          </footer>
          <Link className='text-center text-xs font-medium text-[#7CB4FF]' href={Routes.TermsAndConditions}>
            Al comprar/contratar los productos aceptas los términos y condiciones.
          </Link>
        </aside>
      </section>
      <div className='my-8 flex flex-col items-center justify-center gap-y-6'>
        <p className='text-center text-xs font-medium text-[#95979D]'>
          ¿Tenés alguna pregunta? No dudes en escribirnos a klowhub@soporte.com o visitar nuestro centro de ayuda.
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
          <Link href={Routes.AppAppStore}>Ver más</Link>
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
          <Link href={Routes.AppCourses}>Ver más</Link>
        </Button>
      </section>
    </main>
  )
}

export default AppCartPage
