import { FOOTER_ROUTES } from '@/utils'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-footer'>
      <div className='mx-auto grid max-w-screen-2xl gap-y-12 px-16 py-10'>
        <ul className='flex flex-col gap-x-3 gap-y-6 md:grid md:grid-cols-4 lg:grid-cols-5'>
          {FOOTER_ROUTES.sitemap.map(({ title, routes }) => (
            <li key={title} className='flex flex-col gap-y-3.5'>
              <h6 className='text-sm text-white/50'>{title}</h6>
              <ul className='flex flex-col gap-y-4'>
                {routes.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className='text-sm text-white'>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          {FOOTER_ROUTES.socials.map(({ title, routes }) => (
            <li key={title} className='flex flex-col gap-y-3.5'>
              <h6 className='text-sm text-white/50'>{title}</h6>
              <ul className='flex items-center gap-x-5'>
                {routes.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <Link href={href}>
                      <Icon />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className='h-[0.0625rem] w-full bg-gray-500' />
        <p className='text-center text-xs text-white'>© Knowhub.</p>
      </div>
    </footer>
  )
}

export { Footer }
