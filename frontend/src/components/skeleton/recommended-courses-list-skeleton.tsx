import { Skeleton } from '@/components/ui/skeleton'

interface RecommendedCoursesListProps {
  /**
   * The quantity of courses to render.
   */
  quantity: number
}

function RecommendedCoursesListSkeleton({ quantity }: RecommendedCoursesListProps) {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
      {Array.from({ length: quantity }).map((_, index) => (
        <li key={index}>
          <Skeleton className='h-[27.5rem] w-full' />
        </li>
      ))}
    </ul>
  )
}

export { RecommendedCoursesListSkeleton }
