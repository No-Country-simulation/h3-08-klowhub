'use client'
import { useUser } from '@/hooks'
import { UserRole } from '@/models'
import { createContext, useState } from 'react'

export interface UserModeContextState {
  /**
   * The user mode.
   */
  userMode: UserRole
  /**
   * Updates the user mode.
   * @param userMode - The user mode to update.
   */
  updateUserMode: (userMode: UserRole) => void
}

export const UserModeContext = createContext<UserModeContextState | null>(null)

interface UserModeProviderProps {
  /**
   * The children components to render.
   */
  children: React.ReactNode
}

function UserModeProvider({ children }: UserModeProviderProps) {
  const { user } = useUser()
  const [userMode, setUserMode] = useState<UserRole>(UserRole.Explorer)

  /**
   * Updates the user mode based on the user role.
   * @param userMode - The user mode to update.
   */
  const updateUserMode = (userMode: UserRole) => {
    if (!user) return
    if (userMode === UserRole.Seller && user.role === UserRole.Seller) return setUserMode(userMode)
    return setUserMode(UserRole.Explorer)
  }

  const values: UserModeContextState = {
    userMode,
    updateUserMode
  }

  return <UserModeContext.Provider value={values}>{children}</UserModeContext.Provider>
}

export { UserModeProvider }
