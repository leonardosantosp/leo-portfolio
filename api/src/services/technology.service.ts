import {
  getAllTechnologies,
  getTechnologyById,
  checkTechnologyUniqueness,
  createTechnology,
  updateTechnology,
  deleteTechnology
} from '../repository/technology.repository'

import { generateSlug } from '../utils/generateSlug'
import type { CreateTechnologyDtoType } from '../dtos/technology/create-technology.dto'
import type { UpdateTechnologyDtoType } from '../dtos/technology/update-technology.dto'
import { ErrorCode } from '../constants/errors'

export async function getAllTechnologiesService() {
  return await getAllTechnologies()
}

export async function getTechnologyByIdService(id: string) {
  const technology = await getTechnologyById(id)

  if (!technology) {
    throw new Error(ErrorCode.NOT_FOUND)
  }

  return technology
}

export async function createTechnologyService(
  technologyData: CreateTechnologyDtoType
) {
  const slug = generateSlug(technologyData.name)

  const duplicateTechnology = await checkTechnologyUniqueness(
    technologyData.name,
    slug
  )

  if (duplicateTechnology) {
    throw new Error(ErrorCode.ALREADY_EXISTS)
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
  const existingTechnology = await getTechnologyById(id)

  if (!existingTechnology) throw new Error(ErrorCode.NOT_FOUND)

  let slug: string | undefined = undefined

  if (technologyData.name !== undefined) {
    slug = generateSlug(technologyData.name)
    const duplicateTechnology = await checkTechnologyUniqueness(
      technologyData.name,
      slug
    )

    if (duplicateTechnology && duplicateTechnology._id.toString() !== id) {
      throw new Error(ErrorCode.ALREADY_EXISTS)
    }
  }

  const updateTechnologyData = {
    _id: id,
    ...(slug && { slug }),
    ...technologyData
  }

  return await updateTechnology(updateTechnologyData)
}

export async function deleteTechnologyService(id: string) {
  const deletedTechnology = await deleteTechnology(id)

  if (!deletedTechnology) {
    throw new Error(ErrorCode.NOT_FOUND)
  }

  return deletedTechnology
}
