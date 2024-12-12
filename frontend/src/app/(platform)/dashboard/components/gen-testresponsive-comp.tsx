import React from 'react'

function GenTestresponsiveComp({ t }: { t: boolean }) {
  return (
    <div className={`w-full ${t ? '' : 'hidden'}`}>
      GenTestresponsiveComp (quitar en producción)
      <div className='block md:hidden'>SM</div>
      <div className='hidden sm:hidden md:block lg:hidden'>MD</div>
      <div className='hidden sm:hidden md:hidden lg:block'>LG</div>
    </div>
  )
}

export default GenTestresponsiveComp
