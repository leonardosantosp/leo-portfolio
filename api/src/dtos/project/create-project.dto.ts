import { z } from 'zod'

export const CreateProjectDto = z.object({
  title: z.string().max(30),
  logo: z.string().url({ message: 'Logo deve ser uma URL válida' }),
  mockup: z.string().url({ message: 'Mockup deve ser uma URL válida' }),
  repository: z.string(),
  siteUrl: z.string().url({ message: 'SiteUrl deve ser uma URL válida' }),
  videoUrl: z.string().url({ message: 'Video deve ser uma URL válida' }),
  stack: z.array(z.string())
})

export type CreateProjectDtoType = z.infer<typeof CreateProjectDto>
