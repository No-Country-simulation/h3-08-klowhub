import React from 'react'
import BreadCrumbComp, { BreadcrumbItemIface } from './components/BreadCrumbComp'
import Image from 'next/image'

function TutorProfilePage() {
  const blist: BreadcrumbItemIface[] = [{ url: '/', text: 'Home' }, { url: '/', text: 'Perfil de mentor' }]
  // Datos utilizados en la vista, #PENDIENTE que el backend provea api
  const udata = {
    img_usu: '/assets/temporal/f02-avatar06.png',
    nom_usu: 'Martin Fernandez',
    tipo_usu: 'Vendedor',
    est_pro_usu: false,
    nro_cursos_usu: 2,
    nro_apli_usu: 3,
    nro_subs_usu: 3
  }
  // Datos listos para cuando se tengan las vistas requeridas
  const refdata = {
    url_edt_foto_perfil: '/'
  }
  return (
    <div className='flex flex-col p-12 gap-4'>
      <BreadCrumbComp list={blist} />
      <h4 className='font-bold'>Perfil de mentor</h4>
      <div className='gap-6 flex-grow w-full flex lg:flex-row max-md:flex-col max-md:w-full'>
        <div className='w-[80%] f02-card p-12 gap-8 h-fit flex md:flex-row max-sm:flex-col max-sm:w-full'>
          <div className='w-[40%] flex flex-col items-center gap-4 max-sm:w-full'>
            <Image
              className='rounded-full object-cover'
              src={udata.img_usu}
              alt='Avatar del usuario'
              width={175}
              height={175}
            />
            <a href={refdata.url_edt_foto_perfil} className='text-primary-400 text-xs'>Editar Foto de perfil</a>
            <p className='font-bold text-lg'>{udata.nom_usu}</p>
          </div>
          <div className='w-[66%] flex-col gap-8 max-sm:w-full'>
            <div className='flex flex-col gap-4'>
              <div className='text-secondary-b-100 font-bold text-sm'>
                {udata.tipo_usu}
                <span className={(udata.est_pro_usu ? '' : 'hidden') + 'text-xs rounded-lg p-2 px-3 ml-2 bg-gradient-to-r from-primary-500 via-[#514B8F] via-[#556096] to-[#58759D]'}>PRO</span>
              </div>
              <div className='flex max-sm:flex-col min-md:flex-row text-white font-bold text-sm gap-4'>
                <div> <span className='text-primary-200 text-xl'>{udata.nro_cursos_usu}</span> Cursos publicados </div>
                <div> <span className='text-primary-200 text-xl'>{udata.nro_apli_usu}</span> Aplicaciones creadas </div>
                <div> <span className='text-primary-200 text-xl'>{udata.nro_subs_usu}</span> Subscriptores </div>
              </div>
            </div>
            <div className='mt-12 flex flex-col gap-4'>
              <p className='font-bold'>Ofrece sesiones de mentoría</p>
              <p className=''>Además de vender tus cursos y apps, ahora puedes ofrecer sesiones de mentoría personalizadas a otros creadores y emprendedores. Comparte tu experiencia y ayuda a otros a alcanzar sus objetivos, mientras expandes tu red y monetizas tus conocimientos. Conviértete en mentor y deja tu huella en la comunidad.</p>
              <button className='bg-[#702486] p-3 px-10 rounded-md w-fit'>Crear mi perfil de mentor</button>
            </div>
          </div>
        </div>
        <div className='lg:w-[34%] f02-card h-fit max-md:w-full'>
          <Image
            className='object-cover w-full rounded-t-md h-56'
            src='/assets/temporal/f02-back.png'
            alt='Avatar del usuario'
            width={300}
            height={300}
          />
          <div className='mt-4 flex flex-col gap-4 items-center p-4'>
            <p className='font-bold'>Optimiza tu Perfil</p>
            <p className=''>Optimizá tu perfil y llevá tus apps al siguiente nivel. Accedé a recursos exclusivos que te ayudarán a mejorar tus habilidades y maximizar el potencial de tus proyectos.</p>
            <a href='/' className='bg-[#702486] p-3 px-10 rounded-md w-fit'>Ir a los recursos</a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='flex flex-col items-center justify-center gap-8'>
        <p className='text-slate-200 text-xs w-[60%] text-center'>¿Tenés alguna pregunta? No dudes en escribirnos a klowhub@soporte.com o visitar nuestro centro de ayuda. ¡Estamos aquí para asistirte!</p>
        <div className='flex flex-row gap-4'>
          <a href='' className='text-blue-400'>Centro de ayuda</a>
          <a href='' className='text-blue-400'>Soporte</a>
        </div>
      </div>
    </div>
  )
}

export default TutorProfilePage
