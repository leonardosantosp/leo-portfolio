import { ProjectReadme } from '../components/ProjectReadme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import github from '../assets/github-icon.png'
import { useEffect, useState } from 'react'
import { LoadingScreen } from '../components/LoadingScreen'
import { useParams } from 'react-router-dom'
import {
  getProjectByRepository,
  type ReturnedProject
} from '../api-client/projectsApi'

export const ProjectDetailsPage = () => {
  const [loading, setLoading] = useState(true)
  const { repository } = useParams()
  const [project, setProject] = useState<ReturnedProject>()

  useEffect(() => {
    const fetchProject = async () => {
      if (!repository) return
      const response = await getProjectByRepository(repository)
      setProject(response)
    }

    const time = setTimeout(() => {
      setLoading(false)
    }, 1500)

    fetchProject()

    return () => {
      clearTimeout(time)
    }
  }, [repository])

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}
      >
        <Header showMenu={false} text="léo" />
        <div className="project-page">
          <div className="project-page__header">
            <img src={project?.logo} alt="logo do projeto X" />
            <h2>{project?.title}</h2>
          </div>
          <div className="links-container">
            <a
              href={`https://github.com/leonardosantosp/${project?.repository}`}
              target="_blank"
            >
              <img src={github} alt="icone do github" />
              <div className="link-text">Ver repositório</div>
            </a>
            <a href="http://localhost:5173/" target="_blank">
              {' '}
              <img
                src="https://imgur.com/i9UWRS8.png"
                alt="logo do projeto X"
                width={30}
                height={30}
              />{' '}
              <div className="link-text">Ver Site</div>
            </a>
          </div>
          {project?.repository && <ProjectReadme project={project} />}
        </div>
        <Footer />
      </div>
    </>
  )
}
