import {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill
} from '../repository/skill.repository'

import { CreateSkillDto } from '../dtos/skill/create-skill.dto'
import {
  UpdateSkillDto,
  UpdateSkillDtoType
} from '../dtos/skill/update-skill.dto'

export async function getAllSkillsService() {
  return await getAllSkills()
}

export async function getSkillByIdService(id: string) {
  return await getSkillById(id)
}

export async function createSkillService(skillData: unknown) {
  const result = CreateSkillDto.safeParse(skillData)

  if (!result.success) {
    throw new Error('Invalid skill data')
  }

  return await createSkill(result.data)
}

export async function updateSkillService(
  id: string,
  skillData: UpdateSkillDtoType
) {
  const { _id, ...rest } = skillData

  const updateSkillData = {
    _id: id,
    ...rest
  }
  const result = UpdateSkillDto.safeParse(updateSkillData)
  if (!result.success) {
    throw new Error('Invalid skill data')
  }
  return await updateSkill(result.data)
}

export async function deleteSkillService(id: string) {
  const deleted = await deleteSkill(id)

  if (!deleted) {
    throw new Error('Skill not found')
  }

  console.log(deleted)
  return deleted
}
