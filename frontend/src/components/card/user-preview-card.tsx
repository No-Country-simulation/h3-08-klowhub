import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CirclePlayIcon, FileIcon, GraduationCapIcon, MessageSquareIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'

interface UserPreviewCardProps {
  /**
   * The variant of the card.
   */
  variant?: 'course' | 'app'
}

function UserPreviewCard({ variant = 'app' }: UserPreviewCardProps) {
  return (
    <article className='grid gap-y-6 rounded-lg bg-white/10 p-3'>
      <header className='flex items-center gap-x-3 pl-3'>
        <div className='relative size-12'>
          <Image
            className='rounded-full object-cover'
            src='/assets/expert-person.jpeg'
            alt='Miniatura'
            fill
            sizes='10vw'
          />
        </div>
        <div className='grid gap-y-1.5'>
          <p className='flex items-center gap-x-3 text-base font-bold'>
            Sebastían Rioz <span className='rounded-lg bg-subscription px-2.5 py-0.5 text-xs font-medium'>PRO</span>
          </p>
          <p className='text-xs font-medium text-[#D8C5C5]'>Instructor y desarollador</p>
        </div>
      </header>
      <Separator />
      <footer className='flex flex-col gap-y-3 pl-3'>
        <p className='flex items-center gap-x-3 text-sm'>
          <StarIcon className='text-[#B95ED4]' size={20} />
          {variant === 'course' && 'Calificación del instructor: 5'}
          {variant === 'app' && 'Calificación del creador: 4.5'}
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <MessageSquareIcon className='text-[#B95ED4]' size={20} /> 4.3 (52 Reseñas)
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          {variant === 'course' && (
            <>
              <GraduationCapIcon className='text-[#B95ED4]' size={20} /> 60 estudiantes
            </>
          )}
          {variant === 'app' && (
            <>
              <FileIcon className='text-[#B95ED4]' size={20} /> 60 Aplicaciones vendidas
            </>
          )}
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <CirclePlayIcon className='text-[#B95ED4]' size={20} /> {variant === 'app' && 'Instructor verificado'}
          {variant === 'course' && '77 cursos'}
        </p>
        <Button className='ml-auto' variant='ghost'>
          Visitar perfil
        </Button>
      </footer>
    </article>
  )
}

export { UserPreviewCard }
