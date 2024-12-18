'use client'
import { Product } from '@/models'
import useSWR from 'swr'

/**
 * Hook to fetch a product.
 * @param id - The ID of the product to fetch.
 * @returns The product and loading state.
 */
function useProduct(id: string) {
  const { data, isLoading, error } = useSWR<Product>(`/api/product/${id}`)
  return { product: data, isLoadingProduct: isLoading, errorProduct: error }
}

export { useProduct }
