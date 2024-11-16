'use client'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Routes } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { SignInSchema, signInSchema } from '../utils/schema/auth.schema'

function SignInForm() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      susbcribeNewsletter: false
    }
  })
  const { isSubmitting } = form.formState

  const onSubmit = (data: SignInSchema) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-3'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Correo electrónico' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='password' placeholder='Contraseña' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p className='mx-auto max-w-sm text-center text-xs text-white'>
          Al registrarte, aceptas nuestras{' '}
          <Link className='text-primary-200' href={Routes.TermsAndConditions}>
            Condiciones de servicio
          </Link>{' '}
          y nuestra{' '}
          <Link className='text-primary-200' href={Routes.PrivacyPolicy}>
            Política de privacidad
          </Link>
          .
        </p>
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? <Loader2Icon className='animate-spin' /> : 'Iniciar sesión'}
        </Button>
        <footer className='flex flex-col items-center justify-center gap-y-4'>
          <p className='text-center text-sm text-white'>O continuar con</p>
          <ul className='flex items-center gap-x-6'>
            <li>
              <Image className='object-contain' src='/assets/github-icon.png' width={50} height={50} alt='GitHub' />
            </li>
            <li>
              <Image className='object-contain' src='/assets/facebook-icon.png' width={50} height={50} alt='Facebook' />
            </li>
            <li>
              <Image className='object-contain' src='/assets/google-icon.png' width={50} height={50} alt='Google' />
            </li>
          </ul>
        </footer>
        <FormField
          control={form.control}
          name='susbcribeNewsletter'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start gap-x-2 space-y-0'>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={(value) => field.onChange(value)} />
              </FormControl>
              <FormLabel className='text-xs text-white'>
                Quiero recibir novedades y consejos de la plataforma.
              </FormLabel>
            </FormItem>
          )}
        />
        <p className='flex items-center justify-center gap-x-2 text-xs text-white'>
          ¿No tienes una cuenta?
          <Link className='text-primary-200' href={Routes.AuthRegister}>
            Registrate
          </Link>
        </p>
      </form>
    </Form>
  )
}

export { SignInForm }
