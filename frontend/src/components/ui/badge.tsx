import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80',
        secondary:
          'border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
        destructive:
          'border-transparent bg-red-500 text-neutral-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80',
        outline: 'rounded-full border-[#812AAC] bg-transparent text-white',
        cart: 'absolute -right-2 -top-2 rounded-full bg-white text-black',
        course: 'border-none bg-[#F3E3FBBF] px-1.5 py-1 text-sm font-semibold text-[#812AAC]',
        powerapp: 'rounded-full border-[#07B8C3] bg-[#07B8C3]/15 text-[#07B8C3]',
        appsheet: 'rounded-full border-[#4DE853] bg-[#4DE853]/15 text-[#4DE853]',
        warning: 'rounded-full border-none bg-[#C1D931]/15 px-4 py-1.5 text-xs font-bold text-[#C1D931]'
      },
      size: {
        cart: 'size-5 shrink-0 justify-center p-0'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
