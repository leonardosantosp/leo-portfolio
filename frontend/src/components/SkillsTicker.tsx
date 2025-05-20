import { useEffect, useState } from 'react'
import { getSkills } from '../api-client/skillsApi'

type Skill = {
  _id: string
  icon: string
  name: string
}

export const SkillsTicker = () => {
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await getSkills()
      setSkills(response)
    }
    fetchSkills()
  }, [])

  return (
    <div className="skills-ticker">
      <div className="skills-ticker__ticker">
        {[...skills, ...skills].map(item => (
          <div className="skills-ticker__ticker-item" key={`${item._id}`}>
            <span className="icon">
              <img src={item.icon} alt={`Iconde de ${item.name}`} />
            </span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
