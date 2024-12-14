import { BarChartIcon, CheckCircleIcon, CodeIcon, DatabaseIcon, LightbulbIcon, ZapIcon } from 'lucide-react'

export const features = [
  {
    name: 'Desarrollo Sin Código',
    description:
      'Crea aplicaciones complejas sin escribir una sola línea de código. AppSheet utiliza una interfaz visual intuitiva que permite a los usuarios diseñar la lógica y la interfaz de usuario de sus aplicaciones.'
  },
  {
    name: 'Integración de Datos',
    description:
      'Conecta fácilmente con diversas fuentes de datos, incluyendo Google Sheets, Excel, SQL databases y más. AppSheet permite una sincronización de datos en tiempo real y offline.'
  },
  {
    name: 'Automatización Inteligente',
    description:
      'Implementa flujos de trabajo automatizados y reglas de negocio complejas. AppSheet ofrece capacidades de automatización que pueden mejorar significativamente la eficiencia operativa.'
  },
  {
    name: 'Seguridad Empresarial',
    description:
      'Protege tus datos y aplicaciones con características de seguridad de nivel empresarial, incluyendo encriptación, autenticación de usuarios y controles de acceso granulares.'
  },
  {
    name: 'Multiplataforma',
    description:
      'Crea una vez y despliega en múltiples plataformas. Las aplicaciones de AppSheet funcionan en dispositivos iOS, Android y en navegadores web, proporcionando una experiencia consistente en todos los dispositivos.'
  },
  {
    name: 'Análisis y Reportes',
    description:
      'Genera informes detallados y visualizaciones de datos directamente dentro de tus aplicaciones. AppSheet ofrece potentes capacidades de análisis para ayudarte a tomar decisiones basadas en datos.'
  }
]

export const whyToLearn = [
  {
    name: 'Desarrollo Rápido',
    description:
      'Crea aplicaciones en días, no en meses. Las herramientas no-code y low-code aceleran drásticamente el proceso de desarrollo, permitiéndote llevar tus ideas al mercado más rápido que nunca.',
    icon: <ZapIcon className='shrink-0' />
  },
  {
    name: 'Sin Experiencia en Código',
    description:
      'No necesitas saber programar para crear apps potentes. Estas plataformas utilizan interfaces visuales intuitivas que permiten a cualquiera, desde analistas de negocios hasta gerentes de proyecto, crear soluciones sofisticadas.',
    icon: <CodeIcon className='shrink-0' />
  },
  {
    name: 'Integración de Datos',
    description:
      'Conecta fácilmente con múltiples fuentes de datos. Las plataformas no-code y low-code ofrecen conectores pre-construidos para una amplia gama de sistemas, desde hojas de cálculo hasta bases de datos empresariales.',
    icon: <DatabaseIcon className='shrink-0' />
  },
  {
    name: 'Ahorro de Costos',
    description:
      'Reduce los costos de desarrollo y mantenimiento. Al eliminar la necesidad de un equipo de desarrollo extenso, puedes crear y mantener aplicaciones a una fracción del costo tradicional.',
    icon: <CheckCircleIcon className='shrink-0' />
  },
  {
    name: 'Escalabilidad',
    description:
      'Crea soluciones que crecen con tu negocio. Las plataformas modernas no-code y low-code están diseñadas para manejar aplicaciones desde pequeña escala hasta nivel empresarial, asegurando que tus soluciones puedan evolucionar con tus necesidades.',
    icon: <BarChartIcon className='shrink-0' />
  },
  {
    name: 'Innovación Rápida',
    description:
      'Implementa ideas y mejoras rápidamente. La naturaleza ágil del desarrollo no-code permite iterar y experimentar con nuevas ideas de manera rápida y eficiente, fomentando una cultura de innovación continua.',
    icon: <LightbulbIcon className='shrink-0' />
  }
]

