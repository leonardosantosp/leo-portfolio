import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProjectsList } from '../components/ProjectsList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  getTechnologyById,
  getTechnologyBySlug,
  type ReturnedTechnology
} from '../api-client/technologiesApi'
import { getProjectsBySlug } from '../api-client/projectsApi'
import type { FullProject } from '../sections/ProjetcsSection'
import { NotFoundError } from '../components/NotFoundError'

export const ProjectsByStackPage = () => {
  const { slug } = useParams()
  const [technology, setTechnology] = useState<ReturnedTechnology>()
  const [projects, setProjects] = useState<FullProject[]>([])

  useEffect(() => {
    if (!slug) return

    const fetchTechnology = async () => {
      const response = await getTechnologyBySlug(slug)
      setTechnology(response)
    }

    const fetchProjects = async () => {
      fetchTechnology()
      const response = await getProjectsBySlug(slug)
      const projectsWithTech: FullProject[] = await Promise.all(
        response.map(async project => {
          const technologies = await Promise.all(
            project.stack.map(id => getTechnologyById(id))
          )
          return {
            ...project,
            stack: technologies
          }
        })
      )

      setProjects(projectsWithTech)
    }

    fetchProjects()
  }, [slug])

  if (!technology) {
    return <NotFoundError type="Tecnologia" />
  }

  return (
    <>
      <Header showMenu={false} text="léo" />

      <div className="project-by-stack">
        <div className="project-by-stack__header">
          <img
            src={technology?.icon}
            alt={`Logo da technologia ${technology?.name}`}
          />
          <h2>{technology?.name}</h2>
        </div>
        {projects.length !== 0 ? (
          <>
            <ProjectsList projects={projects} />
          </>
        ) : (
          <NotFoundError technology={technology} type="Tecnologia" />
        )}
      </div>
      <Footer />
    </>
  )
}
