import { FacebookIcon, LinkedinIcon, XIcon } from '@/components/icons'

export enum Routes {
  Home = '/',
  AuthLogin = '/auth/login',
  AuthRegister = '/auth/register',
  App = '/app',
  Dashboard = '/dashboard',
  PrivacyPolicy = '/privacy-policy',
  TermsAndConditions = '/terms-and-conditions'
}

export const FOOTER_ROUTES = {
  sitemap: [
    {
      title: 'Categorías',
      routes: [
        { label: 'Cursos', href: '#' },
        { label: 'Aplicaciones', href: '#' },
        { label: 'Vende un curso', href: '#' },
        { label: 'Vende una app', href: '#' }
      ]
    },
    {
      title: 'Acerca de',
      routes: [
        { label: 'Instructores', href: '#' },
        { label: 'Cursos', href: '#' },
        { label: 'Términos del servicio', href: '#' },
        { label: 'Politicas de privacidad', href: '#' }
      ]
    },
    {
      title: 'Soporte',
      routes: [
        { label: 'FAQ', href: '#' },
        { label: 'Contacto', href: '#' },
        { label: 'Foro', href: '#' }
      ]
    }
  ],
  socials: [
    {
      title: 'Encuéntranos en',
      routes: [
        { label: 'Facebook', href: '#', icon: FacebookIcon },
        { label: 'X', href: '#', icon: XIcon },
        { label: 'LinkedIn', href: '#', icon: LinkedinIcon }
      ]
    }
  ]
}
