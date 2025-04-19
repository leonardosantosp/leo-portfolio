import { ProjectItem } from './ProjectItem'

interface Project {
  title: string
  logo: string
  image: string
  stack: {
    name: string
    image: string
  }[]
}

interface ProjectsListProps {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="projects-list">
      {projects
        .map(project => (
          <ProjectItem
            key={project.title}
            logo={project.logo}
            title={project.title}
            image={project.image}
            stack={project.stack}
          />
        ))
        .reverse()}
    </div>
  )
}
