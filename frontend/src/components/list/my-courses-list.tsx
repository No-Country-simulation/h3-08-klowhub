'use client'
import { Product } from '@/models'
import useSWR from 'swr'
import { MyProductCard } from '../../components/card/my-product-card'
import { RecommendedCoursesListSkeleton } from '../skeleton/recommended-courses-list-skeleton'

function MyCoursesList() {
  const { data: myCourses, isLoading: isLoadingMyCourses } = useSWR<Product[]>('/api/user/products?type=course')

  if (isLoadingMyCourses) return <RecommendedCoursesListSkeleton quantity={8} />
  if (!myCourses?.length) return <p className='mx-auto text-center text-sm'>No se han encontrado cursos</p>

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
