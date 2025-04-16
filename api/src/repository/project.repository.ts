import Project from '../models/Project'

export async function getAllProjects() {
  return await Project.find()
}

export async function getProjectById(id: string) {
  return await Project.findById(id)
}
