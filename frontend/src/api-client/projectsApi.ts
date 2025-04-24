import { API } from './api'

type StackItem = {
  id: string
}

type CreateProject = {
  title: string
  logo: string
  mockup: string
  repository: string
  siteUrl: string
  videoUrl: string
  stack: StackItem[]
}

type UpdateProject = {
  title?: string
  logo?: string
  mockup?: string
  repository?: string
  siteUrl?: string
  videoUrl?: string
  stack?: StackItem[]
}

type ReturnedProject = {
  _id: string
  title: string
  logo: string
  mockup: string
  repository: string
  slug: string
  siteUrl: string
  videoUrl: string
  stack: StackItem[]
}

export const getProjects = async (): Promise<ReturnedProject[]> => {
  const response = await API.get('/projects')
  return response.data
}

export const getProjectById = async (id: string): Promise<ReturnedProject> => {
  const response = await API.get(`/projects/${id}`)
  return response.data
}

export const createProject = async (
  project: CreateProject
): Promise<ReturnedProject> => {
  const response = await API.post('/projects', project)
  return response.data
}

export const updateProject = async (
  project: UpdateProject,
  id: string
): Promise<ReturnedProject> => {
  const response = await API.patch(`/projects/${id}`, project)
  return response.data
}

export const deleteProject = async (id: string): Promise<ReturnedProject> => {
  const response = await API.delete(`/projects/${id}`)
  return response.data
}
