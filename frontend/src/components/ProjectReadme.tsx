import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import rehypeRaw from 'rehype-raw'
import 'github-markdown-css/github-markdown.css'
import readme from '../assets/readme.png'
import type { ReturnedProject } from '../api-client/projectsApi'

type ProjectReadmeProps = {
  project: ReturnedProject
}

export const ProjectReadme = ({ project }: ProjectReadmeProps) => {
  const [content, setContent] = useState('')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/leonardosantosp/${project.repository}/main/README.md`
    )
      .then(res => res.text())
      .then(setContent)
  }, [project.repository])

  return (
    <div className="readme-wrapper">
      <div className={`markdown-body ${expanded ? 'expanded' : 'collapsed'}`}>
        <div className="readme-header">
          <img src={readme} alt="imagem do readme do github" />
          <h3>README</h3>
        </div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </div>
      <button className="readme-toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Ver menos' : 'Ver mais'}
      </button>
    </div>
  )
}
