import { Database, UserRole } from '@/models'
import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'
import { Routes } from '../const/routes.const'

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

  if (request.nextUrl.pathname.startsWith(Routes.App) && user.error) {
    return NextResponse.redirect(new URL(Routes.AuthLogin, request.url))
  }

  if (request.nextUrl.pathname.startsWith(Routes.Dashboard) && user.error) {
    return NextResponse.redirect(new URL(Routes.AuthLogin, request.url))
  }

  if (request.nextUrl.pathname.startsWith(Routes.Dashboard)) {
    if (!user.data.user) return NextResponse.redirect(new URL(Routes.AuthLogin, request.url))

    const { error } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.data.user.id)
      .eq('role', UserRole.Seller)
      .single()

    if (error) return NextResponse.redirect(new URL(Routes.AppPlans, request.url))
  }

  return response
}
