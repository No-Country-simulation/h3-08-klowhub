import { Product } from '@/models'
import { SalesProductCard } from '../../components/card/sales-product-card'

interface CoursesListProps {
  products: Product[]
}

function CoursesList({ products }: CoursesListProps) {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-1'>
      {products.map((product) => (
        <li key={product.id}>
          <SalesProductCard product={product} variant='courses-list' />
        </li>
      ))}
    </ul>
  )
}

export { CoursesList }
