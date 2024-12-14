/* eslint-disable @typescript-eslint/indent */
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-[#702486] text-sm text-white hover:bg-[#9D32BC]',
        destructive:
          'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
        outline: 'border border-[#D194E2] bg-transparent text-[#D194E2] hover:border-[#9D32BC] hover:text-[#9D32BC]',
        outline_calendar: 'text-primary-b-100 hover:text-[#9D32BC]',
        secondary:
          'bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
        ghost: 'bg-transparent text-[#D194E2] hover:text-[#9D32BC]',
        link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
        filter:
          'rounded-lg border border-[#DFD1F3] bg-transparent text-[#DFD1F3] hover:border-[#D194E2] hover:text-[#D194E2]'
      },
      size: {
        default: 'h-11 px-4 py-3.5',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        filter: 'h-7 px-4 py-1',
        auto: 'h-auto p-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
