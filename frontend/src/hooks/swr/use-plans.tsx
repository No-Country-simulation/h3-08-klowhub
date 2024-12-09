'use client'
import { Plan } from '@/models'
import useSWR from 'swr'

/**
 * Hook to fetch plans.
 * @returns The plans and loading state.
 */
function usePlans() {
  const { data, isLoading, error } = useSWR<Plan[]>('/api/plans')
  return { plans: data, isLoadingPlans: isLoading, errorPlans: error }
}

export { usePlans }
