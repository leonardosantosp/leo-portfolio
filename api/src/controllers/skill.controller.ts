import { CreateSkillDto } from '../dtos/skill/create-skill.dto.ts'
import {
  getAllSkillsService,
  getSkillByIdService,
  createSkillService,
  deleteSkillService,
  updateSkillService
} from '../services/skill.service.ts'

import mongoose from 'mongoose'

export const getAllSkillsController = async (req, res) => {
  try {
    const skills = await getAllSkillsService()
    return res.status(200).send(skills)
  } catch (error) {
    console.error('Error fetching skills:', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const getSkillByIdController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({ message: 'Invalid ID format' })
  }

  try {
    const skill = await getSkillByIdService(id)
    return res.status(200).send(skill)
  } catch (error) {
    if (error instanceof Error && error.message === 'Skill not found') {
      return res.status(404).send({ message: 'Skill not found' })
    }
    console.error('Error fetching skill:', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const createSkillController = async (req, res) => {
  const skillData = req.body

  try {
    const skill = await createSkillService(skillData)
    return res.status(201).send(skill)
  } catch (error) {
    if (error instanceof Error && error.message === 'Skill already exists') {
      return res.status(409).send({ message: 'Skill already exists' })
    }
    console.error('Error creating skill', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const UpdateSkillController = async (req, res) => {
  const { id } = req.params
  const skillData = req.body

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({ message: 'Invalid ID format' })
  }

  if (Object.keys(skillData).length === 0) {
    return res.status(400).send({ message: 'No fields to update' })
  }

  try {
    const updated = await updateSkillService(id, skillData)

    if (!updated) {
      return res.status(404).send({ message: 'Skill not found' })
    }
    return res.status(200).send(updated)
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === 'Skill name already exists'
    ) {
      return res.status(409).send({ message: 'Skill name already exists' })
    }

    console.error('Error updating skill:', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const deleteSkillController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({ message: 'Invalid ID format' })
  }

  try {
    const deleted = await deleteSkillService(id)
    return res.status(200).send(deleted)
  } catch (error) {
    if (error instanceof Error && error.message === 'Skill not found') {
      return res.status(404).send({ message: 'Skill not found' })
    }
    console.error('Error deleting skill:', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}
