'use client'
import { CartContext } from '@/providers'
import { useContext } from 'react'

/**
 * Hook to access the cart context.
 * @returns The cart context.
 */
function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

export { useCart }
