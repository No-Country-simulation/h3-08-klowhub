'use client'
import { Product } from '@/models'
import useSWR from 'swr'
import { MyProductCard } from '../../components/card/my-product-card'
import { RecommendedCoursesListSkeleton } from '../skeleton/recommended-courses-list-skeleton'

function MyCoursesList() {
  const { data: myCourses, isLoading: isLoadingMyCourses } = useSWR<Product[]>('/api/products?type=course')

  if (isLoadingMyCourses) return <RecommendedCoursesListSkeleton quantity={8} />
  if (!myCourses) return <p>No se encontraron mis cursos</p>

  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
      {myCourses.map((product) => (
        <li key={product.id}>
          <MyProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}

export { MyCoursesList }
