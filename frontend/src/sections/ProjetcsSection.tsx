import { useEffect, useState } from 'react'
import { ProjectsList } from '../components/ProjectsList'
import { getProjects } from '../api-client/projectsApi'
import type { ReturnedProject } from '../api-client/projectsApi'
import { getTechnologyById } from '../api-client/technologiesApi'
import type { ReturnedTechnology } from '../api-client/technologiesApi'

export type FullProject = Omit<ReturnedProject, 'stack'> & {
  stack: ReturnedTechnology[]
}

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<FullProject[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getProjects()

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
  }, [])

  return (
    <div id="projects">
      <h1 className="projects__title">Meus Projetos</h1>
      <ProjectsList projects={projects} />
    </div>
  )
}
