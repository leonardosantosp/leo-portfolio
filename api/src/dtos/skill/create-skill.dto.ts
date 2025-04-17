import { z } from 'zod'

export const CreateSkillDto = z.object({
  name: z.string(),
  icon: z.string().url({ message: 'Icon deve ser uma URL válida' })
})

export type CreateSkillDtoType = z.infer<typeof CreateSkillDto>
