import Image from 'next/image'
import React from 'react'

function TopHeadComp() {
  return (
    <div className='w-full'>
      <Image
        src='/assets/temporal/f05-tophead-bg.png'
        alt='top background'
        // width={1400}
        // height={600}
        layout='fill'
        objectFit='cover'
        className='absolute -z-10 max-h-[12rem]'
      />
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl'>KlowHub</h2>
        <h6 className='text-xs'>Descubre, Aprende y Crea</h6>
      </div>
    </div>
  )
}

export default TopHeadComp