import { productFiltersSchema } from '@/utils'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * Handles the GET request to fetch products.
 * @param request - The incoming request object.
 * @returns The products.
 */
export async function GET(request: NextRequest) {
  try {
    const { limit, type } = productFiltersSchema.parse(Object.fromEntries(request.nextUrl.searchParams))

    const supabase = await createClient()
    let query = supabase.from('products').select('*, reviews(*)')

    if (type) query = query.eq('type', type)
    if (limit) query = query.limit(Number(limit))

    const { data: products, error } = await query
    if (error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: null, data: products })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map(({ message }) => message).join(', '), data: null },
        { status: 400 }
      )
    }

    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}
