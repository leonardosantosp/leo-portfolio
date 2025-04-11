import { z } from 'zod'

export const CreateSkillDto = z.object({
  name: z.string(),
  icon: z.string()
})
