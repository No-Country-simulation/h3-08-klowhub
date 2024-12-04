import { ApplicationSchema } from '@/utils'
import { createClient } from '@/utils/supabase/client'

export async function uploadProductImage(file: File, userId: string) {
  try {
    const supabase = createClient()

    const { data, error } = await supabase.storage.from('products').upload(`${userId}/${file.name}`, file, {
      contentType: file.type,
      upsert: true
    })
    if (error) return { error: error.message, data: null }

    const publicURL = supabase.storage.from('products').getPublicUrl(data.path).data.publicUrl

    return { error: null, data: publicURL }
  } catch (error) {
    return { error: error instanceof Error ? error.message : '¡Algo salió mal, inténtalo de nuevo!', data: null }
  }
}

export async function createApplication(data: ApplicationSchema) {
  try {
    const request = await fetch('/api/product/application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const response = await request.json()

    if (response.error) return { error: response.error, data: null }

    return { error: null, data: response.data }
  } catch (error) {
    return { error: error instanceof Error ? error.message : '¡Algo salió mal al crear la aplicación!', data: null }
  }
}
