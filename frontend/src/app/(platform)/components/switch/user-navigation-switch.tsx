import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUserMode } from '@/hooks'
import { cn } from '@/lib/utils'
import { UserRole } from '@/models'
import { USER_ROLE_DICTIONARY } from '@/utils'
import { BookTextIcon, RocketIcon } from 'lucide-react'

interface UserNavigationSwitchProps {
  className?: string
}

function UserNavigationSwitch({ className }: UserNavigationSwitchProps) {
  const { userMode, setUserMode } = useUserMode()

  return (
    <div className={cn('flex items-center gap-x-2.5 text-sm text-white', className)}>
      {USER_ROLE_DICTIONARY[userMode]}
      <Tabs value={userMode} onValueChange={(value) => setUserMode(value as UserRole)}>
        <TabsList className='rounded-full bg-[#702486] p-1 text-white'>
          <TabsTrigger
            className='h-6 w-8 rounded-full px-1.5 py-0.5 data-[state=active]:bg-white data-[state=active]:text-[#702486]'
            value={UserRole.Explorer}
          >
            <BookTextIcon />
          </TabsTrigger>
          <TabsTrigger
            className='h-6 w-8 rounded-full px-1.5 py-0.5 data-[state=active]:bg-white data-[state=active]:text-[#702486]'
            value={UserRole.Seller}
          >
            <RocketIcon />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

export { UserNavigationSwitch }
