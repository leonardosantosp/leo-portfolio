import mongoose from 'mongoose'
import {
  getAllProjectsService,
  getProjectByIdService,
  createProjectService,
  updateProjectService,
  deleteProjectService
} from '../services/project.service'
import { ErrorCode, ErrorMessages } from '../constants/errors'

export const getAllProjectsController = async (req, res) => {
  try {
    const projects = await getAllProjectsService()
    return res.status(200).send(projects)
  } catch (error) {
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_FETCHING]} Projects: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const getProjectByIdController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  try {
    const project = await getProjectByIdService(id)
    return res.status(200).send(project)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: `Project ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_FETCHING]} Project: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const createProjectController = async (req, res) => {
  const projectData = req.body

  try {
    const project = await createProjectService(projectData)
    return res.status(201).send(project)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.ALREADY_EXISTS) {
      return res
        .status(409)
        .send({ message: `Project ${ErrorMessages[ErrorCode.ALREADY_EXISTS]}` })
    }
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_CREATING]} Project: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const updateProjectController = async (req, res) => {
  const { id } = req.params
  const projectData = req.body

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  if (Object.keys(projectData).length === 0) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.NO_FIELDS_TO_UPDATE] })
  }

  try {
    const updatedProject = await updateProjectService(id, projectData)
    return res.status(200).send(updatedProject)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.ALREADY_EXISTS) {
      return res.status(409).send({
        message: `Another project with the same title, slug, repository, or site URL ${
          ErrorMessages[ErrorCode.ALREADY_EXISTS]
        }`
      })
    }

    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: `Project ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }

    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_UPDATING]} Project: `,
      error
    )
    return res
      .status(500)
      .send({ error: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const deleteProjectController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  try {
    const deletedProject = await deleteProjectService(id)
    return res.status(200).send(deletedProject)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: `Project ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_DELETING]} Project: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}
