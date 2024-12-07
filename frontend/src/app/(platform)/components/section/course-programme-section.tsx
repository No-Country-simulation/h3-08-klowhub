import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MinusIcon, PlusIcon } from 'lucide-react'

function CourseProgrammeSection() {
  return (
    <section className='grid gap-y-4'>
      <h3 className='text-xl font-bold'>Programa del curso</h3>
      <Accordion type='single' collapsible defaultValue='module-0' className=''>
        {Array.from({ length: 4 }).map((_, index) => (
          <AccordionItem key={index} className='border-none' value={`module-${index}`}>
            <AccordionTrigger className='justify-start gap-x-5 bg-white/10 px-5 py-4 text-base font-semibold text-[#B95ED4] hover:bg-neutral-700 data-[state=open]:bg-neutral-700'>
              <PlusIcon className='text-white' size={16} /> Módulo {index}
            </AccordionTrigger>
            <AccordionContent className='flex items-start gap-x-5 bg-neutral-700 px-5 py-4'>
              <MinusIcon className='mt-1 shrink-0 text-[#B95ED4]' size={16} />
              <div className='grid gap-y-4'>
                <p className='flex items-center gap-x-5 text-base font-bold'>
                  Introducción a Power Apps y Fundamentos Básicos
                </p>
                <ul className='grid gap-y-2.5 text-base'>
                  <li>Lección 1: ¿Qué es Power Apps? Una visión general de la plataforma</li>
                  <li>Lección 2: Configuración de tu cuenta y entorno de trabajo</li>
                  <li>Lección 3: Navegación por la interfaz de AppSheet</li>
                  <li>Lección 4: Creación de tu primera aplicación básica</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export { CourseProgrammeSection }
