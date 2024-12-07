'use client'
import { UserModeContext } from '@/providers'
import { useContext } from 'react'

function useUserMode() {
  const context = useContext(UserModeContext)
  if (!context) throw new Error('useUserMode must be used within a UserModeProvider')
  return context
}

export { useUserMode }
