'use client'
import { MyProductCard } from '@/components/card/my-product-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRevokeObjectURL, useUser } from '@/hooks'
import { Product, ProductType } from '@/models'
import { createApplication, uploadProductImage } from '@/service'
import {
  ACCEPT_IMAGE_TYPES,
  applicationSchema,
  ApplicationSchema,
  MAX_PRODUCT_IMAGE_SIZE,
  MAX_PRODUCT_IMAGES,
  PLATFORM_DICTIONARY,
  PLATFORM_LIST
} from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, XIcon } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ControllerRenderProps, useForm, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import useSWR from 'swr'

function NewApplicationForm() {
  const user = useUser().user
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [imagesFile, setImagesFile] = useState<File[] | null>(null)

  const form = useForm<ApplicationSchema>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      seller_id: undefined,
      type: ProductType.App,
      name: '',
      description: '',
      price: 0,
      platform: undefined,
      tags: [],
      functionalities: [],
      sectors: [],
      tools: [],
      languages: [],
      about_application: '',
      aditional_information: '',
      purchase_information: '',
      thumbnail_url: '',
      images_url: [],
      combine_product: undefined,
      combined_product_id: '',
      combined_product_discount: 0
    }
  })
  const { isSubmitting } = form.formState
  const thumbnailURL = form.watch('thumbnail_url')
  const imagesURL = form.watch('images_url')

  useRevokeObjectURL([thumbnailURL, ...imagesURL])

  useEffect(() => {
    if (user) {
      form.setValue('seller_id', user.id)
    }
  }, [form, user])

  /**
   * Handles the form submission and creates the application.
   * @param values - The form values.
   */
  const onSubmit = async (data: ApplicationSchema) => {
    try {
      if (!user) return toast.error('¡Debes iniciar sesión para crear una aplicación!')

      let thumbnailURL = ''
      let imagesURL: string[] = []

      if (thumbnailFile) {
        const { error, data: thumbnailFileURL } = await uploadProductImage(thumbnailFile, user.id)
        if (error || !thumbnailFileURL) return toast.error(error)

        thumbnailURL = thumbnailFileURL
      }

      if (imagesFile && imagesFile.length > 0) {
        const imagesFileURL = []

        for (const imageFile of imagesFile) {
          const { error, data: imageFileURL } = await uploadProductImage(imageFile, user.id)
          if (error || !imageFileURL) return toast.error(error)

          imagesFileURL.push(imageFileURL)
        }
        imagesURL = imagesFileURL
      }

      const { error } = await createApplication({
        ...data,
        thumbnail_url: thumbnailURL,
        images_url: imagesURL
      })

      if (error) return toast.error(error)

      toast.success('¡Se ha creado la aplicación exitosamente!')
      form.reset()
      setThumbnailFile(null)
      setImagesFile(null)
    } catch (error) {
      toast.error('¡Algo salió mal, inténtalo de nuevo!')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-x-4 gap-y-10 lg:grid-cols-[2fr_1fr]'>
        <Tabs defaultValue='general-information'>
          <TabsList className='flex flex-wrap items-center justify-start rounded-none bg-transparent p-0'>
            <TabsTrigger variant='primary' value='general-information'>
              Información general
            </TabsTrigger>
            <TabsTrigger variant='primary' value='media-resources'>
              Multimedia y recursos
            </TabsTrigger>
            <TabsTrigger variant='primary' value='promotions'>
              Promociones
            </TabsTrigger>
          </TabsList>
          <GeneralInformationContent />
          <MediaResourcesContent updateThumbnailFile={setThumbnailFile} updateImagesFile={setImagesFile} />
          <PromotionsContent />
        </Tabs>
        <div className='mx-auto hidden max-w-80 lg:block'>
          <div className='relative mx-auto mt-14 aspect-square max-h-60'>
            <Image
              src='/assets/product-detail.png'
              alt='Imagen de guía'
              fill
              sizes='50vw'
              className='rounded-lg object-cover'
            />
          </div>
          <header className='grid gap-y-3 px-3 py-4 text-center'>
            <h2 className='text-sm font-semibold'>Optimiza tu Perfil</h2>
            <p className='text-xs font-medium'>
              Optimizá tu perfil y llevá tus apps al siguiente nivel. Accedé a recursos exclusivos que te ayudarán a
              mejorar tus habilidades y maximizar el potencial de tus proyectos.
            </p>
          </header>
        </div>
        <Button className='mx-auto w-full sm:max-w-80 lg:col-start-2' type='submit' disabled={isSubmitting}>
          {isSubmitting ? <Loader2Icon className='animate-spin' /> : 'Crear aplicación'}
        </Button>
      </form>
    </Form>
  )
}

