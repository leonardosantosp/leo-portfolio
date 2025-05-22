import {
  getAllProjects,
  getProjectById,
  createProject,
  checkProjectUniqueness,
  updateProject,
  deleteProject,
  getProjectsByTechnology
} from '../repository/project.repository'

import type { CreateProjectDtoType } from '../dtos/project/create-project.dto'
import type { UpdateProjectDtoType } from '../dtos/project/update-project.dto'
import { generateSlug } from '../utils/generateSlug'
import { ErrorCode } from '../constants/errors'

export async function getAllProjectsService() {
  return await getAllProjects()
}

export async function getProjectByIdService(id: string) {
  const project = await getProjectById(id)

  if (!project) {
    throw new Error(ErrorCode.NOT_FOUND)
  }

  return project
}

export async function getProjectsByTechnologyService(slug: string) {
  const projects = await getProjectsByTechnology(slug)

  if (!projects) {
    throw new Error(ErrorCode.NOT_FOUND)
  }

  return projects
}

export async function getProjectByRepositoryService(repository: string) {
  const project = await checkProjectUniqueness(
    undefined,
    undefined,
    repository,
    undefined
  )

  if (!project) {
    throw new Error(ErrorCode.NOT_FOUND)
  }

  return project
}

export async function createProjectService(projectData: CreateProjectDtoType) {
  const slug = generateSlug(projectData.title)

  const duplicateProject = await checkProjectUniqueness(
    projectData.title,
    slug,
    projectData.repository,
    projectData.siteUrl
  )

  if (duplicateProject) throw new Error(ErrorCode.ALREADY_EXISTS)

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
  const existingProject = await getProjectById(id)

  if (!existingProject) throw new Error(ErrorCode.NOT_FOUND)

  let slug: string | undefined = undefined

  if (projectData.title || projectData.repository || projectData.siteUrl) {
    if (projectData.title) slug = generateSlug(projectData.title)

    const duplicateProject = await checkProjectUniqueness(
      projectData.title,
      slug,
      projectData.repository,
      projectData.siteUrl
    )

    if (duplicateProject && duplicateProject._id.toString() !== id)
      throw new Error(ErrorCode.ALREADY_EXISTS)
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

  if (!project) throw new Error(ErrorCode.NOT_FOUND)

  return deleteProject(id)
}
