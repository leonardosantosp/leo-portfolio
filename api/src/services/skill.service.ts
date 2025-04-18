import {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
  getSkillByName
} from '../repository/skill.repository'

import type { CreateSkillDtoType } from '../dtos/skill/create-skill.dto'
import type { UpdateSkillDtoType } from '../dtos/skill/update-skill.dto'
import { ErrorCode } from '../constants/errors'

export async function getAllSkillsService() {
  return await getAllSkills()
}

export async function getSkillByIdService(id: string) {
  const skill = await getSkillById(id)
  if (!skill) {
    throw new Error(ErrorCode.NOT_FOUND)
  }

  return skill
}

export async function createSkillService(skillData: CreateSkillDtoType) {
  const duplicateSkill = await getSkillByName(skillData.name)

  if (duplicateSkill) {
    throw new Error(ErrorCode.ALREADY_EXISTS)
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
      throw new Error(ErrorCode.ALREADY_EXISTS)
    }
  }

  return await updateSkill(updateSkillData)
}

export async function deleteSkillService(id: string) {
  const deletedSkill = await deleteSkill(id)

  if (!deletedSkill) {
    throw new Error(ErrorCode.NOT_FOUND)
  }

  return deletedSkill
}
