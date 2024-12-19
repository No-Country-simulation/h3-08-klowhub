'use client'
import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

export interface PieChartData {
  name: string
  color: string
  value: number
}
export interface PieChartConfig {
  title: string
  stat: string
  chartData: PieChartData[]
}

function PieChartSales({ chartConfig }: { chartConfig: PieChartConfig }) {
  return (
    <div className='h-48 w-48'>
      <div className='absolute flex flex-col justify-center items-center h-48 w-48 z-10'>
        <p className='text-xs'>{chartConfig.title}</p>
        <p className='font-bold'>{chartConfig.stat}</p>
      </div>
      <ResponsiveContainer className='-z-10' width='100%' height='100%'>
        <PieChart width={400} height={400}>
          <Pie
            data={chartConfig.chartData}
            cx='50%'
            cy='50%'
            labelLine={false}
            innerRadius={75}
            outerRadius={90}
            paddingAngle={5}
            startAngle={220}
            endAngle={760}
            fill='#8884d8'
            dataKey='value'
          >
            {chartConfig.chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartSales
