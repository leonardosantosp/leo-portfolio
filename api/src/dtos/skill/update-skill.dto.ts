import { z } from 'zod'

export const UpdateSkillDto = z.object({
  name: z.string().optional(),
  icon: z.string().url({ message: 'Icon must be a valid URL' }).optional()
})

export type UpdateSkillDtoType = z.infer<typeof UpdateSkillDto>
