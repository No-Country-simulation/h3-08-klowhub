'use client'
import { CartPlanContext } from '@/providers'
import { useContext } from 'react'

/**
 * Hook to access the cart plan context.
 * @returns The cart plan context.
 */
function useCartPlan() {
  const context = useContext(CartPlanContext)
  if (!context) throw new Error('useCartPlan must be used within a CartPlanProvider')
  return context
}

export { useCartPlan }
