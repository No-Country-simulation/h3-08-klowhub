import Image from 'next/image'
import TopHeadComp from './components/TopHeadComp'
import { CircleUserRound, Clock4, ListFilter, ListOrdered, X } from 'lucide-react'
import SectionButton from './components/SectionButton'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import { TabsTriggerF02Comp } from '../app/profile/components/TabsTriggerF02Comp'
import { Button } from '@/components/ui/button'
import { DashboardSalesTable } from './components/sales-table'
import Card from './components/card'
import DashCalendar from './components/calendar'
import EventList, { DashEventGroup } from './components/event-list'
import Oportunities, { DashOportunity } from './components/oportunities'
import Chart, { DashChartData } from './components/chart'
import SearchInput from './components/search-input'
import ConsultList, { Consult } from './components/consult-list'
import Link from 'next/link'
import GenTestresponsiveComp from './components/gen-testresponsive-comp'

function DashboardPage() {
  // Listado de eventos
  const eventsGroups: DashEventGroup[] = [
    {
      title: '20 Septiembre 2024',
      classNameChild: 'gen-event-pill-b-500',
      events: [
        {
          title: 'Consultoría 1',
          time: '18:00 - 19:00'
        },
        {
          title: 'Consultoría 2',
          time: '18:00 - 19:00'
        },
        {
          title: 'Consultoría 3',
          time: '18:00 - 19:00'
        }
      ]
    },
    {
      title: '20 Septiembre 2024',
      classNameChild: 'gen-event-pill-a-500',
      events: [
        {
          title: 'Consultoría 1',
          time: '18:00 - 19:00'
        },
        {
          title: 'Consultoría 2',
          time: '18:00 - 19:00'
        },
        {
          title: 'Consultoría 3',
          time: '18:00 - 19:00'
        }
      ]
    }
  ]
  // Listado de oportunidades
  const oportunities: DashOportunity[] = [
    {
      daysDiff: 5,
      title: 'Solución integral para la gestión de tareas y seguimiento de proyectos en tiempo real.',
      desc: 'Crear una aplicación que permita a los equipos organizar, asignar y priorizar tareas diarias de manera intuitiva.',
      tags: ['CRM', 'Clientes', 'Ventas'],
      platform_type: 'appsheet',
      user: {
        name: 'Santiago López',
        image_url: '/assets/expert-person.jpeg',
        pro: true,
        desc: 'Instructor y desarrollador',
        qualification: 5
      },
      details_url: ''
    },
    {
      daysDiff: 5,
      title: 'Solución integral para la gestión de tareas y seguimiento de proyectos en tiempo real.',
      desc: 'Crear una aplicación que permita a los equipos organizar, asignar y priorizar tareas diarias de manera intuitiva.',
      tags: ['CRM', 'Clientes', 'Ventas'],
      platform_type: 'appsheet',
      user: {
        name: 'Santiago López',
        image_url: '/assets/expert-person.jpeg',
        pro: true,
        desc: 'Instructor y desarrollador',
        qualification: 5
      },
      details_url: ''
    },
    {
      daysDiff: 5,
      title: 'Solución integral para la gestión de tareas y seguimiento de proyectos en tiempo real.',
      desc: 'Crear una aplicación que permita a los equipos organizar, asignar y priorizar tareas diarias de manera intuitiva.',
      tags: ['CRM', 'Clientes', 'Ventas'],
      platform_type: 'appsheet',
      user: {
        name: 'Santiago López',
        image_url: '/assets/expert-person.jpeg',
        pro: true,
        desc: 'Instructor y desarrollador',
        qualification: 5
      },
      details_url: ''
    }
  ]
  // Listado de fechas marcadas
  const fechas: Date[] = [
    new Date(2024, 11, 1),
    new Date(2024, 11, 2),
    new Date(2024, 11, 6),
    new Date(2024, 11, 7),
    new Date(2024, 11, 22),
    new Date(2024, 11, 23),
    new Date(2024, 11, 29)
  ]
  // Listado de datos del chart
  const chartData: DashChartData[] = [
    { month: 'January', $88k: 186, $90k: 80 },
    { month: 'February', $88k: 305, $90k: 200 },
    { month: 'March', $88k: 237, $90k: 120 },
    { month: 'April', $88k: 73, $90k: 190 },
    { month: 'May', $88k: 209, $90k: 130 },
    { month: 'June', $88k: 214, $90k: 140 },
    { month: 'July', $88k: 214, $90k: 140 },
    { month: 'August', $88k: 214, $90k: 140 },
    { month: 'September', $88k: 214, $90k: 140 },
    { month: 'October', $88k: 214, $90k: 140 }
  ]
  // Listado de datos de la consulta
  const consultList: Consult[] = [
    {
      title: 'Como crear y configurar una cuenta en appsheet',
      desc: 'gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique,gula vel nisi elementum, sed lgula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique,gula vel nisi elementum, sed l',
      state: 'pendiente',
      platform_type: 'powerapp',
      details_url: '/'
    },
    {
      title: 'Como crear y configurar una cuenta en appsheet',
      desc: 'gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique,gula vel nisi elementum, sed lgula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique,gula vel nisi elementum, sed l',
      state: 'solucionada',
      platform_type: 'appsheet',
      details_url: '/'
    }
  ]
  return (
    <main className='flex flex-col gap-8 px-4'>
      <TopHeadComp />
      <GenTestresponsiveComp t={false} />
      <section className='relative rounded-md border-2 border-primary-b-500 bg-primary-100 text-primary-b-500 flex flex-col md:flex-row gap-4 p-6'>
        <X className='absolute right-4' />
        <Image
          src='/assets/temporal/f05-bell-icon.png'
          alt='top background'
          width={200}
          height={200}
          className='w-8 h-8'
        />
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold text-sm'>¡No olvides completar tu perfil de mentor!</h3>
          <p className='text-sm'>Optimiza tus oportunidades completando tu perfil. Los usuarios confían más en los mentores con información completa y actualizada. ¡Dale el toque final y destacate!</p>
          <Link href='/'>
            <p className='font-bold text-xs'>Completar perfil</p>
          </Link>
        </div>
      </section>
      <section className='flex flex-col md:flex-row gap-4'>
        <SectionButton link='' text='Mis cursos' img='/assets/temporal/f05-sects-cursos.png' />
        <SectionButton link='' text='Mis proyectos' img='/assets/temporal/f05-sects-proys.png' />
        <SectionButton link='' text='Mis aplicaciones' img='/assets/temporal/f05-sects-apps.png' />
        <SectionButton link='' text='Consultoria' img='/assets/temporal/f05-sects-consult.png' />
      </section>
      <section className='f05-card-dark p-6 flex flex-col gap-4'>
        <h2 className='font-bold'>Mis proyectos</h2>
        <p>Revisa los detalles, realiza entregas y mantén la comunicación con el creador para asegurar el éxito de tu trabajo.</p>
        <div className='flex flex-col md:flex-row gap-4'>
          <Tabs id='tabs-comp' defaultValue='f05-gen' className='w-full md:w-[70%]'>
            <TabsList className='bg-transparent w-full flex flex-col lg:flex-row items-start gap-2'>
              <div className='w-full md:w-fit'>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-gen'>General</TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-apps'>Aplicaciones</TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-curs'>Cursos</TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-proy'>Proyectos</TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-ment'>Mentoría</TabsTriggerF02Comp>
              </div>
              <div className='flex flex-col md:flex-row gap-4 lg:ml-auto'>
                <Button variant='filter' className='px-2 md:px-4'>
                  <ListFilter />Filtros
                </Button>
                <Button variant='filter' className='px-2 md:px-4'>
                  <ListOrdered />Ordenar por
                </Button>
              </div>
            </TabsList>
            <TabsContent value='f05-gen'>
              <div className='flex flex-col'>
                <DashboardSalesTable />
              </div>
            </TabsContent>
          </Tabs>
          <div className='flex flex-col w-full md:w-[30%] gap-2'>
            <Card title='Ganancias totales del mes' value='$2850' />
            <Card title='Cursos publicados' value='5' />
            <Card title='Aplicaciones transferidas en el mes' value='11' />
            <Card title='Horas de mentoria' value='27' />
            <Button variant='ghost'>Ver ganancias</Button>
          </div>
        </div>
      </section>
      <section className='f05-card-dark p-6 flex flex-col md:flex-row gap-4'>
        <div className='w-full md:w-[40%] lg:w-[30%] f05-dash-card items-start'>
          <DashCalendar fechas={fechas} />
        </div>
        <div className='w-full md:w-[30%] lg:w-[30%] f05-dash-card'>
          <EventList eventsGroup={eventsGroups} />
        </div>
        <div className='w-full md:w-[30%] lg:w-[40%] f05-dash-card-start p-6'>
          <h3 className='font-bold flex flex-row gap-1'><CircleUserRound /> Martin Fernandez</h3>
          <h3 className='font-bold flex flex-row gap-1'><Clock4 /> 1 Hora</h3>
          <p>Hola, como estas? Me gustaria que en la reunion profundicemos sobre aplicaciones para automatizar procesos en mi negocio y tambien me gustaria ver cuales son las mejores opciones o casos parecidos en lo que hasyas trabajao. Posteriormetnte me gustaria emepzar a desarrollar algo para mi negocio</p>
        </div>
      </section>
      <section className='f05-card-transparent-rows'>
        <h2 className='font-bold'>Oportunidades que se alinean con tu perfil</h2>
        <p>Explorá las postulaciones recomendadas especialmente para vos. Estas oportunidades están diseñadas para que encuentres el próximo paso en tu carrera de forma fácil y rápida. ¡No dejes pasar la chance de postularte a tu próximo desafío profesional!</p>
        <Oportunities oportunities={oportunities} />
        <div className='w-full flex flex-col items-center'>
          <Button className='px-16' variant='filter'>Ver proyectos</Button>
        </div>
      </section>
      <section className='f05-card-dark p-6 flex flex-col lg:flex-row gap-4'>
        <div className='w-full lg:w-[70%]'>
          <div className='f05-dash-card-start p-2'>
            Chart de ventas ultimos 8 meses |
          </div>
          <Tabs id='tabs-comp' defaultValue='f05-dash-app'>
            <TabsList className='bg-transparent w-full flex justify-start'>
              <TabsTriggerF02Comp className='f02-tabs-style' value='f05-dash-app'>General</TabsTriggerF02Comp>
              <TabsTriggerF02Comp className='f02-tabs-style' value='f05-curs'>Cursos</TabsTriggerF02Comp>
              <TabsTriggerF02Comp className='f02-tabs-style' value='f05-proy'>Proyectos</TabsTriggerF02Comp>
              <TabsTriggerF02Comp className='f02-tabs-style' value='f05-cons'>Consuloría</TabsTriggerF02Comp>
            </TabsList>
            <TabsContent value='f05-dash-app'>
              <div className='flex flex-col'>
                <Chart className='max-h-[26rem] w-full f05-dash-card-start p-4' chartData={chartData} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className='relative w-full lg:w-[30%] bg-cover bg-center bg-no-repeat bg-[image:url("/assets/temporal/f05-chart-card-bg.png")] flex flex-col gap-8 rounded-md justify-center p-6 font-bold'>
          <p>Crea tu perfil como mentor</p>
          <p>¡Crea tu perfil como mentor y únete a nuestra comunidad de expertos! Comparte tu experienciay conecta con personas que buscan aprender. ¡Personaliza tu perfil y muestra al mundo lo que puedes aportar!</p>
          <Button variant='default' className='w-fit'>Crear perfil</Button>
        </div>
      </section>
      <section className='f05-card-dark p-6 flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          {/* Buscador */}
          <SearchInput />
          {/* Filtros */}
          <Button variant='filter' className=''>
            <ListFilter />Filtros
          </Button>
          <Button variant='filter' className=''>
            <ListOrdered />Ordenar por
          </Button>
        </div>
        <ConsultList consultList={consultList} />
        <GenTestresponsiveComp t={false} />
      </section>
    </main>
  )
}

export default DashboardPage
