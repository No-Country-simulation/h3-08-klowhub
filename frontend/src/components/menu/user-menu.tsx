'use client'
import { redirectTo } from '@/actions'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { useUser, useUserMode } from '@/hooks'
import { UserRole } from '@/models'
import { Routes } from '@/utils'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

function UserMenu() {
  const { userMode } = useUserMode()
  const { user, isLoadingUser } = useUser()

  const [isSignOut, setIsSignOut] = useState(false)

  if (isLoadingUser) return <Skeleton className='size-10 rounded-full' />
  if (!user) return null

  /**
   * Handles the sign out button click event.
   * @returns Redirects to the login page.
   */
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
      <DropdownMenuTrigger className='relative size-10 shrink-0'>
        <Image
          className='rounded-full object-cover'
          src={user.avatar_url ?? '/assets/user-placeholder.jpg'}
          alt='Avatar del usuario'
          fill
          sizes='5vw'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <div className='max-w-60 px-2 py-1.5 text-white'>
          <p className='truncate text-sm font-bold'>{user.name}</p>
          <p className='truncate text-xs'>{user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer' disabled={isSignOut} asChild>
          <Link href={Routes.AppProfile}>Mi perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' disabled={isSignOut} asChild>
          <Link href={userMode === UserRole.Explorer ? Routes.AppCourses : Routes.DashboardCourses}>Mis cursos</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' disabled={isSignOut} asChild>
          <Link href={userMode === UserRole.Explorer ? Routes.AppApplications : Routes.DashboardApplications}>
            Mis aplicaciones
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer' disabled={isSignOut} asChild>
          <Link href={Routes.AppProfileSettings}>Ajustes</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut} onSelect={(ev) => ev.preventDefault()} disabled={isSignOut}>
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { UserMenu }
