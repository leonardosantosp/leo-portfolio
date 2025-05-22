import { Link } from 'react-router-dom'
import type { ReturnedTechnology } from '../api-client/technologiesApi'

interface stackItemProps {
  stack: ReturnedTechnology[]
}

export const ProjectStack = ({ stack }: stackItemProps) => {
  return (
    <>
      {stack.map(stackItem => (
        <Link
          to={`/projects/technology/${stackItem.slug}`}
          key={stackItem.name}
        >
          <div className="stack__item">
            <img src={stackItem.icon} alt={`logo do ${stackItem.name}`} />
            <p>{stackItem.name}</p>
          </div>
        </Link>
      ))}
    </>
  )
}
