import Image from 'next/image'
import BreadCrumbComp, { BreadcrumbItemIface } from './components/BreadCrumbComp'

function TutorProfilePage() {
  const blist: BreadcrumbItemIface[] = [
    { url: '/', text: 'Home' },
    { url: '/', text: 'Perfil de mentor' }
  ]
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
    <div className='flex flex-col gap-4 p-12'>
      <BreadCrumbComp list={blist} />
      <h4 className='font-bold'>Perfil de mentor</h4>
      <div className='flex w-full flex-grow gap-6 max-md:w-full max-md:flex-col lg:flex-row'>
        <div className='f02-card flex h-fit w-[80%] gap-8 p-12 max-sm:w-full max-sm:flex-col md:flex-row'>
          <div className='flex w-[40%] flex-col items-center gap-4 max-sm:w-full'>
            <Image
              className='rounded-full object-cover'
              src={udata.img_usu}
              alt='Avatar del usuario'
              width={175}
              height={175}
            />
            <a href={refdata.url_edt_foto_perfil} className='text-xs text-primary-400'>
              Editar Foto de perfil
            </a>
            <p className='text-lg font-bold'>{udata.nom_usu}</p>
          </div>
          <div className='w-[66%] flex-col gap-8 max-sm:w-full'>
            <div className='flex flex-col gap-4'>
              <div className='text-sm font-bold text-secondary-b-100'>
                {udata.tipo_usu}
                <span
                  className={
                    (udata.est_pro_usu ? '' : 'hidden') +
                    'ml-2 rounded-lg bg-gradient-to-r from-primary-500 via-[#514B8F] to-[#58759D] p-2 px-3 text-xs'
                  }
                >
                  PRO
                </span>
              </div>
              <div className='min-md:flex-row flex gap-4 text-sm font-bold text-white max-sm:flex-col'>
                <div>
                  {' '}
                  <span className='text-xl text-primary-200'>{udata.nro_cursos_usu}</span> Cursos publicados{' '}
                </div>
                <div>
                  {' '}
                  <span className='text-xl text-primary-200'>{udata.nro_apli_usu}</span> Aplicaciones creadas{' '}
                </div>
                <div>
                  {' '}
                  <span className='text-xl text-primary-200'>{udata.nro_subs_usu}</span> Subscriptores{' '}
                </div>
              </div>
            </div>
            <div className='mt-12 flex flex-col gap-4'>
              <p className='font-bold'>Ofrece sesiones de mentoría</p>
              <p className=''>
                Además de vender tus cursos y apps, ahora puedes ofrecer sesiones de mentoría personalizadas a otros
                creadores y emprendedores. Comparte tu experiencia y ayuda a otros a alcanzar sus objetivos, mientras
                expandes tu red y monetizas tus conocimientos. Conviértete en mentor y deja tu huella en la comunidad.
              </p>
              <button className='w-fit rounded-md bg-[#702486] p-3 px-10'>Crear mi perfil de mentor</button>
            </div>
          </div>
        </div>
        <div className='f02-card h-fit max-md:w-full lg:w-[34%]'>
          <Image
            className='h-56 w-full rounded-t-md object-cover'
            src='/assets/temporal/f02-back.png'
            alt='Avatar del usuario'
            width={300}
            height={300}
          />
          <div className='mt-4 flex flex-col items-center gap-4 p-4'>
            <p className='font-bold'>Optimiza tu Perfil</p>
            <p className=''>
              Optimizá tu perfil y llevá tus apps al siguiente nivel. Accedé a recursos exclusivos que te ayudarán a
              mejorar tus habilidades y maximizar el potencial de tus proyectos.
            </p>
            <a href='/' className='w-fit rounded-md bg-[#702486] p-3 px-10'>
              Ir a los recursos
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='flex flex-col items-center justify-center gap-8'>
        <p className='w-[60%] text-center text-xs text-slate-200'>
          ¿Tenés alguna pregunta? No dudes en escribirnos a Klowhub@soporte.com o visitar nuestro centro de ayuda.
          ¡Estamos aquí para asistirte!
        </p>
        <div className='flex flex-row gap-4'>
          <a href='' className='text-blue-400'>
            Centro de ayuda
          </a>
          <a href='' className='text-blue-400'>
            Soporte
          </a>
        </div>
      </div>
    </div>
  )
}

export default TutorProfilePage
