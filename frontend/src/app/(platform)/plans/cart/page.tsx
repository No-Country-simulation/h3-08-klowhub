'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Routes } from '@/utils'
import Link from 'next/link'
import { PurchaseSummarySection } from '../components/purchase-summary-section'

function PlansCartPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-8 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.Plans}>Planes</BreadcrumbLink>
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
          ¿Tenés alguna pregunta? No dudes en escribirnos a knowhub@soporte.com o visitar nuestro centro de ayuda.
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
    </main>
  )
}

export default PlansCartPage
