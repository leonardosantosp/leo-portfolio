import { z } from 'zod'

export const CreateProjectDto = z.object({
  title: z.string().max(30),
  logo: z.string().url({ message: 'Logo must be a valid URL' }),
  mockup: z.string().url({ message: 'Mockup must be a valid URL' }),
  repository: z.string(),
  siteUrl: z.string().url({ message: 'SiteUrl must be a valid URL' }),
  videoUrl: z.string().url({ message: 'Video must be a valid URL' }),
  stack: z
    .array(z.string())
    .max(6, { message: 'Maximum of 6 technologies per project' })
})

export type CreateProjectDtoType = z.infer<typeof CreateProjectDto>
