import { ReadmeViewer } from '../components/ReadmeViewer'
import { Header } from '../components/Header'
import github from '../assets/github-icon.png'

// TODO: adicionar o nome do repositório como parâmetro na URL (http://localhost:5173/project/:repo) e através desse nome pegar o projeto na base de dados através de um fetch com a API

export const Project = () => {
  return (
    <>
      <Header showMenu={false} />
      <div className="project-page">
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
