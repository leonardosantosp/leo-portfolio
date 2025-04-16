import mongoose from 'mongoose'
import {
  getAllProjectsService,
  getProjectByIdService
} from '../services/project.service'

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
