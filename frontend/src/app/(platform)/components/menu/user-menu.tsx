'use client'
import { redirectTo } from '@/actions'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Routes } from '@/utils'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

function UserMenu() {
  const [isSignOut, setIsSignOut] = useState(false)

  const handleSignOut = async () => {
    try {
      setIsSignOut(true)
      const supabase = createClient()
      await supabase.auth.signOut()

      toast.success('¡Se ha cerrado la sesión!')
    } catch (error) {
      return toast.error(error instanceof Error ? error.message : '¡Algo salió mal, inténtalo de nuevo!')
    } finally {
      setIsSignOut(false)
    }

    await redirectTo(Routes.AuthLogin)
  }

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
        <DropdownMenuItem className='cursor-pointer' disabled={isSignOut} asChild>
          <Link href={Routes.AppMyProfile}>Mi perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' disabled={isSignOut} asChild>
          <Link href={Routes.AppMyCourses}>Mis cursos</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' disabled={isSignOut} asChild>
          <Link href={Routes.AppMyApplications}>Mis aplicaciones</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' disabled={isSignOut} asChild>
          <Link href={Routes.AppMyProfileSettings}>Ajustes</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut} onSelect={(ev) => ev.preventDefault()} disabled={isSignOut}>
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { UserMenu }
