import { Button } from '@/components/ui/button'
import { HeartIcon, MonitorPlayIcon, MoreVerticalIcon } from 'lucide-react'
import Image from 'next/image'

function ExpertPersonCard() {
  return (
    <article className='grid items-center rounded-lg bg-[#1F2937]'>
      <div className='relative aspect-square h-48 w-full'>
        <Image
          className='rounded-t-lg object-cover'
          src='/assets/expert-person.jpeg'
          alt='Curso en progreso'
          fill
          sizes='50vw'
        />
        <HeartIcon className='absolute right-2 top-3 fill-white stroke-gray-500' />
      </div>
      <header className='flex flex-col gap-y-3 p-5'>
        <h2 className='flex items-center justify-between gap-x-2 text-sm font-semibold md:text-base'>
          Martin Fernandez <MoreVerticalIcon className='shrink-0' />
        </h2>
        <Button className='w-fit bg-white/10'>
          <Image src='/assets/appsheet-icon.png' alt='Appsheet logo' width={25} height={22} />
          AppSheet
        </Button>
        <p className='flex items-center gap-x-3 text-sm'>
          <MonitorPlayIcon size={20} /> 50 sesiones (35 reseñas)
        </p>
        <p className='text-sm font-medium'>Español</p>
        <p className='text-xl font-bold'>6 USD / Hora</p>
        <Button variant='ghost'>Ver detalles</Button>
      </header>
    </article>
  )
}

export { ExpertPersonCard }
