import { BillingCycle, PaymentMethod, SellerType } from '@/models'
import { z } from 'zod'

export const buyPlanSchema = z.object({
  plan_id: z.string({
    required_error: 'El plan es obligatorio'
  }),
  user_id: z.string({
    required_error: 'El usuario es obligatorio'
  }),
  type: z.nativeEnum(BillingCycle, {
    required_error: 'El tipo de facturación es obligatorio'
  }),
  seller_type: z.nativeEnum(SellerType, {
    required_error: 'El tipo de vendedor es obligatorio'
  }),
  user_description: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(300, 'La descripción debe tener un máximo de 300 caracteres'),
  user_website_url: z
    .string()
    .min(1, 'La URL del sitio web del vendedor es obligatoria')
    .url('La URL del sitio web del vendedor debe ser una URL válida')
    .max(200, 'La URL del sitio web del vendedor debe tener un máximo de 200 caracteres'),
  user_preferred_payment_method: z.nativeEnum(PaymentMethod, {
    required_error: 'El método de pago es obligatorio'
  })
})

export type BuyPlanSchema = z.infer<typeof buyPlanSchema>
