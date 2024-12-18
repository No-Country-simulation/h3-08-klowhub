'use client'
import { useEffect, useRef } from 'react'

/**
 * Hook to revoke object URLs.
 * @param urls - The URLs to revoke.
 */
function useRevokeObjectURL(urls: string[]) {
  const urlsRef = useRef<string[]>([])

  useEffect(() => {
    const previousURLs = urlsRef.current

    const urlsToRevoke = previousURLs.filter((url) => !urls.includes(url))

    urlsToRevoke.forEach((url) => {
      if (url) {
        URL.revokeObjectURL(url)
      }
    })

    urlsRef.current = urls
  }, [urls])
}

export { useRevokeObjectURL }
