import {
  getAllSkillsService,
  getSkillByIdService,
  createSkillService,
  deleteSkillService,
  updateSkillService
} from '../services/skill.service'

import mongoose from 'mongoose'
import { ErrorCode, ErrorMessages } from '../constants/errors'
import { FastifyReply, FastifyRequest } from 'fastify'
import {
  CreateSkillRoute,
  UpdateSkillRoute,
  DeleteSkillRoute
} from '../types/skills.types'

interface SkillIdParams {
  id: string
}

interface CreateSkillBody {
  name: string
  icon: string
}

export const getAllSkillsController = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const skills = await getAllSkillsService()
    return res.status(200).send(skills)
  } catch (error) {
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_FETCHING]} Skills: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const getSkillByIdController = async (
  req: FastifyRequest<{ Params: SkillIdParams }>,
  res: FastifyReply
) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  try {
    const skill = await getSkillByIdService(id)
    return res.status(200).send(skill)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: `Skill ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_FETCHING]} Skill: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const createSkillController = async (
  req: FastifyRequest<CreateSkillRoute>,
  res: FastifyReply
) => {
  const skillData = req.body

  try {
    const skill = await createSkillService(skillData)
    return res.status(201).send(skill)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.ALREADY_EXISTS) {
      return res
        .status(409)
        .send({ message: `Skill ${ErrorMessages[ErrorCode.ALREADY_EXISTS]}` })
    }
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_CREATING]} Skill: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const updateSkillController = async (
  req: FastifyRequest<UpdateSkillRoute>,
  res: FastifyReply
) => {
  const { id } = req.params
  const skillData = req.body

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  if (Object.keys(skillData).length === 0) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.NO_FIELDS_TO_UPDATE] })
  }

  try {
    const updatedSkill = await updateSkillService(id, skillData)

    if (!updatedSkill) {
      return res
        .status(404)
        .send({ message: `Skill ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }
    return res.status(200).send(updatedSkill)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.ALREADY_EXISTS) {
      return res.status(409).send({
        message: `Skill name ${ErrorMessages[ErrorCode.ALREADY_EXISTS]}`
      })
    }

    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_UPDATING]} Skill: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}

export const deleteSkillController = async (
  req: FastifyRequest<DeleteSkillRoute>,
  res: FastifyReply
) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .send({ message: ErrorMessages[ErrorCode.INVALID_ID_FORMAT] })
  }

  try {
    const deletedSkill = await deleteSkillService(id)
    return res.status(200).send(deletedSkill)
  } catch (error) {
    if (error instanceof Error && error.message === ErrorCode.NOT_FOUND) {
      return res
        .status(404)
        .send({ message: `Skill ${ErrorMessages[ErrorCode.NOT_FOUND]}` })
    }
    console.error(
      `${ErrorMessages[ErrorCode.ERROR_WHILE_DELETING]} Skill: `,
      error
    )
    return res
      .status(500)
      .send({ message: ErrorMessages[ErrorCode.INTERNAL_SERVER_ERROR] })
  }
}
