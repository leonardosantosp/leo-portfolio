import { z } from 'zod'

export const technologySchema = z.object({
  _id: z.instanceof(Object).transform(id => id.toString()),
  name: z.string(),
  slug: z.string(),
  icon: z.string(),
  appIcon: z.string()
})
