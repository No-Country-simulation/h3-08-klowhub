import { PlatformType, ProductType } from '@/models'

export const PRODUCT_TYPE_DICTIONARY = {
  [ProductType.App]: 'Aplicación',
  [ProductType.Course]: 'Curso',
  [ProductType.Lesson]: 'Lección'
}

export const PLATFORM_LIST = Object.values(PlatformType)

export const PLATFORM_DICTIONARY = {
  [PlatformType.Appsheet]: 'AppSheet',
  [PlatformType.PowerApps]: 'Power Apps'
}

export const MIN_PRODUCT_QUANTITY = 1
export const MAX_PRODUCT_IMAGE_SIZE = 1024 * 1024 * 5
export const MAX_PRODUCT_IMAGES = 5

export const ACCEPT_IMAGE_TYPES = ['image/jpeg', 'image/png']
