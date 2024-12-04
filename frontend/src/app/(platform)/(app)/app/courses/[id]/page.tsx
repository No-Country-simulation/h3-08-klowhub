'use client'
import { SalesProductCard } from '@/app/(platform)/components/card/sales-product-card'
import { UserPreviewCard } from '@/app/(platform)/components/card/user-preview-card'
import { RecommendedCoursesList } from '@/app/(platform)/components/list/recommended-courses-list'
import { CourseProgrammeSection } from '@/app/(platform)/components/section/course-programme-section'
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
import { CheckIcon, ClockIcon, ShoppingCartIcon, VideoIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'

interface AppCourseDetailPageProps {
  params: { id: string }
}

function AppCourseDetailPage({ params }: AppCourseDetailPageProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { data: course, isLoading, error } = useSWR<Product>(`/api/product/${params.id}`)
  const { data: recommendedCourses } = useSWR<Product[]>('/api/products?type=course&limit=3')

  // TODO: ADD UI FOR NO RESULTS
  if (isLoading) return <AppStoreDetailPageSkeleton />
  if (error) return <div>{error}</div>
  if (!course) return <div>No se encontró la aplicación</div>

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
            <BreadcrumbLink href={Routes.AppAppStore}>Cursos y lecciones</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{course.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-3'>
          <p className='flex items-center gap-x-2 text-xs'>
            <ClockIcon size={16} /> Ultima actualizacion: 6/2024
          </p>
          <h1 className='text-base font-bold'>{course.name}</h1>
          <p className='text-sm'>{course.description}</p>
          <p className='flex flex-wrap items-center gap-x-3 gap-y-1.5 text-base font-medium'>
            {course.rating}
            <span className='flex flex-wrap items-center'>
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
              <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
            </span>
            ({course.reviews.length})
            <span className='flex items-center gap-x-2 text-sm text-[#A1C2FA]'>
              <VideoIcon size={20} /> 18 vídeos
            </span>
            <span className='flex items-center gap-x-2 text-sm text-[#A1C2FA]'>
              <ClockIcon size={20} /> 1.6 horas
            </span>
          </p>
        </header>
        <video className='aspect-video max-h-96' controls preload='none' poster={course.thumbnail_url}>
          <source
            src='https://res.cloudinary.com/dos3i5jqy/video/upload/f_auto:video,q_auto/v1/ramdom-videos/e2p4uoceqzxdoegjsnbo'
            type='video/mp4'
          />
          Tu navegador no soporta el elemento video.
        </video>
        <div className='grid gap-y-2.5 rounded-lg bg-white/10 p-2.5'>
          <p className='pl-2.5 text-sm font-semibold'>Contenido gratuito</p>
          <Carousel>
            <CarouselContent>
              {course.images_url.map((imageUrl, index) => (
                <CarouselItem key={index} className='grid basis-2/5 sm:basis-1/4'>
                  <div className='relative h-20'>
                    <Image className='rounded-lg object-cover' src={imageUrl} alt='Miniatura' fill sizes='20vw' />
                  </div>
                  <p className='truncate pl-2.5 pt-2.5 text-base'>Lección {index}</p>
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
              <p className='text-base font-bold'>Sebastían Rios</p>
              <p className='text-sm'>
                Experto en desarrollo de aplicaciones no-code con más de 5 años de experiencia en AppSheet y Power Apps,
                ayudando a empresas y emprendedores a optimizar sus procesos de manera eficiente y accesible.
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
              <Button className='mr-auto w-full max-w-60'>Comprar curso</Button>
              <div className='grid gap-y-2.5'>
                <p className='text-xl font-bold'>¿Por qué aprender con Sebastián?</p>
                <p className='text-sm'>
                  Sebastián Ríos es un apasionado del desarrollo no-code, con más de 5 años de experiencia en AppSheet y
                  un enfoque práctico y accesible para la enseñanza. Ha ayudado a cientos de profesionales y
                  emprendedores a transformar sus ideas en aplicaciones exitosas, simplificando procesos y mejorando la
                  productividad. Su metodología se centra en ejemplos reales y soluciones prácticas, lo que te permitirá
                  aplicar lo aprendido de inmediato en tus propios proyectos. Aprender con Sebastián significa adquirir
                  habilidades valiosas de la mano de un experto comprometido con tu éxito.
                </p>
              </div>
              <div className='grid gap-y-2.5'>
                <p className='text-xl font-bold'>¿Para quién es este curso?</p>
                <p className='text-sm'>
                  Este curso está dirigido a emprendedores, profesionales y cualquier persona interesada en crear
                  aplicaciones personalizadas sin necesidad de programar. Si buscas optimizar procesos, mejorar la
                  eficiencia en tu trabajo o simplemente explorar nuevas herramientas tecnológicas, este curso es ideal
                  para ti. No se requiere experiencia previa en desarrollo, ya que te guiaré desde lo más básico hasta
                  técnicas avanzadas, asegurando que puedas aplicar lo aprendido en proyectos reales, independientemente
                  de tu nivel de conocimientos.
                </p>
              </div>
              <div className='grid gap-y-2.5'>
                <p className='text-xl font-bold'>Requisitos</p>
                <ul className='grid gap-y-2 pl-4'>
                  <li className='flex items-start gap-x-4 text-sm'>
                    <CheckIcon className='shrink-0' size={20} />
                    Fundamentos de Power Apps: Entiende cómo funciona la plataforma y cómo empezar a construir tus
                    primeras aplicaciones.
                  </li>
                </ul>
              </div>
              <div className='grid gap-y-2.5'>
                <p className='text-xl font-bold'>¿Qué incluye?</p>
                <ul className='grid gap-y-2 pl-4'>
                  <li className='flex items-start gap-x-4 text-sm'>
                    <CheckIcon className='shrink-0' size={20} />
                    Todas las lecciones, videos y materiales de apoyo necesarios para dominar AppSheet.
                  </li>
                  <li className='flex items-start gap-x-4 text-sm'>
                    <CheckIcon className='shrink-0' size={20} />
                    Casos de estudio y ejemplos reales para aplicar lo aprendido en situaciones concretas.
                  </li>
                  <li className='flex items-start gap-x-4 text-sm'>
                    <CheckIcon className='shrink-0' size={20} />
                    Guías, plantillas y archivos que te ayudarán a seguir las lecciones y desarrollar tus propias
                    aplicaciones.
                  </li>
                  <li className='flex items-start gap-x-4 text-sm'>
                    <CheckIcon className='shrink-0' size={20} />
                    Asistencia y respuestas a tus preguntas durante el curso para asegurarte de que entiendas cada
                    concepto.
                  </li>
                  <li className='flex items-start gap-x-4 text-sm'>
                    <CheckIcon className='shrink-0' size={20} />
                    Acceso a futuras actualizaciones y nuevas lecciones que se añadan al curso.
                  </li>
                </ul>
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
                <p className='text-xl font-bold'>{course.reviews.length} reseñas</p>
                <p className='flex items-center gap-x-3 text-base font-medium'>
                  <span className='flex flex-wrap items-center'>
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                    <Image src='/assets/star-icon.png' alt='Icono estrella' width={20} height={20} />
                  </span>
                  {course.rating}
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
        <UserPreviewCard variant='course' />
        <Button className='mx-auto w-full max-w-60 bg-white/10 lg:mx-0 lg:max-w-none'>
          <Image src='/assets/appsheet-icon.png' alt='Appsheet logo' width={25} height={22} />
          AppSheet
        </Button>
        <CourseProgrammeSection />
        <div className='mx-auto grid w-full max-w-64 gap-y-3'>
          <Button>Comprar curso</Button>
          <Button variant='outline'>
            <ShoppingCartIcon /> Añadir al carrito
          </Button>
        </div>
        <article className='grid gap-y-6 rounded-lg border-2 border-[#B95ED4] p-6'>
          <p className='text-base font-bold'>
            Con la compra de este curso tiene un 50% OFF en la compra del curso: Gestión de inventarios con AppSheet
          </p>
          <SalesProductCard product={course} />
        </article>
      </aside>
      <section className='col-span-full mt-8 flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h3 className='text-base font-bold'>Cursos similares</h3>
          <p className='text-sm'>También te pueden interesar estas lecciones y cursos</p>
        </header>
        {recommendedCourses && recommendedCourses?.length > 0 && (
          <RecommendedCoursesList products={recommendedCourses} />
        )}
        <Button className='mx-auto w-full max-w-64' variant='outline' asChild>
          <Link href={Routes.AppCourses}>Ver más</Link>
        </Button>
      </section>
    </main>
  )
}

export default AppCourseDetailPage
