import mongoose from 'mongoose'
import {
  getAllProjectsService,
  getProjectByIdService,
  createProjectService
} from '../services/project.service'

import { CreateProjectDto } from '../dtos/project/create-project.dto'

export const getAllProjectsController = async (req, res) => {
  try {
    const projects = await getAllProjectsService()
    return res.status(200).send(projects)
  } catch (error) {
    console.error('Error while fetching projects', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}

export const getProjectByIdController = async (req, res) => {
  const { id } = req.params

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({ message: 'Invalid ID format' })
  }

  try {
    const project = await getProjectByIdService(id)
    return res.status(200).send(project)
  } catch (error) {
    if (error instanceof Error && error.message === 'Project Not Found') {
      return res.status(404).send({ message: 'Project Not Found' })
    }
    console.error('Error while fetching Project', error)
    return res.status(500).send({ message: 'Internal Server error' })
  }
}

export const createProjectController = async (req, res) => {
  const projectData = req.body
  const result = CreateProjectDto.safeParse(req.body)

  if (!result.success) {
    return res.status(400).send({
      message: 'Erro de validação',
      error: result.error.format()
    })
  }
  try {
    const project = await createProjectService(projectData)
    return res.status(201).send(project)
  } catch (error) {
    if (error instanceof Error && error.message === 'Project already exists') {
      return res.status(409).send({ message: 'Project already exists' })
    }
    console.error('Error while createing project', error)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}
