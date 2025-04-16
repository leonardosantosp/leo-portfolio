import { z } from 'zod'

export const UpdateTechnologyDto = z.object({
  name: z.string().optional(),
  icon: z.string().optional(),
  appIcon: z.string().optional()
})

export type UpdateTechnologyDtoType = z.infer<typeof UpdateTechnologyDto>
