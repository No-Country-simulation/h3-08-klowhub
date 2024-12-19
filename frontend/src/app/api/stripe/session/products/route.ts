import { cartSchema, getURL, Routes } from '@/utils'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { z } from 'zod'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const sessionId = searchParams.get('session_id')
    if (!sessionId) {
      return NextResponse.json({ error: 'No se encontró el ID de la sesión', data: null }, { status: 400 })
    }

    const supabase = await createClient()
    const { data: order, error } = await supabase
      .from('orders')
      .select('*, items:order_items(*, product:product_id(*, reviews(*)))')
      .eq('payment_id', sessionId)
      .single()

    if (error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: null, data: order })
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = cartSchema.parse(body)

    const session = await stripe.checkout.sessions.create({
      line_items: data.products.map((product) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
            images: [product.thumbnail_url],
            metadata: {
              product_id: product.id
            }
          },
          unit_amount: Math.round(product.price * 100)
        },
        quantity: product.quantity
      })),
      metadata: {
        user_id: data.user_id,
        subtotal: data.subtotal,
        fee: data.fee,
        discount: data.discount ?? 0,
        total: data.total
      },
      mode: 'payment',
      success_url: getURL() + Routes.Payment + '?success=true&session_id={CHECKOUT_SESSION_ID}',
      cancel_url: getURL() + Routes.Payment + '?canceled=true&session_id={CHECKOUT_SESSION_ID}'
    })

    return NextResponse.json({ error: null, data: session.url })
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
