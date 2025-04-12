import { z } from 'zod'

export const CreateTechnologyDto = z.object({
  name: z.string(),
  slug: z.string(),
  icon: z.string(),
  appIcon: z.string()
})

export type CreateTechnologyDtoType = z.infer<typeof CreateTechnologyDto>
