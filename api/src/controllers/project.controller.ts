import mongoose from 'mongoose'
import {
  getAllProjectsService,
  getProjectByIdService,
  createProjectService,
  updateProjectService,
  deleteProjectService,
  getProjectsByTechnologyService,
  getProjectByRepositoryService
} from '../services/project.service'
import { ErrorCode, ErrorMessages } from '../constants/errors'
import { FastifyReply, FastifyRequest } from 'fastify'
import {
  UpdateProjectRoute,
  DeleteProjectRoute,
  CreateProjectRoute
} from '../types/projects.types'

interface ProjectParams {
  id: string
}

interface TechnologyParams {
  slug: string
}

interface RepositoryParams {
  repository: string
}

export const getAllProjectsController = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
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

export const getProjectByIdController = async (
  req: FastifyRequest<{ Params: ProjectParams }>,
  res: FastifyReply
) => {
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

export const getProjectsByTechnologyController = async (
  req: FastifyRequest<{ Params: TechnologyParams }>,
  res: FastifyReply
) => {
  const { slug } = req.params

  try {
    const projects = await getProjectsByTechnologyService(slug)
    return res.status(200).send(projects)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: ` technology ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
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

export const getProjectByRepositoryController = async (
  req: FastifyRequest<{ Params: RepositoryParams }>,
  res: FastifyReply
) => {
  const { repository } = req.params

  try {
    const project = await getProjectByRepositoryService(repository)
    return res.status(200).send(project)
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === ErrorMessages[ErrorCode.NOT_FOUND]
    ) {
      res
        .status(404)
        .send({ message: ` project ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
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

export const createProjectController = async (
  req: FastifyRequest<CreateProjectRoute>,
  res: FastifyReply
) => {
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

export const updateProjectController = async (
  req: FastifyRequest<UpdateProjectRoute>,
  res: FastifyReply
) => {
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

export const deleteProjectController = async (
  req: FastifyRequest<DeleteProjectRoute>,
  res: FastifyReply
) => {
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
