import { SalesProductCard } from '../card/sales-product-card'

function RecommendedCoursesList() {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
      <li>
        <SalesProductCard />
      </li>
      <li>
        <SalesProductCard />
      </li>
      <li>
        <SalesProductCard />
      </li>
    </ul>
  )
}

export { RecommendedCoursesList }
