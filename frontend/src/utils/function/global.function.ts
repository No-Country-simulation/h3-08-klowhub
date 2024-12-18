import { redirect } from 'next/navigation'

/**
 * Redirects to the specified path with a success or error message.
 * @param type - The type of message to display.
 * @param path - The path to redirect to.
 * @param message - The message to display.
 * @returns The redirected URL.
 */
export function encodedRedirect(type: 'error' | 'success', path: string, message: string) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`)
}

/**
 * Gets the URL of the application.
 * @returns The URL of the application.
 */
export function getURL() {
  let url = process?.env?.NEXT_PUBLIC_SITE_URL ?? process?.env?.NEXT_PUBLIC_VERCEL_URL ?? 'http://localhost:3000/'
  // Make sure to include `https://` when not localhost.
  url = url.startsWith('http') ? url : `https://${url}`
  // Remove the trailing `/` if present.
  url = url.charAt(url.length - 1) === '/' ? url.slice(0, -1) : url

  return url
}
