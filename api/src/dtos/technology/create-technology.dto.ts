import { z } from 'zod'

export const CreateTechnologyDto = z.object({
  name: z.string(),
  icon: z.string().url({ message: 'Icon deve ser uma URL válida' }),
  appIcon: z.string().url({ message: 'appIcon deve ser uma URL válida' })
})

export type CreateTechnologyDtoType = z.infer<typeof CreateTechnologyDto>
