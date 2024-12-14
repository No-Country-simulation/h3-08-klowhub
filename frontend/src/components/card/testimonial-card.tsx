import Image from 'next/image'

interface Testimonial {
  name: string
  role: string
  comment: string
  image_url: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className='grid gap-y-2 rounded-lg border border-[#B95ED4] bg-white/10 p-4 shadow-lg'>
      <header className='flex items-center gap-x-2'>
        <Image src={testimonial.image_url} alt={testimonial.name} width={50} height={50} className='rounded-full' />
        <div>
          <p className='font-semibold underline decoration-[#B95ED4] underline-offset-4'>{testimonial.name}</p>
          <p className='text-sm'>{testimonial.role}</p>
        </div>
      </header>
      <footer>
        <p className='text-sm italic md:text-base'>"{testimonial.comment}"</p>
      </footer>
    </article>
  )
}

export { TestimonialCard }
