import { Button } from '@/components/ui/button'
import { caracteristics } from '@/mock/general.mock'
import { Routes } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

function AboutAppSheetPage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-16 px-5 py-8 md:gap-y-32 lg:px-10 lg:py-8'>
      <section className='relative flex flex-col items-center justify-center gap-y-4 rounded-lg bg-black/30 px-5 py-40 text-center xl:bg-black/15'>
        <Image
          src='/assets/banner.png'
          alt='Banner'
          fill
          sizes='100vw'
          className='-z-10 rounded-lg object-cover object-right xl:object-center'
        />
        <h1 className='text-3xl font-bold md:text-6xl'>Sobre AppSheet</h1>
        <p className='max-w-prose text-center text-sm'>
          Descubre la plataforma que está revolucionando el desarrollo de aplicaciones sin código y automatiza tus
          procesos.
        </p>
      </section>
      <section className='grid items-center gap-8 md:grid-cols-2'>
        <header className='order-2 space-y-4 md:order-none'>
          <h2 className='text-2xl font-bold md:text-4xl'>¿Qué es AppSheet?</h2>
          <p className='text-sm'>
            AppSheet es una plataforma de desarrollo de aplicaciones no-code líder en la industria. Permite a usuarios
            sin experiencia en programación crear aplicaciones móviles y web sofisticadas utilizando interfaces
            intuitivas y datos de hojas de cálculo. Fundada en 2014 y adquirida por Google Cloud en 2020, AppSheet ha
            transformado la forma en que las empresas abordan el desarrollo de aplicaciones. Miles de usuarios han
            utilizado AppSheet para crear aplicaciones para sus negocios, incluyendo productos como: sistemas de gestión
            de inventarios, sistemas de gestión de ventas, sistemas de gestión de clientes y más.
          </p>
        </header>
        <div className='relative aspect-square size-full max-h-96'>
          <Image
            src='/assets/product-detail.png'
            alt='AppSheet'
            fill
            sizes='50vw'
            className='rounded-lg object-cover'
          />
        </div>
      </section>
      <section className='grid gap-y-10 rounded-lg bg-white/10 px-5 py-10 md:py-20'>
        <h3 className='text-center text-2xl font-bold md:text-4xl'>Características Principales de AppSheet</h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {caracteristics.map((caracteristic) => (
            <article
              key={caracteristic.name}
              className='flex flex-col gap-y-2 rounded-lg border-2 border-[#B95ED4] p-6'
            >
              <p className='font-semibold underline decoration-[#B95ED4] underline-offset-4 md:text-lg'>
                {caracteristic.name}
              </p>
              <p className='text-sm'>{caracteristic.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className='grid items-center gap-8 md:grid-cols-2'>
        <header className='order-2 space-y-4 md:order-none'>
          <h3 className='text-2xl font-bold md:text-4xl'>El Impacto de AppSheet en las Empresas</h3>
          <p className='text-sm'>
            AppSheet ha transformado la forma en que las empresas abordan el desarrollo de aplicaciones y la
            automatización de procesos. Al permitir que los empleados creen sus propias soluciones, AppSheet fomenta la
            innovación, reduce los costos de desarrollo y acelera la transformación digital.
          </p>
          <ul className='grid list-inside list-disc gap-y-2 text-sm'>
            <li>Reducción del tiempo de desarrollo de aplicaciones en hasta un 90%</li>
            <li>Aumento de la productividad al automatizar procesos manuales</li>
            <li>Mejora en la toma de decisiones con acceso a datos en tiempo real</li>
            <li>Fomento de una cultura de innovación y resolución de problemas</li>
          </ul>
        </header>
        <div className='relative aspect-square size-full max-h-96'>
          <Image
            src='/assets/product-detail.png'
            alt='AppSheet'
            fill
            sizes='50vw'
            className='rounded-lg object-cover'
          />
        </div>
      </section>
      <section className='relative flex flex-col items-center justify-center gap-y-4 rounded-lg bg-black/30 px-5 py-40 xl:bg-black/15'>
        <Image
          src='/assets/banner.png'
          alt='Banner'
          fill
          sizes='100vw'
          className='-z-10 rounded-lg object-cover object-right xl:object-center'
        />
        <h4 className='text-center text-3xl font-bold md:text-6xl'>Aprende y Domina AppSheet</h4>
        <p className='max-w-prose text-center text-sm'>
          Explora nuestros recursos y únete a la comunidad de desarrolladores AppSheet para llevar tus habilidades al
          siguiente nivel.
        </p>
        <div className='mt-4 grid gap-x-4 gap-y-2 md:grid-cols-2'>
          <Button asChild>
            <Link href={Routes.Courses}>Explorar Cursos</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href={Routes.AppProfileSettings}>Convertirse en desarrollador</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

export default AboutAppSheetPage
