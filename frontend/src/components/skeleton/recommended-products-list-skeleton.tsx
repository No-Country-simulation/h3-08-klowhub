import { Skeleton } from '@/components/ui/skeleton'

interface RecommendedProductsListProps {
  /**
   * The quantity of products to render.
   */
  quantity: number
}

function RecommendedProductsListSkeleton({ quantity }: RecommendedProductsListProps) {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
      {Array.from({ length: quantity }).map((_, index) => (
        <li key={index}>
          <Skeleton className='h-[27.5rem] w-full' />
        </li>
      ))}
    </ul>
  )
}

export { RecommendedProductsListSkeleton }
