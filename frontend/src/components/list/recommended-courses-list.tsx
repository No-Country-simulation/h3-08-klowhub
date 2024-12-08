import { Product } from '@/models'
import { SalesProductCard } from '../../components/card/sales-product-card'

interface RecommendedCoursesListProps {
  products: Product[]
}

function RecommendedCoursesList({ products }: RecommendedCoursesListProps) {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
      {products.map((product) => (
        <li key={product.id}>
          <SalesProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}

export { RecommendedCoursesList }
