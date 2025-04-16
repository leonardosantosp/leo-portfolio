import { z } from 'zod'
import {
  getAllTechnologiesController,
  getTechnologyByIdController,
  createTechnologyController,
  updateTechnologyController,
  deleteTechnologyController
} from '../controllers/technology.controller.ts'

import { technologySchema } from '../schemas/technology.schema.ts'

export function technologyRoutes(app) {
  app.get(
    '/technologies',
    {
      schema: {
        summary: 'Get All technologies',
        description: 'Get All technologies',
        tags: ['technologies'],
        response: {
          200: z.array(technologySchema),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    getAllTechnologiesController
  )

  app.get(
    '/technologies/:id',
    {
      schema: {
        summary: 'Get Technology by Id',
        description: 'Get Technology by Id',
        tags: ['technologies'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: technologySchema,
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
    getTechnologyByIdController
  )

  app.post(
    '/technologies',
    {
      schema: {
        summary: 'create a technology',
        description: 'create a technology',
        tags: ['technologies'],
        body: z.object({
          name: z.string(),
          icon: z.string(),
          appIcon: z.string()
        }),
        response: {
          201: technologySchema,
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
    createTechnologyController
  )

  app.patch(
    '/technologies/:id',
    {
      schema: {
        summary: 'Update Technology',
        description: 'Update Technology',
        tags: ['technologies'],
        params: z.object({
          id: z.string()
        }),
        body: z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            appIcon: z.string().optional()
          })
          .strict(),
        response: {
          200: technologySchema,
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
    updateTechnologyController
  )

  app.delete(
    '/technologies/:id',
    {
      schema: {
        summary: 'Delete Technology',
        description: 'Delete Technology',
        tags: ['technologies'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: technologySchema,
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
    deleteTechnologyController
  )
}
