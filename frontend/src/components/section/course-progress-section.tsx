import { CourseProgressCard } from '../card/course-progress-card'

function CourseProgressSection() {
  return (
    <section className='flex flex-col gap-y-6'>
      <header className='grid gap-y-1.5'>
        <h2 className='text-base font-bold'>Continuá tu aprendizaje</h2>
        <p className='text-sm'>
          Retomá donde lo dejaste. Volvé a ver tu último video y seguí aprendiendo sin perder el ritmo.
        </p>
      </header>
      <CourseProgressCard />
    </section>
  )
}

export { CourseProgressSection }
