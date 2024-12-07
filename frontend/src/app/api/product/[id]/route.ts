import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = await createClient()
    const { data: product, error } = await supabase
      .from('products')
      .select('*, reviews(*)')
      .eq('id', params.id)
      .single()

    if (error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: null, data: product })
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}
