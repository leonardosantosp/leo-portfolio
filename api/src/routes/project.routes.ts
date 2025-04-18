import { z } from 'zod'
import {
  getAllProjectsController,
  getProjectByIdController,
  createProjectController,
  updateProjectController,
  deleteProjectController
} from '../controllers/project.controller'
import { projectSchema } from '../schemas/project.schema'

import { CreateProjectDto } from '../dtos/project/create-project.dto'
import { UpdateProjectDto } from '../dtos/project/update-project.dto'

export function projectRoutes(app) {
  app.get(
    '/projects',
    {
      schema: {
        summary: 'List all registered projects',
        description:
          'Retrieves a list of all projects with their metadata, including title, logo, stack, mockup, repository, slug, video and links.',
        tags: ['Projects'],
        response: {
          200: z.array(projectSchema),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    getAllProjectsController
  )

  app.get(
    '/projects/:id',
    {
      schema: {
        summary: 'Retrieve a project by its ID',
        description:
          'Fetch detailed information about a specific project using its unique MongoDB ObjectId. Returns metadata, including title, logo, stack, mockup, repository, slug, video and links.',
        tags: ['Projects'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: projectSchema,
          400: z.object({
            message: z.string()
          }),
          404: z.object({
            message: z.string()
          }),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    getProjectByIdController
  )

  app.post(
    '/projects',
    {
      schema: {
        summary: 'Create a new project',
        description:
          'Creates a new project entry in the database with a title, repository link, site URL, technologies used, logo, mockup, and video.',
        tags: ['Projects'],
        body: CreateProjectDto
      },
      response: {
        201: projectSchema,
        400: z.object({
          message: z.string(),
          error: z.string().optional()
        }),
        409: z.object({
          message: z.string()
        }),
        500: z.object({
          message: z.string(),
          error: z.string()
        })
      }
    },
    createProjectController
  )

  app.patch(
    '/projects/:id',
    {
      schema: {
        summary: 'Update an existing project',
        description:
          'Updates one or more fields of a project based on the provided ID. Supports partial updates to fields like title, logo, mockup, repository, site URL, video URL, and technology stack.',
        tags: ['Projects'],
        params: z.object({
          id: z.string()
        }),
        body: UpdateProjectDto.strict(),
        response: {
          200: projectSchema,
          400: z.object({
            message: z.string()
          }),
          404: z.object({
            message: z.string()
          }),
          409: z.object({
            message: z.string()
          }),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    updateProjectController
  )

  app.delete(
    '/projects/:id',
    {
      schema: {
        summary: 'Delete a project',
        description: 'Deletes a project from the database using its unique ID.',
        tags: ['Projects'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: projectSchema,
          400: z.object({
            message: z.string()
          }),
          404: z.object({
            message: z.string()
          }),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    deleteProjectController
  )
}
