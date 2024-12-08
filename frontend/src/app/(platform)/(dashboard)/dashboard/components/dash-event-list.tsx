import { cn } from '@/lib/utils'
import React from 'react'

export interface DashEvent {
  title: string
  time: string
}
export interface DashEventGroup {
  title: string
  classNameChild: string
  events: DashEvent[]
}
function DashEventList({ eventsGroup }: { eventsGroup: DashEventGroup[] }) {
  return (
    <div className='w-full flex flex-col gap-4'>
      {eventsGroup.map((eg: DashEventGroup, i: number) => (
        <div className='w-full flex flex-col gap-4' key={i}>
          <h3>{eg.title}</h3>
          {eg.events.map((event: DashEvent, j: number) => (
            <div className={cn(eg.classNameChild, 'gen-event-pill')} key={j}>
              <span>{event.title}</span>
              <span>{event.time}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default DashEventList
