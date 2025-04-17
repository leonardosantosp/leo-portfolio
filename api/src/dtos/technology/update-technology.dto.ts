import { z } from 'zod'

export const UpdateTechnologyDto = z.object({
  name: z.string().optional(),
  icon: z.string().url({ message: 'Icon deve ser uma URL válida' }).optional(),
  appIcon: z
    .string()
    .url({ message: 'AppIcon deve ser uma URL válida' })
    .optional()
})

export type UpdateTechnologyDtoType = z.infer<typeof UpdateTechnologyDto>
