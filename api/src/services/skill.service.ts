import {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
  getSkillByName
} from '../repository/skill.repository'

import { CreateSkillDtoType } from '../dtos/skill/create-skill.dto'
import { UpdateSkillDtoType } from '../dtos/skill/update-skill.dto'

export async function getAllSkillsService() {
  return await getAllSkills()
}

export async function getSkillByIdService(id: string) {
  const skill = await getSkillById(id)
  if (!skill) {
    throw new Error('Skill not found')
  }

  return skill
}

export async function createSkillService(skillData: CreateSkillDtoType) {
  const existingSkill = await getSkillByName(skillData.name)

  if (existingSkill) {
    throw new Error('Skill already exists')
  }

  return await createSkill(skillData)
}

export async function updateSkillService(
  id: string,
  skillData: UpdateSkillDtoType
) {
  const updateSkillData = {
    _id: id,
    ...skillData
  }

  if (skillData.name !== undefined) {
    const existingSkill = await getSkillByName(skillData.name)

    if (existingSkill && existingSkill._id.toString() !== id) {
      throw new Error('Skill name already exists')
    }
  }

  return await updateSkill(updateSkillData)
}

export async function deleteSkillService(id: string) {
  const deleted = await deleteSkill(id)

  if (!deleted) {
    throw new Error('Skill not found')
  }

  return deleted
}
