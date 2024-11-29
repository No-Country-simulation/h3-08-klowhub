import { ExpertPersonCard } from '../card/expert-person-card'

function ExpertPersonList() {
  return (
    <ul className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
      <li>
        <ExpertPersonCard />
      </li>
      <li>
        <ExpertPersonCard />
      </li>
      <li>
        <ExpertPersonCard />
      </li>
      <li>
        <ExpertPersonCard />
      </li>
    </ul>
  )
}

export { ExpertPersonList }
