import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { BookTextIcon, RocketIcon } from 'lucide-react'

interface UserNavigationSwitchProps {
  className?: string
}

function UserNavigationSwitch({ className }: UserNavigationSwitchProps) {
  return (
    <div className={cn('flex items-center gap-x-2.5 text-sm text-white', className)}>
      Explorador
      <Tabs defaultValue='explorer'>
        <TabsList className='rounded-full bg-[#702486] p-1 text-white'>
          <TabsTrigger
            className='h-6 w-8 rounded-full px-1.5 py-0.5 data-[state=active]:bg-white data-[state=active]:text-[#702486]'
            value='explorer'
          >
            <BookTextIcon />
          </TabsTrigger>
          <TabsTrigger
            className='h-6 w-8 rounded-full px-1.5 py-0.5 data-[state=active]:bg-white data-[state=active]:text-[#702486]'
            value='seller'
          >
            <RocketIcon />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

export { UserNavigationSwitch }
