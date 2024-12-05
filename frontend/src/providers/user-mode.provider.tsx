'use client'
import { UserRole } from '@/models'
import { createContext, useState } from 'react'

export interface UserModeContextState {
  userMode: UserRole
  setUserMode: (mode: UserRole) => void
}

export const UserModeContext = createContext<UserModeContextState | null>(null)

interface UserModeProviderProps {
  children: React.ReactNode
}

function UserModeProvider({ children }: UserModeProviderProps) {
  const [userMode, setUserMode] = useState<UserRole>(UserRole.Explorer)

  const values = {
    userMode,
    setUserMode
  }

  return <UserModeContext.Provider value={values}>{children}</UserModeContext.Provider>
}

export { UserModeProvider }
