'use client'
import { DataTable } from '@/components/table/data-table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Routes } from '@/utils'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import Link from 'next/link'

interface Sale {
  id: string
  customer: {
    name: string
    image_url: string
  }
  amount: number
  status: string
}

const columns: Array<ColumnDef<Sale>> = [
  {
    accessorKey: 'customer.image_url',
    header: (table) => null,
    cell: (cell) => (
      <div className='relative size-12'>
        <Image
          className='rounded-full object-cover'
          src={cell.row.original.customer.image_url}
          alt='Avatar del comprador'
          fill
          sizes='5vw'
        />
      </div>
    ),
    maxSize: 48
  },
  {
    accessorKey: 'customer.name',
    header: 'Nombre del cliente',
    cell: (cell) => cell.row.original.customer.name
  },
  {
    accessorKey: 'amount',
    header: 'Monto',
    cell: (cell) => '$' + cell.row.original.amount.toString()
  },
  {
    accessorKey: 'status',
    header: 'Estado',
    cell: (cell) => <Badge variant='warning'>{cell.row.original.status}</Badge>
  },
  {
    id: 'actions',
    header: undefined,
    cell: (cell) => (
      <Button variant='ghost' asChild>
        <Link href={Routes.DashboardCourses}>Ver detalles</Link>
      </Button>
    )
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
    status: 'Pendiente'
  },
  {
    id: '2',
    customer: {
      name: 'Jane Doe',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 200,
    status: 'Pendiente'
  },
  {
    id: '3',
    customer: {
      name: 'Bob Smith',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 300,
    status: 'Pendiente'
  },
  {
    id: '4',
    customer: {
      name: 'Alice Johnson',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 400,
    status: 'Pendiente'
  },
  {
    id: '5',
    customer: {
      name: 'David Lee',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 500,
    status: 'Pendiente'
  },
  {
    id: '6',
    customer: {
      name: 'Emily Brown',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 600,
    status: 'Pendiente'
  },
  {
    id: '7',
    customer: {
      name: 'Sarah Williams',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 700,
    status: 'Pendiente'
  }
]

function LatestSalesTable() {
  return <DataTable columns={columns} data={mockData} />
}

export { LatestSalesTable }
