import { PlatformType, ProductType } from '@/models'
import { MAX_PRODUCT_IMAGES } from '@/utils'
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
