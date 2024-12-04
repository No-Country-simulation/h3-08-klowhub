'use client'
import { useEffect } from 'react'

function useRevokeObjectURL(urls: Array<string | undefined>) {
  useEffect(() => {
    return () => {
      urls.forEach((url) => {
        if (url) URL.revokeObjectURL(url)
      })
    }
  }, [urls])
}

export { useRevokeObjectURL }
