/* eslint-disable @typescript-eslint/indent */
'use client'
import { cn } from '@/lib/utils'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-2.5 w-full overflow-hidden rounded-full bg-[#E8C9F1] dark:bg-neutral-50/20', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className='h-full w-full flex-1 rounded-full bg-[#9D32BC] transition-all dark:bg-neutral-50'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
