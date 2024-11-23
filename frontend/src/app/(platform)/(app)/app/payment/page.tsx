import { PurchaseSummaryCard } from '@/app/(platform)/components/card/purchase-summary-card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Routes } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

function AppPaymentPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-16 px-5 py-2 lg:px-10 lg:py-8'>
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
        </header>
        <PurchaseSummaryCard />
        <div className='flex flex-col items-center justify-center gap-y-6'>
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
      </section>
    </main>
  )
}

export default AppPaymentPage
