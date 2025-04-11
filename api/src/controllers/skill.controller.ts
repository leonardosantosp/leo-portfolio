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

    if (!skill) {
      return res.status(404).send({ message: 'Skill not found' })
    }
    return res.status(200).send(skill)
  } catch (error) {
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
    if (error instanceof Error && error.message === 'Invalid skill data') {
      return res.status(400).send({ message: 'Invalid skill data' })
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

  try {
    const updated = await updateSkillService(id, skillData)

    if (!updated) {
      return res.status(404).send({ message: 'Skill not found' })
    }
    return res.status(200).send(updated)
  } catch (error) {
    console.error('Error updating skill:', error)
    if (error instanceof Error && error.message === 'Invalid skill data') {
      return res.status(400).send({ message: 'Invalid skill data' })
    }
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
    if (!deleted) {
      return res.status(404).send({ message: 'Skill not found' })
    }
    return res.status(200).send(deleted)
  } catch (error) {
    if (error instanceof Error && error.message === 'Skill not found') {
      return res.status(404).send({ message: 'Skill not found' })
    }
    console.error('Error deleting skill:', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}
