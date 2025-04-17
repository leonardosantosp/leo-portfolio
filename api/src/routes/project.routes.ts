import { z } from 'zod'
import {
  getAllProjectsController,
  getProjectByIdController,
  createProjectController
} from '../controllers/project.controller'
import { projectSchema } from '../schemas/project.schema'

import { CreateProjectDto } from '../dtos/project/create-project.dto'

export function projectRoutes(app) {
  app.get(
    '/projects',
    {
      schema: {
        summary: 'Get All Projects',
        description: 'Get All Projects',
        tags: ['Porjects'],
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
        summary: 'Get Project By Id',
        description: 'Get Project By Id',
        tags: ['Project'],
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
        summary: 'create project',
        description: 'create project',
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
}
