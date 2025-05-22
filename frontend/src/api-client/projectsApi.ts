import { API } from './api'

type CreateProject = {
  title: string
  logo: string
  mockup: string
  repository: string
  siteUrl: string
  videoUrl: string
  stack: string[]
}

type UpdateProject = {
  title?: string
  logo?: string
  mockup?: string
  repository?: string
  siteUrl?: string
  videoUrl?: string
  stack?: string[]
}

export type ReturnedProject = {
  _id: string
  title: string
  logo: string
  mockup: string
  repository: string
  slug: string
  siteUrl: string
  videoUrl: string
  stack: string[]
}

export const getProjects = async (): Promise<ReturnedProject[]> => {
  const response = await API.get('/projects')
  return response.data
}

export const getProjectById = async (id: string): Promise<ReturnedProject> => {
  const response = await API.get(`/projects/${id}`)
  return response.data
}

export const getProjectsBySlug = async (
  slug: string
): Promise<ReturnedProject[]> => {
  const response = await API.get(`/projects/technology/${slug}`)
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
