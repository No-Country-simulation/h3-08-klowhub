import { Plan } from '@/models'
import Image from 'next/image'

interface PlanCardProps {
  plan: Plan
}

function PlanCard({ plan }: PlanCardProps) {
  return (
    <article className='flex flex-col gap-y-6 rounded-lg bg-white/15 p-3'>
      <div className='relative aspect-square max-h-60 w-full'>
        <Image className='rounded-lg object-cover' src={plan.thumbnail_url} alt={plan.name} fill sizes='33vw' />
      </div>
      <h3 className='text-lg font-bold'>
        {plan.name} ${plan.price}
      </h3>
      <ul className='grid list-inside list-disc gap-y-2 text-sm text-primary-b-200'>
        <li>
          <span className='text-white'>Acceso limitado a funciones básicas</span>.
        </li>
        <li>
          <span className='text-white'>Ideal para principiantes que desean explorar la plataforma</span>
        </li>
        <li>
          <span className='text-white'>Soporte por correo electrónico</span>.
        </li>
        <li>
          <span className='text-white'>Uso de plantillas predefinidas y recursos básicos</span>.
        </li>
      </ul>
      <p className='text-sm'>Comisiones: PayPal 20%, Stripe 15%, Cripto 12%.</p>
    </article>
  )
}

export { PlanCard }
