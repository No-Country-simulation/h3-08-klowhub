import { Product } from '@/models'
import { SalesProductCard } from '../../components/card/sales-product-card'

interface RecommendedProductsListProps {
  products: Product[]
}

function RecommendedProductsList({ products }: RecommendedProductsListProps) {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
      {products.map((product) => (
        <li key={product.id}>
          <SalesProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}

export { RecommendedProductsList }
