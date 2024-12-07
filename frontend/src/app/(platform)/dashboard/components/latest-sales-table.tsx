'use client'
import { DataTable } from '@/components/table/data-table'
import { Badge } from '@/components/ui/badge'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'

interface Sale {
  id: string
  customer: {
    name: string
    image_url: string
  }
  amount: number
  platform: string
  platform_type: 'powerapp' | 'appsheet'
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
    accessorKey: 'platform',
    header: 'Plataformas',
    cell: (cell) => <Badge variant={cell.row.original.platform_type}>{cell.row.original.platform}</Badge>
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
    platform: 'AppSheet',
    platform_type: 'appsheet'
  },
  {
    id: '2',
    customer: {
      name: 'Jane Doe',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 200,
    platform: 'AppSheet',
    platform_type: 'appsheet'
  },
  {
    id: '3',
    customer: {
      name: 'Bob Smith',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 300,
    platform: 'Power Apps',
    platform_type: 'powerapp'
  },
  {
    id: '4',
    customer: {
      name: 'Alice Johnson',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 400,
    platform: 'Power Apps',
    platform_type: 'powerapp'
  },
  {
    id: '5',
    customer: {
      name: 'David Lee',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 500,
    platform: 'Power Apps',
    platform_type: 'powerapp'
  },
  {
    id: '6',
    customer: {
      name: 'Emily Brown',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 600,
    platform: 'Power Apps',
    platform_type: 'powerapp'
  },
  {
    id: '7',
    customer: {
      name: 'Sarah Williams',
      image_url: '/assets/expert-person.jpeg'
    },
    amount: 700,
    platform: 'Power Apps',
    platform_type: 'powerapp'
  }
]

function LatestSalesTable() {
  return <DataTable columns={columns} data={mockData} />
}

export { LatestSalesTable }
