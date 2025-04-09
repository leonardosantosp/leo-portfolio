import { useState } from 'react'
import arrow from '../assets/down-arrow.png'

interface ProjectItemProps {
  logo: string
  title: string
  image: string
  stack: {
    name: string
    image: string
  }[]
}

import { Stack } from './Stack'

export const ProjectItem = ({
  logo,
  title,
  image,
  stack
}: ProjectItemProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="project-item">
      {!isVisible ? (
        <div className="project-item__initial">
          <div className="project-item__logo">
            <img src={logo} alt="logo do projeto" />
            <h2>{title}</h2>
          </div>
          <img
            className="arrow arrow-down"
            src={arrow}
            alt="seta para baixo"
            onClick={() => setIsVisible(true)}
          />
        </div>
      ) : (
        <div className="project-item__detail">
          <div className="project-item__detail-header">
            <div className="stack">
              <Stack stack={stack} />
            </div>
            <img
              className="arrow arrow-up"
              src={arrow}
              alt="seta para cima"
              onClick={() => setIsVisible(false)}
            />
          </div>
          <div className="project-item__detail-content">
            <h2>{title}</h2>
            <img src={image} alt="mockup do projeto" />
            <button>View</button>
          </div>
        </div>
      )}
    </div>
  )
}
