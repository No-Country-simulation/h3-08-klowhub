'use client'
import { Product } from '@/models'
import useSWR from 'swr'

function useProduct(id: string) {
  const { data, isLoading, error } = useSWR<Product>(`/api/product/${id}`)
  return { product: data, isLoadingProduct: isLoading, errorProduct: error }
}

export { useProduct }
