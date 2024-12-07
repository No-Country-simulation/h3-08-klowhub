import { Skeleton } from '@/components/ui/skeleton'

function PlansSkeleton() {
  return (
    <div className='grid gap-x-6 gap-y-3 sm:grid-cols-2 sm:py-12 lg:grid-cols-3 lg:px-6'>
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className='aspect-square size-full' />
      ))}
    </div>
  )
}

export { PlansSkeleton }
