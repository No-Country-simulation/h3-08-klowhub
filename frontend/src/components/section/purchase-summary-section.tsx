'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart, useUser } from '@/hooks'
import { createStripeSession } from '@/service'
import { Routes } from '@/utils'
import { StoreIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { CardProductsList } from '../list/card-products-list'

function PurchaseSummarySection() {
  const [isBuying, setIsBuying] = useState(false)
  const router = useRouter()
  const user = useUser().user
  const { cart, calculateTotal } = useCart()

  if (!cart.length) {
    return (
      <header className='grid gap-y-2.5'>
        <StoreIcon className='mx-auto text-[#7CB4FF]' size={90} />
        <h1 className='text-center text-3xl font-bold'>¡Tu carrito está vacío!</h1>
        <p className='text-center text-base'>Agrega algunos productos al carrito para continuar con el pago.</p>
        <Link className='mx-auto text-sm text-[#D194E2]' href={Routes.App}>
          Ir a la plataforma
        </Link>
      </header>
    )
  }

  const handleBuyWithStripe = async () => {
    try {
      if (!user) return toast.error('¡No se encontró tu perfil, inténtalo de nuevo!')

      setIsBuying(true)

      const { error, data } = await createStripeSession({
        user_id: user.id,
        subtotal: calculateTotal(),
        fee: 0,
        discount: 0,
        total: calculateTotal(),
        products: cart
      })
      if (error) return toast.error(error)

      router.replace(data)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '¡Ocurrió un error al procesar el pago')
    } finally {
      setIsBuying(false)
    }
  }

  return (
    <section className='grid gap-x-12 gap-y-6 lg:grid-cols-[1fr_25.75rem]'>
      <h1 className='col-span-full text-base font-bold'>Tu carrito de compras</h1>
      <CardProductsList />
      <aside className='sticky top-0 flex h-fit flex-col gap-y-6 rounded-lg bg-[#1F2937] p-6'>
        <header className='grid gap-y-2'>
          <p className='mb-2 text-xl font-bold'>Resumen</p>
          <p className='flex items-center justify-between gap-x-2 text-base'>
            Subtotal <span>${calculateTotal()}</span>
          </p>
          <p className='flex items-center justify-between gap-x-2 text-base'>
            Tarifa del servicio <span>$130</span>
          </p>
        </header>
        <form className='grid gap-x-6 gap-y-2'>
          <p className='text-sm'>Cupón de descuento</p>
          <div className='flex items-center gap-x-2'>
            <Input className='bg-transparent text-white placeholder:text-white' placeholder='Ingresar cupón' />
            <Button className='border border-white bg-transparent text-white placeholder:to-white'>Ingresar</Button>
          </div>
        </form>
        <p className='flex items-center justify-between gap-x-2 text-sm font-semibold'>
          Cupón HotSale
          <span>20%</span>
        </p>
        <p className='flex items-center justify-between gap-x-2 text-base font-bold'>
          Total <span>${calculateTotal()}</span>
        </p>
        <footer className='grid gap-y-2'>
          <p className='text-sm font-semibold'>Selecciona un método de pago</p>
          <ul className='flex items-center justify-center gap-x-4'>
            <li>
              <Button onClick={handleBuyWithStripe} className='size-auto border-none p-0' disabled={isBuying}>
                <Image
                  className='object-contain'
                  src='/assets/payment-stripe.png'
                  alt='Stripe logo'
                  width={111}
                  height={79}
                />
              </Button>
            </li>
            <li>
              <Button className='size-auto border-none p-0' disabled={isBuying}>
                <Image
                  className='object-contain'
                  src='/assets/payment-paypal.png'
                  alt='PayPal logo'
                  width={111}
                  height={69}
                />
              </Button>
            </li>
            <li>
              <Button className='size-auto border-none p-0' disabled={isBuying}>
                <Image
                  className='object-contain'
                  src='/assets/payment-etherium.png'
                  alt='Etherium logo'
                  width={111}
                  height={69}
                />
              </Button>
            </li>
          </ul>
        </footer>
        <Link className='text-center text-xs font-medium text-[#7CB4FF]' href={Routes.TermsAndConditions}>
          Al comprar/contratar los productos aceptas los términos y condiciones.
        </Link>
      </aside>
    </section>
  )
}

export { PurchaseSummarySection }
