import { z } from 'zod'

export const CreateSkillDto = z.object({
  name: z.string(),
  icon: z.string().url({ message: 'Icon must be a valid URL' })
})

export type CreateSkillDtoType = z.infer<typeof CreateSkillDto>
