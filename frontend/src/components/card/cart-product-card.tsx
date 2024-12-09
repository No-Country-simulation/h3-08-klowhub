'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks'
import { cn } from '@/lib/utils'
import { ProductCart } from '@/models'
import { Routes } from '@/utils'
import { CirclePlayIcon, FileIcon, MessageSquareIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface CartProductCardProps {
  /**
   * The variant of the card.
   */
  variant?: 'purchase-summary'
  /**
   * The product to render.
   */
  product: ProductCart
}

function CartProductCard({ variant, product }: CartProductCardProps) {
  const router = useRouter()
  const { removeProductFromCart } = useCart()

  /**
   * Handles the removal of the product from the cart.
   */
  const handleRemoveProductFromCart = () => {
    if (variant === 'purchase-summary') return router.push(Routes.App)

    removeProductFromCart(product)
    toast.info('¡Se ha eliminado el producto del carrito!')
  }

  return (
    <article
      className={cn(
        'grid gap-x-6 gap-y-3 rounded-lg bg-[#1F2937] p-6 sm:grid-cols-[15rem_1fr] lg:grid-cols-1 xl:grid-cols-[15rem_1fr]',
        variant === 'purchase-summary' && 'bg-white/10'
      )}
    >
      <div className='relative aspect-square max-h-60 w-full'>
        <Image
          className='rounded-lg object-cover'
          src={product.thumbnail_url ?? '/assets/product-placeholder.png'}
          alt={product.name}
          fill
        />
      </div>
      <header className='grid gap-y-3'>
        <p className='text-base font-bold'>{product.name}</p>
        <p className='flex items-center gap-x-3 text-sm'>
          <StarIcon className='text-[#B95ED4]' size={20} /> Top 3 más vendidas
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <MessageSquareIcon className='text-[#B95ED4]' size={20} /> Plataforma: Appsheet
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <FileIcon className='text-[#B95ED4]' size={20} /> Sector: Industria
        </p>
        <p className='flex items-center gap-x-3 text-sm'>
          <CirclePlayIcon className='text-[#B95ED4]' size={20} /> Desarrollador verificado
        </p>
        <p className='flex items-center gap-x-3 text-base font-medium'>
          {product.rating}
          <span className='flex flex-wrap items-center'>
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
          </span>
          ({product.reviews.length})
        </p>
        <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          {product.tags.map((tag) => (
            <li key={tag}>
              <Badge className='capitalize' variant='course'>
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        <Button onClick={handleRemoveProductFromCart} className='ml-auto' variant='ghost'>
          {variant === 'purchase-summary' ? 'Ver similares' : 'Eliminar'}
        </Button>
      </header>
    </article>
  )
}

export { CartProductCard }
