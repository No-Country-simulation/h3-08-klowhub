import { Review } from '@/models'

/**
 * Product type.
 */
export enum ProductType {
  Lesson = 'lesson',
  Course = 'course',
  App = 'app'
}

/**
 * Platform type.
 */
export enum PlatformType {
  Appsheet = 'appsheet',
  PowerApps = 'powerapps'
}

export interface ProductBase {
  /**
   * The ID of the product.
   */
  id: string
  /**
   * The ID of the seller.
   */
  seller_id: string
  /**
   * The name of the product.
   */
  name: string
  /**
   * The description of the product.
   */
  description: string
  /**
   * The rating of the product.
   */
  rating: number
  /**
   * The reviews of the product.
   */
  reviews: Review[]
  /**
   * The price of the product.
   */
  price: number
  /**
   * The tags of the product.
   */
  tags: string[]
  /**
   * The thumbnail URL of the product.
   */
  thumbnail_url: string
  /**
   * The images URL of the product.
   */
  images_url: string[]
  /**
   * The date and time when the product was created.
   */
  created_at: string
  /**
   * The date and time when the product was updated.
   */
  updated_at: string
}

export interface ProductApplication extends ProductBase {
  /**
   * The type of the product.
   */
  type: ProductType.App
  /**
   * The description about the application.
   */
  about_application: string
  /**
   * The additional information about the application.
   */
  aditional_information: string
  /**
   * The functionalities of the application.
   */
  functionalities: string[]
  /**
   * The sectors of the application.
   */
  sectors: string[]
  /**
   * The tools of the application.
   */
  tools: string[]
  /**
   * The languages of the application.
   */
  languages: string[]
  /**
   * The platform of the application.
   */
  platform: PlatformType
  /**
   * The purchase information of the application.
   */
  purchase_information: string
  /**
   * The combined product ID of the application.
   */
  combined_product_id?: string
  /**
   * The discount of the combined product.
   */
  combined_product_discount?: number
}

export interface ProductCourse extends ProductBase {
  /**
   * The type of the product.
   */
  type: ProductType.Course
}

export type Product = ProductApplication | ProductCourse

export type ProductCart = Product & {
  /**
   * The quantity of the product in the cart.
   */
  quantity: number
}
