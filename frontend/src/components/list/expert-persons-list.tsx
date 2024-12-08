import { ExpertPersonCard } from '../card/expert-person-card'

interface ExpertPersonsListProps {
  quantity?: number
}

function ExpertPersonsList({ quantity = 4 }: ExpertPersonsListProps) {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
      {Array.from({ length: quantity }).map((_, index) => (
        <li key={index}>
          <ExpertPersonCard />
        </li>
      ))}
    </ul>
  )
}

export { ExpertPersonsList }
