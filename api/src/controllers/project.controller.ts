import mongoose from 'mongoose'
import {
  getAllProjectsService,
  getProjectByIdService,
  createProjectService,
  updateProjectService
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

export const createProjectController = async (req, res) => {
  const projectData = req.body

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

export const updateProjectController = async (req, res) => {
  const { id } = req.params
  const projectData = req.body

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({ message: 'Invalid Id Format' })
  }

  if (Object.keys(projectData).length === 0) {
    return res.status(400).send({ message: 'No fields to update' })
  }

  try {
    const project = await updateProjectService(id, projectData)

    if (!project) {
      return res.status(404).send({ message: 'Project Not Found' })
    }

    return res.status(200).send(project)
  } catch (error) {
    const DUPLICATE_ERROR =
      'Another project with the same title, slug, repository, or site URL already exists'
    if (error instanceof Error && error.message === DUPLICATE_ERROR) {
      return res.status(409).send({
        message: DUPLICATE_ERROR
      })
    }
    console.error('Error while updating project', error)
    return res.status(500).send({ error: 'Internal Server Error' })
  }
}
