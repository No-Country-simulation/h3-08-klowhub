'use client'
import { useCart } from '@/hooks'
import { CartProductCard } from '../card/cart-product-card'

function CardProductsList() {
  const { cart } = useCart()

  return (
    <ul className='grid gap-y-4'>
      {cart
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((product) => (
          <li key={product.id}>
            <CartProductCard product={product} />
          </li>
        ))}
    </ul>
  )
}

export { CardProductsList }
