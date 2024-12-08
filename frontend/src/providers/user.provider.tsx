'use client'
import { User } from '@/models'
import { createClient } from '@/utils/supabase/client'
import { createContext, useEffect, useState } from 'react'
import useSWR from 'swr'

export interface UserContextState {
  user: User | undefined
  isLoadingUser: boolean
  errorUser: string | undefined
}

export const UserContext = createContext<UserContextState | null>(null)

interface UserProviderProps {
  children: React.ReactNode
}

function UserProvider({ children }: UserProviderProps) {
  const [userId, setUserId] = useState<string | undefined | null>(null)
  const { data, isLoading, error } = useSWR<User, string>(userId ? `/api/user/${userId}` : null)

  useEffect(() => {
    const getUserId = async () => {
      const supabase = createClient()
      const user = await supabase.auth.getUser()
      return user.data.user?.id
    }

    getUserId()
      .then((id) => setUserId(id))
      .catch((error) => console.error('Error getting user ID:', error))
  }, [])

  const values = {
    user: data,
    isLoadingUser: userId === null || isLoading,
    errorUser: error
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export { UserProvider }
