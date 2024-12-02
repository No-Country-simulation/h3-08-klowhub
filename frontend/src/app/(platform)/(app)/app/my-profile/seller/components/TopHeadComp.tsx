import Image from 'next/image'
import React from 'react'

function TopHeadComp() {
  return (
    <div className='p-6 flex flex-col items-center justify-center h-[12rem] w-full gap-2 rounded-md'>
      <Image
        src='/assets/temporal/f05-tophead-bg-1.png'
        alt='top background'
        width={1400}
        height={600}
        // layout='fill'
        // objectFit='cover'
        className='absolute -z-10 max-h-[12rem] w-[98%] bg-cover'
      />
      <h2 className='text-3xl font-bold'>KlowHub</h2>
      <h6 className='text-xs font-light'>Descubre, Aprende y Crea</h6>
    </div>
  )
}

export default TopHeadComp
