import { SalesProductCard } from '../card/sales-product-card'

function CoursesList() {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-1'>
      <li>
        <SalesProductCard variant='courses-list' />
      </li>
      <li>
        <SalesProductCard variant='courses-list' />
      </li>
      <li>
        <SalesProductCard variant='courses-list' />
      </li>
      <li>
        <SalesProductCard variant='courses-list' />
      </li>
      <li>
        <SalesProductCard variant='courses-list' />
      </li>
    </ul>
  )
}

export { CoursesList }
