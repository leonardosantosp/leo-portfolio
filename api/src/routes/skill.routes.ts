import { transformer, z } from 'zod'
import { skillSchema } from '../schemas/player.schema.ts'
import {
  getAllSkillsController,
  getSkillByIdController,
  createSkillController,
  UpdateSkillController,
  deleteSkillController
} from '../controllers/skill.controller.ts'

export function skillRoutes(app) {
  app.get(
    '/skills',
    {
      schema: {
        description: 'Get all skills',
        summary: 'Get all skills',
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
        description: 'Get skill by id',
        summary: 'Get skill by id',
        tags: ['Skills'],
        response: {
          200: skillSchema,
          404: z.object({
            message: z.string(),
            error: z.string()
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
      schema: {
        description: 'Create a new skill',
        summary: 'Create a new skill',
        tags: ['Skills'],
        body: z.object({
          name: z.string(),
          icon: z.string()
        }),
        response: {
          200: skillSchema,
          400: z.object({
            message: z.string(),
            error: z.string()
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
      schema: {
        summary: 'Update a skill',
        description: 'Update a skill',
        tags: ['Skills'],
        params: z.object({
          id: z.string()
        }),
        body: z.object({
          name: z.string().optional(),
          icon: z.string().optional()
        }),
        response: {
          200: skillSchema,
          400: z.object({
            message: z.string(),
            error: z.string()
          }),
          404: z.object({
            message: z.string(),
            error: z.string()
          }),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    UpdateSkillController
  )

  app.delete(
    '/skills/:id',
    {
      schema: {
        summary: 'Delete a skill',
        description: 'Delete a skill',
        tags: ['Skills'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: skillSchema,
          400: z.object({
            message: z.string(),
            error: z.string()
          }),
          404: z.object({
            message: z.string(),
            error: z.string()
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
