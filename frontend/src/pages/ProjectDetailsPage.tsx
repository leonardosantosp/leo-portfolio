import { ProjectReadme } from '../components/ProjectReadme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import github from '../assets/github-icon.png'
import { useEffect, useState } from 'react'
import { LoadingScreen } from '../components/LoadingScreen'

export const ProjectDetailsPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(time)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}
      >
        <Header showMenu={false} />
        <div className="project-page">
          <div className="project-page__header">
            <img src="https://imgur.com/i9UWRS8.png" alt="logo do projeto X" />
            <h2>Full Stack Spotify</h2>
          </div>
          <div className="links-container">
            <a
              href="https://github.com/leonardosantosp/full-stack-spotify"
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
          <ProjectReadme />
        </div>
        <Footer />
      </div>
    </>
  )
}
