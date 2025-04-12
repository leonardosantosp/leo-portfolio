import { z } from 'zod'

export const CreateSkillDto = z.object({
  name: z.string(),
  icon: z.string()
})

export type CreateSkillDtoType = z.infer<typeof CreateSkillDto>
