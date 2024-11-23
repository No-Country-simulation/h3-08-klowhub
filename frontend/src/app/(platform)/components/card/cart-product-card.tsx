import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CirclePlayIcon, FileIcon, MessageSquareIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'

interface CartProductCardProps {
  variant?: 'purchase-summary'
}

function CartProductCard({ variant }: CartProductCardProps) {
  return (
    <article
      className={cn(
        'grid gap-x-6 gap-y-3 rounded-lg bg-[#1F2937] p-6 sm:grid-cols-[15rem_1fr] lg:grid-cols-1 xl:grid-cols-[15rem_1fr]',
        variant === 'purchase-summary' && 'bg-white/10'
      )}
    >
      <div className='relative aspect-square max-h-60 w-full'>
        <Image className='rounded-lg object-cover' src='/assets/product-detail.png' alt='Miniatura producto' fill />
      </div>
      <header className='grid gap-y-3'>
        <p className='text-base font-bold'>Aplicación para seguimiento de proyectos</p>
        <p className='flex items-center gap-x-3 text-sm'>
          <StarIcon className='text-[#B95ED4]' size={20} /> Top 3 más vendidas
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <MessageSquareIcon className='text-[#B95ED4]' size={20} /> Plataforma: Appsheet
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <FileIcon className='text-[#B95ED4]' size={20} /> Sector: Industria
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <CirclePlayIcon className='text-[#B95ED4]' size={20} /> Desarrollador verificado
        </p>
        <p className='flex items-center gap-x-3 text-base font-medium'>
          3.5
          <span className='flex flex-wrap items-center'>
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
          </span>
          (73)
        </p>
        <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          <li>
            <Badge variant='course'>Equipo</Badge>
          </li>
          <li>
            <Badge variant='course'>Organización</Badge>
          </li>
          <li>
            <Badge variant='course'>CRM</Badge>
          </li>
        </ul>
        <Button className='ml-auto' variant='ghost'>
          {variant === 'purchase-summary' ? 'Ver similares' : 'Eliminar'}
        </Button>
      </header>
    </article>
  )
}

export { CartProductCard }
