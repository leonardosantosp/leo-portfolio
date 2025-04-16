import mongoose, { mongo } from 'mongoose'
import {
  getAllTechnologiesService,
  getTechnologyByIdService,
  createTechnologyService,
  updateTechnologyService,
  deleteTechnologyService
} from '../services/technology.service.ts'

export const getAllTechnologiesController = async (req, res) => {
  try {
    const technologies = await getAllTechnologiesService()
    return res.status(200).send(technologies)
  } catch (error) {
    console.error('Error fetching technologies:', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const getTechnologyByIdController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({ message: 'Invalid ID format' })
  }

  try {
    const technology = await getTechnologyByIdService(id)
    return res.status(200).send(technology)
  } catch (error) {
    if (error instanceof Error && error.message === 'Technology not found') {
      return res.status(404).send({ message: 'Technology not found' })
    }

    console.error('Error fetching technology:', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const createTechnologyController = async (req, res) => {
  const technologyData = req.body

  try {
    const technology = await createTechnologyService(technologyData)
    return res.status(201).send(technology)
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === 'Technology already exists'
    ) {
      return res.status(409).send({ message: 'Technology already exists' })
    }
    console.error('Error creating technology', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const updateTechnologyController = async (req, res) => {
  const technologyData = req.body
  const { id } = req.params

  if (Object.keys(technologyData).length === 0) {
    return res.status(400).send({ message: 'No fields to update' })
  }

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({ message: 'Invalid ID format' })
  }

  try {
    const technology = await updateTechnologyService(id, technologyData)

    if (!technology) {
      return res.status(404).send({ message: 'Technology not found' })
    }

    return res.status(200).send(technology)
  } catch (error) {
    if (error instanceof Error && error.message === 'Name already exists') {
      return res.status(409).send({ message: 'Name already exists' })
    }
    console.error('Error creating technology', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const deleteTechnologyController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({ message: 'Invalid ID format' })
  }

  try {
    const deletedData = await deleteTechnologyService(id)
    return res.status(200).send(deletedData)
  } catch (error) {
    if (error instanceof Error && error.message === 'Technology Not found') {
      return res.status(404).send({ message: 'Technology Not found' })
    }
    console.error('Error deleting technology', error)
    return res.status(500).send({ message: 'Internal Server error' })
  }
}
