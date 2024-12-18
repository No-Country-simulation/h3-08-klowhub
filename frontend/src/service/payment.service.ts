import { CartSchema } from '@/utils'

export async function createStripeSession(cart: CartSchema) {
  try {
    const request = await fetch('/api/stripe/session/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart)
    })
    const response = await request.json()

    if (response.error) return { error: response.error, data: null }
    return { error: null, data: response.data }
  } catch (error) {
    return { error: error instanceof Error ? error.message : '¡Algo salió mal, inténtalo de nuevo!', data: null }
  }
}
