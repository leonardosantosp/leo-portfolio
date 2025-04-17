import Project from '../models/Project'

export async function getAllProjects() {
  return await Project.find()
}

export async function getProjectById(id: string) {
  return await Project.findById(id)
}

export async function checkProjectUniqueness(
  title: string,
  slug: string,
  repository: string
) {
  const conditions: Record<string, any>[] = []

  if (title) conditions.push({ title })
  if (slug) conditions.push({ slug })
  if (repository) conditions.push({ repository })

  return await Project.findOne({
    $or: conditions
  })
}

export async function createProject(projectData: unknown) {
  const project = new Project(projectData)
  return await project.save()
}
