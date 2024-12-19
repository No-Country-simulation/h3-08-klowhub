import React from 'react'
import CardDynamic from '../components/card-dynamic'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import BreadCrumbComp, { BreadcrumbItemIface } from '../../app/profile/components/BreadCrumbComp'
import { Button } from '@/components/ui/button'
import Chart, { DashChartData } from '../components/chart'
import { TabsTriggerF02Comp } from '../../app/profile/components/TabsTriggerF02Comp'
import { CalendarSearch, ListOrdered } from 'lucide-react'
import RechartLineChart, { RechartLineChartInfo } from '../components/rechart-line-chart'
import { Separator } from '@/components/ui/separator'
import { EarningsSale, EarningsSalesTable } from '../components/sales-table'
import PieChartSales, { PieChartConfig } from '../components/pie-chart'

function EarningsPage() {
  const blist: BreadcrumbItemIface[] = [
    { url: '/', text: 'Home' },
    { url: '/dashboard', text: 'dashboard' },
    { url: '/dashboard/earnings', text: 'Ganancias' }
  ]
  // Listado de datos del chart
  const chartData: DashChartData[] = [
    { month: 'January', $88k: 186, $90k: 0 },
    { month: 'February', $88k: 305, $90k: 0 },
    { month: 'March', $88k: 237, $90k: 0 },
    { month: 'April', $88k: 73, $90k: 0 },
    { month: 'May', $88k: 209, $90k: 0 },
    { month: 'June', $88k: 214, $90k: 0 },
    { month: 'July', $88k: 214, $90k: 0 },
    { month: 'August', $88k: 214, $90k: 0 },
    { month: 'September', $88k: 214, $90k: 0 },
    { month: 'October', $88k: 214, $90k: 0 }
  ]
  // Datos de chart de líneas
  const rechartData1: RechartLineChartInfo = {
    color: '#43B077',
    direction: true,
    stat: '1,235',
    desc: 'Suscriptores el último año',
    data: [
      { $88k: 50 },
      { $88k: 75 },
      { $88k: 50 },
      { $88k: 85 },
      { $88k: 78 },
      { $88k: 90 }
    ]
  }
  const rechartData2: RechartLineChartInfo = {
    color: '#DD919B',
    direction: false,
    stat: '456',
    desc: 'Suscriptores el último año',
    data: [
      { $88k: 50 },
      { $88k: 40 },
      { $88k: 30 },
      { $88k: 10 },
      { $88k: 40 },
      { $88k: 80 },
      { $88k: 90 }
    ]
  }
  // Listado de Ventas
  const salesList: EarningsSale[] = [
    {
      state: 'pendiente',
      type: 'curso',
      customer: {
        name: 'Santiago López',
        image_url: '/assets/expert-person.jpeg'
      },
      amount: 650,
      details_url: '/',
      id: '1'
    },
    {
      state: 'pendiente',
      type: 'aplicacion',
      customer: {
        name: 'Santiago López',
        image_url: '/assets/expert-person.jpeg'
      },
      amount: 670,
      details_url: '/',
      id: '2'
    },
    {
      state: 'pendiente',
      type: 'proyecto',
      customer: {
        name: 'Santiago López',
        image_url: '/assets/expert-person.jpeg'
      },
      amount: 150,
      details_url: '/',
      id: '3'
    }
  ]
  // Configuración Pie Chart
  const chartConfig: PieChartConfig = {
    title: 'Balance de Proyectos',
    stat: '$150,238',
    chartData: [
      { name: 'Ganancias', color: '#9D32BC', value: 120 },
      { name: 'Gastos', color: '#DFD1F3', value: 80 }
    ]
  }
  return (
    <main className='mx-auto my-12 grid w-full max-w-screen-2xl gap-8 px-4'>
      <BreadCrumbComp list={blist} />
      <h4 className='font-bold'>Ganancias</h4>
      <section className='bg-[#1F2937] rounded-md flex flex-col md:flex-row gap-8 p-6 w-full'>
        <div className='flex flex-col gap-4 md:w-1/3'>
          <p className='text-xs font-bold'>Fondos disponibles</p>
          <CardDynamic className='gen-card__vertical items-center'>
            <p className='text-xs font-bold'>Saldo disponible para uso</p>
            <p className='text-3xl text-primary-b-200'>170,00 US$</p>
            <Button variant='default' className='w-full'>Retirar fondos</Button>
            <Button variant='filter' className='w-full text-xs text-wrap py-8 md:text-nowrap'>Administrar métodos de cobro</Button>
          </CardDynamic>
        </div>
        <div className='flex flex-col gap-4 md:w-1/3'>
          <p className='text-xs font-bold'>Pagos</p>
          <CardDynamic className='gen-card__vertical items-start'>
            <p className='text-xs font-bold'>Saldo disponible para uso</p>
            <p className='text-3xl text-primary-b-200'>300,80 US$</p>
            <p className='text-xs font-normal'>3 pagos</p>
          </CardDynamic>
          <CardDynamic className='gen-card__vertical items-start'>
            <p className='text-xs font-bold'>Retirados hasta la fecha</p>
            <p className='text-3xl text-primary-b-200'>208,00 US$</p>
            <p className='text-xs font-normal'>3 pagos</p>
          </CardDynamic>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-1/3'>
          <p className='text-xs font-bold'>Ganancias hasta la fecha</p>
          <CardDynamic className='gen-card__vertical items-start'>
            <p className='text-xs font-normal'>Este total incluye sus pagos compensados y cualquier compensación gestionada por Atención al cliente.</p>
            <p className='text-3xl text-primary-b-200'>272,80 US$</p>
            <p className='text-xs font-normal'>3 pagos</p>
          </CardDynamic>
        </div>
      </section>
      <section className='bg-[#1F2937] rounded-md flex flex-col lg:flex-row gap-8 p-6'>
        <div className='gen-card flex-row md:flex-col w-full lg:w-[60%]'>
          <div className='hidden md:f05-dash-card-start p-2'>Resumen de aplicaciones</div>
          <Tabs id='tabs-comp' className='w-full' defaultValue='f05-apps'>
            <TabsList className='flex w-full flex-col gap-4 md:flex-row justify-start bg-transparent'>
              <div className='flex'>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-apps'>
                  Aplicaciones
                </TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-curs'>
                  Cursos
                </TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-proy'>
                  Proyectos
                </TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-cons'>
                  Consuloría
                </TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='f05-gen'>
                  General
                </TabsTriggerF02Comp>
              </div>
              <Button variant='filter' className='ml-auto float-right md:float-left'>
                <CalendarSearch />
                Filtrar por fecha
              </Button>
            </TabsList>
            <TabsContent value='f05-apps'>
              <div className='flex flex-col'>
                <Chart className='f05-dash-card-start max-h-[26rem] w-full p-4' chartData={chartData} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className='gen-card flex-col w-full gap-4'>
          <div className='f05-dash-card-start p-2'>Número de seguidores</div>
          <div className='f05-dash-card h-full'>
            <RechartLineChart chartData={rechartData1} />
            <Separator className='w-[80%] bg-[#AFAFAF]' />
            <RechartLineChart chartData={rechartData2} />
          </div>
        </div>
      </section>
      <section className='bg-[#1F2937] rounded-md flex flex-col gap-8 p-6'>
        <h4 className=''>Ultimas ventas</h4>
        <div className='flex flex-col lg:flex-row gap-4'>
          <Tabs id='tabs-sales' defaultValue='sales-gen'>
            <TabsList className='flex flex-col md:flex-row w-full justify-start gap-4 bg-transparent'>
              <div className='flex'>
                <TabsTriggerF02Comp className='f02-tabs-style' value='sales-gen'>
                  General
                </TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='sales-apps'>
                  Aplicaciones
                </TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='sales-curs'>
                  Cursos
                </TabsTriggerF02Comp>
                <TabsTriggerF02Comp className='f02-tabs-style' value='sales-proy'>
                  Proyectos
                </TabsTriggerF02Comp>
              </div>
              <div className='flex gap-4'>
                <Button variant='filter' className='ml-auto float-left'>
                  <CalendarSearch />
                  Filtrar por fecha
                </Button>
                <Button variant='filter' className='ml-auto float-left'>
                  <ListOrdered />
                  Ordenar Por
                </Button>
              </div>
            </TabsList>
            <TabsContent value='sales-gen'>
              <div className='flex flex-col'>
                <EarningsSalesTable data={salesList} />
              </div>
            </TabsContent>
          </Tabs>
          <div className='f05-dash-card flex w-full'>
            <PieChartSales chartConfig={chartConfig} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default EarningsPage
