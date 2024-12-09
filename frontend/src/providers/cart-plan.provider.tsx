'use client'
import { Plan } from '@/models'
import { BuyPlanSchema } from '@/utils'
import { createContext, useState } from 'react'

export interface CartPlan extends BuyPlanSchema {
  /**
   * The plan to add to the cart.
   */
  plan: Plan
}

export interface CartPlanContextState {
  /**
   * The plan added to the cart.
   */
  cartPlan: CartPlan | null
  /**
   * Selects the plan to add to the cart.
   * @param plan - The plan to add to the cart.
   */
  selectPlan: (plan: CartPlan) => void
  /**
   * Removes the plan from the cart.
   */
  removePlan: () => void
}

export const CartPlanContext = createContext<CartPlanContextState | null>(null)

interface CartPlanProviderProps {
  /**
   * The children components to render.
   */
  children: React.ReactNode
}

function CartPlanProvider({ children }: CartPlanProviderProps) {
  const [cartPlan, setCartPlan] = useState<CartPlan | null>(null)

  /**
   * Selects the plan to add to the cart.
   * @param cartPlan - The plan to add to the cart.
   */
  const selectPlan = (cartPlan: CartPlan) => {
    setCartPlan(cartPlan)
  }

  /**
   * Removes the plan from the cart.
   */
  const removePlan = () => {
    setCartPlan(null)
  }

  const values: CartPlanContextState = {
    cartPlan,
    selectPlan,
    removePlan
  }

  return <CartPlanContext.Provider value={values}>{children}</CartPlanContext.Provider>
}

export { CartPlanProvider }
