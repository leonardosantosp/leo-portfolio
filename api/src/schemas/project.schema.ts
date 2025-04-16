import { z } from 'zod'

export const projectSchema = z.object({
  _id: z.instanceof(Object).transform(id => id.toString()),
  title: z.string(),
  logo: z.string(),
  mockup: z.string(),
  repository: z.string(),
  slug: z.string(),
  siteUrl: z.string(),
  videoUrl: z.string(),
  stack: z.array(z.instanceof(Object).transform(id => id.toString()))
})
