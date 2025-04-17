import { z } from 'zod'

export const UpdateProjectDto = z.object({
  title: z.string().optional(),
  logo: z.string().url({ message: 'URL da logo é inválida' }).optional(),
  mockup: z.string().url({ message: 'URL do mockup é inválida' }).optional(),
  repository: z.string().optional(),
  siteUrl: z.string().url({ message: 'URL do site  é inválida' }).optional(),
  videoUrl: z.string().url({ message: 'URL do vídeo é inválida' }).optional(),
  stack: z
    .array(z.string())
    .max(6, { message: 'Máximo de 6 tecnologias por projeto' })
    .optional()
})

export type UpdateProjectDtoType = z.infer<typeof UpdateProjectDto>
