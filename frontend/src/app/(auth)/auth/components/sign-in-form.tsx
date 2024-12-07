'use client'
import { redirectTo } from '@/actions'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AUTH_ERROR_MESSAGES, getURL, Routes } from '@/utils'
import { createClient } from '@/utils/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { SignInSchema, signInSchema } from '../utils/auth.schema'

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

  const onSubmit = async (values: SignInSchema) => {
    try {
      const supabase = createClient()
      const { error, data } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password
      })

      if (error) return toast.error(AUTH_ERROR_MESSAGES[error.code as string])

      form.reset()
      toast.success(`¡Bienvenido de nuevo ${data.user.user_metadata.name as string}!`)
    } catch (error) {
      return toast.error(error instanceof Error ? error.message : '¡Algo salió mal, inténtalo de nuevo!')
    }

    await redirectTo(Routes.App)
  }

  const handleSignInWithGithub = async () => {
    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo: getURL() + Routes.AuthCallback }
      })

      if (error) return toast.error(AUTH_ERROR_MESSAGES[error.code as string])
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '¡Algo salió mal, inténtalo de nuevo!')
    }
  }

  const handleSignInWithGoogle = async () => {
    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: getURL() + Routes.AuthCallback }
      })

      if (error) return toast.error(AUTH_ERROR_MESSAGES[error.code as string])
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '¡Algo salió mal, inténtalo de nuevo!')
    }
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
          <div className='flex items-center gap-x-6'>
            <Button
              className='bg-transparent p-0 hover:bg-transparent'
              onClick={handleSignInWithGithub}
              disabled={isSubmitting}
              type='button'
            >
              <Image className='object-contain' src='/assets/github-icon.png' width={50} height={50} alt='GitHub' />
            </Button>
            <Button
              className='bg-transparent p-0 hover:bg-transparent'
              onClick={handleSignInWithGoogle}
              disabled={isSubmitting}
              type='button'
            >
              <Image className='object-contain' src='/assets/google-icon.png' width={50} height={50} alt='Google' />
            </Button>
          </div>
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
