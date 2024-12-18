import { FacebookIcon, LinkedinIcon, XIcon } from '@/components/icons'

/**
 * Routes for the application.
 */
export enum Routes {
  Home = '/',
  AuthLogin = '/auth/login',
  AuthRegister = '/auth/register',
  AuthCallback = '/auth/callback',
  Courses = '/courses',
  Applications = '/applications',
  Projects = '/projects',
  Consultations = '/consultations',
  AboutAppSheet = '/app-sheet',
  PrivacyPolicy = '/privacy-policy',
  TermsAndConditions = '/terms-and-conditions',
  HelpCenter = '/help-center',
  Support = '/support',
  Cart = '/cart',
  Payment = '/payment',
  Plans = '/plans',
  PlansCart = '/plans/cart',
  PlansPayment = '/plans/payment',
  App = '/app',
  AppProfile = '/app/profile',
  AppProfileSettings = '/app/profile/settings',
  AppApplications = '/app/applications',
  AppCourses = '/app/courses',
  Dashboard = '/dashboard',
  DashboardCourses = '/dashboard/courses',
  DashboardCoursesNew = '/dashboard/courses/new',
  DashboardApplications = '/dashboard/applications',
  DashboardApplicationsNew = '/dashboard/applications/new',
  DashboardProfits = '/dashboard/profits'
}

export const DASHBOARD_ROUTE_REGEX = /^\/dashboard(\/.*)?$/

/**
 * Routes that require authentication.
 */
export const PROTECTED_ROUTES = [
  /^\/app(\/.*)?$/,
  DASHBOARD_ROUTE_REGEX,
  /^\/cart(\/.*)?$/,
  /^\/payment(\/.*)?$/,
  /^\/plans\/cart(\/.*)?$/,
  /^\/plans\/payment(\/.*)?$/
]

/**
 * Routes for the application header for explorers.
 */
export const EXPLORER_HEADER_ROUTES = [
  { label: 'Cursos y lecciones', href: Routes.Courses },
  { label: 'AppStore', href: Routes.Applications },
  { label: 'Proyectos', href: Routes.Projects },
  { label: 'Consultoría', href: Routes.Consultations },
  { label: 'Sobre Appsheet', href: Routes.AboutAppSheet }
]

/**
 * Routes for the application header for sellers.
 */
export const SELLER_HEADER_ROUTES = [
  { label: 'Dashboard', href: Routes.Dashboard },
  { label: 'Ganancias', href: Routes.DashboardProfits },
  { label: 'Mis aplicaciones', href: Routes.DashboardApplications },
  { label: 'Mis cursos', href: Routes.DashboardCourses },
  { label: 'Sobre Appsheet', href: Routes.AboutAppSheet }
]

/**
 * Routes for the application footer.
 */
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
