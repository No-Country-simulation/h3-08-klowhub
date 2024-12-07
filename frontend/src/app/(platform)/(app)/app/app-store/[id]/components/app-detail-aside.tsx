'use client'
import { SalesProductCard } from '@/app/(platform)/components/card/sales-product-card'
import { UserPreviewCard } from '@/app/(platform)/components/card/user-preview-card'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks'
import { useProduct } from '@/hooks/swr'
import { ProductCart } from '@/models'
import { MIN_PRODUCT_QUANTITY, Routes } from '@/utils'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'

const description =
  'Acceso completo a la aplicación: Descargá y utilizá la app en todos tus dispositivos sin restricciones.\n\nActualizaciones gratuitas: Disfrutá de mejoras y nuevas funcionalidades sin costo adicional.\n\nSoporte técnico dedicado: Asistencia personalizada para resolver cualquier duda o inconveniente que tengas.\n\nGuías y tutoriales: Materiales de apoyo que te ayudarán a aprovechar al máximo todas las características de la app.'

function AppDetailAside() {
  const appId = useParams<{ id: string }>().id
  const app = useProduct(appId).product
  const router = useRouter()
  const { isProductInCart, addProductToCart } = useCart()

  if (!app) return null

  const handleBuyApp = () => {
    if (isProductInCart(app)) return router.push(Routes.AppCart)

    const appToBuy: ProductCart = { ...app, quantity: MIN_PRODUCT_QUANTITY }
    addProductToCart(appToBuy)
    router.push(Routes.AppCart)
  }

  const handleAddAppToCart = () => {
    if (isProductInCart(app)) return router.push(Routes.AppCart)

    const appToAdd: ProductCart = { ...app, quantity: MIN_PRODUCT_QUANTITY }
    addProductToCart(appToAdd)
    toast.success('¡Se ha añadido la aplicación al carrito!')
  }

  return (
    <aside className='flex flex-col gap-y-6'>
      <UserPreviewCard variant='app' />
      <Button className='mx-auto w-full max-w-60 bg-white/10 lg:mx-0 lg:max-w-none'>
        <Image src='/assets/appsheet-icon.png' alt='Appsheet logo' width={25} height={22} />
        AppSheet
      </Button>
      <article className='grid gap-y-4 rounded-lg bg-white/10 p-6'>
        <p className='text-center text-base font-bold'>¿Qué recibirás?</p>
        <p className='text-sm font-bold text-[#B95ED4]'>La compra incluye</p>
        <p className='text-sm font-bold'>App para gestionar tus proyectos</p>
        <p className='whitespace-pre-line text-sm'>{description}</p>
      </article>
      <div className='mx-auto grid w-full max-w-64 gap-y-3'>
        <Button onClick={handleBuyApp}>Comprar curso</Button>
        <Button onClick={handleAddAppToCart} variant='outline'>
          <ShoppingCartIcon /> {isProductInCart(app) ? 'Ver en carrito' : 'Añadir al carrito'}
        </Button>
      </div>
      <article className='grid gap-y-6 rounded-lg border-2 border-[#B95ED4] p-6'>
        <p className='text-base font-bold'>
          Con la compra de este curso tiene un 50% OFF en la compra del curso: Gestión de inventarios con AppSheet
        </p>
        <SalesProductCard product={app} />
      </article>
    </aside>
  )
}

export { AppDetailAside }
