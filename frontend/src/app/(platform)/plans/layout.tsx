'use client'
import { CartPlanProvider } from '@/providers'

interface PlanLayoutPageProps {
  /**
   * The children components to render.
   */
  children: React.ReactNode
}

function PlanLayout({ children }: PlanLayoutPageProps) {
  return <CartPlanProvider>{children}</CartPlanProvider>
}

export default PlanLayout
