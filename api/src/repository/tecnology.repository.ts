import Technology from '../models/Technology.ts'

type technologyType = {
  _id: string
  name?: string
  slug?: string
  icon?: string
  appIcon?: string
}
export async function getAllTechnologies() {
  return await Technology.find()
}

export async function getTechnologyById(id: string) {
  return await Technology.findById(id)
}

export async function getTechnologyByNameOrSlug(name?: string, slug?: string) {
  const conditions: Record<string, any>[] = []
  if (name) conditions.push({ name })
  if (slug) conditions.push({ slug })

  return await Technology.findOne({
    $or: conditions
  })
}

export async function createTechnology(technologyData: unknown) {
  const technology = new Technology(technologyData)
  return await technology.save()
}

export async function updateTechnology(technologyData: technologyType) {
  const { _id, ...updateFiels } = technologyData
  return await Technology.findByIdAndUpdate(_id, updateFiels, {
    new: true,
    runValidators: true
  })
}

export async function deleteTechnology(id: string) {
  return await Technology.findByIdAndDelete(id)
}
