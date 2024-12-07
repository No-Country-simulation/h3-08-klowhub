import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks'
import { cn } from '@/lib/utils'
import { Product, ProductCart, ProductType } from '@/models'
import { MIN_PRODUCT_QUANTITY, PRODUCT_TYPE_DICTIONARY, Routes } from '@/utils'
import { HeartIcon, MoreVerticalIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface SalesProductCardProps {
  product: Product
  variant?: 'courses-list'
}

function SalesProductCard({ product, variant }: SalesProductCardProps) {
  const router = useRouter()
  const { isProductInCart, addProductToCart } = useCart()

  const href: Record<string, string> = {
    [ProductType.App]: Routes.AppAppStore + '/' + product.id,
    [ProductType.Course]: Routes.AppCourses + '/' + product.id
  }

  const handleAddProductToCart = () => {
    if (isProductInCart(product)) return router.push(Routes.AppCart)

    const productToAdd: ProductCart = { ...product, quantity: MIN_PRODUCT_QUANTITY }
    addProductToCart(productToAdd)
    toast.success('¡Se ha añadido el producto al carrito!')
  }

  return (
    <article
      className={cn(
        'grid h-full items-center rounded-lg bg-[#1F2937]',
        variant === 'courses-list' && 'lg:grid-cols-[400px_1fr]'
      )}
    >
      <div
        className={cn(
          'relative aspect-square h-48 w-full',
          variant === 'courses-list' && 'lg:aspect-none lg:h-[25rem]'
        )}
      >
        <Image
          className={cn('rounded-t-lg object-cover', variant === 'courses-list' && 'lg:rounded-l-lg lg:rounded-r-none')}
          src={product.thumbnail_url || '/assets/product-placeholder.png'}
          alt='Curso en progreso'
          fill
          sizes='50vw'
        />
        <Badge className='absolute left-2 top-3 rounded-full bg-[#F7E5FFF2] px-4 py-1 text-[#AE53DA]'>
          {PRODUCT_TYPE_DICTIONARY[product.type]}
        </Badge>
        <HeartIcon className='absolute right-2 top-3 fill-white stroke-gray-500' />
      </div>
      <header className='flex flex-col gap-y-3 p-5'>
        <h2 className='flex items-center justify-between gap-x-2 text-sm font-semibold text-white md:text-base'>
          {product.name} <MoreVerticalIcon className='shrink-0' />
        </h2>
        <p className='line-clamp-2 text-sm text-white'>{product.description}</p>
        <Button className='w-fit bg-white/10' type='button'>
          <Image src='/assets/appsheet-icon.png' alt='Appsheet logo' width={25} height={22} />
          AppSheet
        </Button>
        <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          {product.tags.map((tag) => (
            <li key={tag}>
              <Badge className='capitalize' variant='course'>
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        <p className='flex items-center gap-x-3 text-base font-medium'>
          {product.rating}
          <span className='flex flex-wrap items-center'>
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
          </span>
          {product.reviews.length}
        </p>
        <p className='text-xl font-bold text-white'>${product.price}</p>
        <div className={cn('grid items-center gap-x-4', variant === 'courses-list' && 'lg:flex')}>
          <Button onClick={handleAddProductToCart}>
            <ShoppingCartIcon /> {isProductInCart(product) ? 'Ver en carrito' : 'Añadir al carrito'}
          </Button>
          <Button variant='ghost' asChild>
            <Link href={href[product.type]}>Ver detalles</Link>
          </Button>
        </div>
      </header>
    </article>
  )
}

export { SalesProductCard }
