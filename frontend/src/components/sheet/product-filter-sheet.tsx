import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { ListFilterIcon, XIcon } from 'lucide-react'

const filters = [
  {
    name: 'Plataforma',
    options: [
      {
        name: 'AppSheet',
        checked: true
      },
      {
        name: 'PowerApps',
        checked: false
      }
    ]
  },
  {
    name: 'Idiomas',
    options: [
      {
        name: 'Inglés',
        checked: true
      },
      {
        name: 'Español',
        checked: false
      }
    ]
  },
  {
    name: 'Sector',
    options: [
      {
        name: 'Industria',
        checked: true
      },
      {
        name: 'Gestión del tiempo',
        checked: false
      },
      {
        name: 'Gestión de proyectos',
        checked: false
      },
      {
        name: 'Gestión de inventarios',
        checked: false
      },
      {
        name: 'Ventas y CRM',
        checked: false
      },
      {
        name: 'Obras y construcción',
        checked: false
      },
      {
        name: 'Logística y transporte',
        checked: false
      },
      {
        name: 'Servicios profesionales',
        checked: false
      },
      {
        name: 'Marketing digital',
        checked: false
      },
      {
        name: 'E-Commerce',
        checked: false
      },
      {
        name: 'Entretenimiento y medios',
        checked: false
      },
      {
        name: 'Seguridad y vigilancia',
        checked: false
      },
      {
        name: 'Investigación y desarrollo',
        checked: false
      },
      {
        name: 'Agricultura y medio ambiente',
        checked: false
      },
      {
        name: 'Administración',
        checked: false
      }
    ]
  },
  {
    name: 'Funcionalidades',
    options: [
      {
        name: 'Calendario',
        checked: true
      },
      {
        name: 'Generación de PDF',
        checked: true
      },
      {
        name: 'Reportes automáticos',
        checked: false
      },
      {
        name: 'Chatbot (BOT)',
        checked: true
      },
      {
        name: 'Emails',
        checked: false
      },
      {
        name: 'SMS',
        checked: false
      },
      {
        name: 'Notificaciones Push',
        checked: false
      },
      {
        name: 'Generación y Escaneo QR',
        checked: false
      },
      {
        name: 'Geolocalización',
        checked: false
      },
      {
        name: 'OCR',
        checked: false
      },
      {
        name: 'Machine Learning',
        checked: false
      },
      {
        name: 'Estadísticas de uso',
        checked: false
      },
      {
        name: 'Dashboard - Reportes y análisis',
        checked: false
      },
      {
        name: 'Gestión de Usuarios',
        checked: false
      },
      {
        name: 'Reporting avanzado',
        checked: false
      },
      {
        name: 'Integración de datos',
        checked: false
      },
      {
        name: 'Gestión de permisos',
        checked: false
      },
      {
        name: 'Análisis de datos',
        checked: false
      },
      {
        name: 'Optimización - Performance',
        checked: false
      },
      {
        name: 'Despliegue-Deploy',
        checked: true
      },
      {
        name: 'Importación - Exportación de datos',
        checked: false
      },
      {
        name: 'Firmas digitales',
        checked: false
      },
      {
        name: 'Escaneo de documentos',
        checked: false
      },
      {
        name: 'Monitor de automatizaciones',
        checked: false
      },
      {
        name: 'Historial de auditoría',
        checked: false
      },
      {
        name: 'API - Integraciones',
        checked: false
      }
    ]
  },
  {
    name: 'Herramientas y plataformas',
    options: [
      {
        name: 'Google Sheets',
        checked: true
      },
      {
        name: 'Looker Studio',
        checked: true
      },
      {
        name: 'MySQL',
        checked: false
      },
      {
        name: 'PostgreSQL',
        checked: false
      },
      {
        name: 'Salesforce',
        checkbox: false
      },
      {
        name: 'Airtable',
        checkbox: false
      },
      {
        name: 'Dropboxs',
        checkbox: false
      },
      {
        name: 'Box',
        checkbox: false
      },
      {
        name: 'Google Analytics',
        checkbox: false
      },
      {
        name: 'Zapier',
        checkbox: false
      },
      {
        name: 'Wordpress',
        checkbox: false
      },
      {
        name: 'Shopify',
        checkbox: false
      },
      {
        name: 'WhatsApp API',
        checkbox: false
      },
      {
        name: 'Google Drive',
        checkbox: false
      },
      {
        name: 'Google Maps',
        checkbox: false
      },
      {
        name: 'Google Calendar',
        checkbox: false
      },
      {
        name: 'Power BI',
        checkbox: false
      },
      {
        name: 'Twilo',
        checkbox: false
      },
      {
        name: 'Trello',
        checkbox: false
      }
    ]
  }
]

function ProductFilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>
          <ListFilterIcon /> <span className='hidden md:block'>Filtros</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='lg:w-3/5'>
        <SheetTitle className='sr-only'>Hoja de filtros de productos</SheetTitle>
        <SheetDescription className='sr-only'>
          Lista de todos los filtros disponibles para los productos.
        </SheetDescription>
        <ul className='grid gap-6 md:grid-cols-2'>
          {filters.map((filter) => (
            <li
              key={filter.name}
              className={cn(
                'flex flex-col gap-y-6 rounded-lg bg-white/10 p-3 pt-5',
                filter.options.length > 6 && 'col-span-full'
              )}
            >
              <p className='pl-2.5 text-base font-semibold'>{filter.name}</p>
              <ul className={cn('grid gap-3', filter.options.length > 6 && 'md:grid-cols-2')}>
                {filter.options.map((option) => (
                  <li key={option.name} className='flex items-center gap-x-3'>
                    <Checkbox
                      className='data-[state=checked]:border-[#D194E2] data-[state=checked]:bg-[#702486] data-[state=checked]:text-[#702486]'
                      defaultChecked={option.checked}
                    />
                    <span className='text-sm'>{option.name}</span>
                  </li>
                ))}
              </ul>
              <Button className='mr-auto' variant='filter' size='filter'>
                <XIcon size={20} /> Limpiar
              </Button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export { ProductFilterSheet }
