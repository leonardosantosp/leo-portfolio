import { z } from 'zod'

export const UpdateProjectDto = z.object({
  title: z.string().optional(),
  logo: z.string().url({ message: 'Logo must be a valid URL' }).optional(),
  mockup: z.string().url({ message: 'Mockup must be a valid URL' }).optional(),
  repository: z.string().optional(),
  siteUrl: z.string().url({ message: 'Site must be a valid URL' }).optional(),
  videoUrl: z.string().url({ message: 'Video must be a valid URL' }).optional(),
  stack: z
    .array(z.string())
    .max(6, { message: 'maximum of 6 technologies per project' })
    .optional()
})

export type UpdateProjectDtoType = z.infer<typeof UpdateProjectDto>
