import { API } from './api'

type CreateTechnology = {
  name: string
  icon: string
  appIcon: string
}

type UpdateTechnology = {
  name?: string
  icon?: string
  appIcon?: string
}

type ReturnedTechnology = {
  _id: string
  name: string
  icon: string
  appIcon: string
}

export const getTechnologies = async (): Promise<ReturnedTechnology> => {
  const response = await API.get('/technologies')
  return response.data
}

export const getTechnologyById = async (
  id: string
): Promise<ReturnedTechnology> => {
  const response = await API.get(`/technologies/${id}`)
  return response.data
}

export const createTechnology = async (
  technology: CreateTechnology
): Promise<ReturnedTechnology> => {
  const response = await API.post('/technologies', technology)
  return response.data
}

export const updateTechnology = async (
  technology: UpdateTechnology,
  id: string
): Promise<ReturnedTechnology> => {
  const response = await API.patch(`/technologies/${id}`, technology)
  return response.data
}

export const deleteTechnology = async (
  id: string
): Promise<ReturnedTechnology> => {
  const response = await API.delete(`/techonlogies/${id}`)
  return response.data
}
