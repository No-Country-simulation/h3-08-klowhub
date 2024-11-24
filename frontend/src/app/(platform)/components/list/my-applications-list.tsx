import { SalesProductCard } from '../card/sales-product-card'

function MyApplicationsList() {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
      <li>
        <SalesProductCard variant='my-applications-list' />
      </li>
      <li>
        <SalesProductCard variant='my-applications-list' />
      </li>
      <li>
        <SalesProductCard variant='my-applications-list' />
      </li>
      <li>
        <SalesProductCard variant='my-applications-list' />
      </li>
    </ul>
  )
}

export { MyApplicationsList }
