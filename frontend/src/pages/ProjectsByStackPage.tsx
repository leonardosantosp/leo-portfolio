import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProjectsList } from '../components/ProjectsList'
import iconReact from '../assets/react.png'

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

export const ProjectsByStackPage = () => {
  return (
    <div className="project-by-stack">
      <Header showMenu={false} />
      <div className="project-by-stack__header">
        <img src={iconReact} alt="logo da technologia X" />
        <h2>React</h2>
      </div>

      <ProjectsList projects={projects} />

      <Footer />
    </div>
  )
}
