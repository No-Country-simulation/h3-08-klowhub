import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Dot, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface Consult {
  title: string
  desc: string
  state: 'pendiente' | 'solucionada'
  platform_type: 'powerapp' | 'appsheet'
  details_url: string
}
function DashConsultList({ consultList }: { consultList: Consult[] }) {
  return (
    <div className='flex flex-col gap-2'>
      {consultList.map((consult: Consult, i: number) => (
        <div className='flex flex-col md:flex-row p-8 bg-[#F8F9FA10] gap-4 items-center' key={i}>
          <div className='flex flex-col gap-2 font-bold text-xs'>
            <p>{consult.title}</p>
            <p>{consult.desc}</p>
          </div>
          <div className='h-fit rounded-lg flex flex-row gap-4 p-2 items-center justify-center bg-[#FFFFFF10]'>
            <Image
              src={`/assets/${consult.platform_type}-icon.png`}
              className='size-6 ml-3'
              alt='logo platform'
              width={25}
              height={22}
            />
            <p className='capitalize min-w-24 mr-3'>{consult.platform_type === 'powerapp' ? 'Power Apps' : 'App Sheet'}</p>
          </div>
          <div className='flex flex-col'>
            Estado
            <span className={cn((consult.state === 'solucionada' ? 'gen-sale-type-success' : 'gen-sale-type-warning'), 'capitalize text-xs')}>
              {consult.state === 'solucionada' ? <Dot /> : <Timer />}
              {consult.state}
            </span>
          </div>
          <Link href={consult.details_url}>
            <Button variant='ghost'>
              Ver detalle
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default DashConsultList
