import { ProjectItem } from '../components/ProjectItem'
import { Stack } from '../components/Stack'

export const Projects = () => {
  const projects = [
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone',
      link: 'http://projeto.com',
      stack: [
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'NodeJs',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'CSS',
          image: 'https://imgur.com/mpjlXh4.png'
        }
      ]
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone',
      stack: [
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'NodeJs',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'CSS',
          image: 'https://imgur.com/mpjlXh4.png'
        }
      ]
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone',
      stack: [
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'NodeJs',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'CSS',
          image: 'https://imgur.com/mpjlXh4.png'
        }
      ]
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone',
      stack: [
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'NodeJs',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'CSS',
          image: 'https://imgur.com/mpjlXh4.png'
        }
      ]
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone',
      stack: [
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'NodeJs',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'CSS',
          image: 'https://imgur.com/mpjlXh4.png'
        }
      ]
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone',
      stack: [
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'NodeJs',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'CSS',
          image: 'https://imgur.com/mpjlXh4.png'
        }
      ]
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone',
      stack: [
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'NodeJs',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'CSS',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        },
        {
          name: 'React',
          image: 'https://imgur.com/mpjlXh4.png'
        }
      ]
    }
  ]

  return (
    <div className="projects" id="projects">
      <h1 className="projects__title">Meus Projetos</h1>
      <div className="projects__container">
        {projects.map(project => (
          <ProjectItem
            logo={project.logo}
            title={project.title}
            image={project.image}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  )
}
