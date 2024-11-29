import { Button } from '@/components/ui/button'
import { CourseProgressCard } from '../../components/card/course-progress-card'
import { ExpertPersonList } from '../../components/list/expert-person-list'
import { RecommendedCoursesList } from '../../components/list/recommended-courses-list'
import { RecommendedProductsList } from '../../components/list/recommended-products-list'

function AppPage() {
  return (
    <main className='mx-auto grid max-w-screen-2xl gap-y-16 px-5 py-2 lg:px-10 lg:py-8'>
      <ul className='relative grid items-center gap-x-6 bg-banner before:absolute before:inset-0 before:size-full before:bg-black/50 xsm:grid-cols-2 lg:grid-cols-4'>
        <li className='z-10 p-7 text-center text-xl font-bold'>Aprende en KlowHub</li>
        <li className='z-10 p-7 text-center text-xl font-bold'>Encuentra aplicaciones</li>
        <li className='z-10 p-7 text-center text-xl font-bold'>Publica proyectos</li>
        <li className='z-10 p-7 text-center text-xl font-bold'>Consultas técnicas</li>
      </ul>
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h1 className='text-base font-bold'>Continuá tu aprendizaje</h1>
          <p className='text-sm'>
            Retomá donde lo dejaste. Volvé a ver tu último video y seguí aprendiendo sin perder el ritmo.
          </p>
        </header>
        <CourseProgressCard />
      </section>
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h2 className='text-base font-bold'>Cursos recomendados</h2>
          <p className='text-sm'>
            Descubre los cursos más destacados y lleva tus habilidades al siguiente nivel. Aprende de expertos y aplica
            tus conocimientos en proyectos reales.
          </p>
        </header>
        <RecommendedCoursesList />
        <Button className='mx-auto w-full max-w-64' variant='outline'>
          Ver más
        </Button>
      </section>
      <section className='flex flex-col gap-y-6'>
        <header className='grid gap-y-1.5'>
          <h3 className='text-base font-bold'>Aplicaciones recomendadas</h3>
          <p className='text-sm'>
            Explorá soluciones listas para usar. Encontrá la app perfecta para tu proyecto y empezá a trabajar de
            inmediato.
          </p>
        </header>
        <RecommendedProductsList />
        <Button className='mx-auto w-full max-w-64' variant='outline'>
          Ver más
        </Button>
      </section>
      <section className='relative flex flex-col gap-y-3 bg-banner px-7 py-14 before:absolute before:inset-0 before:size-full before:bg-black/50'>
        <h4 className='z-10 text-xl font-bold'>Conecta con Expertos</h4>
        <p className='z-10 text-sm'>
          Aprende de los mejores: Impulsa tu conocimiento con nuestros mentores especializados
        </p>
      </section>
      <section className='flex flex-col gap-y-6'>
        <ExpertPersonList />
        <Button className='mx-auto w-full max-w-64' variant='outline'>
          Ver más
        </Button>
      </section>
    </main>
  )
}

export default AppPage
