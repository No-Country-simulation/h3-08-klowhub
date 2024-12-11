/**
 * Plan type.
 */
export enum PlanType {
  Basic = 'basic',
  Professional = 'professional',
  Expert = 'expert'
}

export interface Plan {
  /**
   * The ID of the plan.
   */
  id: string
  /**
   * The plan type (basic, professional, expert).
   */
  type: PlanType
  /**
   * The name of the plan.
   */
  name: string
  /**
   * The price of the plan.
   */
  price: number
  /**
   * The thumbnail URL of the plan.
   */
  thumbnail_url: string
  /**
   * The date and time when the plan was created.
   */
  created_at: string
  /**
   * The date and time when the plan was updated.
   */
  updated_at: string
}

/**
 * Plan feature name.
 */
export enum PlanFeatureName {
  ProductLimit = 'product_limit',
  EmailSupport = 'email_support',
  ExclusiveSupport = 'exclusive_support',
  Analytics = 'analytics'
}

export interface PlanFeature {
  /**
   * The ID of the plan feature.
   */
  id: string
  /**
   * The plan ID.
   */
  plan_id: string
  /**
   * The name of the plan feature.
   */
  name: PlanFeatureName
  /**
   * The description of the plan feature.
   */
  description: string
  /**
   * The date and time when the plan feature was created.
   */
  created_at: string
  /**
   * The date and time when the plan feature was updated.
   */
  updated_at: string
}

/**
 * Billing cycle.
 */
export enum BillingCycle {
  Monthly = 'monthly',
  Yearly = 'yearly'
}

export interface UserPlan {
  /**
   * The ID of the user plan.
   */
  id: string
  /**
   * The ID of the user.
   */
  user_id: string
  /**
   * The ID of the plan.
   */
  plan_id: string
  /**
   * The billing cycle of the plan.
   */
  type: BillingCycle
  /**
   * The state of the plan.
   */
  active: boolean
  /**
   * The date and time when the plan was started.
   */
  started_at: string
  /**
   * The date and time when the plan will expire.
   */
  expires_at: string
  /**
   * The date and time when the plan was created.
   */
  created_at: string
  /**
   * The date and time when the plan was updated.
   */
  updated_at: string
}
