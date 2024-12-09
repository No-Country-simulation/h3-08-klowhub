import { Database } from '@/models'
import { createBrowserClient } from '@supabase/ssr'

/**
 * Creates a Supabase client.
 * @returns The Supabase client.
 */
export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  )
