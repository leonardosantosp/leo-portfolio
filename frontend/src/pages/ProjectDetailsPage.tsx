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
import { NotFoundError } from '../components/NotFoundError'

export const ProjectDetailsPage = () => {
  const [loading, setLoading] = useState(true)
  const { repository } = useParams()
  const [project, setProject] = useState<ReturnedProject>()

  useEffect(() => {
    const fetchProject = async () => {
      if (!repository) return
      const response = await getProjectByRepository(repository)
      setProject(response)
      console.log(response.videoUrl)
    }

    const time = setTimeout(() => {
      setLoading(false)
    }, 1500)

    fetchProject()

    return () => {
      clearTimeout(time)
    }
  }, [repository])

  if (!loading && !project) {
    return <NotFoundError type="Projeto" />
  }

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}
      >
        <Header showMenu={false} text="léo" />
        <div className="project-page">
          <div className="project-page__header">
            <img
              src={project?.logo}
              alt={`logo do projeto ${project?.title}`}
            />
            <h2>{project?.title}</h2>
          </div>
          {project?.videoUrl && (
            <div className="video-wrapper">
              <iframe
                className="video-frame"
                width="80%"
                height="700"
                src={project.videoUrl}
                title="Vídeo de teste"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
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
                src={project?.logo}
                alt={`logo do projeto ${project?.title}`}
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
