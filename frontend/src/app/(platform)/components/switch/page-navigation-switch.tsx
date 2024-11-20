'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Routes } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function PageNavigationSwitch() {
  const pathname = usePathname()

  return (
    <Tabs defaultValue={pathname === Routes.App ? 'app' : 'home'} className='ml-auto hidden xl:ml-0 xl:block'>
      <TabsList>
        <TabsTrigger value='home'>
          <Link href={Routes.Home}>Inicio</Link>
        </TabsTrigger>
        <TabsTrigger value='app'>
          <Link href={Routes.App}>Plataforma</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export { PageNavigationSwitch }
