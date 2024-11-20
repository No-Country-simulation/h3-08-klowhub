import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Image from 'next/image'

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='shrink-0'>
        <Image
          className='rounded-full object-cover'
          src='/assets/avatar.png'
          alt='Avatar del usuario'
          width={40}
          height={40}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>Mí perfil</DropdownMenuItem>
        <DropdownMenuItem>Subscripción</DropdownMenuItem>
        <DropdownMenuItem>Ajustes</DropdownMenuItem>
        <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { UserMenu }
