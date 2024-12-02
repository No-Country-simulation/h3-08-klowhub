import React from 'react'
import TopHeadComp from '../components/TopHeadComp'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

/**
 * Página para mostrar los planes para el vendedor
 */
function VendPlanPage() {
  return (
    <div className='w-full flex flex-col gap-4'>
      <TopHeadComp />
      <div className='f02-card text-xs p-3 flex flex-col gap-4'>
        <p className="font-bold mb-2">¡Bienvenido a la Comunidad de Vendedores!</p>
        <p>Elige el plan que mejor se adapte a tus necesidades y comienza a monetizar tus creaciones. Desde el plan gratuito hasta las opciones premium, cada uno ofrece herramientas diseñadas para maximizar tu éxito como creador.</p>
        <p className="font-bold">Detalles del plan seleccionado</p>
        <p>A continuación, encontrarás una descripción detallada de las características y beneficios del plan que has elegido.</p>
        <div className="f02-card-02 flex flex-col gap-4 p-4">
          {/* Selector Facturación Mensual */}
          <div className='flex flex-row gap-2 items-center justify-center'>
            <span className='font-normal'>Facturación mensual</span>
            <Switch name='fact_men_sw' />
            <span className='text-primary-b-300'>Facturación anual (ahorra el 15%)</span>
          </div>
          <Separator className='' />
          {/* Tarjetas con planes disponibles */}
          <div className='flex md:flex-row max-sm:flex-col gap-2 items-center justify-center'>
            <div className="f05-plan-card">
              <Image 
                src='/assets/temporal/f05-basic-img.png'
                alt='basic'
                width={1000}
                height={1000}
                className='rounded-md w-full'
              />
              <p className='font-bold'>Starter <br /> $9,99</p>
              <ul className='list-disc list-inside text-primary-b-200 flex flex-col gap-2'>
                <li><span className='text-white'>Acceso limitado a funciones básicas.</span></li>
                <li><span className='text-white'>Ideal para principiantes que desean explorar la plataforma</span></li>
                <li><span className='text-white'>Soporte por correo electrónico.</span></li>
                <li><span className='text-white'>Uso de plantillas predefinidas y recursos básicos.</span></li>
              </ul>
              <p className='text-xs'>Comisiones: PayPal 20%, Stripe 15%, Cripto 12%.</p>
            </div>
            <div className="f05-plan-card-princ">
              <div className="ml-auto p-2 rounded-md bg-[#F3E3FB]">
                <p className='text-primary-b-400 font-bold'>Más popular</p>
              </div>
              <Image 
                src='/assets/temporal/f05-professional-img.png'
                alt='basic'
                width={1000}
                height={1000}
                className='rounded-md w-full'
              />
              <p className='font-bold'>Starter <br /> $9,99</p>
              <ul className='list-disc list-inside text-primary-b-200 flex flex-col gap-2'>
                <li><span className='text-white'>Acceso limitado a funciones básicas.</span></li>
                <li><span className='text-white'>Ideal para principiantes que desean explorar la plataforma</span></li>
                <li><span className='text-white'>Soporte por correo electrónico.</span></li>
                <li><span className='text-white'>Uso de plantillas predefinidas y recursos básicos.</span></li>
              </ul>
              <p className='text-xs'>Comisiones: PayPal 20%, Stripe 15%, Cripto 12%.</p>
            </div>
            <div className="f05-plan-card">
              <Image 
                src='/assets/temporal/f05-expert-img.png'
                alt='basic'
                width={1000}
                height={1000}
                className='rounded-md w-full'
              />
              <p className='font-bold'>Starter <br /> $9,99</p>
              <ul className='list-disc list-inside text-primary-b-200 flex flex-col gap-2'>
                <li><span className='text-white'>Acceso limitado a funciones básicas.</span></li>
                <li><span className='text-white'>Ideal para principiantes que desean explorar la plataforma</span></li>
                <li><span className='text-white'>Soporte por correo electrónico.</span></li>
                <li><span className='text-white'>Uso de plantillas predefinidas y recursos básicos.</span></li>
              </ul>
              <p className='text-xs'>Comisiones: PayPal 20%, Stripe 15%, Cripto 12%.</p>
            </div>
          </div>
          {/* Tabla comparativa Planes */}
          <div className="w-full">
            <Table className='border-collapse w-full md:table-fixed sm:table-auto'>
              <TableHeader className='f05-table-border'>
                <TableRow className='f05-table-border'>
                  <TableHead className='f05-table-border'>
                    Comparar planes
                  </TableHead>
                  <TableHead className='f05-table-border'>
                    <p>Free</p>
                    <Button className='f05-table-btn-style'>Seleccionar plan</Button>
                  </TableHead>
                  <TableHead className='f05-table-border'>
                    <p>$25/Mes</p>
                    <Button className='f05-table-btn-style'>Seleccionar plan</Button>
                  </TableHead>
                  <TableHead className='f05-table-border'>
                    <p>$25/Mes</p>
                    <Button className='f05-table-btn-style'>Seleccionar plan</Button>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='f05-table-border'>Aspecto </TableCell>
                  <TableCell className='f05-table-border'>Perfecto para quienes recién empiezan y quieren explorar la plataforma.</TableCell>
                  <TableCell className='f05-table-border'>Desbloquea funcionalidades avanzadas y personaliza tu experiencia.</TableCell>
                  <TableCell className='f05-table-border'>Accede a todas nuestras funciones exclusivas y maximiza tu potencial como creador.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='f05-table-border'>Aspecto</TableCell>
                  <TableCell className='f05-table-border'>Publica hasta 3 aplicaciones.</TableCell>
                  <TableCell className='f05-table-border'>Publica hasta 10 aplicaciones.</TableCell>
                  <TableCell className='f05-table-border'>Publicaciones ilimitadas.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='f05-table-border'>Análisis avanzado y personalizació</TableCell>
                  <TableCell className='f05-table-border' />
                  <TableCell className='f05-table-border' />
                  <TableCell className='f05-table-border'><CheckCircle className='mx-auto text-primary-b-200' /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='f05-table-border'>Soporte exclusivo 24/7.</TableCell>
                  <TableCell className='f05-table-border' />
                  <TableCell className='f05-table-border'><CheckCircle className='mx-auto text-primary-b-200' /></TableCell>
                  <TableCell className='f05-table-border'><CheckCircle className='mx-auto text-primary-b-200' /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          {/* Botón Continuar */}
          <div className='flex justify-end'>
            <Button className='mt-12 px-8'>Continuar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendPlanPage