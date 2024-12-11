'use client'
import { DataTable } from '@/app/(platform)/components/table/data-table'
import { Button } from '@/components/ui/button'
import { ColumnDef } from '@tanstack/react-table'
import { CircleCheck, Dot } from 'lucide-react'
import Image from 'next/image'

interface Sale {
  id: string
  customer: {
    name: string
    image_url: string
  }
  amount: number
  platform: string
  type: string
  state: string
  platform_type: 'powerapp' | 'appsheet'
}

const columns: Array<ColumnDef<Sale>> = [
  // Customer Avatar
  {
    accessorKey: 'customer.image_url',
    header: '',
    cell: (cell: any) => (
      <div className='relative size-12'>
        <Image
          src={cell.row.original.customer.image_url}
          className='rounded-full object-cover'
          alt='Avatar del comprador'
          fill
          sizes='50rem'
        />
      </div>
    ),
    maxSize: 48
  },
  // Nombre Cliente
  {
    accessorKey: 'customer.name',
    header: 'Nombre del cliente',
    cell: (cell: any) => cell.row.original.customer.name
  },
  // Monto
  {
    accessorKey: 'amount',
    header: 'Monto',
    cell: (cell: any) => <span>${cell.row.original.amount.toString()}</span>
  },
  // tipo
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: (cell: any) => (
      <span className='gen-sale-type-success'><CircleCheck />{cell.row.original.type.toString()}</span>
    )
  },
  // estado
  {
    accessorKey: 'state',
    header: 'Estado',
    cell: (cell: any) => (
      <span className='gen-sale-type-warning'><Dot />{cell.row.original.state.toString()}</span>
    )
  },
  // Plataforma
  {
    accessorKey: 'platform',
    header: 'Plataforma',
    cell: (cell: any) => <Button variant='ghost'>Ver Detalle</Button>
  }
]
const mockData: Sale[] = [
  {
    id: '1',
    customer: {
      name: 'John Doe',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 100,
    type: 'curso',
    state: 'pendiente',
    platform: 'AppSheet',
    platform_type: 'appsheet'
  },
  {
    id: '1',
    customer: {
      name: 'John Doe',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 100,
    type: 'curso',
    state: 'pendiente',
    platform: 'AppSheet',
    platform_type: 'appsheet'
  },
  {
    id: '1',
    customer: {
      name: 'John Doe',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 100,
    type: 'curso',
    state: 'pendiente',
    platform: 'AppSheet',
    platform_type: 'appsheet'
  },
  {
    id: '1',
    customer: {
      name: 'John Doe',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 100,
    type: 'curso',
    state: 'pendiente',
    platform: 'AppSheet',
    platform_type: 'appsheet'
  },
  {
    id: '1',
    customer: {
      name: 'John Doe',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 100,
    type: 'curso',
    state: 'pendiente',
    platform: 'AppSheet',
    platform_type: 'appsheet'
  },
  {
    id: '1',
    customer: {
      name: 'John Doe',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 100,
    type: 'curso',
    state: 'pendiente',
    platform: 'AppSheet',
    platform_type: 'appsheet'
  }
]

function DashboardSalesTable() {
  return <DataTable columns={columns} data={mockData} />
}

export { DashboardSalesTable }
