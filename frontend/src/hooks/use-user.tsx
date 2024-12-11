'use client'
import { UserContext } from '@/providers'
import { useContext } from 'react'

/**
 * Hook to access the user context.
 * @returns The user context.
 */
function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within a UserProvider')
  return context
}

export { useUser }
