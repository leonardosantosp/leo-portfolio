import { z } from 'zod'
import { skillSchema } from '../schemas/skill.schema'
import {
  getAllSkillsController,
  getSkillByIdController,
  createSkillController,
  updateSkillController,
  deleteSkillController
} from '../controllers/skill.controller'

import { CreateSkillDto } from '../dtos/skill/create-skill.dto'
import { UpdateSkillDto } from '../dtos/skill/update-skill.dto'
import { FastifyInstance } from 'fastify'

export function skillRoutes(app: FastifyInstance) {
  app.get(
    '/skills',
    {
      schema: {
        description: 'Retrieve all skills',
        summary: 'Fetches the complete list of skills available in the system.',
        tags: ['Skills'],
        response: {
          200: z.array(skillSchema),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    getAllSkillsController
  )

  app.get(
    '/skills/:id',
    {
      schema: {
        description: 'Retrieve a skill by ID',
        summary:
          'Fetches a single skill based on the provided unique identifier.',
        tags: ['Skills'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: skillSchema,
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
    getSkillByIdController
  )

  app.post(
    '/skills',

    {
      preHandler: [app.authenticate],
      schema: {
        description: 'Create a new skill',
        summary: 'Adds a new skill to the database using the provided data',
        tags: ['Skills'],
        body: CreateSkillDto,
        response: {
          201: skillSchema,
          400: z.object({
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
    createSkillController
  )

  app.patch(
    '/skills/:id',
    {
      preHandler: [app.authenticate],
      schema: {
        summary: 'Update a skill',
        description:
          'Updates the information of an existing skill based on the provided data.',
        tags: ['Skills'],
        params: z.object({
          id: z.string()
        }),
        body: UpdateSkillDto.strict(),
        response: {
          200: skillSchema,
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
    updateSkillController
  )

  app.delete(
    '/skills/:id',
    {
      preHandler: [app.authenticate],
      schema: {
        summary: 'Delete a skill',
        description:
          'Deletes a skill from the database using the provided skill ID.',
        tags: ['Skills'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: skillSchema,
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
    deleteSkillController
  )
}
