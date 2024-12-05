import { CartPlanCard } from './cart-plan-card'

function PurchaseSummaryCard() {
  return (
    <div className='grid gap-x-12 lg:grid-cols-[1fr_25rem]'>
      <CartPlanCard variant='purchase-summary' />
      <article className='sticky top-4 flex h-fit flex-col gap-y-3 rounded-lg bg-white/10 p-6'>
        <p className='text-base font-semibold'>Resumen de compra</p>
        <ul className='grid gap-y-2'>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Plan <span>Profesional</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Facturación <span>Mensual</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Fecha de compra <span>15 de agosto de 2024</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Precio <span>$10</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Medio de pago <span>Paypal</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            TOTAL <span>$8</span>
          </li>
        </ul>
      </article>
    </div>
  )
}

export { PurchaseSummaryCard }
