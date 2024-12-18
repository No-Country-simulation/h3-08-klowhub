import { HeartIcon, MoreVerticalIcon, PaperclipIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
}

interface ProjectCardProps {
  /**
   * The project to render.
   */
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className='grid gap-y-4 rounded-lg bg-[#1F2937] p-3'>
      <div className='flex items-center justify-end'>
        <Button variant='ghost' size='icon'>
          <PaperclipIcon />
        </Button>
        <Button variant='ghost' size='icon'>
          <HeartIcon />
        </Button>
        <Button variant='ghost' size='icon'>
          <MoreVerticalIcon />
        </Button>
      </div>
      <header className='grid gap-y-1'>
        <p className='text-sm'>Publicado hace 3 dias</p>
        <h2 className='text-base font-bold'>{project.title}</h2>
      </header>
      <div className='grid gap-y-3'>
        <p className='line-clamp-3 text-sm'>{project.description}</p>
        <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge className='capitalize' variant='course'>
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
      <Button className='w-fit bg-white/10' type='button'>
        <Image src='/assets/appsheet-icon.png' alt='Appsheet logo' width={25} height={22} />
        AppSheet
      </Button>
      <footer className='grid grid-cols-[auto_1fr] gap-3'>
        <Image className='rounded-full object-cover' src='/assets/avatar.png' alt='Avatar' width={50} height={50} />
        <div className='grid gap-y-1'>
          <p className='flex items-center gap-x-3 text-sm'>
            Sebastían Rioz <span className='rounded-lg bg-subscription px-2.5 py-0.5 text-xs font-medium'>PRO</span>
          </p>
          <p className='text-xs'>Instructor y desarrollador</p>
        </div>
        <p className='col-span-full flex items-center gap-x-3 text-sm'>
          <StarIcon className='text-[#B95ED4]' size={14} /> Calificacion del instructor: 5
        </p>
      </footer>
      <Button className='ml-auto' variant='ghost'>
        Ver detalles
      </Button>
    </article>
  )
}

export { ProjectCard }
