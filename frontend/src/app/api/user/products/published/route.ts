import { productFiltersSchema } from '@/utils'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    const { error: errorUser, data: userData } = await supabase.auth.getUser()
    if (errorUser) return NextResponse.json({ error: errorUser.message, data: null }, { status: 500 })

    const { limit, type } = productFiltersSchema.parse(Object.fromEntries(request.nextUrl.searchParams))
    let query = supabase.from('products').select('*, reviews(*)').eq('seller_id', userData.user.id)

    if (type) query = query.eq('type', type)
    if (limit) query = query.limit(Number(limit))

    const { data: products, error } = await query
    if (error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: null, data: products })
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}
