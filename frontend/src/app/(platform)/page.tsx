import { FeatureCard } from '@/components/card/feature-card'
import { TestimonialCard } from '@/components/card/testimonial-card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { faqs, userReviews, whyToLearn } from '@/mock/general.mock'
import { Routes } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

function HomePage() {
  return (
    <main className='mx-auto grid w-full max-w-screen-2xl gap-y-16 px-5 py-8 md:gap-y-32 lg:px-10 lg:py-8'>
      <section className='relative flex flex-col items-center justify-center gap-y-4 rounded-lg bg-black/30 px-5 py-40 text-center xl:bg-black/15'>
        <Image
          src='/assets/banner.png'
          alt='Banner'
          fill
          sizes='100vw'
          className='-z-10 rounded-lg object-cover object-right xl:object-center'
        />
        <h1 className='text-3xl font-bold md:text-6xl'>Domina el No-Code y Low-Code</h1>
        <p className='max-w-prose text-center text-sm'>
          Aprende AppSheet, PowerApps y más. Construye aplicaciones sin escribir código y transforma tu carrera.
        </p>
        <div className='mt-4 grid items-center gap-x-4 gap-y-2 xsm:flex'>
          <Button asChild variant='outline'>
            <Link href={Routes.Courses}>Explorar Cursos</Link>
          </Button>
          <Button asChild>
            <Link href={Routes.AuthLogin}>Unirme a la comunidad</Link>
          </Button>
        </div>
        <p className='text-xs text-white/80'>
          Únete a más de 50,000 estudiantes que ya están creando el futuro sin código
        </p>
      </section>
      <section className='grid gap-y-10 rounded-lg bg-white/10 px-5 py-10 md:py-20'>
        <h2 className='text-center text-2xl font-bold md:text-5xl'>¿Por qué aprender No-Code y Low-Code?</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {whyToLearn.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </section>
      <section className='grid gap-y-10 rounded-lg px-5 py-10 md:py-20'>
        <h3 className='text-center text-2xl font-bold md:text-5xl'>Lo que dicen nuestros estudiantes</h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {userReviews.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
      <section className='grid gap-y-10 rounded-lg bg-primary-800 px-5 py-10 md:py-20'>
        <h4 className='text-center text-2xl font-bold md:text-5xl'>Preguntas Frecuentes</h4>
        <Accordion type='single' collapsible className='mx-auto w-full max-w-screen-md'>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='text-sm hover:text-[#9f74dc] md:text-base'>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  )
}

export default HomePage
