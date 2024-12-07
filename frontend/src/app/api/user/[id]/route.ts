import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = await createClient()
    const { data: user, error } = await supabase
      .from('users')
      .select(
        `
        id,
        role,
        email,
        name,
        avatar_url,
        description,
        website_url,
        preferred_payment_method,
        seller_type,
        user_plan:user_plans(*, plan:plan_id(*)),
        reviews(*),
        orders(*),
        products(*)
      `
      )
      .eq('id', params.id)
      .single()

    if (error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: null, data: user })
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}
