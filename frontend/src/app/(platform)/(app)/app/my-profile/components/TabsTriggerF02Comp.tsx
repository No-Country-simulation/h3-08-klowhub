/* eslint-disable @typescript-eslint/indent */
'use client'
import { cn } from '@/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

/**
 * Tabs con una 
 */
const TabsTriggerF02Comp = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-1.5 py-1 text-sm font-medium text-white ring-offset-white transition-all'+
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'+
      'data-[state=active]:bg-transparent data-[state=active]:border-primary-b-300 data-[state=active]:text-primary-b-300 data-[state=active]:shadow dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:bg-neutral-950 dark:data-[state=active]:text-neutral-50',
      className
    )}
    {...props}
  />
))
TabsTriggerF02Comp.displayName = TabsPrimitive.Trigger.displayName
export {TabsTriggerF02Comp};