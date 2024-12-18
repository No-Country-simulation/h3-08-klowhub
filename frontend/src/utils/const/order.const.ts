import { OrderStatus } from '@/models'

type PaymentStatus = 'no_payment_required' | 'paid' | 'unpaid'

export const STRIPE_ORDER_STATUS: Record<PaymentStatus, OrderStatus> = {
  no_payment_required: OrderStatus.Pending,
  paid: OrderStatus.Completed,
  unpaid: OrderStatus.Processing
}
