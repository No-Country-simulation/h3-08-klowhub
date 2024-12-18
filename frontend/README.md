# Guía de Instalación del Proyecto Next.js

Esta guía describe los pasos necesarios para instalar y ejecutar el proyecto de Next.js desde el repositorio [No-Country-simulation/h3-08-klowhub](https://github.com/No-Country-simulation/h3-08-klowhub).

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

1. **Node.js**: Descarga e instala la versión LTS desde [Node.js](https://nodejs.org/).
2. **Git**: Descarga e instala Git desde [Git](https://git-scm.com/).
3. **Editor de texto**: (opcional, pero recomendado) Visual Studio Code o tu editor preferido.

## Pasos de Instalación

### 1. Clonar el Repositorio

En una terminal, ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/No-Country-simulation/h3-08-klowhub.git
```

Esto creará una carpeta llamada `h3-08-klowhub` con el código del proyecto.

### 2. Navegar a la Carpeta del Frontend

Cambia al directorio del frontend dentro del proyecto clonado:

```bash
cd h3-08-klowhub/frontend
```

### 3. Instalar Dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

Esto descargará todos los paquetes requeridos especificados en el archivo `package.json`.

### 4. Configurar Variables de Entorno

Crea un archivo `.env.local` en la carpeta `frontend` y agrega las siguientes variables con los valores correspondientes de tu proyecto Supabase y Stripe:

```
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_stripe_publishable_key
STRIPE_SECRET_KEY=tu_stripe_secret_key
STRIPE_WEBHOOK_SECRET=tu_stripe_webhook_secret
```

Asegúrate de reemplazar `tu_supabase_url` y `tu_supabase_anon_key` con los valores reales de tu proyecto.

### 5. Iniciar el Servidor de Desarrollo

Una vez instaladas las dependencias y configuradas las variables de entorno, inicia el servidor de desarrollo con:

```bash
npm run dev
```

El servidor iniciará y estará disponible en la URL `http://localhost:3000`.

### 6. Abrir el Proyecto en el Navegador

Abre tu navegador preferido y accede a la URL:

```
http://localhost:3000
```

Allí podrás visualizar el proyecto en ejecución.
