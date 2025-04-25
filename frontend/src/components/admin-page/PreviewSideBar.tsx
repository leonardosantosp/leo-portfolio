import react from '../../assets/react.png'
import reactApp from '../../assets/app-images/react.png'
const logo = 'https://imgur.com/i9UWRS8.png'
const mockup = 'https://imgur.com/LtdTASQ.png'
const itemStack = 'https://imgur.com/mpjlXh4.png'
import { PreviewField } from './PreviewField'
import { useEffect, useState } from 'react'
import { getSkillById } from '../../api-client/skillsApi'
import type { ReturnedSkill } from '../../api-client/skillsApi'
import { useAdmin } from './AdminProvider'
import type { ReturnedTechnology } from '../../api-client/technologiesApi'
import { getTechnologyById } from '../../api-client/technologiesApi'

export const PreviewSideBar = () => {
  const { schema, selectedItemId } = useAdmin()!
  const [skill, setSkill] = useState<ReturnedSkill>({} as ReturnedSkill)
  const [technology, setTechnology] = useState<ReturnedTechnology>(
    {} as ReturnedTechnology
  )

  useEffect(() => {
    if (!selectedItemId) return
    const fetchSkills = async () => {
      const data = await getSkillById(selectedItemId)
      setSkill(data)
    }
    const fetchTechnology = async () => {
      const data = await getTechnologyById(selectedItemId)
      setTechnology(data)
    }

    if (schema === 'skill') {
      fetchSkills()
    } else if (schema === 'technology') {
      fetchTechnology()
    }
  }, [selectedItemId])

  return (
    <>
      {schema === 'skill' ? (
        <>
          <h2>{skill.name}</h2>
          <PreviewField label="Icon" value={skill.icon} type="image" />
          <PreviewField label="Name" value={skill.name} type="text" />
        </>
      ) : schema === 'technology' ? (
        <>
          <h2>React</h2>
          <>
            <div className="images-container">
              <PreviewField label="Icon" value={technology.icon} type="image" />
              <PreviewField
                label="AppIcon"
                value={technology.appIcon}
                type="image"
              />
            </div>
            <PreviewField label="Slug" value={technology.slug} type="text" />
            <PreviewField label="Name" value={technology.name} type="text" />
          </>
        </>
      ) : schema === 'project' ? (
        <>
          <h2>Full Stack Spotify</h2>
          <div className="images-container">
            <PreviewField label="Logo" value={logo} type="image" />
            <PreviewField
              label="Mockup"
              value={mockup}
              type="image"
              width={177}
              height={134}
            />
          </div>
          <div className="text-fields-container">
            <PreviewField
              label="Title"
              value="Full Stack Spotify"
              type="text"
            />
            <PreviewField
              label="Repository"
              value="full-stack-spotify"
              type="text"
            />
            <PreviewField label="Slug" value="full-stack-spotify" type="text" />
            <PreviewField
              label="Site URL"
              value="https://github.com/leonardosantosp/full-stack-spotify"
              type="url"
            />
            <PreviewField
              label="Video URL"
              value="https://github.com/leonardosantosp/full-stack-spotify"
              type="url"
            />

            <div className="text-fields">
              <h3>Stack</h3>
              <div className="stack-fields">
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
