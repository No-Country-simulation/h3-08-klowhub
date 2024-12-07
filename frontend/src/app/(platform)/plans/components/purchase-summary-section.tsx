'use client'
import { useCartPlan } from '@/hooks'
import { Routes } from '@/utils'
import { StoreIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CartPlanCard } from './cart-plan-card'

function PurchaseSummarySection() {
  const cartPlan = useCartPlan().cartPlan

  if (!cartPlan) {
    return (
      <header className='grid gap-y-2.5'>
        <StoreIcon className='mx-auto text-[#7CB4FF]' size={90} />
        <h1 className='text-center text-3xl font-bold'>¡Tu carrito está vacío!</h1>
        <p className='text-center text-base'>
          Selecciona un plan y completa la información para continuar con el pago.
        </p>
        <Link className='mx-auto text-sm text-[#D194E2]' href={Routes.Plans}>
          Ver planes
        </Link>
      </header>
    )
  }

  return (
    <section className='grid gap-x-12 gap-y-6 lg:grid-cols-[1fr_25.75rem]'>
      <h1 className='col-span-full text-base font-bold'>Tu carrito de compras</h1>
      <p className='col-span-full text-sm'>
        Estás a un paso de acceder a todas las ventajas de nuestra plataforma. A continuación, encontrarás el resumen de
        tu compra. Por favor, revisa los detalles antes de continuar con el pago.
      </p>
      <CartPlanCard />
      <aside className='sticky top-0 flex h-fit flex-col gap-y-6 rounded-lg bg-[#1F2937] p-6'>
        <header className='grid gap-y-2'>
          <p className='mb-2 text-xl font-bold'>Resumen</p>
          <p className='flex items-center justify-between gap-x-2 text-base'>
            Subtotal <span>${cartPlan.plan.price}</span>
          </p>
          <p className='flex items-center justify-between gap-x-2 text-base'>
            Tarifa del servicio <span>$130</span>
          </p>
        </header>
        <p className='flex items-center justify-between gap-x-2 text-base font-bold'>
          Total <span>${cartPlan.plan.price}</span>
        </p>
        <footer className='grid gap-y-2'>
          <p className='text-sm font-semibold'>Selecciona un método de pago</p>
          <ul className='flex items-center justify-center gap-x-4'>
            <li>
              <Link href={Routes.PlansPayment}>
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
              <Link href={Routes.PlansPayment}>
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
              <Link href={Routes.PlansPayment}>
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
  )
}

export { PurchaseSummarySection }
