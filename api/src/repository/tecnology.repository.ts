import Technology from '../models/Technology.ts'

export async function getAllTechnologies() {
  return await Technology.find()
}

export async function getTechnologyById(id: string) {
  return await Technology.findById(id)
}

export async function getTechnologyByNameOrSlug(name: string, slug: string) {
  return await Technology.findOne({
    $or: [{ name }, { slug }]
  })
}

export async function createTechnology(technologyData: unknown) {
  const technology = new Technology(technologyData)
  return await technology.save()
}
