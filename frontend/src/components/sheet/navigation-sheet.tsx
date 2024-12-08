'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUserMode } from '@/hooks'
import { UserRole } from '@/models'
import { EXPLORER_HEADER_ROUTES, Routes, SELLER_HEADER_ROUTES } from '@/utils'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserNavigationSwitch } from '../switch/user-navigation-switch'

function NavigationSheet() {
  const pathname = usePathname()
  const { userMode } = useUserMode()
  const routesByUserMode = userMode === UserRole.Explorer ? EXPLORER_HEADER_ROUTES : SELLER_HEADER_ROUTES

  return (
    <Sheet>
      <SheetTrigger className='xl:hidden'>
        <MenuIcon className='text-white' />
      </SheetTrigger>
      <SheetContent className='flex flex-col gap-y-8 bg-primary-800 xl:hidden'>
        <SheetHeader>
          <SheetTitle className='text-white'>Menú de navegación</SheetTitle>
          <SheetDescription className='sr-only'>Lista de opciones de navegación para el usuario.</SheetDescription>
        </SheetHeader>
        <nav>
          <ul className='flex flex-col gap-y-4'>
            {routesByUserMode.map(({ label, href }) => (
              <li key={href}>
                <SheetClose asChild>
                  <Link className='text-sm font-semibold text-primary-b-200' href={href}>
                    {label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <UserNavigationSwitch />
        <Tabs defaultValue={pathname === Routes.App ? 'app' : 'home'}>
          <TabsList>
            <TabsTrigger value='home'>
              <SheetClose asChild>
                <Link href={Routes.Home}>Inicio</Link>
              </SheetClose>
            </TabsTrigger>
            <TabsTrigger value='app'>
              <SheetClose asChild>
                <Link href={Routes.App}>Plataforma</Link>
              </SheetClose>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </SheetContent>
    </Sheet>
  )
}

export { NavigationSheet }
