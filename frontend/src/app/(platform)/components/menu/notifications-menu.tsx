import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Routes } from '@/utils'
import { BellIcon, InfoIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function NotificationsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='relative' variant='ghost' size='icon'>
          <BellIcon size={20} />
          <Badge variant='cart' size='cart'>
            1
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[37.375rem] p-0' align='end'>
        <p className='flex items-center gap-x-2.5 px-6 py-2.5 text-sm font-semibold text-white'>
          <BellIcon size={20} />
          Notificaciones
        </p>
        <DropdownMenuSeparator className='my-0 bg-[#D194E2]' />
        <DropdownMenuItem className='flex items-center justify-between gap-x-7 px-2.5 py-3.5 text-sm'>
          <Image
            className='rounded-full object-cover'
            src='/assets/avatar.png'
            alt='Avatar del usuario'
            width={40}
            height={40}
          />
          Tomas te compro una aplicación
          <span className='ml-auto shrink-0'>hace 1 día</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className='my-0 bg-[#D194E2]' />
        <DropdownMenuItem className='flex items-center justify-between gap-x-7 px-2.5 py-3.5 text-sm'>
          <Image
            className='rounded-full object-cover'
            src='/assets/avatar.png'
            alt='Avatar del usuario'
            width={40}
            height={40}
          />
          Tomas te compro una aplicación
          <span className='ml-auto shrink-0'>hace 1 día</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className='my-0 bg-[#D194E2]' />
        <DropdownMenuItem className='flex items-center justify-between gap-x-7 px-2.5 py-3.5 text-sm'>
          <Image
            className='rounded-full object-cover'
            src='/assets/avatar.png'
            alt='Avatar del usuario'
            width={40}
            height={40}
          />
          Tomas te compro una aplicación
          <span className='ml-auto shrink-0'>hace 1 día</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className='my-0 bg-[#D194E2]' />
        <DropdownMenuItem className='flex items-center justify-between gap-x-7 px-2.5 py-3.5 text-sm'>
          <Image
            className='rounded-full object-cover'
            src='/assets/avatar.png'
            alt='Avatar del usuario'
            width={40}
            height={40}
          />
          Tomas te compro una aplicación
          <span className='ml-auto shrink-0'>hace 1 día</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className='my-0 bg-[#D194E2]' />
        <footer className='flex items-start gap-x-3 px-2.5 py-5 text-sm text-white sm:items-center'>
          <InfoIcon className='shrink-0' size={16} />
          <p className='flex flex-wrap items-center gap-2'>
            Completa la información relevante para tu perfil de mentor.
            <Link href={Routes.AppMyProfile}>Completar perfil</Link>
          </p>
        </footer>
        <DropdownMenuSeparator className='my-0 bg-[#D194E2]' />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { NotificationsMenu }
