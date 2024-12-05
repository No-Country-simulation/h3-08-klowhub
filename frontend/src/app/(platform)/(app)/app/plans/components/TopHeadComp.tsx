import Image from 'next/image'

function TopHeadComp() {
  return (
    <div className='mt-4 flex w-full flex-col items-center justify-center rounded-md p-6 max-sm:h-[4rem] max-sm:gap-0 md:h-[10rem] md:gap-2'>
      <Image
        src='/assets/temporal/f05-tophead-bg-1.png'
        alt='top background'
        width={1400}
        height={600}
        // layout='fill'
        // objectFit='cover'
        className='absolute -z-10 w-[98%] bg-cover max-sm:max-h-fit md:max-h-[12rem]'
      />
      <h2 className='text-3xl font-bold'>Knowhub</h2>
      <h6 className='text-xs font-light'>Descubre, Aprende y Crea</h6>
    </div>
  )
}

export default TopHeadComp
