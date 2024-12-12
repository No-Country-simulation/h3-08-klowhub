import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function SearchInput() {
  return (
    <div className='text-black bg-white w-full md:w-[40%] flex h-11 items-center rounded-md border pl-3 text-sm ring-offset-background'>
      <Search className='size-4' />
      <Input
        type='text' name='buscador' id='buscador'
        placeholder='Buscador'
        className='bg-transparent border-0 hover:border-0 focus-visible:ring-0'
      />
    </div>
  )
}

export default SearchInput
