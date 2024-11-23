import { CartProductCard } from './cart-product-card'

function PurchaseSummaryCard() {
  return (
    <div className='grid gap-x-12 lg:grid-cols-[1fr_auto]'>
      <ul className='grid gap-y-4'>
        <li>
          <CartProductCard variant='purchase-summary' />
        </li>
        <li>
          <CartProductCard variant='purchase-summary' />
        </li>
        <li>
          <CartProductCard variant='purchase-summary' />
        </li>
      </ul>
      <article className='sticky top-4 flex h-fit flex-col gap-y-3 rounded-lg bg-white/10 p-6'>
        <p className='text-base font-semibold'>Resumen de compra</p>
        <ul className='grid gap-y-2'>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Aplicación <span>Gestión de inventarios con AppSheet</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Idioma <span>Español (subtitulado) </span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Fecha de compra <span>15 de agosto de 2024</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Precio <span>$10</span>
          </li>
          <li className='grid gap-x-2 text-sm font-medium sm:grid-cols-[8rem_1fr]'>
            Cupón <span>Cupón HOTSALE20 (-20%)</span>
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
