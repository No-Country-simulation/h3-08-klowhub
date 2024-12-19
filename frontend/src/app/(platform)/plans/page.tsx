import Image from 'next/image'
import { BuyPlanForm } from './components/buy-plan-form'

function PlansPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-8 px-5 py-8 lg:px-10 lg:py-8'>
      <div className='relative flex aspect-video max-h-52 w-full flex-col items-center justify-center gap-y-2 bg-black/15 text-center'>
        <Image
          className='-z-10 rounded-lg object-cover object-left lg:object-center'
          src='/assets/temporal/f05-tophead-bg-1.png'
          alt='Banner de planes'
          fill
          sizes='100vw'
        />
        <p className='text-2xl font-semibold md:text-5xl'>Klowhub</p>
        <p className='text-sm md:text-xl'>Descubre, Aprende y Crea</p>
      </div>
      <BuyPlanForm />
    </main>
  )
}

export default PlansPage
