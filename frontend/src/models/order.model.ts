/**
 * Order status.
 */
export enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

export interface Order {
  /**
   * The ID of the order.
   */
  id: string
  /**
   * The ID of the user who placed the order.
   */
  user_id: string
  /**
   * The status of the order.
   */
  status: OrderStatus
  /**
   * The subtotal of the order.
   */
  subtotal: number
  /**
   * The shipping fee of the order.
   */
  fee: number
  /**
   * The discount of the order.
   */
  discount: number
  /**
   * The total of the order.
   */
  total: number
  /**
   * The date and time when the order was created.
   */
  created_at: string
  /**
   * The items in the order.
   */
  items: OrderItem[]
}

export interface OrderItem {
  /**
   * The ID of the order item.
   */
  id: string
  /**
   * The ID of the user who placed the order.
   */
  order_id: string
  /**
   * The ID of the product.
   */
  product_id?: string
  /**
   * The ID of the plan.
   */
  plan_id?: string
  /**
   * The quantity of the order item.
   */
  quantity: number
}
