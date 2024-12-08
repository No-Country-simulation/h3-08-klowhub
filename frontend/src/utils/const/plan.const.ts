import { BillingCycle, PaymentMethod, SellerType } from '@/models'

export const BILLING_CYCLE_DICTIONARY = {
  [BillingCycle.Monthly]: 'mensual',
  [BillingCycle.Yearly]: 'anual'
}

export const SELLER_TYPE_LIST = Object.values(SellerType)

export const SELLER_TYPE_DICTIONARY = {
  [SellerType.AppSheetExpert]: 'Experto AppSheet',
  [SellerType.ContentCreator]: 'Creador de contenido',
  [SellerType.DevelopmentTeam]: 'Equipo de desarrollo',
  [SellerType.PowerAppsExpert]: 'Experto Power Apps'
}

export const PAYMENT_METHOD_LIST = Object.values(PaymentMethod)

export const PAYMENT_METHOD_DICTIONARY = {
  [PaymentMethod.Crypto]: 'Crypto',
  [PaymentMethod.PayPal]: 'PayPal',
  [PaymentMethod.Stripe]: 'Stripe'
}
