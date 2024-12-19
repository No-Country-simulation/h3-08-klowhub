'use client'
import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { cn } from '@/lib/utils'
import { ArrowBigDown, ArrowBigUp } from 'lucide-react'

export interface RechartLineChartData {
  $88k: number
}
export interface RechartLineChartInfo {
  color: string
  direction: boolean
  stat: string
  desc: string
  data: RechartLineChartData[]
}

function RechartLineChart({ chartData }: { chartData: RechartLineChartInfo }) {
  return (
    <div className='flex flex-row items-center p-4 w-full h-[50%]'>
      <ResponsiveContainer width='50%' height='100%'>
        <LineChart width={100} height={100} data={chartData.data}>
          <Line
            type='monotone'
            dataKey='$88k'
            stroke={chartData.color}
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className=''>
        <div className='flex flex-row'>
          {chartData.stat}
          <span className={cn('ml-4')}>
            {chartData.direction ? <ArrowBigUp className='text-green-400' /> : <ArrowBigDown className='text-red-500' />}
          </span>
        </div>
        <p className='font-thin'>{chartData.desc}</p>
      </div>
    </div>
  )
}

export default RechartLineChart
