import { Order, Review, UserPlan } from '@/models'

export enum UserRole {
  Explorer = 'explorer',
  Seller = 'seller'
}

export enum SellerType {
  ContentCreator = 'content_creator',
  DevelopmentTeam = 'development_team',
  PowerAppsExpert = 'powerapps_expert',
  AppSheetExpert = 'appsheet_expert'
}

export enum PaymentMethod {
  Stripe = 'stripe',
  PayPal = 'paypal',
  Crypto = 'crypto'
}

export interface User {
  id: string
  role: UserRole
  email: string
  name: string
  avatar_url?: string
  description?: string
  website_url?: string
  preferred_payment_method?: PaymentMethod
  seller_type?: SellerType
  user_plan?: UserPlan
  reviews?: Review[]
  orders?: Order[]
  created_at: string
  updated_at: string
}
