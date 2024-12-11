'use client'
import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'

export interface DashChartData {
  month: string
  $88k: number
  $90k: number
}

function DashChart({ chartData, className }: { chartData: DashChartData[], className: string }) {
  const chartConfig = {
    $88k: {
      label: '$88k',
      color: 'hsl(var(--chart-1))'
    },
    $90k: {
      label: '$90k',
      color: 'hsl(var(--chart-2))'
    }
  } satisfies ChartConfig

  return (
    <div>
      <ChartContainer config={chartConfig} className={cn('', className)}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator='dashed' />}
          />
          <Bar dataKey='$88k' fill='#702486' radius={4} />
          <Bar dataKey='$90k' fill='#DFD1F3' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default DashChart
