import { Button } from '@/components/ui/button'
import { EllipsisVertical, Heart, Link as LinkLucide, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface DashCustomer {
  name: string
  image_url: string
  pro: boolean
  desc: string
  qualification: number
}

export interface DashOportunity {
  daysDiff: number
  title: string
  desc: string
  tags: string[]
  platform_type: 'powerapp' | 'appsheet'
  user: DashCustomer
  details_url: string
}
const Oportunities = ({ oportunities }: { oportunities: DashOportunity[] }) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 w-full'>
      {oportunities.map((o: DashOportunity, doid: number) => (
        <div className='flex flex-col gap-4 p-6 f05-card-dark w-full md:w-1/2 lg:w-1/3' key={doid}>
          <div className='flex flex-row justify-end gap-4'>
            <Link href={o.details_url}><LinkLucide /></Link>
            <Link href='/'><Heart /></Link>
            <Link href='/'><EllipsisVertical /></Link>
          </div>
          <h4>Publicado hace {o.daysDiff} días.</h4>
          <h3 className='font-bold'>{o.title}</h3>
          <h4>{o.desc}</h4>
          <div className='flex flex-row gap-4'>
            {o.tags.map((tag: string, oid: number) => (
              <span className='gen-tag' key={oid}>{tag}</span>
            ))}
          </div>
          <div className='w-fit rounded-lg flex flex-row gap-4 py-2 px-8 items-center justify-center bg-[#FFFFFF10]'>
            <Image
              src={`/assets/${o.platform_type}-icon.png`}
              className=''
              alt='logo platform'
              width={25}
              height={22}
            />
            {`${o.platform_type === 'appsheet' ? 'AppSheet' : 'PowerApp'}`}
          </div>
          <div className='flex flex-row gap-4'>
            <div className='relative size-12'>
              <Image
                src={`${o.user.image_url}`}
                className='rounded-full object-cover'
                alt='Avatar del comprador'
                fill
                sizes='50rem'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <div> {o.user.name} <span className={`gen_pro_tag ${o.user.pro ? '' : 'hidden'}`}>PRO</span></div>
              <span className='text-[#D8C5C5]'>{o.user.desc}</span>
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <Star className='fill-yellow-500 text-yellow-500' /> Calificación del instructor: {o.user.qualification}
          </div>
          <Button variant='ghost' className='ml-auto'>Ver Detalles</Button>
        </div>
      ))}
    </div>
  )
}

export default Oportunities
