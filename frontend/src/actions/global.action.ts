'use server'
import { redirect } from 'next/navigation'

/**
 *
 * @param url - The URL to redirect to
 */
export async function redirectTo(url: string) {
  redirect(url)
}
