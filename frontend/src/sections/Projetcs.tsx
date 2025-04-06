import { ProjectItem } from '../components/ProjectItem'

export const Projects = () => {
  const projects = [
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone'
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone'
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone'
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone'
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone'
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone'
    },
    {
      image: 'https://imgur.com/LtdTASQ.png',
      logo: 'https://imgur.com/i9UWRS8.png',
      title: 'Spotify Clone'
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
          />
        ))}
      </div>
    </div>
  )
}
