import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HeartIcon, MoreVerticalIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'

interface SalesProductCardProps {
  variant?: 'courses-list'
}

function SalesProductCard({ variant }: SalesProductCardProps) {
  return (
    <article
      className={cn(
        'grid items-center rounded-lg bg-[#1F2937]',
        variant === 'courses-list' && 'lg:grid-cols-[400px_1fr]'
      )}
    >
      <div
        className={cn(
          'relative aspect-square h-48 w-full',
          variant === 'courses-list' && 'lg:aspect-none lg:h-[25rem]'
        )}
      >
        <Image
          className={cn('rounded-t-lg object-cover', variant === 'courses-list' && 'lg:rounded-l-lg lg:rounded-r-none')}
          src='/assets/sales-course.png'
          alt='Curso en progreso'
          fill
          sizes='50vw'
        />
        <Badge className='absolute left-2 top-3 rounded-full bg-[#F7E5FFF2] px-4 py-1 text-[#AE53DA]'>Curso</Badge>
        <HeartIcon className='absolute right-2 top-3 fill-white stroke-gray-500' />
      </div>
      <header className='flex flex-col gap-y-3 p-5'>
        <h2 className='flex items-center justify-between gap-x-2 text-xs font-semibold text-white md:text-base'>
          Dominando el desarrollo con AppSheet <MoreVerticalIcon className='shrink-0' />
        </h2>
        <p className='line-clamp-2 text-sm text-white'>
          Conviértete en un experto en AppSheetHub y aprende a crear aplicaciones sin escribir una sola línea de código.
        </p>
        <Button className='w-fit bg-white/10'>
          <Image src='/assets/appsheet-icon.png' alt='Appsheet logo' width={25} height={22} />
          AppSheet
        </Button>
        <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          <li>
            <Badge variant='course'>Logística</Badge>
          </li>
          <li>
            <Badge variant='course'>Stock</Badge>
          </li>
          <li>
            <Badge variant='course'>Inventarios</Badge>
          </li>
        </ul>
        <p className='flex items-center gap-x-3 text-base font-medium'>
          3.5
          <span className='flex flex-wrap items-center'>
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
          </span>
          (136)
        </p>
        <p className='text-xl font-bold text-white'>$80.000</p>
        <div className={cn('grid items-center gap-x-4', variant === 'courses-list' && 'lg:flex')}>
          <Button>
            <ShoppingCartIcon /> Añadir al carrito
          </Button>
          <Button variant='ghost'>Ver detalles</Button>
        </div>
      </header>
    </article>
  )
}

export { SalesProductCard }