/**
 * Renders the general information tab of the form.
 */
function GeneralInformationContent() {
  const form = useFormContext<ApplicationSchema>()

  /**
   * Handles the addition of a tag to the form field.
   * @param ev - The keyboard event.
   * @param field - The form field.
   */
  const handleAddTag = useCallback((ev: React.KeyboardEvent<HTMLInputElement>, field: ControllerRenderProps<any>) => {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      ev.preventDefault()
      const tag = ev.currentTarget.value

      if (!tag) return
      if (field.value.includes(tag)) return

      field.onChange([...field.value, tag])
      ev.currentTarget.value = ''
    }
  }, [])

  return (
    <TabsContent value='general-information' className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder='Nombre de la aplicación' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='description'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descripción</FormLabel>
            <FormControl>
              <Input placeholder='Descripción de la aplicación' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='price'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Precio</FormLabel>
            <FormControl>
              <Input type='number' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='tags'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Etiquetas{' '}
              {field.value.map((tag) => (
                <Badge className='gap-x-2' key={tag} variant='outline'>
                  {tag}
                  <Button
                    variant='ghost'
                    size='auto'
                    onClick={() => field.onChange(field.value.filter((t) => t !== tag))}
                    type='button'
                  >
                    <XIcon />
                  </Button>
                </Badge>
              ))}
            </FormLabel>
            <FormControl>
              <Input
                placeholder='Etiqueta de la aplicación'
                ref={field.ref}
                onKeyDown={(ev) => handleAddTag(ev, field)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='functionalities'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Funcionalidades{' '}
              {field.value.map((tag) => (
                <Badge className='gap-x-2' key={tag} variant='outline'>
                  {tag}
                  <Button
                    variant='ghost'
                    size='auto'
                    onClick={() => field.onChange(field.value.filter((t) => t !== tag))}
                    type='button'
                  >
                    <XIcon />
                  </Button>
                </Badge>
              ))}
            </FormLabel>
            <FormControl>
              <Input
                placeholder='Funcionalidades de la aplicación'
                ref={field.ref}
                onKeyDown={(ev) => handleAddTag(ev, field)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='sectors'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Sectores{' '}
              {field.value.map((tag) => (
                <Badge className='gap-x-2' key={tag} variant='outline'>
                  {tag}
                  <Button
                    variant='ghost'
                    size='auto'
                    onClick={() => field.onChange(field.value.filter((t) => t !== tag))}
                    type='button'
                  >
                    <XIcon />
                  </Button>
                </Badge>
              ))}
            </FormLabel>
            <FormControl>
              <Input
                placeholder='Sectores de la aplicación'
                ref={field.ref}
                onKeyDown={(ev) => handleAddTag(ev, field)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='tools'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Herramientas{' '}
              {field.value.map((tag) => (
                <Badge className='gap-x-2' key={tag} variant='outline'>
                  {tag}
                  <Button
                    variant='ghost'
                    size='auto'
                    onClick={() => field.onChange(field.value.filter((t) => t !== tag))}
                    type='button'
                  >
                    <XIcon />
                  </Button>
                </Badge>
              ))}
            </FormLabel>
            <FormControl>
              <Input
                placeholder='Herramientas de la aplicación'
                ref={field.ref}
                onKeyDown={(ev) => handleAddTag(ev, field)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='languages'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Lenguajes{' '}
              {field.value.map((tag) => (
                <Badge className='gap-x-2' key={tag} variant='outline'>
                  {tag}
                  <Button
                    variant='ghost'
                    size='auto'
                    onClick={() => field.onChange(field.value.filter((t) => t !== tag))}
                    type='button'
                  >
                    <XIcon />
                  </Button>
                </Badge>
              ))}
            </FormLabel>
            <FormControl>
              <Input
                placeholder='Lenguajes de la aplicación'
                ref={field.ref}
                onKeyDown={(ev) => handleAddTag(ev, field)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </TabsContent>
  )
}

interface MediaResourcesContentProps {
  /**
   * The function to update the thumbnail file.
   */
  updateThumbnailFile: (file: File) => void
  /**
   * The function to update the images file.
   */
  updateImagesFile: (files: File[]) => void
}

/**
 * Renders the media resources tab of the form.
 * @param updateThumbnailFile - The function to update the thumbnail file.
 * @param updateImagesFile - The function to update the images file.
 */
function MediaResourcesContent({ updateThumbnailFile, updateImagesFile }: MediaResourcesContentProps) {
  const form = useFormContext<ApplicationSchema>()

  return (
    <TabsContent value='media-resources' className='grid gap-4'>
      <FormField
        control={form.control}
        name='platform'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Plataforma</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={(value) => field.onChange(value)}
                value={field.value}
                className='flex flex-col gap-y-3'
              >
                {PLATFORM_LIST.map((platform) => (
                  <FormItem key={platform} className='flex items-center gap-x-2 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value={platform} />
                    </FormControl>
                    <FormLabel className='font-normal'>{PLATFORM_DICTIONARY[platform]}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='about_application'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Acerca de la aplicación</FormLabel>
            <FormControl>
              <Input placeholder='Acerca de la aplicación' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='aditional_information'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Información adicional</FormLabel>
            <FormControl>
              <Input placeholder='Información adicional' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='purchase_information'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Información de compra</FormLabel>
            <FormControl>
              <Input placeholder='Información de compra' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='thumbnail_url'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Imagen de portada</FormLabel>
            <FormControl>
              <Input
                className='max-w-screen-xsm'
                type='file'
                accept={ACCEPT_IMAGE_TYPES.toString()}
                name={field.name}
                ref={field.ref}
                onChange={(ev) => {
                  const file = ev.target.files?.[0]

                  if (!file) {
                    return toast.error('¡No se ha seleccionado ningún archivo!')
                  }
                  if (file.size > MAX_PRODUCT_IMAGE_SIZE) {
                    return toast.error('¡El archivo excede el tamaño máximo de 5MB!')
                  }
                  if (!ACCEPT_IMAGE_TYPES.includes(file.type)) {
                    return toast.error('¡El archivo debe ser de tipo JPEG o PNG!')
                  }

                  field.onChange(URL.createObjectURL(file))
                  updateThumbnailFile(file)
                }}
              />
            </FormControl>
            {field.value && (
              <div className='flex flex-col items-center gap-4 sm:flex-row'>
                <div className='relative aspect-square max-h-40 w-full sm:max-w-52'>
                  <Image
                    className='rounded-lg object-cover'
                    src={field.value}
                    alt='Imagen de aplicación'
                    fill
                    sizes='50vw'
                  />
                </div>
                <Badge className='rounded-lg bg-white/10 px-4 py-1.5 font-medium text-[#B95ED4]'>
                  Esta será la imagen que se visualizará
                </Badge>
              </div>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='images_url'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Imágenes de la aplicación</FormLabel>
            <FormControl>
              <Input
                className='max-w-screen-xsm'
                type='file'
                multiple
                accept={ACCEPT_IMAGE_TYPES.toString()}
                name={field.name}
                ref={field.ref}
                onChange={(ev) => {
                  const files = ev.target.files

                  if (!files?.length) {
                    return toast.error('¡No se han seleccionado archivos!')
                  }
                  if (files.length > MAX_PRODUCT_IMAGES) {
                    return toast.error('¡No puede subir más de 5 imágenes!')
                  }

                  const imagesURL = []
                  const imagesFile = []

                  for (const file of files) {
                    if (file.size > MAX_PRODUCT_IMAGE_SIZE) {
                      return toast.error(`¡El archivo ${file.name} excede el tamaño máximo de 5MB!`)
                    }

                    if (!ACCEPT_IMAGE_TYPES.includes(file.type)) {
                      return toast.error(`¡El archivo ${file.name} debe ser de tipo JPEG o PNG!`)
                    }

                    imagesURL.push(URL.createObjectURL(file))
                    imagesFile.push(file)
                  }

                  field.onChange(imagesURL)
                  updateImagesFile(imagesFile)
                }}
              />
            </FormControl>
            {field.value.length > 0 && (
              <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                {field.value.map((imageURL) => (
                  <div key={imageURL} className='relative aspect-square max-h-40 w-full'>
                    <Image
                      className='rounded-lg object-cover'
                      src={imageURL}
                      alt='Imagen de aplicación'
                      fill
                      sizes='25vw'
                    />
                  </div>
                ))}
              </div>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </TabsContent>
  )
}

/**
 * Renders the promotions tab of the form.
 */
function PromotionsContent() {
  const myApplications = useSWR<Product[]>('/api/products?type=app&limit=2').data
  const myCourses = useSWR<Product[]>('/api/products?type=course&limit=2').data
  const form = useFormContext<ApplicationSchema>()
  const isCombineProduct = form.watch('combine_product')

  return (
    <TabsContent value='promotions' className='grid gap-4'>
      <p className='text-sm font-semibold'>Fusiona tus cursos y apps, expande tus posibilidades</p>
      <p className='text-sm'>
        En AppSheetHub, te damos la libertad de combinar tus aplicaciones y cursos para crear soluciones únicas y
        personalizadas. No te limites a una sola herramienta: potencia tu creatividad uniendo conocimientos y
        funcionalidades para lograr un impacto mayor. Diseña, comparte y aprende como nunca antes. ¡El límite lo pones
        vos!
      </p>
      <FormField
        control={form.control}
        name='combine_product'
        render={({ field }) => (
          <FormItem>
            <FormLabel>¿Te gustaría combinar tu producto con otro?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={(value) => field.onChange(value === 'true')}
                className='flex flex-col gap-y-3'
                value={field.value !== undefined ? String(field.value) : undefined}
              >
                <FormItem className='flex items-center gap-x-2 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='true' />
                  </FormControl>
                  <FormLabel className='font-normal'>Sí</FormLabel>
                </FormItem>
                <FormItem className='flex items-center gap-x-2 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='false' />
                  </FormControl>
                  <FormLabel className='font-normal'>No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {isCombineProduct && (
        <>
          <Tabs defaultValue='my-applications' className='rounded-lg bg-white/10 p-4'>
            <TabsList className='flex flex-wrap items-center justify-start rounded-none bg-transparent p-0'>
              <TabsTrigger variant='primary' value='my-applications'>
                Aplicaciones
              </TabsTrigger>
              <TabsTrigger variant='primary' value='my-courses'>
                Cursos
              </TabsTrigger>
            </TabsList>
            <TabsContent value='my-applications'>
              <FormField
                control={form.control}
                name='combined_product_id'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                        className='grid gap-x-4 md:grid-cols-2'
                      >
                        {myApplications?.map((product) => (
                          <FormItem key={product.id} className='space-y-0'>
                            <FormControl>
                              <RadioGroupItem className='peer sr-only' value={product.id} />
                            </FormControl>
                            <FormLabel className='grid h-full rounded-lg border-[3px] border-transparent peer-data-[state=checked]:border-[#B95ED4]'>
                              <MyProductCard product={product} />
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
            <TabsContent value='my-courses'>
              <FormField
                control={form.control}
                name='combined_product_id'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                        className='grid gap-x-4 md:grid-cols-2'
                      >
                        {myCourses?.map((product) => (
                          <FormItem key={product.id} className='space-y-0'>
                            <FormControl>
                              <RadioGroupItem className='peer sr-only' value={product.id} />
                            </FormControl>
                            <FormLabel className='grid h-full rounded-lg border-[3px] border-transparent peer-data-[state=checked]:border-[#B95ED4]'>
                              <MyProductCard product={product} />
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>
          </Tabs>
          <FormField
            control={form.control}
            name='combined_product_discount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Establecé el porcentaje de descuento que querés ofrecer al crear este paquete.</FormLabel>
                <FormControl>
                  <Input className='md:w-1/2' type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}
    </TabsContent>
  )
}

export { NewApplicationForm }
