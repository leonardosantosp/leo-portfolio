import { z } from 'zod'

export const UpdateSkillDto = z.object({
  name: z.string().optional(),
  icon: z.string().optional()
})

export type UpdateSkillDtoType = z.infer<typeof UpdateSkillDto>
