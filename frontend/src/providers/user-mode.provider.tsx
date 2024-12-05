'use client'
import { useUser } from '@/hooks'
import { UserRole } from '@/models'
import { createContext, useState } from 'react'

export interface UserModeContextState {
  userMode: UserRole
  updateUserMode: (userMode: UserRole) => void
}

export const UserModeContext = createContext<UserModeContextState | null>(null)

interface UserModeProviderProps {
  children: React.ReactNode
}

function UserModeProvider({ children }: UserModeProviderProps) {
  const { user } = useUser()
  const [userMode, setUserMode] = useState<UserRole>(UserRole.Explorer)

  const updateUserMode = (userMode: UserRole) => {
    if (!user) return
    if (userMode === UserRole.Seller && user.role === UserRole.Seller) return setUserMode(userMode)
    return setUserMode(UserRole.Explorer)
  }

  const values = {
    userMode,
    updateUserMode
  }

  return <UserModeContext.Provider value={values}>{children}</UserModeContext.Provider>
}

export { UserModeProvider }
