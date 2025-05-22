import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { ReturnedTechnology } from '../api-client/technologiesApi'

interface ProjectItemProps {
  logo: string
  title: string
  image: string
  repository: string
  stack: ReturnedTechnology[]
}

import { ProjectStack } from './ProjectStack'

export const ProjectItem = ({
  logo,
  title,
  image,
  stack,
  repository
}: ProjectItemProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <div className="project-item">
        {!isVisible ? (
          <div className="project-item__initial">
            <div className="project-item__logo">
              <img src={logo} alt="logo do projeto" />
              <h2>{title}</h2>
            </div>
            <ChevronDown
              onClick={() => setIsVisible(true)}
              className="arrow arrow-down"
              size={60}
            />
          </div>
        ) : (
          <div className="project-item__detail">
            <div className="project-item__detail-header">
              <div className="stack">
                <ProjectStack stack={stack} />
              </div>
              <ChevronUp
                className="arrow arrow-up"
                onClick={() => setIsVisible(false)}
                size={60}
              />
            </div>
            <div className="project-item__detail-content">
              <h2>{title}</h2>
              <img src={image} alt="mockup do projeto" />
              <Link to={`/projects/${repository}`}>View</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
