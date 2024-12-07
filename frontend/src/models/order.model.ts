export enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

export interface Order {
  id: string
  user_id: string
  status: OrderStatus
  subtotal: number
  fee: number
  discount: number
  total: number
  created_at: string
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id?: string
  plan_id?: string
  quantity: number
}
