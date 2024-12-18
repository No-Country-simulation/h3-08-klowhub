import { PlatformType, ProductType } from '@/models'
import { MAX_PRODUCT_IMAGES, MIN_PRODUCT_QUANTITY } from '@/utils'
import { z } from 'zod'

/**
 * Schema for creating a product.
 */
export const productSchema = z.object({
  seller_id: z.string().min(1, 'El identificador del vendedor es obligatorio'),
  type: z.nativeEnum(ProductType),
  name: z
    .string()
    .min(1, 'El nombre debe tener al menos 1 caracter')
    .max(100, 'El nombre no puede exceder de 100 caracteres'),
  description: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(300, 'La descripción no puede exceder de 300 caracteres'),
  price: z.coerce.number().min(1, 'El precio debe ser mayor a 0'),
  tags: z
    .array(z.string())
    .min(1, 'Debe ingresar al menos una etiqueta')
    .max(5, 'No puede ingresar más de 5 etiquetas'),
  thumbnail_url: z.string().min(1, 'Debe subir una imagen'),
  images_url: z
    .array(z.string())
    .min(1, 'Debe subir al menos una imagen')
    .max(MAX_PRODUCT_IMAGES, 'No puede subir más de 5 imágenes')
})

/**
 * Type representing the product schema.
 */
export const applicationSchema = productSchema
  .extend({
    about_application: z.string(),
    aditional_information: z.string(),
    functionalities: z
      .array(z.string())
      .min(1, 'Debe ingresar al menos una funcionalidad')
      .max(5, 'No puede ingresar más de 5 funcionalidades'),
    sectors: z
      .array(z.string())
      .min(1, 'Debe ingresar al menos un sector')
      .max(5, 'No puede ingresar más de 5 sectores'),
    tools: z
      .array(z.string())
      .min(1, 'Debe ingresar al menos una herramienta')
      .max(5, 'No puede ingresar más de 5 herramientas'),
    languages: z
      .array(z.string())
      .min(1, 'Debe ingresar al menos un lenguaje')
      .max(5, 'No puede ingresar más de 5 lenguajes'),
    platform: z.nativeEnum(PlatformType, {
      required_error: 'Debe seleccionar una plataforma'
    }),
    purchase_information: z.string(),
    combine_product: z.boolean({
      required_error: 'Debe seleccionar si quieres combinar tu producto'
    }),
    combined_product_id: z.string(),
    combined_product_discount: z.coerce.number().min(0, 'El descuento debe ser mayor a 0')
  })
  .refine(
    (data) => {
      if (data.combine_product && !data.combined_product_id) return false
      return true
    },
    {
      message: 'Debe seleccionar un producto a combinar',
      path: ['combined_product_id']
    }
  )
  .refine(
    (data) => {
      if (data.combine_product && !data.combined_product_discount) return false
      return true
    },
    {
      message: 'Debe ingresar un descuento para el producto combinado',
      path: ['combined_product_discount']
    }
  )

/**
 * Type representing the application schema.
 */
export type ApplicationSchema = z.infer<typeof applicationSchema>

/**
 * Schema for creating a products cart.
 */
export const cartSchema = z.object({
  user_id: z.string({
    required_error: 'El ID del usuario es obligatorio'
  }),
  subtotal: z.number({
    invalid_type_error: 'El subtotal debe ser un número',
    required_error: 'El subtotal es obligatorio'
  }),
  fee: z.number({
    invalid_type_error: 'El descuento debe ser un número',
    required_error: 'El descuento es obligatorio'
  }),
  discount: z
    .number({
      invalid_type_error: 'El descuento debe ser un número',
      required_error: 'El descuento es obligatorio'
    })
    .optional(),
  total: z.number({
    invalid_type_error: 'El total debe ser un número',
    required_error: 'El total es obligatorio'
  }),
  products: z.array(
    productSchema.extend({
      id: z.string().min(1, 'El ID del producto es obligatorio'),
      quantity: z.coerce.number().min(MIN_PRODUCT_QUANTITY, 'La cantidad debe ser mayor a 0')
    }),
    {
      invalid_type_error: 'El producto no es válido',
      required_error: 'Debe ingresar al menos un producto'
    }
  )
})

/**
 * Type representing the products cart schema.
 */
export type CartSchema = z.infer<typeof cartSchema>

/**
 * Schema for filtering products.
 */
export const productFiltersSchema = z.object({
  type: z.nativeEnum(ProductType).optional(),
  limit: z
    .string()
    .refine((value) => !isNaN(Number(value)), { message: 'The limit must be a number' })
    .optional()
})

/**
 * Type representing the product filters schema.
 */
export type ProductFiltersSchema = z.infer<typeof productFiltersSchema>
