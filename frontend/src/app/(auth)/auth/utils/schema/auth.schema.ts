import { z } from 'zod'

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

export type SignInSchema = z.infer<typeof signInSchema>

export const signUpSchema = signInSchema.extend({
  fullname: z
    .string({
      required_error: 'El nombre es obligatorio.'
    })
    .min(3, {
      message: 'El nombre debe tener al menos 3 caracteres.'
    })
})

export type SignUpSchema = z.infer<typeof signUpSchema>
