import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SectionButton({ text, img, link = '' }: { text: string, img: string, link: string }) {
  return (
    <Link className='rounded-md relative w-full h-[6rem] flex items-center justify-center' href={link}>
      <p className='font-bold'>{text}</p>
      <Image
        src={img}
        alt='alt sec'
        width={330} height={96}
        className='absolute w-full h-full -z-10'
      />
    </Link>
  )
}

export default SectionButton
