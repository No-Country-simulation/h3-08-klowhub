import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { MoreVerticalIcon } from 'lucide-react'
import Image from 'next/image'

function CourseProgressCard() {
  return (
    <article className='grid items-center rounded-lg bg-[#1F2937] md:grid-cols-[400px_1fr]'>
      <div className='relative aspect-square h-64 w-full'>
        <Image
          className='rounded-t-lg object-cover md:rounded-l-lg md:rounded-tr-none'
          src='/assets/course-progress.png'
          alt='Curso en progreso'
          fill
          sizes='50vw'
        />
        <Badge className='absolute left-2 top-3 rounded-full bg-[#F7E5FFF2] px-4 py-1 text-[#AE53DA]'>Curso</Badge>
      </div>
      <header className='flex flex-col gap-y-3 p-5 md:p-3'>
        <h2 className='flex items-center justify-between gap-x-2 text-sm font-semibold text-white md:text-base'>
          Automatización de flujos de trabajo con AppSheet <MoreVerticalIcon className='shrink-0' />
        </h2>
        <p className='text-sm text-white'>
          Aprende a crear flujos de trabajo automatizados en AppSheet, optimizando la gestión de tareas y aprobaciones,
          lo que mejorará la productividad en tus proyectos.
        </p>
        <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          <li>
            <Badge variant='course'>CRM</Badge>
          </li>
          <li>
            <Badge variant='course'>Clientes</Badge>
          </li>
          <li>
            <Badge variant='course'>Ventas</Badge>
          </li>
        </ul>
        <div className='flex flex-col'>
          <p className='text-sm text-white'>Mi progreso</p>
          <div className='flex items-center gap-x-2.5'>
            <Progress value={30} />
            30%
          </div>
        </div>
        <Button className='ml-auto md:ml-0 md:mr-auto'>Continuar viendo</Button>
      </header>
    </article>
  )
}

export { CourseProgressCard }
