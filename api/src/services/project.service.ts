import {
  getAllProjects,
  getProjectById
} from '../repository/project.repository'

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
