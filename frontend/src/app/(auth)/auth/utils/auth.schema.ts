import { z } from 'zod'

/**
 * Schema for sign in validation.
 */
export const signInSchema = z.object({
  email: z
    .string({
      required_error: 'El correo electrónico es obligatorio.'
    })
    .email({
      message: 'El correo electrónico no es válido.'
    }),
  password: z
    .string({
      required_error: 'La contraseña es obligatoria.'
    })
    .min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.'
    }),
  susbcribeNewsletter: z.boolean().optional()
})

/**
 * Type representing the sign in schema.
 */
export type SignInSchema = z.infer<typeof signInSchema>

/**
 * Schema for sign up validation.
 */
export const signUpSchema = signInSchema.extend({
  fullname: z
    .string({
      required_error: 'El nombre es obligatorio.'
    })
    .min(3, {
      message: 'El nombre debe tener al menos 3 caracteres.'
    })
})

/**
 * Type representing the sign up schema.
 */
export type SignUpSchema = z.infer<typeof signUpSchema>
