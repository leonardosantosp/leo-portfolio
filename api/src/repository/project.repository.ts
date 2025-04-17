import Project from '../models/Project'

type UpdateProjectType = {
  _id: string
  title?: string
  logo?: string
  mockup?: string
  repository?: string
  slug?: string
  siteUrl?: string
  videoUrl?: string
  stack?: string[]
}

export async function getAllProjects() {
  return await Project.find()
}

export async function getProjectById(id: string) {
  return await Project.findById(id)
}

export async function checkProjectUniqueness(
  title?: string,
  slug?: string,
  repository?: string,
  siteUrl?: string
) {
  const conditions: Record<string, any>[] = []

  if (title) conditions.push({ title })
  if (slug) conditions.push({ slug })
  if (repository) conditions.push({ repository })
  if (siteUrl) conditions.push({ siteUrl })

  return await Project.findOne({
    $or: conditions
  })
}

export async function createProject(projectData: unknown) {
  const project = new Project(projectData)
  return await project.save()
}

export async function updateProject(projectData: UpdateProjectType) {
  const { _id, ...updateFields } = projectData

  return await Project.findByIdAndUpdate(_id, updateFields, {
    new: true,
    runValidators: true
  })
}

export async function deleteProject(id: string) {
  return await Project.findByIdAndDelete(id)
}
