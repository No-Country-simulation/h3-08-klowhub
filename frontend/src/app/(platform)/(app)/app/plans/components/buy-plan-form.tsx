'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useCartPlan, useUser } from '@/hooks'
import { usePlans } from '@/hooks/swr'
import { BillingCycle } from '@/models'
import {
  BILLING_CYCLE_DICTIONARY,
  BuyPlanSchema,
  buyPlanSchema,
  PAYMENT_METHOD_DICTIONARY,
  PAYMENT_METHOD_LIST,
  Routes,
  SELLER_TYPE_DICTIONARY,
  SELLER_TYPE_LIST
} from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircleIcon, Loader2Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import { PlanCard } from './plan-card'
import { PlansSkeleton } from './plans-skeleton'

const MIN_STEPS = 1
const MAX_STEPS = 2

enum StepToBuyPlan {
  SelectPlan = 1,
  CompleteInformation = 2
}

function BuyPlanForm() {
  const router = useRouter()
  const user = useUser().user
  const plans = usePlans().plans
  const selectPlanCart = useCartPlan().selectPlan
  const [steps, setSteps] = useState(StepToBuyPlan.SelectPlan)

  const form = useForm<BuyPlanSchema>({
    resolver: zodResolver(buyPlanSchema),
    defaultValues: {
      plan_id: undefined,
      user_id: undefined,
      type: BillingCycle.Monthly,
      seller_type: undefined,
      user_description: '',
      user_website_url: '',
      user_preferred_payment_method: undefined
    }
  })
  const { isSubmitting } = form.formState

  useEffect(() => {
    if (user) {
      form.setValue('user_id', user.id)
    }
  }, [form, user])

  const onSubmit = async (data: BuyPlanSchema) => {
    try {
      const foundPlan = plans?.find((plan) => plan.id === data.plan_id)
      if (!foundPlan) return toast.error('¡No se ha seleccionado un plan!')

      selectPlanCart({ ...data, plan: foundPlan })
      form.reset()
      toast.success('¡Se ha seleccionado el plan exitosamente!')
      router.push(Routes.AppPlansCart)
    } catch (error) {
      toast.error('¡Algo salió mal, inténtalo de nuevo!')
    }
  }

  const previousStep = async () => {
    if (steps <= MIN_STEPS) return
    setSteps((prevStep) => prevStep - MIN_STEPS)
  }

  const nextStep = async () => {
    if (steps >= MAX_STEPS) return
    setSteps((prevStep) => prevStep + MIN_STEPS)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-x-4 gap-y-10'>
        {steps === StepToBuyPlan.SelectPlan && <StepSelectPlan />}
        {steps === StepToBuyPlan.CompleteInformation && <StepCompleteInformation />}
        <div className='flex flex-col items-center gap-x-4 gap-y-2 sm:flex-row sm:justify-end'>
          {steps > MIN_STEPS && (
            <Button className='w-full sm:max-w-60' onClick={previousStep} type='button' variant='outline'>
              Atrás
            </Button>
          )}
          {steps < MAX_STEPS && (
            <Button className='w-full sm:max-w-60' onClick={nextStep} type='button'>
              Continuar
            </Button>
          )}
          {steps === MAX_STEPS && (
            <Button className='w-full sm:max-w-60' type='submit' disabled={isSubmitting}>
              {isSubmitting ? <Loader2Icon className='animate-spin' /> : 'Crear aplicación'}
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}

function StepSelectPlan() {
  const { plans, isLoadingPlans } = usePlans()
  const form = useFormContext<BuyPlanSchema>()
  const selectedBillingCycle = form.watch('type')
  const selectedPlan = form.watch('plan_id')

  return (
    <section className='flex flex-col gap-y-6'>
      <header className='grid gap-y-1.5'>
        <h1 className='text-base font-bold'>¡Bienvenido a la Comunidad de Vendedores!</h1>
        <p className='text-sm'>
          Elige el plan que mejor se adapte a tus necesidades y comienza a monetizar tus creaciones. Desde el plan
          gratuito hasta las opciones premium, cada uno ofrece herramientas diseñadas para maximizar tu éxito como
          creador.
        </p>
        <p className='mt-3 text-sm font-bold'>Detalles del plan seleccionado</p>
        <p className='text-sm'>
          A continuación, encontrarás una descripción detallada de las características y beneficios del plan que has
          elegido.
        </p>
      </header>
      <div className='grid gap-y-3 rounded-lg bg-white/10 p-6'>
        <div className='flex flex-wrap items-center justify-center gap-x-4 text-sm'>
          Facturación {BILLING_CYCLE_DICTIONARY[selectedBillingCycle]}
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='space-y-0'>
                <FormControl>
                  <Switch
                    checked={field.value === BillingCycle.Yearly}
                    onCheckedChange={(state) => {
                      field.onChange(state ? BillingCycle.Yearly : BillingCycle.Monthly)
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <span className='text-[#B95ED4]'>Facturación anual (ahorra el 15%)</span>
        </div>
        <Separator />
        {isLoadingPlans && <PlansSkeleton />}
        {plans && (
          <div className='grid gap-x-6 gap-y-3 sm:grid-cols-2 sm:py-12 lg:grid-cols-3 lg:px-6'>
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        )}
        <Table className='table-auto border-collapse lg:table-fixed'>
          <TableHeader className='f05-table-border'>
            <TableRow className='f05-table-border'>
              <TableHead className='f05-table-border'>Comparar planes</TableHead>
              {plans?.map((plan) => (
                <TableHead key={plan.id} className='f05-table-border'>
                  <p>{plan.name}</p>
                  <Button
                    onClick={() => form.setValue('plan_id', plan.id, { shouldValidate: true })}
                    type='button'
                    className='f05-table-btn-style'
                  >
                    {selectedPlan === plan.id ? 'Seleccionado' : 'Seleccionar plan'}
                  </Button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='f05-table-border'>Aspecto </TableCell>
              <TableCell className='f05-table-border'>
                Perfecto para quienes recién empiezan y quieren explorar la plataforma.
              </TableCell>
              <TableCell className='f05-table-border'>
                Desbloquea funcionalidades avanzadas y personaliza tu experiencia.
              </TableCell>
              <TableCell className='f05-table-border'>
                Accede a todas nuestras funciones exclusivas y maximiza tu potencial como creador.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='f05-table-border'>Aspecto</TableCell>
              <TableCell className='f05-table-border'>Publica hasta 3 aplicaciones.</TableCell>
              <TableCell className='f05-table-border'>Publica hasta 10 aplicaciones.</TableCell>
              <TableCell className='f05-table-border'>Publicaciones ilimitadas.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='f05-table-border'>Análisis avanzado y personalización</TableCell>
              <TableCell className='f05-table-border' />
              <TableCell className='f05-table-border' />
              <TableCell className='f05-table-border'>
                <CheckCircleIcon className='mx-auto text-primary-b-200' />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='f05-table-border'>Soporte exclusivo 24/7.</TableCell>
              <TableCell className='f05-table-border' />
              <TableCell className='f05-table-border'>
                <CheckCircleIcon className='mx-auto text-primary-b-200' />
              </TableCell>
              <TableCell className='f05-table-border'>
                <CheckCircleIcon className='mx-auto text-primary-b-200' />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {form.formState.errors.plan_id?.message && <FormMessage>{form.formState.errors.plan_id.message}</FormMessage>}
      </div>
    </section>
  )
}

function StepCompleteInformation() {
  const form = useFormContext<BuyPlanSchema>()

  return (
    <section className='mx-auto flex max-w-screen-lg flex-col gap-y-6'>
      <header className='grid gap-y-1.5'>
        <h3 className='text-base font-bold'>Completa tu perfil de vendedor</h3>
        <p className='text-sm'>
          Estamos a solo un paso de completar tu perfil de vendedor. Proporciónanos algunos detalles adicionales para
          poder validar tu identidad y ofrecerte la mejor experiencia como creador en nuestra plataforma.
        </p>
      </header>
      <FormField
        control={form.control}
        name='seller_type'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Selecciona el tipo de vendedor que eres.</FormLabel>
            <FormDescription>
              Estamos a solo un paso de completar tu perfil de vendedor. Proporciónanos algunos detalles adicionales
              para poder validar tu identidad y ofrecerte la mejor experiencia como creador en nuestra plataforma.
            </FormDescription>
            <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Selecciona el tipo de vendedor que eres' />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {SELLER_TYPE_LIST.map((type) => (
                  <SelectItem key={type} value={type}>
                    {SELLER_TYPE_DICTIONARY[type]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='user_description'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Escribe una breve descripción de ti o de tu empresa.</FormLabel>
            <FormDescription>
              Esta será la información que los compradores verán cuando visiten tu perfil. Te recomendamos incluir tus
              áreas de experiencia y los tipos de soluciones que ofreces.
            </FormDescription>
            <FormControl>
              <Input placeholder='Escribe una descripción básica del proyecto' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='user_website_url'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Añade un enlace a tu portafolio o sitio web (Opcional)</FormLabel>
            <FormDescription>
              Si tienes un portafolio en línea, este es el lugar perfecto para destacarlo y mostrar tu trabajo a
              posibles compradores.
            </FormDescription>
            <FormControl>
              <Input placeholder='https://...' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='user_preferred_payment_method'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Selecciona tu método de cobro preferido.</FormLabel>
            <FormDescription>Elige cómo te gustaría recibir los pagos de tus ventas.</FormDescription>
            <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Selecciona tu método de cobro' />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {PAYMENT_METHOD_LIST.map((payment) => (
                  <SelectItem key={payment} value={payment}>
                    {PAYMENT_METHOD_DICTIONARY[payment]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  )
}

export { BuyPlanForm }
