'use client'
import { Button } from '@/components/ui/button'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarSearchIcon, ListOrderedIcon } from 'lucide-react'
import { useMemo } from 'react'
import { Label, Pie, PieChart } from 'recharts'
import { LatestSalesTable } from '../table/latest-sales-table'

const chartData = [
  { stats: 'profits', movements: 2400, fill: '#DFD1F3' },
  { stats: 'other', movements: 2012, fill: '#9D32BC' }
]

const chartConfig = {
  movements: { label: 'movements' },
  profits: { label: 'Ganancias' },
  other: { label: 'Otros' }
} satisfies ChartConfig

function LatestSalesSection() {
  const totalProfits = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.movements, 0)
  }, [])

  return (
    <section className='flex flex-col gap-y-6'>
      <header className='grid gap-y-1.5'>
        <h2 className='text-base font-bold'>Últimas ventas</h2>
        <p className='text-sm'>
          Lista de las últimas ventas realizadas en Knowhub. Puedes ver el estado de cada venta y ver los detalles de la
          transacción.
        </p>
      </header>
      <div className='grid gap-x-6 gap-y-12 lg:grid-cols-[1fr_18.25rem]'>
        <Tabs defaultValue='latest-movements'>
          <TabsList className='flex flex-wrap items-center rounded-none bg-transparent p-0'>
            <TabsTrigger variant='primary' value='latest-movements'>
              Últimos movimientos
            </TabsTrigger>
            <TabsTrigger variant='primary' value='current-month'>
              Este mes
            </TabsTrigger>
            <TabsTrigger variant='primary' value='three-months'>
              3 meses
            </TabsTrigger>
            <TabsTrigger variant='primary' value='current-year'>
              Este año
            </TabsTrigger>
            <div className='ml-auto mt-4 flex flex-wrap items-center justify-end gap-x-3 gap-y-2 sm:mt-0'>
              <Button variant='outline'>
                <CalendarSearchIcon size={20} /> Filtrar por fecha
              </Button>
              <Button variant='outline'>
                <ListOrderedIcon size={20} /> Ordenar por
              </Button>
            </div>
          </TabsList>
          <TabsContent value='latest-movements'>
            <LatestSalesTable />
          </TabsContent>
          <TabsContent value='current-month'>
            <LatestSalesTable />
          </TabsContent>
          <TabsContent value='three-months'>
            <LatestSalesTable />
          </TabsContent>
          <TabsContent value='current-year'>
            <LatestSalesTable />
          </TabsContent>
        </Tabs>
        <div className='rounded-lg bg-white/10 p-6'>
          <ChartContainer config={chartConfig} className='sticky top-0 mx-auto aspect-square max-h-64'>
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey='movements'
                nameKey='stats'
                innerRadius={95}
                outerRadius='100%'
                paddingAngle={5}
                strokeWidth={5}
                spacing={200}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                          <tspan x={viewBox.cx} y={viewBox.cy} className='fill-white text-xl font-bold'>
                            ${totalProfits.toLocaleString()}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-white text-xs font-medium'>
                            Balance de aplicaciones
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    </section>
  )
}

export { LatestSalesSection }
