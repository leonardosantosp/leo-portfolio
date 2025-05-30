import { z } from 'zod'
import {
  getAllTechnologiesController,
  getTechnologyByIdController,
  createTechnologyController,
  updateTechnologyController,
  deleteTechnologyController,
  getTechnologyBySlugController
} from '../controllers/technology.controller'

import { technologySchema } from '../schemas/technology.schema'
import { CreateTechnologyDto } from '../dtos/technology/create-technology.dto'
import { UpdateTechnologyDto } from '../dtos/technology/update-technology.dto'
import { FastifyInstance } from 'fastify'

export function technologyRoutes(app: FastifyInstance) {
  app.get(
    '/technologies',
    {
      schema: {
        summary: 'Retrieve all technologies',
        description:
          'Fetches and returns a complete list of all technologies currently stored in the database.',
        tags: ['Technologies'],
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
        summary: 'Retrieve a technology by ID',
        description:
          'Retrieves the details of a specific technology by its unique identifier from the database.',
        tags: ['Technologies'],
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

  app.get(
    '/technologies/search/:slug',
    {
      schema: {
        description: 'Retrieve a technology by slug',
        summart:
          'Retrieves the details of a specific technology by its slug from the database.',
        tags: ['Technologies'],
        params: z.object({
          slug: z.string()
        }),
        response: {
          200: technologySchema,
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
    getTechnologyBySlugController
  )

  app.post(
    '/technologies',
    {
      preHandler: [app.authenticate],
      schema: {
        summary: 'create a new technology',
        description: 'Creates a new technology record with the provided data.',
        tags: ['Technologies'],
        body: CreateTechnologyDto,
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
      preHandler: [app.authenticate],
      schema: {
        summary: 'Update an existing technology',
        description:
          'Updates the details of an existing technology in the database based on the provided data.',
        tags: ['Technologies'],
        params: z.object({
          id: z.string()
        }),
        body: UpdateTechnologyDto.strict(),
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
      preHandler: [app.authenticate],
      schema: {
        summary: 'Delete an existing technology',
        description:
          'Removes a technology from the database based on the provided ID.',
        tags: ['Technologies'],
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
