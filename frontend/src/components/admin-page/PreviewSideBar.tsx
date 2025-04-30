import { PreviewField } from './PreviewField'
import { useEffect, useState } from 'react'
import { getSkillById } from '../../api-client/skillsApi'
import type { ReturnedSkill } from '../../api-client/skillsApi'
import { useAdmin } from './AdminProvider'
import type { ReturnedTechnology } from '../../api-client/technologiesApi'
import { getTechnologyById } from '../../api-client/technologiesApi'
import { getProjectById, ReturnedProject } from '../../api-client/projectsApi'

type PreviewSideBarProps = {
  theme?: boolean
}

export const PreviewSideBar = ({ theme }: PreviewSideBarProps) => {
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
          <h2 style={{ color: theme ? 'black' : '' }}>{skill.name}</h2>
          <PreviewField
            label="Icon"
            value={skill.icon}
            type="image"
            theme={theme}
          />
          <PreviewField
            label="Name"
            value={skill.name}
            type="text"
            theme={theme}
          />
        </>
      ) : schema === 'technology' ? (
        <>
          <h2>{technology.name}</h2>
          <>
            <div className="images-container">
              <PreviewField
                label="Icon"
                value={technology.icon}
                type="image"
                theme={theme}
              />
              <PreviewField
                label="AppIcon"
                value={technology.appIcon}
                type="image"
                theme={theme}
              />
            </div>
            <PreviewField
              label="Slug"
              value={technology.slug}
              type="text"
              theme={theme}
            />
            <PreviewField
              label="Name"
              value={technology.name}
              type="text"
              theme={theme}
            />
          </>
        </>
      ) : schema === 'project' ? (
        <>
          <h2>{project.title}</h2>
          <div className="images-container">
            <PreviewField
              label="Logo"
              value={project.logo}
              type="image"
              theme={theme}
            />
            <PreviewField
              label="Mockup"
              value={project.mockup}
              type="image"
              width={177}
              height={134}
              theme={theme}
            />
          </div>
          <div className="text-fields-container">
            <PreviewField
              label="Title"
              value={project.title}
              type="text"
              theme={theme}
            />
            <PreviewField
              label="Repository"
              value={project.repository}
              type="text"
              theme={theme}
            />
            <PreviewField
              label="Slug"
              value={project.slug}
              type="text"
              theme={theme}
            />
            <PreviewField
              label="Site URL"
              value={project.siteUrl}
              type="url"
              theme={theme}
            />
            <PreviewField
              label="Video URL"
              value={project.videoUrl}
              type="url"
              theme={theme}
            />

            <div className={`text-fields ${theme && 'text-fields__light'}`}>
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
