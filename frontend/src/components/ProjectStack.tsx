import { Link } from 'react-router-dom'
import type { ReturnedTechnology } from '../api-client/technologiesApi'
import { useState } from 'react'

interface stackItemProps {
  stack: ReturnedTechnology[]
}

export const ProjectStack = ({ stack }: stackItemProps) => {
  const [loadedCount, setLoadedCount] = useState(0)

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1)
  }

  const allImagesLoaded = loadedCount === stack.length

  return (
    <>
      {!allImagesLoaded && <span className="loader">{}</span>}

      {stack.map(stackItem => (
        <Link to={`/projects/technology/${stackItem.slug}`} key={stackItem._id}>
          <div
            className="stack__item"
            style={{ opacity: allImagesLoaded ? 1 : 0 }}
          >
            <img
              src={stackItem.icon}
              alt={`logo do ${stackItem.name}`}
              onLoad={() => handleImageLoad()}
            />
            <p>{stackItem.name}</p>
          </div>
        </Link>
      ))}
    </>
  )
}
