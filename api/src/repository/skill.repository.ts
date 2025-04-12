import Skill from '../models/Skill.ts'

type skillType = {
  _id: string
  name?: string
  icon?: string
}

export async function getAllSkills() {
  return await Skill.find()
}

export async function getSkillById(id: string) {
  return await Skill.findById(id)
}

export async function getSkillByName(name: string) {
  return await Skill.findOne({ name })
}

export async function createSkill(skillData: unknown) {
  const skill = new Skill(skillData)
  return await skill.save()
}

export async function updateSkill(skillData: skillType) {
  const { _id, ...updateFields } = skillData
  return await Skill.findByIdAndUpdate(_id, updateFields, {
    new: true,
    runValidators: true
  })
}

export async function deleteSkill(id: string) {
  return await Skill.findByIdAndDelete(id)
}
