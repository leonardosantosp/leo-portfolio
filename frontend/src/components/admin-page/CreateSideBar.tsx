import { Trash2, ArrowLeftRight, ChevronDown, ChevronUp } from 'lucide-react'
import { FormField } from './FormField'
import { useState, useEffect } from 'react'
import { createSkill } from '../../api-client/skillsApi'
import {
  createTechnology,
  getTechnologies,
  ReturnedTechnology
} from '../../api-client/technologiesApi'
import { useAdmin } from './AdminProvider'

import { createProject } from '../../api-client/projectsApi'

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const CreateSideBar = () => {
  const [allTechnologies, setAllTechnologies] = useState<ReturnedTechnology[]>(
    []
  )
  const [stack, setStack] = useState<ReturnedTechnology[]>([])

  const [skillData, setSkillData] = useState({
    name: '',
    icon: ''
  })

  const [technologyData, setTechnologyData] = useState({
    name: '',
    icon: '',
    appIcon: ''
  })

  const [projectData, setProjectData] = useState<{
    title: string
    logo: string
    mockup: string
    repository: string
    siteUrl: string
    videoUrl: string
    stack: ReturnedTechnology[]
  }>({
    title: '',
    logo: '',
    mockup: '',
    repository: '',
    siteUrl: '',
    videoUrl: '',
    stack: []
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const { schema, setIsMenuVisible, setReloadList } = useAdmin()!
  const [errors, setErrors] = useState<{
    name?: string
    icon?: string
    appIcon?: string
    title?: string
    logo?: string
    mockup?: string
    stack?: string
    repository?: string
    siteUrl?: string
    videoUrl?: string
  }>({})

  useEffect(() => {
    const fetchTechnologies = async () => {
      const data = await getTechnologies()
      setAllTechnologies(data)
    }
    fetchTechnologies()
  }, [])

  useEffect(() => {
    if (schema === 'project') {
      setProjectData(prev => ({
        ...prev,
        stack: stack
      }))
    }
  }, [schema, stack])

  const handleSubmit = async () => {
    const newErrors: {
      name?: string
      icon?: string
      appIcon?: string
      title?: string
      logo?: string
      mockup?: string
      stack?: string
      repository?: string
      siteUrl?: string
      videoUrl?: string
    } = {}

    if (schema === 'skill') {
      if (!skillData.name.trim()) {
        newErrors.name = 'Campo obrigatório'
      }

      if (!skillData.icon.trim()) {
        newErrors.icon = 'Campo obrigatório'
      } else if (!isValidUrl(skillData.icon)) {
        newErrors.icon = 'URL inválida'
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }
    } else if (schema === 'technology') {
      if (!technologyData.name.trim()) {
        newErrors.name = 'Campo obrigatório'
      }

      if (!technologyData.icon.trim()) {
        newErrors.icon = 'Campo obrigatório'
      } else if (!isValidUrl(technologyData.icon)) {
        newErrors.icon = 'URL inválida'
      }

      if (!technologyData.appIcon.trim()) {
        newErrors.appIcon = 'Campo obrigatório'
      } else if (!isValidUrl(technologyData.appIcon)) {
        newErrors.appIcon = 'URL inválida'
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }
    } else if (schema === 'project') {
      console.log(projectData)
      if (!projectData.title.trim()) {
        newErrors.title = 'Campo obrigatório'
      }
      if (!projectData.repository.trim()) {
        newErrors.repository = 'Campo obrigatório'
      }

      if (!projectData.logo.trim()) {
        newErrors.logo = 'Campo obrigatório'
      } else if (!isValidUrl(projectData.logo)) {
        newErrors.logo = 'URL inválida'
      }
      if (!projectData.mockup.trim()) {
        newErrors.mockup = 'Campo obrigatório'
      } else if (!isValidUrl(projectData.mockup)) {
        newErrors.mockup = 'URL inválida'
      }
      if (!projectData.siteUrl.trim()) {
        newErrors.siteUrl = 'Campo obrigatório'
      } else if (!isValidUrl(projectData.siteUrl)) {
        newErrors.siteUrl = 'URL inválida'
      }
      if (!projectData.videoUrl.trim()) {
        newErrors.videoUrl = 'Campo obrigatório'
      } else if (!isValidUrl(projectData.videoUrl)) {
        newErrors.videoUrl = 'URL inválida'
      }

      if (stack.length === 0) {
        newErrors.stack = 'Stack vazia'
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }
    }

    try {
      if (schema === 'skill') {
        const newSkill = await createSkill(skillData)
        setIsMenuVisible(false)
        setReloadList(true)
      }
      if (schema === 'technology') {
        const newTechnology = await createTechnology(technologyData)
        setIsMenuVisible(false)
        setReloadList(true)
      }

      if (schema === 'project') {
        const formattedProjectData = {
          ...projectData,
          stack: projectData.stack.map(tech => tech._id)
        }
        const newProject = await createProject(formattedProjectData)
        setIsMenuVisible(false)
        setReloadList(true)
      }
    } catch (error: any) {
      const message = error.response?.data?.message || error.message
      if (message.includes('already')) {
        newErrors.name = 'Campo com algum desses valores já existe'
        newErrors.title = 'Campo com algum desses valores já existe'
        newErrors.repository = 'Campo com algum desses valores já existe'
        newErrors.siteUrl = 'Campo com algum desses valores já existe'
        setErrors(newErrors)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (schema === 'skill') {
      setSkillData({ ...skillData, [name]: value })
    } else if (schema === 'technology') {
      setTechnologyData({ ...technologyData, [name]: value })
    } else if (schema === 'project') {
      setProjectData(prev => ({
        ...prev,
        [name]: value,
        stack: stack
      }))
      setProjectData({ ...projectData, [name]: value })
    }
  }

  const handleAddToStack = (technology: ReturnedTechnology) => {
    setStack(prev => [...prev, technology])
  }

  const handleRemoveFromStack = (id: string) => {
    setStack(prev => prev.filter(tech => tech._id !== id))
  }

  return (
    <>
      {schema === 'project' ? (
        <>
          <div className="text-fields-container">
            <FormField
              label="title"
              placeholder={`${schema} title`}
              onChange={handleChange}
              error={errors.title}
            />
            <FormField
              label="logo"
              placeholder="logo url"
              onChange={handleChange}
              error={errors.logo}
            />
            <FormField
              label="mockup"
              placeholder="mockup url"
              onChange={handleChange}
              error={errors.mockup}
            />
            <FormField
              label="repository"
              placeholder="repository name"
              onChange={handleChange}
              error={errors.repository}
            />
            <FormField
              label="siteUrl"
              placeholder="site url"
              onChange={handleChange}
              error={errors.siteUrl}
            />
            <FormField
              label="videoUrl"
              placeholder="video url"
              onChange={handleChange}
              error={errors.videoUrl}
            />
          </div>
          <h3>Select Technologies</h3>
          <div className="stack-fields create-stack-fields">
            {dropdownOpen ? (
              <div className="stack-fields__add-button stack-fields__add-button-active">
                <div className="add-button-active">
                  <ChevronUp
                    onClick={() => setDropdownOpen(false)}
                    cursor={'pointer'}
                    size={20}
                  />
                  <p>Add</p>
                </div>
                {allTechnologies
                  .filter(
                    technology =>
                      !stack.map(item => item._id).includes(technology._id)
                  )
                  .map(technology => (
                    <div
                      className="stack-fields-item stack-fields-item-active"
                      key={technology._id}
                      onClick={() => handleAddToStack(technology)}
                    >
                      <img
                        src={technology.icon}
                        alt=""
                        height={15}
                        width={15}
                      />
                      <p>{technology.name}</p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="stack-fields__add-button">
                <ChevronDown
                  onClick={() => setDropdownOpen(true)}
                  cursor={'pointer'}
                  size={20}
                />
                <p>Add</p>
              </div>
            )}

            <ArrowLeftRight color="#9CA3AF" />

            <div className={`${errors.stack && 'error'} stack-card`}>
              {errors.stack ? (
                <span className="error-text">{errors.stack}</span>
              ) : (
                ''
              )}

              <div className="stack-fields">
                {stack.map(item => (
                  <div className="stack-fields-item" key={item._id}>
                    <img src={item.icon} alt="" height={15} width={15} />
                    <p>{item.name}</p>
                    <div className="stack-fields-icon">
                      <Trash2
                        cursor={'pointer'}
                        size={15}
                        onClick={() => handleRemoveFromStack(item._id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : schema === 'skill' ? (
        <>
          <div className="text-fields-container">
            <FormField
              label="icon"
              placeholder="icon url"
              onChange={handleChange}
              error={errors.icon}
            />
            <FormField
              label="name"
              placeholder={`${schema} name`}
              onChange={handleChange}
              error={errors.name}
            />
          </div>
        </>
      ) : schema === 'technology' ? (
        <>
          <div className="text-fields-container">
            <FormField
              label="icon"
              placeholder="icon url"
              onChange={handleChange}
              error={errors.icon}
            />
            <FormField
              label="appIcon"
              placeholder="app icon url"
              onChange={handleChange}
              error={errors.appIcon}
            />
            <FormField
              label="name"
              placeholder={`${schema} name`}
              onChange={handleChange}
              error={errors.name}
            />
          </div>
        </>
      ) : null}
      {['project', 'skill', 'technology'].includes(schema) && (
        <div className="create-stack-fields__buttons">
          <button
            className="create-stack-fields__buttons-add"
            type="button"
            onClick={() => {
              handleSubmit()
            }}
          >
            {`Add ${schema.charAt(0).toUpperCase() + schema.slice(1)}`}
          </button>
          <button
            className="create-stack-fields__buttons-discard"
            type="button"
            onClick={() => setIsMenuVisible(false)}
          >
            Discard
          </button>
        </div>
      )}
    </>
  )
}
