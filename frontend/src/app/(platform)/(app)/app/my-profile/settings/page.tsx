import React from 'react'
import BreadCrumbComp, { BreadcrumbItemIface } from '../components/BreadCrumbComp'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import LateralComp from '../components/LateralComp'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import SelectContentOptComp, { SelectOptIface } from '../components/SelectContentOptComp'
import { Textarea } from '@/components/ui/textarea'
import ImportFileComp from '../components/ImportFileComp'
import { TabsTriggerF02Comp } from '../components/TabsTriggerF02Comp'

function EditarPerfilMentorPage() {
  const blist: BreadcrumbItemIface[] = [{ url: '/', text: 'Home' }, { url: '/', text: 'Perfil de mentor' }]
  /* PENDIENTE: especificar opciones */
  const areaList: SelectOptIface[] = [{ value: 'A1', text: 'Area 1' }, { value: 'A2', text: 'Area 2' }]
  const idiomasList: SelectOptIface[] = [{ value: 'en', text: 'Inglés' }, { value: 'es', text: 'Español' }]
  const sectoresList: SelectOptIface[] = [{ value: 'S1', text: 'Sector 1' }, { value: 'S2', text: 'Sector 2' }]
  const herramientasList: SelectOptIface[] = [{ value: 'php', text: 'php' }, { value: 'js', text: 'JavaScript' }]
  return (
    <div className='flex flex-col p-12 gap-4'>
      <BreadCrumbComp list={blist} />
      <h4 className='font-bold'>Conviértete en mentor: Comparte tu experiencia</h4>
      <Tabs id='tabs-comp' defaultValue='f02-info' className='w-full'>
        <TabsList className='bg-transparent'>
          <TabsTriggerF02Comp className='f02-tabs-style' value='f02-info'>Información General</TabsTriggerF02Comp>
          <TabsTriggerF02Comp className='f02-tabs-style' value='f02-exp'>Experiencia</TabsTriggerF02Comp>
          <TabsTriggerF02Comp className='f02-tabs-style' value='f02-edu'>Educación</TabsTriggerF02Comp>
        </TabsList>
        <TabsContent value='f02-info'>
          <div className='flex flex-col'>
            <div className='w-full f02-card py-8 px-4 flex flex-row justify-between'>
              <div className='f02-form-inputs-div'>
                <div className='f02-input-div max-w-[25rem]'>
                  <Label htmlFor='area'>¿En qué áreas sos un experto?</Label>
                  <Select name='area'>
                    <SelectTrigger className='bg-white text-black w-auto'>
                      <SelectValue placeholder='Elegí al menos un área' />
                    </SelectTrigger>
                    <SelectContentOptComp options={areaList} />
                  </Select>
                </div>
                <div className='f02-input-div max-w-[25rem]'>
                  <Label htmlFor='monto'>¿Cuál es el costo de tu hora de mentoria?</Label>
                  <Input className='max-h-[2.3rem]' type='number' min={0} step={0.01} max={1000} id='monto' placeholder='Ingresa el monto por hora' />
                </div>
                {/* Nivel y Plataformas */}
                <div className='flex md:flex-row sm:flex-col gap-12'>
                  <div className='f02-input-div max-w-[25rem]'>
                    <Label htmlFor='nivelexp'>Indica tu nivel de expertise.</Label>
                    <RadioGroup name='nivelexp'>
                      <div className='f02-radio-item'>
                        <RadioGroupItem value='junior' id='jr' />
                        <Label htmlFor='jr'>Junior</Label>
                      </div>
                      <div className='f02-radio-item'>
                        <RadioGroupItem value='midlevel' id='mid' />
                        <Label htmlFor='mid'>Mid-Level</Label>
                      </div>
                      <div className='f02-radio-item'>
                        <RadioGroupItem value='senior' id='sr' />
                        <Label htmlFor='sr'>Senior</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className='f02-input-div max-w-[25rem]'>
                    <Label htmlFor='plataforma'>¿Con que plataformas sueles trabajar?</Label>
                    <RadioGroup name='plataforma'>
                      <div className='f02-radio-item'>
                        <RadioGroupItem value='Appsheet' id='pl-app' />
                        <Label htmlFor='pl-app'>AppSheet</Label>
                      </div>
                      <div className='f02-radio-item'>
                        <RadioGroupItem value='powerapps' id='pl-po' />
                        <Label htmlFor='pl-po'>PowerApps</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                {/* Idiomas y área especializada */}
                <div className='flex md:flex-row max-sm:flex-col gap-12'>
                  <div className='f02-input-div max-w-[25rem]'>
                    <Label htmlFor='idiomas'>¿En qué idiomas ofreces las mentorias?</Label>
                    <Select name='idiomas'>
                      <SelectTrigger className='bg-white text-black w-auto'>
                        <SelectValue placeholder='Seleccionar idioma' />
                      </SelectTrigger>
                      <SelectContentOptComp options={idiomasList} />
                    </Select>
                  </div>
                  <div className='f02-input-div max-w-[25rem]'>
                    <Label htmlFor='area'>¿En que área te especializas?</Label>
                    <Select>
                      <SelectTrigger className='bg-white text-black w-auto'>
                        <SelectValue placeholder='Pilar de contenido' />
                      </SelectTrigger>
                      <SelectContentOptComp options={areaList} />
                    </Select>
                  </div>
                </div>
              </div>
              <LateralComp />
            </div>
            <button className='bg-[#702486] p-3 px-24 rounded-md w-fit mt-6 ml-auto'>Continuar</button>
          </div>
        </TabsContent>
        <TabsContent value='f02-exp'>
          <div className='flex flex-col'>
            <div className='w-full f02-card py-8 px-4 flex flex-row justify-between'>
              {/* Inputs */}
              <div className='f02-form-inputs-div'>
                <div className='f02-input-div max-w-[25rem]'>
                  <Label htmlFor='sectores'>Seleccioná los sectores en las que tenés experiencia</Label>
                  <Select name='sectores'>
                    <SelectTrigger className='bg-white text-black w-auto'>
                      <SelectValue placeholder='Seleccionar sector' />
                    </SelectTrigger>
                    <SelectContentOptComp options={sectoresList} />
                  </Select>
                </div>
                <div className='f02-input-div'>
                  <Label htmlFor='expsect_ta'> Describa la experiencia que posee en estos sectores.</Label>
                  <Textarea
                    name='expsect_ta'
                    className='bg-white text-black'
                    placeholder='Describe la experiencia'
                    rows={5}
                  />
                </div>
                <div className='f02-input-div max-w-[25rem]'>
                  <Label htmlFor='herramientas'>¿Con qué herramientas tenés experiencia?</Label>
                  <Select name='herramientas'>
                    <SelectTrigger className='bg-white text-black w-auto'>
                      <SelectValue placeholder='Herramientas y plataformas' />
                    </SelectTrigger>
                    <SelectContentOptComp options={herramientasList} />
                  </Select>
                </div>
                <div className='f02-input-div'>
                  <Label htmlFor='expherr_ta'> Describe tus conocimientos con las herramientas que mencionaste e indica cuántos años de experiencia tienes en cada una.</Label>
                  <Textarea
                    name='expherr_ta'
                    className='bg-white text-black'
                    placeholder='Describe tus conocimientos con las herramientas'
                    rows={5}
                  />
                </div>
              </div>
              {/* Componente lateral */}
              <LateralComp />
            </div>
            <a href='/' className='bg-[#702486] p-3 px-24 rounded-md w-fit mt-6 ml-auto'>Continuar</a>
          </div>
        </TabsContent>
        <TabsContent value='f02-edu'>
          <div className='flex flex-col'>
            <div className='w-full f02-card py-8 px-4 flex flex-row justify-between'>
              {/* Inputs */}
              <div className='f02-form-inputs-div'>
                <div className='f02-input-div'>
                  <h4 className='font-bold'>Detallá la formación académica y las certificaciones que avalen tu conocimiento.</h4>
                </div>
                <div className='f02-input-div'>
                  <Label htmlFor='formacad_ta'>Ingresá tu formación académica</Label>
                  <Textarea
                    name='formacad_ta'
                    className='bg-white text-black'
                    placeholder='Escribe tu formación académica'
                    rows={5}
                  />
                </div>
                <div className='f02-input-div max-w-[25rem]'>
                  <Label htmlFor='certificaciones_fi'> Agregá certificaciones relevantes</Label>
                  <ImportFileComp
                    desc='Sube una foto clara de la parte delantera de tu documento.'
                  />
                  <Input
                    name='certificaciones_fi'
                    type='file'
                    multiple
                    className='bg-white border-primary-400 text-primary-400'
                  />
                </div>
              </div>
              {/* Componente lateral */}
              <LateralComp />
            </div>
            <a href='/' className='bg-[#702486] p-3 px-24 rounded-md w-fit mt-6 ml-auto'>Continuar</a>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EditarPerfilMentorPage
