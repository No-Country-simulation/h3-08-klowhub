'use client'
import { User } from '@/models'
import { createClient } from '@/utils/supabase/client'
import { createContext, useEffect, useState } from 'react'
import useSWR from 'swr'

export interface UserContextState {
  /**
   * The user data.
   */
  user: User | undefined
  /**
   * Whether the user data is loading.
   */
  isLoadingUser: boolean
  /**
   * The error message for the user data.
   */
  errorUser: string | undefined
}

export const UserContext = createContext<UserContextState | null>(null)

interface UserProviderProps {
  /**
   * The children components to render.
   */
  children: React.ReactNode
}

function UserProvider({ children }: UserProviderProps) {
  const [userId, setUserId] = useState<string | undefined | null>(null)
  const { data, isLoading, error } = useSWR<User, string>(userId ? `/api/user/${userId}` : null)

  useEffect(() => {
    /**
     * Gets the user ID from the server.
     */
    const getUserId = async () => {
      const supabase = createClient()
      const user = await supabase.auth.getUser()
      return user.data.user?.id
    }

    getUserId()
      .then((id) => setUserId(id))
      .catch((error) => console.error('Error getting user ID:', error))
  }, [])

  const values: UserContextState = {
    user: data,
    isLoadingUser: userId === null || isLoading,
    errorUser: error
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export { UserProvider }
