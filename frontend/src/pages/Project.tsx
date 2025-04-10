import { ReadmeViewer } from '../components/ReadmeViewer'
import { Header } from '../components/Header'
import github from '../assets/github-icon.png'

export const Project = () => {
  return (
    <>
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
        <ReadmeViewer />
      </div>
    </>
  )
}
