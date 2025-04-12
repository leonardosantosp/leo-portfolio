import {
  getAllTechnologies,
  getTechnologyById,
  getTechnologyByNameOrSlug,
  createTechnology
} from '../repository/tecnology.repository.ts'

import { generateSlug } from '../utils/generateSlug.ts'
import type { CreateTechnologyDtoType } from '../dtos/technology/create-technology.dto.ts'

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

export async function createTechnologyService(
  technologyData: CreateTechnologyDtoType
) {
  const slug = generateSlug(technologyData.name)

  const existingTechnology = await getTechnologyByNameOrSlug(
    technologyData.name,
    slug
  )

  if (existingTechnology) {
    throw new Error('Technology already exists')
  }

  const technologyToCreate = {
    ...technologyData,
    slug
  }

  return createTechnology(technologyToCreate)
}
