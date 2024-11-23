import { CartProductCard } from '../card/cart-product-card'

function CardProductsList() {
  return (
    <ul className='grid gap-y-4'>
      <li>
        <CartProductCard />
      </li>
      <li>
        <CartProductCard />
      </li>
      <li>
        <CartProductCard />
      </li>
    </ul>
  )
}

export { CardProductsList }
