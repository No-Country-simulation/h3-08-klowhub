import { Order, Review, UserPlan } from '@/models'

/**
 * User role.
 */
export enum UserRole {
  Explorer = 'explorer',
  Seller = 'seller'
}

/**
 * Seller type.
 */
export enum SellerType {
  ContentCreator = 'content_creator',
  DevelopmentTeam = 'development_team',
  PowerAppsExpert = 'powerapps_expert',
  AppSheetExpert = 'appsheet_expert'
}

/**
 * Payment method.
 */
export enum PaymentMethod {
  Stripe = 'stripe',
  PayPal = 'paypal',
  Crypto = 'crypto'
}

export interface User {
  /**
   * The ID of the user.
   */
  id: string
  /**
   * The user role.
   */
  role: UserRole
  /**
   * The email of the user.
   */
  email: string
  /**
   * The name of the user.
   */
  name: string
  /**
   * The avatar URL of the user.
   */
  avatar_url?: string
  /**
   * The description of the user.
   */
  description?: string
  /**
   * The website URL of the user.
   */
  website_url?: string
  /**
   * The preferred payment method of the user.
   */
  preferred_payment_method?: PaymentMethod
  /**
   * The seller type of the user.
   */
  seller_type?: SellerType
  /**
   * The user plan of the user.
   */
  user_plan?: UserPlan
  /**
   * The reviews of the user.
   */
  reviews?: Review[]
  /**
   * The orders of the user.
   */
  orders?: Order[]
  /**
   * The date and time when the user was created.
   */
  created_at: string
  /**
   * The date and time when the user was updated.
   */
  updated_at: string
}
