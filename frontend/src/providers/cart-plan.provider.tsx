'use client'
import { Plan } from '@/models'
import { BuyPlanSchema } from '@/utils'
import { createContext, useState } from 'react'

export interface CartPlan extends BuyPlanSchema {
  plan: Plan
}

export interface CartPlanContextState {
  cartPlan: CartPlan | null
  selectPlan: (plan: CartPlan) => void
  removePlan: () => void
}

export const CartPlanContext = createContext<CartPlanContextState | null>(null)

interface CartPlanProviderProps {
  children: React.ReactNode
}

function CartPlanProvider({ children }: CartPlanProviderProps) {
  const [cartPlan, setCartPlan] = useState<CartPlan | null>(null)

  const selectPlan = (cartPlan: CartPlan) => {
    setCartPlan(cartPlan)
  }

  const removePlan = () => {
    setCartPlan(null)
  }

  const values = {
    cartPlan,
    selectPlan,
    removePlan
  }

  return <CartPlanContext.Provider value={values}>{children}</CartPlanContext.Provider>
}

export { CartPlanProvider }
