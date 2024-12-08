import { Skeleton } from '@/components/ui/skeleton'

interface RecommendedProductsListProps {
  quantity: number
}

function CoursesListSkeleton({ quantity }: RecommendedProductsListProps) {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-1'>
      {Array.from({ length: quantity }).map((_, index) => (
        <li key={index}>
          <Skeleton className='h-[25rem] w-full' />
        </li>
      ))}
    </ul>
  )
}

export { CoursesListSkeleton }
