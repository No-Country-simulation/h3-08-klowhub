import { STRIPE_ORDER_STATUS } from '@/utils/const/order.const'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

async function upsertOrder(sessionId: string) {
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  if (!checkoutSession.metadata) {
    return { error: 'No se encontró la información de la sesión de pago', data: null }
  }

  if (!checkoutSession.metadata.user_id) {
    return { error: 'No se encontró el ID del usuario', data: null }
  }

  const supabase = await createClient()
  const { data: newOrder, error } = await supabase
    .from('orders')
    .upsert({
      payment_id: checkoutSession.id,
      user_id: checkoutSession.metadata.user_id,
      status: STRIPE_ORDER_STATUS[checkoutSession.payment_status],
      subtotal: Number(checkoutSession.metadata.subtotal) || 0,
      fee: Number(checkoutSession.metadata.fee) || 0,
      discount: Number(checkoutSession.metadata.discount) || 0,
      total: Number(checkoutSession.metadata.total || 0)
    })
    .select('*')
    .single()

  if (error) {
    return { error: `Error al crear o actualizar el pedido ${error.message}`, data: null }
  }

  const orderItems = checkoutSession.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return { order_id: newOrder.id, product_id: product.metadata.product_id, quantity: item.quantity }
  })

  if (!orderItems || orderItems.length === 0) {
    console.log('error order items')
    return { error: 'No se encontraron productos del pedido', data: null }
  }

  const { error: errorOrderItems } = await supabase.from('order_items').upsert(orderItems)
  if (errorOrderItems) {
    return { error: `Error al crear o actualizar los productos del pedido ${errorOrderItems.message}`, data: null }
  }

  return { error: null, data: newOrder }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()

    const signature = request.headers.get('stripe-signature')
    if (!signature) {
      return NextResponse.json({ error: 'No se encontró la firma de Stripe', data: null }, { status: 400 })
    }

    let event

    try {
      event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET as string)
    } catch (error) {
      if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 400 })
      return NextResponse.json({ error: '¡Algo salió mal en el webhook!', data: null }, { status: 400 })
    }

    if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
      const { error } = await upsertOrder(event.data.object.id)
      if (error) return NextResponse.json({ error, data: null }, { status: 400 })
    } else {
      return NextResponse.json({ error: 'No se encontró el evento', data: null }, { status: 400 })
    }

    return NextResponse.json({ error: null, data: `¡El evento ${event.id} se procesó con éxito!` })
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })
    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}
