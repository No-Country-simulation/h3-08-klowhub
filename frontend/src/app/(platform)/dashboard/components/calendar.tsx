'use client'
import React from 'react'
import { Calendar } from '@/components/ui/calendar'

function DashCalendar({ fechas }: { fechas: Date[] }) {
  const [date, setDate] = React.useState<Date[] | undefined>(fechas)
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='font-bold'>Calendario</h3>
      <Calendar
        mode='multiple'
        selected={date}
        onSelect={setDate}
        className='rounded-md border bg-[#FFFFFF05]'
      />
    </div>
  )
}

export default DashCalendar
