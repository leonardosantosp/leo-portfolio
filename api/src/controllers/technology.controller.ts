import mongoose, { mongo } from 'mongoose'
import {
  getAllTechnologiesService,
  getTechnologyByIdService,
  createTechnologyService,
  updateTechnologyService,
  deleteTechnologyService
} from '../services/technology.service'
import { ErrorCode, ErrorMessages } from '../constants/errors'

export const getAllTechnologiesController = async (req, res) => {
  try {
    const technologies = await getAllTechnologiesService()
    return res.status(200).send(technologies)
  } catch (error) {
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_FETCHING]} Technologies: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const getTechnologyByIdController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  try {
    const technology = await getTechnologyByIdService(id)
    return res.status(200).send(technology)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: `Technology ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }

    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_FETCHING]} Technology:`,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const createTechnologyController = async (req, res) => {
  const technologyData = req.body

  try {
    const technology = await createTechnologyService(technologyData)
    return res.status(201).send(technology)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.ALREADY_EXISTS) {
      return res.status(409).send({
        message: `Technology ${ErrorMessages[ErrorCode.ALREADY_EXISTS]}`
      })
    }
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_CREATING]} Technology:`,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const updateTechnologyController = async (req, res) => {
  const technologyData = req.body
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  if (Object.keys(technologyData).length === 0) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.NO_FIELDS_TO_UPDATE] })
  }

  try {
    const updatedTechnology = await updateTechnologyService(id, technologyData)
    return res.status(200).send(updatedTechnology)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.ALREADY_EXISTS) {
      return res
        .status(409)
        .send({ message: `Name ${ErrorMessages[ErrorCode.ALREADY_EXISTS]}` })
    }

    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: `Technology ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }

    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_UPDATING]} Technology:`,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const deleteTechnologyController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  try {
    const deletedTechnology = await deleteTechnologyService(id)
    return res.status(200).send(deletedTechnology)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: `Technology ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_DELETING]} Technology: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}
