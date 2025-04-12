import slugify from 'slugify'

export function generateSlug(name: string) {
  const normalized = name
    .replace(/^\./, 'dot')
    .replace(/\+\+/g, 'pp')
    .replace(/#/g, 'sharp')
    .replace(/\./g, '')

  return slugify(normalized, { lower: true })
}
