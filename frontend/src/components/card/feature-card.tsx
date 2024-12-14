interface Feature {
  name: string
  description: string
  icon?: JSX.Element
}

interface FeatureCardProps {
  feature: Feature
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article key={feature.name} className='flex flex-col gap-y-2 rounded-lg border border-[#B95ED4] p-6'>
      <p className='flex flex-col items-center gap-x-2 gap-y-1 font-semibold underline decoration-[#B95ED4] underline-offset-4 sm:flex-row md:text-lg'>
        {feature.icon} {feature.name}
      </p>
      <p className='text-sm'>{feature.description}</p>
    </article>
  )
}

export { FeatureCard }
