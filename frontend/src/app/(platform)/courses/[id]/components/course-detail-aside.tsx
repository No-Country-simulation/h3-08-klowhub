'use client'
import { SalesProductCard } from '@/components/card/sales-product-card'
import { UserPreviewCard } from '@/components/card/user-preview-card'
import { CourseProgrammeSection } from '@/components/section/course-programme-section'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks'
import { useProduct } from '@/hooks/swr'
import { ProductCart } from '@/models'
import { MIN_PRODUCT_QUANTITY, Routes } from '@/utils'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'

function CourseDetailAside() {
  const courseId = useParams<{ id: string }>().id
  const course = useProduct(courseId).product
  const router = useRouter()
  const { isProductInCart, addProductToCart } = useCart()

  if (!course) return null

  const handleBuyCourse = () => {
    if (isProductInCart(course)) return router.push(Routes.Cart)

    const courseToBuy: ProductCart = { ...course, quantity: MIN_PRODUCT_QUANTITY }
    addProductToCart(courseToBuy)
    router.push(Routes.Cart)
  }

  const handleAddCourseToCart = () => {
    if (isProductInCart(course)) return router.push(Routes.Cart)

    const courseToAdd: ProductCart = { ...course, quantity: MIN_PRODUCT_QUANTITY }
    addProductToCart(courseToAdd)
    toast.success('¡Se ha añadido el curso al carrito!')
  }

  return (
    <aside className='flex flex-col gap-y-6'>
      <UserPreviewCard variant='course' />
      <Button className='mx-auto w-full max-w-60 bg-white/10 lg:mx-0 lg:max-w-none'>
        <Image src='/assets/appsheet-icon.png' alt='Appsheet logo' width={25} height={22} />
        AppSheet
      </Button>
      <CourseProgrammeSection />
      <div className='mx-auto grid w-full max-w-64 gap-y-3'>
        <Button onClick={handleBuyCourse}>Comprar curso</Button>
        <Button onClick={handleAddCourseToCart} variant='outline'>
          <ShoppingCartIcon /> {isProductInCart(course) ? 'Ver en carrito' : 'Añadir al carrito'}
        </Button>
      </div>
      <article className='grid gap-y-6 rounded-lg border-2 border-[#B95ED4] p-6'>
        <p className='text-base font-bold'>
          Con la compra de este curso tiene un 50% OFF en la compra del curso: Gestión de inventarios con AppSheet
        </p>
        <SalesProductCard product={course} />
      </article>
    </aside>
  )
}

export { CourseDetailAside }
