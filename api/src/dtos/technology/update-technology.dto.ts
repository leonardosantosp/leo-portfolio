import { z } from 'zod'

export const UpdateTechnologyDto = z.object({
  name: z.string().optional(),
  icon: z.string().url({ message: 'Icon must be a valid URL' }).optional(),
  appIcon: z
    .string()
    .url({ message: 'AppIcon must be a valid  URL' })
    .optional()
})

export type UpdateTechnologyDtoType = z.infer<typeof UpdateTechnologyDto>
