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
import { getProjectById, ReturnedProject } from '../../api-client/projectsApi'

export const PreviewSideBar = () => {
  const { schema, selectedItemId } = useAdmin()!
  const [skill, setSkill] = useState<ReturnedSkill>({} as ReturnedSkill)
  const [technology, setTechnology] = useState<ReturnedTechnology>(
    {} as ReturnedTechnology
  )
  const [project, setProject] = useState<ReturnedProject>({} as ReturnedProject)
  const [projectStack, setProjectStack] = useState<ReturnedSkill[]>([])

  useEffect(() => {
    if (!selectedItemId) return

    const fetchSkill = async () => {
      const data = await getSkillById(selectedItemId)
      setSkill(data)
    }

    const fetchTechnology = async () => {
      const data = await getTechnologyById(selectedItemId)
      setTechnology(data)
    }

    const fetchStack = async (list: string[]) => {
      const stack = await Promise.all(
        list.map(async item => {
          try {
            const skill = await getTechnologyById(item)
            return skill
          } catch (error) {
            console.warn(`Skill com id ${item} não encontrada. Ignorando.`)
            return null
          }
        })
      )
      setProjectStack(stack)
    }

    const fetchProject = async () => {
      const data = await getProjectById(selectedItemId)
      await fetchStack(data.stack)
      setProject(data)
    }

    if (schema === 'skill') {
      fetchSkill()
    } else if (schema === 'technology') {
      fetchTechnology()
    } else if (schema === 'project') {
      fetchProject()
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
          <h2>{project.title}</h2>
          <div className="images-container">
            <PreviewField label="Logo" value={project.logo} type="image" />
            <PreviewField
              label="Mockup"
              value={project.mockup}
              type="image"
              width={177}
              height={134}
            />
          </div>
          <div className="text-fields-container">
            <PreviewField label="Title" value={project.title} type="text" />
            <PreviewField
              label="Repository"
              value={project.repository}
              type="text"
            />
            <PreviewField label="Slug" value={project.slug} type="text" />
            <PreviewField label="Site URL" value={project.siteUrl} type="url" />
            <PreviewField
              label="Video URL"
              value={project.videoUrl}
              type="url"
            />

            <div className="text-fields">
              <h3>Stack</h3>
              <div className="stack-fields">
                {projectStack.map(technology =>
                  technology ? (
                    <>
                      <div className="stack-fields-item" key={technology._id}>
                        <img
                          src={technology.icon}
                          alt=""
                          height={15}
                          width={15}
                        />
                        <p>{technology.name}</p>
                      </div>
                    </>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
