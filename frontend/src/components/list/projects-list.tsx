import { projects } from '@/mock/general.mock'
import { ProjectCard } from '../card/project-card'

function ProjectsList() {
  return (
    <ul className='grid gap-6'>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  )
}

export { ProjectsList }
