'use client'
import { PurchaseSummaryCard } from '@/components/card/purchase-summary-card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Skeleton } from '@/components/ui/skeleton'
import { Routes } from '@/utils'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

interface PaymentPageProps {
  searchParams: { session_id: string }
}

function PaymentPage({ searchParams }: PaymentPageProps) {
  const { data: order, isLoading, error } = useSWR(`/api/stripe/session/products?session_id=${searchParams.session_id}`)

  if (isLoading) {
    return (
      <div className='mx-auto grid w-full max-w-screen-2xl gap-y-16 px-5 py-8 lg:px-10 lg:py-8'>
        <Skeleton className='mx-auto aspect-video w-full' />
      </div>
    )
  }

  if (error) {
    return (
      <div className='mx-auto grid w-full max-w-screen-2xl gap-y-2.5 px-5 py-8 lg:px-10 lg:py-8'>
        <XIcon className='mx-auto stroke-red-500' size={90} />
        <h1 className='text-center text-3xl font-bold'>¡Ocurrió un error al procesar el pago!</h1>
        <p className='text-center text-base'>
          Ha ocurrido un error al procesar el pago. Por favor, inténtelo de nuevo.
        </p>
        <Link className='mx-auto text-sm text-[#D194E2]' href={Routes.Support}>
          Contactar con soporte
        </Link>
      </div>
    )
  }

  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-16 px-5 py-8 lg:px-10 lg:py-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.App}>Plataforma</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Pago de compra</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='flex flex-col gap-x-12 gap-y-16'>
        <header className='grid gap-y-2.5'>
          <Image className='mx-auto' src='/assets/payment-success.png' alt='Pago exitoso' width={89} height={89} />
          <h1 className='text-center text-3xl font-bold'>¡Felicidades!</h1>
          <p className='text-center text-base'>
            Se ha realizado el pago de tu compra con éxito. Gracias por tu compra.
          </p>
          <Link className='mx-auto text-sm text-[#D194E2]' href={Routes.AppApplications}>
            Ver mis aplicaciones
          </Link>
        </header>
        <PurchaseSummaryCard order={order} />
        <div className='flex flex-col items-center justify-center gap-y-6'>
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
      </section>
    </main>
  )
}

export default PaymentPage
