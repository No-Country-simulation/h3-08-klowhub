import { cn } from '@/lib/utils'
import React from 'react'

function CardDynamic({ className, children }: { className: string, children: React.ReactNode }) {
  return (
    <div className={cn('gen-card', className)}>
      {children}
    </div>
  )
}

export default CardDynamic
