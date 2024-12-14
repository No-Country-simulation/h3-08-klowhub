import Image from 'next/image'
import React from 'react'

function TopHeadComp() {
  return (
    <div className='mt-4 p-6 flex flex-col items-center justify-center md:h-[10rem] max-sm:h-[4rem] w-full md:gap-2 max-sm:gap-0 rounded-md'>
      <Image
        src='/assets/temporal/f05-tophead-bg-1.png'
        alt='top background'
        width={1400}
        height={600}
        // layout='fill'
        // objectFit='cover'
        className='absolute -z-10 max-h-fit md:max-h-[12rem] w-[98%] bg-cover max-w-screen-2xl'
      />
      <h2 className='text-3xl font-bold'>KlowHub</h2>
      <h6 className='text-xs font-light'>Descubre, Aprende y Crea</h6>
    </div>
  )
}

export default TopHeadComp
