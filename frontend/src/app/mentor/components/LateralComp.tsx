import Image from 'next/image'
import React from 'react'

function LateralComp() {
  return (
    <div className='md:block sm:hidden max-w-[22rem] f02-card-02 h-fit'>
      <Image
        className='object-cover rounded-t-md'
        src='/assets/temporal/f02-back-02.png'
        alt='Background 02'
        width={1000}
        height={1000}
      />
      <div className='flex flex-col gap-4 items-center p-4'>
        <p className='text-xs'>Optimiza tu Perfil</p>
        <p className='text-center text-xs'>Optimizá tu perfil y llevá tus apps al siguiente nivel. Accedé a recursos exclusivos que te ayudarán a mejorar tus habilidades y maximizar el potencial de tus proyectos.</p>
      </div>
    </div>
  )
}

export default LateralComp