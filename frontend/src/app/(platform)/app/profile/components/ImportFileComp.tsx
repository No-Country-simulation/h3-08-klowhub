import Image from 'next/image'
import React from 'react'

function ImportFileComp({ desc }: { desc: string }) {
  return (
    <div className='f02-dotted-space'>
      <Image
        src='/assets/temporal/f02-cloud.svg'
        alt='cloud'
        width={50}
        height={50}
      />
      <h4 className='text-primary-b-300 text-center'>{desc}</h4>
      <h4 className='text-white text-center'>Arrastre o haga click aqui para subir los archivos</h4>
    </div>
  )
}

export default ImportFileComp
