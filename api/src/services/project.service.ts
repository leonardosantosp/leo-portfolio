import {
  getAllProjects,
  getProjectById,
  createProject,
  checkProjectUniqueness,
  updateProject,
  deleteProject
} from '../repository/project.repository'

import type { CreateProjectDtoType } from '../dtos/project/create-project.dto'
import type { UpdateProjectDtoType } from '../dtos/project/update-project.dto'
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
    projectData.repository,
    projectData.siteUrl
  )

  if (existProject) throw new Error('Project already exists')

  const projectToCreate = {
    slug: slug,
    ...projectData
  }
  return await createProject(projectToCreate)
}

export async function updateProjectService(
  id: string,
  projectData: UpdateProjectDtoType
) {
  const exist = await getProjectById(id)

  if (!exist) return null

  let slug: string | undefined = undefined

  if (projectData.title || projectData.repository || projectData.siteUrl) {
    if (projectData.title) slug = generateSlug(projectData.title)

    const existProject = await checkProjectUniqueness(
      projectData.title,
      slug,
      projectData.repository,
      projectData.siteUrl
    )

    if (existProject && existProject._id.toString() !== id)
      throw new Error(
        'Another project with the same title, slug, repository, or site URL already exists'
      )
  }

  const updateProjectData = {
    _id: id,
    ...(slug && { slug }),
    ...projectData
  }

  return await updateProject(updateProjectData)
}

export async function deleteProjectService(id: string) {
  const project = await getProjectById(id)

  if (!project) throw new Error('Project Not Found')

  return deleteProject(id)
}
