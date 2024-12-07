import { Review } from '@/models'

export enum ProductType {
  Lesson = 'lesson',
  Course = 'course',
  App = 'app'
}

export enum PlatformType {
  Appsheet = 'appsheet',
  PowerApps = 'powerapps'
}

export interface ProductBase {
  id: string
  seller_id: string
  name: string
  description: string
  rating: number
  reviews: Review[]
  price: number
  tags: string[]
  thumbnail_url: string
  images_url: string[]
  created_at: string
  updated_at: string
}

export interface ProductApplication extends ProductBase {
  type: ProductType.App
  about_application: string
  aditional_information: string
  functionalities: string[]
  sectors: string[]
  tools: string[]
  languages: string[]
  platform: PlatformType
  purchase_information: string
  combined_product_id?: string
  combined_product_discount?: number
}

export interface ProductCourse extends ProductBase {
  type: ProductType.Course
}

export type Product = ProductApplication | ProductCourse

export type ProductCart = Product & {
  quantity: number
}
