'use client'
import { UserContext } from '@/providers'
import { useContext } from 'react'

function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within a UserProvider')
  return context
}

export { useUser }
