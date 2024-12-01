'use client'
import { Product } from '@/models'
import useSWR from 'swr'
import { SalesProductCard } from '../card/sales-product-card'
import { RecommendedProductsListSkeleton } from '../skeleton/recommended-products-list-skeleton'

function MyApplicationsList() {
  const { data: applications, isLoading: isLoadingApplications } = useSWR<Product[]>('/api/products?type=app')

  if (isLoadingApplications) return <RecommendedProductsListSkeleton quantity={8} />
  if (!applications) return <p>No se encontraron aplicaciones</p>

  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
      {applications.map((product) => (
        <li key={product.id}>
          <SalesProductCard product={product} variant='my-products' />
        </li>
      ))}
    </ul>
  )
}

export { MyApplicationsList }