export const userReviews = [
  {
    name: 'Ana García',
    role: 'Analista de Negocios',
    comment:
      'Gracias a los cursos de NoCodeMasters, pude crear una app de seguimiento de proyectos que revolucionó nuestro equipo. La claridad de las explicaciones y los proyectos prácticos me dieron la confianza para implementar soluciones reales. ¡Increíble lo que se puede lograr sin código!',
    image_url: '/assets/avatar.png'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Gerente de Operaciones',
    comment:
      'La formación en PowerApps me permitió automatizar procesos que antes nos llevaban horas. El curso avanzado fue especialmente útil para entender cómo integrar nuestros sistemas existentes. Ahora puedo concentrarme en estrategias en lugar de tareas repetitivas.',
    image_url: '/assets/avatar.png'
  },
  {
    name: 'Laura Martínez',
    role: 'Emprendedora',
    comment:
      'Como dueña de una pequeña empresa, AppSheet me ha permitido crear aplicaciones personalizadas sin contratar desarrolladores. NoCodeMasters hizo que el aprendizaje fuera fácil y divertido. Su enfoque paso a paso y el soporte de la comunidad fueron fundamentales para mi éxito.',
    image_url: '/assets/avatar.png'
  },
  {
    name: 'Miguel Sánchez',
    role: 'Consultor IT',
    comment:
      'Los cursos de NoCodeMasters han ampliado significativamente mi conjunto de habilidades. Ahora puedo ofrecer soluciones no-code a mis clientes, lo que ha expandido mi negocio de consultoría. La profundidad del contenido y la calidad de la enseñanza son excepcionales.',
    image_url: '/assets/avatar.png'
  },
  {
    name: 'Elena Gómez',
    role: 'Profesora Universitaria',
    comment:
      'Incorporé los cursos de NoCodeMasters en mi programa de estudios y los estudiantes están encantados. Les está dando una ventaja competitiva en el mercado laboral. La plataforma es intuitiva y el contenido está siempre actualizado con las últimas tendencias.',
    image_url: '/assets/avatar.png'
  },
  {
    name: 'Javier López',
    role: 'Diseñador UX',
    comment:
      'El curso de Diseño UX para No-Code fue revelador. Me ayudó a entender cómo aplicar mis habilidades de diseño en el contexto de herramientas no-code. Ahora puedo ofrecer soluciones más completas a mis clientes, desde el diseño hasta la implementación.',
    image_url: '/assets/avatar.png'
  }
]

export const faqs = [
  {
    question: '¿Qué es el desarrollo no-code y low-code?',
    answer:
      'El desarrollo no-code y low-code son enfoques de creación de software que permiten a los usuarios construir aplicaciones con poca o ninguna experiencia en programación. Utilizan interfaces visuales y componentes predefinidos para crear aplicaciones funcionales sin escribir código extenso.'
  },
  {
    question: '¿Necesito experiencia en programación para tomar estos cursos?',
    answer:
      'No, no necesitas experiencia previa en programación. Nuestros cursos están diseñados para principiantes y profesionales por igual. Sin embargo, tener conocimientos básicos de lógica y familiaridad con hojas de cálculo puede ser beneficioso.'
  },
  {
    question: '¿Qué tipo de aplicaciones puedo crear con herramientas no-code?',
    answer:
      'Con herramientas no-code, puedes crear una amplia variedad de aplicaciones, incluyendo sistemas de gestión de inventario, aplicaciones de seguimiento de proyectos, herramientas de recopilación de datos en campo, dashboards de análisis, y mucho más. Las posibilidades son prácticamente ilimitadas.'
  },
  {
    question: '¿Cómo puedo empezar a aprender desarrollo no-code?',
    answer:
      "Puedes comenzar registrándote en nuestra plataforma y tomando nuestro curso 'Fundamentos de No-Code'. Este curso te proporcionará una base sólida en los conceptos y herramientas no-code. Después, puedes explorar cursos más avanzados según tus intereses y objetivos profesionales."
  },
  {
    question: '¿Ofrecen soporte o tutoría durante los cursos?',
    answer:
      'Sí, ofrecemos varios niveles de soporte. Todos los estudiantes tienen acceso a nuestros foros de la comunidad donde pueden hacer preguntas y obtener ayuda de otros estudiantes y mentores. Además, ofrecemos sesiones de tutoría en vivo y soporte personalizado en nuestros planes premium.'
  }
]
