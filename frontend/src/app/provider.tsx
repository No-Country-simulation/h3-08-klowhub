'use client'
import { Toaster } from '@/components/ui/sonner'
import { SWRConfig } from 'swr'

interface ApiResponse {
  error: string | null
  data: any | null
}

interface RootProviderProps {
  children: React.ReactNode
}

function RootProvider({ children }: RootProviderProps) {
  return (
    <SWRConfig
      value={{
        fetcher: async (url) =>
          await fetch(url).then(async (res) => {
            const response: ApiResponse = await res.json()
            if (response.error) return await Promise.reject(response.error)
            return response.data
          }),
        revalidateOnFocus: false
      }}
    >
      {children}
      <Toaster closeButton richColors position='top-right' />
    </SWRConfig>
  )
}

export { RootProvider }
