import { productFiltersSchema } from '@/utils'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    const { error: errorUser, data: userData } = await supabase.auth.getUser()
    if (errorUser) return NextResponse.json({ error: errorUser.message, data: null }, { status: 500 })

    const { limit, type } = productFiltersSchema.parse(Object.fromEntries(request.nextUrl.searchParams))
    let query = supabase
      .from('orders')
      .select(
        `
        items:order_items(
          product:product_id(
            *,
            reviews(*)
        ))
        `
      )
      .eq('user_id', userData.user.id)

    if (type) query = query.eq('items.product.type', type)
    if (limit) query = query.limit(Number(limit))

    const { data: products, error } = await query
    if (error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    const formattedProducts = products
      .flatMap((order) => order.items.map((item) => item.product))
      .filter((product) => product)

    return NextResponse.json({ error: null, data: formattedProducts })
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}
