import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUserMode } from '@/hooks'
import { cn } from '@/lib/utils'
import { UserRole } from '@/models'
import { Routes, USER_ROLE_DICTIONARY } from '@/utils'
import { BookTextIcon, RocketIcon } from 'lucide-react'
import Link from 'next/link'

interface UserNavigationSwitchProps {
  /**
   * The class name.
   */
  className?: string
}

function UserNavigationSwitch({ className }: UserNavigationSwitchProps) {
  const { userMode, updateUserMode } = useUserMode()

  return (
    <div className={cn('flex items-center gap-x-2.5 text-sm text-white', className)}>
      {USER_ROLE_DICTIONARY[userMode]}
      <Tabs value={userMode} onValueChange={(value) => updateUserMode(value as UserRole)}>
        <TabsList className='rounded-full bg-[#702486] p-1 text-white'>
          <TabsTrigger
            className='h-6 w-8 rounded-full px-1.5 py-0.5 data-[state=active]:bg-white data-[state=active]:text-[#702486]'
            value={UserRole.Explorer}
            asChild
          >
            <Link href={Routes.App}>
              <BookTextIcon />
            </Link>
          </TabsTrigger>
          <TabsTrigger
            className='h-6 w-8 rounded-full px-1.5 py-0.5 data-[state=active]:bg-white data-[state=active]:text-[#702486]'
            value={UserRole.Seller}
            asChild
          >
            <Link href={Routes.Dashboard}>
              <RocketIcon />
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

export { UserNavigationSwitch }
