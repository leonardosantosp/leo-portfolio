import { API } from './api'

type CreateSkill = {
  name: string
  icon: string
}

type UpdateSkill = {
  name?: string
  icon?: string
}

export type ReturnedSkill = {
  _id: string
  name: string
  icon: string
}

export const getSkills = async (): Promise<ReturnedSkill[]> => {
  const response = await API.get('/skills')
  return response.data
}

export const getSkillById = async (id: string): Promise<ReturnedSkill> => {
  const response = await API.get(`/skills/${id}`)
  return response.data
}

export const createSkill = async (
  skill: CreateSkill
): Promise<ReturnedSkill> => {
  const response = await API.post('/skills', skill)
  return response.data
}

export const updateSkill = async (
  skill: UpdateSkill,
  id: string
): Promise<ReturnedSkill> => {
  const response = await API.patch(`/skills/${id}`, skill)
  return response.data
}

export const deleteSkill = async (id: string): Promise<ReturnedSkill> => {
  const response = await API.delete(`/skills/${id}`)
  return response.data
}
