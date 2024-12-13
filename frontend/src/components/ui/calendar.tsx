'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const bgActive = 'bg-[#FFFFFF10]'
  const textActive = 'text-primary-b-100'
  console.log(buttonVariants({ variant: 'outline_calendar' }));
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent border-0 p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute right-8',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-neutral-500 rounded-full w-8 font-normal text-[0.8rem] dark:text-neutral-400',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm',
          'focus-within:relative focus-within:z-20',
          `[&:has([aria-selected])]:${bgActive} [&:has([aria-selected].day-outside)]:${bgActive} [&:has([aria-selected].day-range-end)]:rounded-r-full`,
          `dark:[&:has([aria-selected])]:${bgActive} dark:[&:has([aria-selected].day-outside)]:${bgActive}`,
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-full [&:has(>.day-range-start)]:rounded-l-full first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full'
            : '[&:has([aria-selected])]:rounded-full'
        ),
        day: cn(
          buttonVariants({ variant: 'outline_calendar' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 rounded-full'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          cn(`${bgActive} ${textActive} hover:${bgActive} hover:${textActive} focus:${bgActive} focus:text-neutral-50 dark:${bgActive} dark:${textActive} dark:hover:${bgActive} dark:hover:${textActive} dark:focus:${bgActive} dark:focus:${textActive}`),
        day_today: 'border border-neutral-100',
        day_outside:
          'day-outside text-neutral-500 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400',
        day_disabled: 'text-neutral-500 opacity-50 dark:text-neutral-400',
        day_range_middle:
          'aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50',
        day_hidden: 'invisible',
        ...classNames
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className='h-4 w-4' />,
        IconRight: ({ ...props }) => <ChevronRight className='h-4 w-4' />
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
