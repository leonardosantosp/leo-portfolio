import Technology from '../models/Technology.ts'

export async function getAllTechnologies() {
  return await Technology.find()
}

export async function getTechnologyById(id: string) {
  return await Technology.findById(id)
}

export async function getTechnologyByName(name: string) {
  return await Technology.findOne({ name })
}
