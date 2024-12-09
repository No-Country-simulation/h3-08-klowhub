import { Routes } from '@/utils'
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

/**
 * Handles the GET request to exchange an authorization code for a session.
 * Redirects to a specified route upon successful authentication.
 *
 * @param request - The incoming request object
 * @returns Redirects to the specified route or the login page
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)

  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? Routes.App

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host')
      const isLocalEnv = process.env.NODE_ENV === 'development'

      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }

  return NextResponse.redirect(origin + Routes.AuthLogin)
}
