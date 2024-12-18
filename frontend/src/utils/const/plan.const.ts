import { BillingCycle, PaymentMethod, SellerType } from '@/models'

/**
 * Dictionary of billing cycle.
 */
export const BILLING_CYCLE_DICTIONARY = {
  [BillingCycle.Monthly]: 'mensual',
  [BillingCycle.Yearly]: 'anual'
}

/**
 * List of seller types.
 */
export const SELLER_TYPE_LIST = Object.values(SellerType)

/**
 * Dictionary of seller types.
 */
export const SELLER_TYPE_DICTIONARY = {
  [SellerType.AppSheetExpert]: 'Experto AppSheet',
  [SellerType.ContentCreator]: 'Creador de contenido',
  [SellerType.DevelopmentTeam]: 'Equipo de desarrollo',
  [SellerType.PowerAppsExpert]: 'Experto Power Apps'
}

/**
 * List of payment methods.
 */
export const PAYMENT_METHOD_LIST = Object.values(PaymentMethod)

/**
 * Dictionary of payment methods.
 */
export const PAYMENT_METHOD_DICTIONARY = {
  [PaymentMethod.Crypto]: 'Crypto',
  [PaymentMethod.PayPal]: 'PayPal',
  [PaymentMethod.Stripe]: 'Stripe'
}
