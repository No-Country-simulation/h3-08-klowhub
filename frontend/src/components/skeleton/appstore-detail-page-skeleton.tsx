import { Skeleton } from '@/components/ui/skeleton'

function AppStoreDetailPageSkeleton() {
  return (
    <div className='mx-auto grid w-full max-w-screen-2xl gap-x-28 gap-y-8 px-5 py-8 lg:grid-cols-[1fr_26rem] lg:px-10 lg:py-8'>
      <Skeleton className='h-[52rem] w-full' />
      <Skeleton className='h-[52rem] w-full' />
    </div>
  )
}

export { AppStoreDetailPageSkeleton }
