import { z } from 'zod'

export const UpdateSkillDto = z.object({
  _id: z.string(),
  name: z.string().optional(),
  icon: z.string().optional()
})

export type UpdateSkillDtoType = z.infer<typeof UpdateSkillDto>
