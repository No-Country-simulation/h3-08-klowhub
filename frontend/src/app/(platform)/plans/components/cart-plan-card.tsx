'use client'
import { Button } from '@/components/ui/button'
import { useCartPlan } from '@/hooks'
import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'

interface CartPlanCardProps {
  /**
   * The variant of the card.
   */
  variant?: 'purchase-summary'
}

function CartPlanCard({ variant }: CartPlanCardProps) {
  const { cartPlan, removePlan } = useCartPlan()
  if (!cartPlan) return null

  return (
    <article
      className={cn(
        'grid h-fit gap-x-6 gap-y-3 rounded-lg bg-[#1F2937] p-6 sm:grid-cols-[15rem_1fr] lg:grid-cols-1 xl:grid-cols-[15rem_1fr]',
        variant === 'purchase-summary' && 'bg-white/10'
      )}
    >
      <div className='relative aspect-square max-h-60 w-full'>
        <Image className='rounded-lg object-cover' src={cartPlan.plan.thumbnail_url} alt={cartPlan.plan.name} fill />
      </div>
      <header className='grid items-center gap-y-3'>
        <p className='text-base font-bold'>
          {cartPlan.plan.name} ${cartPlan.plan.price}
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <CheckIcon className='shrink-0 text-[#B95ED4]' size={20} /> Acceso limitado a funciones básicas.
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <CheckIcon className='shrink-0 text-[#B95ED4]' size={20} /> Ideal para principiantes que desean explorar la
          plataforma
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <CheckIcon className='shrink-0 text-[#B95ED4]' size={20} /> Soporte por correo electrónico.
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <CheckIcon className='shrink-0 text-[#B95ED4]' size={20} /> Uso de plantillas predefinidas y recursos básicos.
        </p>
        <p className='mt-1.5 text-sm'>Comisiones: PayPal 20%, Stripe 15%, Cripto 12%.</p>
        {variant !== 'purchase-summary' && (
          <Button onClick={removePlan} className='ml-auto' variant='ghost'>
            Eliminar
          </Button>
        )}
      </header>
    </article>
  )
}

export { CartPlanCard }
