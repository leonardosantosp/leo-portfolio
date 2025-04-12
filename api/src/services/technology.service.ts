import {
  getAllTechnologies,
  getTechnologyById,
  getTechnologyByName
} from '../repository/tecnology.repository.ts'

export async function getAllTechnologiesService() {
  return await getAllTechnologies()
}

export async function getTechnologyByIdService(id: string) {
  const technology = await getTechnologyById(id)

  if (!technology) {
    throw new Error('Technology not found')
  }

  return technology
}
