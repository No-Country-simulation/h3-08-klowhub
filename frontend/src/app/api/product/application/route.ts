import { applicationSchema } from '@/utils'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * Handles the POST request to create an application.
 * @param request - The incoming request object.
 * @returns The created application.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = applicationSchema.parse(body)

    const supabase = await createClient()
    const { data: newApplication, error } = await supabase
      .from('products')
      .insert([
        {
          seller_id: data.seller_id,
          type: data.type,
          name: data.name,
          description: data.description,
          price: data.price,
          tags: data.tags,
          thumbnail_url: data.thumbnail_url,
          images_url: data.images_url,
          about_application: data.about_application,
          aditional_information: data.aditional_information,
          functionalities: data.functionalities,
          sectors: data.sectors,
          tools: data.tools,
          languages: data.languages,
          platform: data.platform,
          purchase_information: data.purchase_information,
          combined_product_id: data.combine_product ? data.combined_product_id : null,
          combined_product_discount: data.combine_product ? data.combined_product_discount : null
        }
      ])
      .select('*')
      .single()

    if (error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: null, data: newApplication })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((error) => error.message).join(', '), data: null },
        { status: 400 }
      )
    }

    if (error instanceof Error) return NextResponse.json({ error: error.message, data: null }, { status: 500 })

    return NextResponse.json({ error: '¡Algo salió mal en el servidor!', data: null }, { status: 500 })
  }
}
