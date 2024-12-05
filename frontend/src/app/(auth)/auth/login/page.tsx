import Image from 'next/image'
import { SignInForm } from '../components/sign-in-form'

function AuthLoginPage() {
  return (
    <main className='relative grid w-full grow px-6 py-9 before:absolute before:inset-0 before:-z-10 before:bg-primary-900/25 before:backdrop-blur-lg lg:grid-cols-2 lg:p-0 lg:before:bg-transparent lg:before:backdrop-blur-none'>
      <h1 className='hidden pl-14 pt-24 text-5xl text-white lg:block'>Knowhub</h1>
      <Image className='-z-20 object-cover' src='/assets/background.png' fill sizes='100vw' alt='Background' priority />
      <section className='grid lg:bg-primary-900/25 lg:p-24 lg:backdrop-blur-lg'>
        <div className='m-auto flex max-w-lg flex-col gap-y-6 lg:max-w-sm'>
          <h2 className='mb-3 text-center text-3xl text-white lg:hidden'>Knowhub</h2>
          <p className='text-xs text-white lg:text-base'>
            Bienvenido de nuevo. Inicia sesión para continuar creando y aprendiendo en Knowhub.
          </p>
          <SignInForm />
        </div>
      </section>
    </main>
  )
}

export default AuthLoginPage
