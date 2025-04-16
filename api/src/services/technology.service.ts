import {
  getAllTechnologies,
  getTechnologyById,
  getTechnologyByNameOrSlug,
  createTechnology,
  updateTechnology
} from '../repository/tecnology.repository.ts'

import { generateSlug } from '../utils/generateSlug.ts'
import type { CreateTechnologyDtoType } from '../dtos/technology/create-technology.dto.ts'
import type { UpdateTechnologyDtoType } from '../dtos/technology/update-technology.dto.ts'
import mongoose from 'mongoose'

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

export async function updateTechnologyService(
  id: string,
  technologyData: UpdateTechnologyDtoType
) {
  if (!mongoose.isValidObjectId(id)) {
    throw new Error('Invalid ID format')
  }

  if (Object.keys(technologyData).length === 0) {
    throw new Error('No fields to update')
  }

  let slug: string | undefined = undefined

  if (technologyData.name !== undefined) {
    const existingTechnology = await getTechnologyByNameOrSlug(
      technologyData.name
    )

    if (existingTechnology && existingTechnology._id.toString() !== id) {
      throw new Error('Name already exists')
    }
    slug = generateSlug(technologyData.name)
  }

  const updateTechnologyData = {
    _id: id,
    ...(slug && { slug }),
    ...technologyData
  }

  return await updateTechnology(updateTechnologyData)
}
