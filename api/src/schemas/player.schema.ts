import { z } from 'zod'

export const skillSchema = z.object({
  _id: z.instanceof(Object).transform(id => id.toString()),
  name: z.string(),
  icon: z.string()
})
