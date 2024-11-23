import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { HEADER_ROUTES, Routes } from '@/utils'
import { MailIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { NotificationsMenu } from './menu/notifications-menu'
import { UserMenu } from './menu/user-menu'
import { NavigationSheet } from './sheet/navigation-sheet'
import { PageNavigationSwitch } from './switch/page-navigation-switch'
import { UserNavigationSwitch } from './switch/user-navigation-switch'

function Header() {
  return (
    <header className='bg-primary-800'>
      <div className='mx-auto flex max-w-screen-2xl items-center justify-between gap-x-4 px-5 py-2 lg:px-10 lg:py-2.5'>
        <Link className='shrink-0' href={Routes.Home}>
          <Image className='object-cover' src='/assets/logo.png' alt='Logo knowhub' width={52} height={54} />
        </Link>
        <PageNavigationSwitch />
        <nav className='hidden xl:block'>
          <ul className='items-center gap-x-6 lg:flex'>
            {HEADER_ROUTES.map(({ label, href }) => (
              <li key={label}>
                <Link className='line-clamp-1 text-sm font-semibold text-primary-b-200' href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='ml-auto flex items-center gap-x-4 xl:ml-0'>
          <div className='flex items-center gap-x-2.5 text-white'>
            <Button className='relative' variant='ghost' size='icon'>
              <ShoppingCartIcon size={20} />
              <Badge variant='cart' size='cart'>
                1
              </Badge>
            </Button>
            <NotificationsMenu />
            <Button className='relative' variant='ghost' size='icon'>
              <MailIcon size={20} />
              <Badge variant='cart' size='cart'>
                1
              </Badge>
            </Button>
          </div>
          <UserNavigationSwitch className='hidden xl:flex' />
          <UserMenu />
        </div>
        <NavigationSheet />
      </div>
    </header>
  )
}

export { Header }
