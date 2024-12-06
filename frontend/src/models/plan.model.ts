export enum PlanType {
  Basic = 'basic',
  Professional = 'professional',
  Expert = 'expert'
}

export interface Plan {
  id: string
  type: PlanType
  name: string
  price: number
  thumbnail_url: string
  created_at: string
  updated_at: string
}

export enum PlanFeatureName {
  ProductLimit = 'product_limit',
  EmailSupport = 'email_support',
  ExclusiveSupport = 'exclusive_support',
  Analytics = 'analytics'
}

export interface PlanFeature {
  id: string
  plan_id: string
  name: PlanFeatureName
  description: string
  created_at: string
  updated_at: string
}

export enum BillingCycle {
  Monthly = 'monthly',
  Yearly = 'yearly'
}

export interface UserPlan {
  id: string
  user_id: string
  plan_id: string
  type: BillingCycle
  active: boolean
  started_at: string
  expires_at: string
  created_at: string
  updated_at: string
}
