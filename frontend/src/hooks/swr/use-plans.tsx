'use client'
import { Plan } from '@/models'
import useSWR from 'swr'

function usePlans() {
  const { data, isLoading, error } = useSWR<Plan[]>('/api/plans')
  return { plans: data, isLoadingPlans: isLoading, errorPlans: error }
}

export { usePlans }
