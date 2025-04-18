import { z } from 'zod'

export const CreateTechnologyDto = z.object({
  name: z.string(),
  icon: z.string().url({ message: 'Icon must be a valid URL' }),
  appIcon: z.string().url({ message: 'appIcon must be a valid URL' })
})

export type CreateTechnologyDtoType = z.infer<typeof CreateTechnologyDto>
