import { Database, UserRole } from '@/models'
import { DASHBOARD_ROUTE_REGEX, PROTECTED_ROUTES, Routes } from '@/utils'
import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

/**
 * Updates the session and redirects to the specified route.
 * @param request - The incoming request object.
 * @returns The updated session.
 */
export const updateSession = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers
    }
  })

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({
            request
          })
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
        }
      }
    }
  )

  const user = await supabase.auth.getUser()

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => route.test(request.nextUrl.pathname))
  const isDashboardRoute = DASHBOARD_ROUTE_REGEX.test(request.nextUrl.pathname)

  if (isProtectedRoute && user.error) {
    return NextResponse.redirect(new URL(Routes.AuthLogin, request.url))
  }

  if (isDashboardRoute) {
    if (!user.data.user) return NextResponse.redirect(new URL(Routes.AuthLogin, request.url))

    const { error } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.data.user.id)
      .eq('role', UserRole.Seller)
      .single()

    if (error) return NextResponse.redirect(new URL(Routes.Plans, request.url))
  }

  return response
}
