import type { ReturnedTechnology } from '../api-client/technologiesApi'

interface stackItemProps {
  stack: ReturnedTechnology[]
}

export const ProjectStack = ({ stack }: stackItemProps) => {
  return (
    <>
      {stack.map(stackItem => (
        <div className="stack__item" key={stackItem.name}>
          <img src={stackItem.icon} alt={`logo do ${stackItem.name}`} />
          <p>{stackItem.name}</p>
        </div>
      ))}
    </>
  )
}
