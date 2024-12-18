'use client'
import { Order } from '@/models'
import { format } from 'date-fns'
import { CartProductCard } from './cart-product-card'

interface PurchaseSummaryCardProps {
  order: Order
}

function PurchaseSummaryCard({ order }: PurchaseSummaryCardProps) {
  return (
    <div className='grid gap-x-12 lg:grid-cols-[1fr_25rem]'>
      <ul className='grid gap-y-4'>
        {order.items.map((item) => (
          <li key={item.id}>
            <CartProductCard product={item.product} variant='purchase-summary' />
          </li>
        ))}
      </ul>
      <article className='sticky top-4 flex h-fit flex-col gap-y-3 rounded-lg bg-white/10 p-6'>
        <p className='text-base font-semibold'>Resumen de compra</p>
        <ul className='grid gap-y-2'>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Fecha de compra <span>{format(new Date(order.created_at), 'dd/MM/yyyy')}</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Precio <span>${order.subtotal}</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Comisión <span>${order.fee}</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Descuento <span>${order.discount}</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Medio de pago <span>Stripe</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            TOTAL <span>${order.total}</span>
          </li>
        </ul>
      </article>
    </div>
  )
}

export { PurchaseSummaryCard }
