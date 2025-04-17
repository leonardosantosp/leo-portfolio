import {
  getAllProjects,
  getProjectById,
  createProject,
  checkProjectUniqueness
} from '../repository/project.repository'

import type { CreateProjectDtoType } from '../dtos/project/create-project.dto'
import { generateSlug } from '../utils/generateSlug'

export async function getAllProjectsService() {
  return await getAllProjects()
}

export async function getProjectByIdService(id: string) {
  const project = await getProjectById(id)

  if (!project) {
    throw new Error('Project Not Found')
  }

  return project
}

export async function createProjectService(projectData: CreateProjectDtoType) {
  const slug = generateSlug(projectData.title)

  const existProject = await checkProjectUniqueness(
    projectData.title,
    slug,
    projectData.repository
  )

  if (existProject) throw new Error('Project already exists')

  const projectToCreate = {
    slug: slug,
    ...projectData
  }
  return await createProject(projectToCreate)
}
