'use client'
import { SalesProductCard } from '@/app/(platform)/components/card/sales-product-card'
import { RecommendedProductsList } from '@/app/(platform)/components/list/recommended-products-list'
import { AppStoreDetailPageSkeleton } from '@/app/(platform)/components/skeleton/appstore-detail-page-skeleton'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { Product } from '@/models'
import { Routes } from '@/utils'
import {
  CheckIcon,
  CirclePlayIcon,
  ClockIcon,
  FileIcon,
  MessageSquareIcon,
  ShoppingCartIcon,
  StarIcon
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'

const description =
  'Acceso completo a la aplicación: Descargá y utilizá la app en todos tus dispositivos sin restricciones.\n\nActualizaciones gratuitas: Disfrutá de mejoras y nuevas funcionalidades sin costo adicional.\n\nSoporte técnico dedicado: Asistencia personalizada para resolver cualquier duda o inconveniente que tengas.\n\nGuías y tutoriales: Materiales de apoyo que te ayudarán a aprovechar al máximo todas las características de la app.'

interface AppAppStoreDetailPageProps {
  params: { id: string }
}

function AppAppStoreDetailPage({ params }: AppAppStoreDetailPageProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { data: product, isLoading, error } = useSWR<Product>(`/api/product/${params.id}`)
  const { data: recommendedProducts } = useSWR<Product[]>('/api/products?type=app&limit=4')

  // TODO: ADD UI FOR NO RESULTS
  if (isLoading) return <AppStoreDetailPageSkeleton />
  if (error) return <div>{error}</div>
  if (!product) return <div>No se encontró la aplicación</div>

  const toggleExpanded = () => setIsExpanded((state) => !state)

  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-x-28 gap-y-8 px-5 py-8 lg:grid-cols-[1fr_26rem] lg:px-10 lg:py-8'>
      <Breadcrumb className='col-span-full'>
        <BreadcrumbList className='flex-wrap'>
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.App}>Plataforma</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={Routes.AppAppStore}>AppStore</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='flex flex-col gap-y-6'>
        <h1 className='text-base font-bold'>{product.name}</h1>
        <header className='grid gap-y-3'>
          <p className='flex items-center gap-x-2 text-xs'>
            <ClockIcon size={16} /> Ultima actualizacion: 6/2024
          </p>
          <p className='text-sm'>{product.description}</p>
          <p className='flex items-center gap-x-3 text-base font-medium'>
            {product.rating}
            <span className='flex flex-wrap items-center'>
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            </span>
            ({product.reviews})
          </p>
        </header>
        <div className='relative aspect-video max-h-96'>
          <Image
            className='rounded-lg object-cover'
            src={product.thumbnail_url ?? '/assets/product-detail.png'}
            alt='Aplicación para seguimiento de proyectos'
            fill
            sizes='70vw'
          />
        </div>
        <div className='grid gap-y-2.5 rounded-lg bg-white/10 p-2.5'>
          <p className='pl-2.5 text-sm font-semibold'>Vista previa</p>
          <Carousel>
            <CarouselContent>
              {product.images_url.map((imageUrl, index) => (
                <CarouselItem key={index} className='relative ml-4 h-20 basis-2/5 sm:basis-1/4'>
                  <Image className='rounded-lg object-cover' src={imageUrl} alt='Miniatura' fill sizes='20vw' />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className='grid gap-y-6 rounded-lg bg-white/10 p-6'>
          <article className='grid gap-3 sm:grid-cols-[auto_1fr]'>
            <div className='flex items-center gap-2 sm:flex-col'>
              <div className='relative size-20'>
                <Image
                  className='rounded-full object-cover'
                  src='/assets/expert-person.jpeg'
                  alt='Miniatura'
                  fill
                  sizes='20vw'
                />
              </div>
              <Link className='text-xs underline decoration-white' href='#'>
                Ver perfil
              </Link>
            </div>
            <header>
              <p className='text-base font-bold'>Diego Martínez</p>
              <p className='text-sm'>
                experto en desarrollo de aplicaciones no-code con más de 5 años de experiencia en AppSheet, ayudando a
                empresas y emprendedores a optimizar sus procesos de manera eficiente y accesible.
              </p>
            </header>
          </article>
          <div className='grid gap-y-2.5'>
            <p className='text-sm font-semibold'>Todo para la gestion de tus proyectos</p>
            <ul className='grid gap-y-2 pl-4'>
              <li className='flex items-start gap-x-4 text-sm'>
                <CheckIcon className='shrink-0' size={20} />
                Organiza y asigna tareas de manera intuitiva, facilitando la colaboración y el seguimiento de cada
                actividad.
              </li>
              <li className='flex items-start gap-x-4 text-sm'>
                <CheckIcon className='shrink-0' size={20} />
                Monitorea el progreso de tu equipo y recibe actualizaciones instantáneas para tomar decisiones
                informadas.
              </li>
              <li className='flex items-start gap-x-4 text-sm'>
                <CheckIcon className='shrink-0' size={20} />
                Establece prioridades claras y ajusta los plazos según las necesidades del proyecto.
              </li>
              <li className='flex items-start gap-x-4 text-sm'>
                <CheckIcon className='shrink-0' size={20} />
                Facilita la comunicación entre los miembros del equipo con espacios compartidos para archivos.
              </li>
              <li className='flex items-start gap-x-4 text-sm'>
                <CheckIcon className='shrink-0' size={20} />
                Diseña tu panel de control para ver lo que más te interesa, desde gráficos de progreso hasta plazos
                críticos.
              </li>
            </ul>
          </div>
          <div className='grid gap-y-2.5'>
            <p className='text-sm font-semibold'>Acerca de esta aplicación</p>
            <p className='text-sm'>
              Con nuestra plataforma de gestión de proyectos, podrás coordinar equipos, establecer plazos y hacer
              seguimiento de cada tarea en un solo lugar. Visualiza el avance en tiempo real, asigna prioridades y
              asegúrate de que todos estén alineados con los objetivos.
            </p>
          </div>
          {isExpanded && (
            <>
              <Button className='mr-auto w-full max-w-60'>Comprar app</Button>
              <div className='grid gap-y-2.5'>
                <p className='text-xl font-bold'>Una aplicación que te ayudará a gestionar mejor tus proyectos</p>
                <p className='text-sm'>
                  ¿Quieres optimizar tus procesos y mejorar la productividad de tu pequeña empresa sin invertir una
                  fortuna en desarrollo de software? Esta aplicación te permitirá gestionar tus proyectos, clientes,
                  inventario y mucho más. Imagina tener una herramienta a medida que se adapte a las necesidades únicas
                  de tu negocio, sin necesidad de escribir una sola línea de código.Gracias a esta aplicación podrás:
                  automatizar tareas repetitivas, mejorar la colaboración entre equipos, acceder a tus datos en tiempo
                  real y tomar decisiones más informadas.
                </p>
              </div>
              <div className='grid gap-y-2.5'>
                <p className='text-xl font-bold'>Informacion y funcionalidades de la app</p>
                <ul className='grid gap-2.5 xl:grid-cols-2'>
                  <li className='grid content-start gap-y-2.5 text-sm font-semibold'>
                    Funcionalidades
                    <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
                      <li>
                        <Badge variant='course'>Logística</Badge>
                      </li>
                      <li>
                        <Badge variant='course'>Stock</Badge>
                      </li>
                      <li>
                        <Badge variant='course'>Inventarios</Badge>
                      </li>
                    </ul>
                  </li>
                  <li className='grid content-start gap-y-2.5 text-sm font-semibold'>
                    Sector
                    <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
                      <li>
                        <Badge variant='course'>Ventas y CRM</Badge>
                      </li>
                      <li>
                        <Badge variant='course'>Finanzas y contabilidad</Badge>
                      </li>
                    </ul>
                  </li>
                  <li className='grid content-start gap-y-2.5 text-sm font-semibold'>
                    Pilar de contenido
                    <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
                      <li>
                        <Badge variant='course'>Automatización</Badge>
                      </li>
                      <li>
                        <Badge variant='course'>Flujos de trabajo</Badge>
                      </li>
                    </ul>
                  </li>
                  <li className='grid content-start gap-y-2.5 text-sm font-semibold'>
                    Funcionalidades
                    <ul className='flex flex-wrap items-center gap-x-4 gap-y-2'>
                      <li>
                        <Badge variant='course'>Logística</Badge>
                      </li>
                      <li>
                        <Badge variant='course'>Stock</Badge>
                      </li>
                      <li>
                        <Badge variant='course'>Inventarios</Badge>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='grid gap-y-4'>
                <p className='text-xl font-bold'>{product.reviews} reseñas</p>
                <p className='flex items-center gap-x-3 text-base font-medium'>
                  <span className='flex flex-wrap items-center'>
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                  </span>
                  {product.rating}
                </p>
                <Separator />
                <ul className='grid gap-y-4'>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li key={index}>
                      <article className='grid gap-y-4'>
                        <p className='flex items-center gap-x-3 text-base font-medium'>
                          <span className='flex flex-wrap items-center'>
                            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                            <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                          </span>
                          Mariana Lopéz
                        </p>
                        <p className='text-sm font-medium'>
                          Esta app superó mis expectativas. Sebastián explica todo de manera clara y sencilla, lo que me
                          permitió organizar mi negocio en tiempo récord.
                        </p>
                        <Separator />
                      </article>
                    </li>
                  ))}
                </ul>
                <Button variant='outline' className='mx-auto'>
                  Ver más reseñas
                </Button>
              </div>
            </>
          )}
          {!isExpanded && (
            <Button onClick={toggleExpanded} className='mx-auto' variant='ghost'>
              Ver más
            </Button>
          )}
        </div>
      </section>
      <aside className='flex flex-col gap-y-6'>
        <article className='flex flex-col items-center justify-center gap-y-9'>
          <Image
            className='object-cover'
            src='/assets/mobile.png'
            alt='Aplicación para seguimiento de proyectos'
            width={216}
            height={416}
          />
          <Button variant='outline'>Ver en modo escritorio</Button>
        </article>
        <article className='grid gap-y-6 rounded-lg bg-white/10 p-3'>
          <header className='flex items-center gap-x-3 pl-3'>
            <div className='relative size-12'>
              <Image
                className='rounded-full object-cover'
                src='/assets/expert-person.jpeg'
                alt='Miniatura'
                fill
                sizes='10vw'
              />
            </div>
            <div className='grid gap-y-1.5'>
              <p className='flex items-center gap-x-3 text-base font-bold'>
                Diego Martínez <span className='rounded-lg bg-subscription px-2.5 py-0.5 text-xs font-medium'>PRO</span>
              </p>
              <p className='text-xs font-medium text-[#D8C5C5]'>Instructor y desarollador</p>
            </div>
          </header>
          <Separator />
          <footer className='flex flex-col gap-y-3 pl-3'>
            <p className='flex items-center gap-x-3 text-sm'>
              <StarIcon className='text-[#B95ED4]' size={20} /> Calificación del creador: 5
            </p>
            <p className='flex items-center gap-x-3 text-sm'>
              <MessageSquareIcon className='text-[#B95ED4]' size={20} /> 4.3 (52 Reseñas)
            </p>
            <p className='flex items-center gap-x-3 text-sm'>
              <FileIcon className='text-[#B95ED4]' size={20} /> 60 Aplicaciones vendidas
            </p>
            <p className='flex items-center gap-x-3 text-sm'>
              <CirclePlayIcon className='text-[#B95ED4]' size={20} /> Instructor verificado
            </p>
            <Button className='ml-auto' variant='ghost'>
              Visitar perfil
            </Button>
          </footer>
        </article>
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
          <Button>Comprar app</Button>
          <Button variant='outline'>
            <ShoppingCartIcon /> Añadir al carrito
          </Button>
        </div>
        <article className='grid gap-y-6 rounded-lg border-2 border-[#B95ED4] p-6'>
          <p className='text-base font-bold'>
            Con la compra de esta app tiene un 50% OFF en la compra del cursos: Gestión de inventarios con AppSheet
          </p>
          <SalesProductCard product={product} />
        </article>
      </aside>
      <section className='col-span-full mt-8 flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h3 className='text-base font-bold'>Aplicaciones recomendadas</h3>
          <p className='text-sm'>
            Explorá soluciones listas para usar. Encontrá la app perfecta para tu proyecto y empezá a trabajar de
            inmediato.
          </p>
        </header>
        {recommendedProducts && recommendedProducts?.length > 0 && (
          <RecommendedProductsList products={recommendedProducts} />
        )}
        <Button className='mx-auto w-full max-w-64' variant='outline'>
          Ver más
        </Button>
      </section>
    </main>
  )
}

export default AppAppStoreDetailPage
