import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

/**
 * Handles the GET request to fetch plans.
 * @param request - The incoming request object.
 * @returns The plans.
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: plans, error } = await supabase.from('plans').select('*')

    if (error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: null, data: plans })
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}
