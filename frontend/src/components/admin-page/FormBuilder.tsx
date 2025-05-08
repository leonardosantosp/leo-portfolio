import { Trash2, ArrowLeftRight, ChevronDown, ChevronUp } from 'lucide-react'
import { FormField } from './FormField'
import { useState, useEffect } from 'react'
import {
  createSkill,
  updateSkill,
  getSkillById
} from '../../api-client/skillsApi'
import type { ReturnedTechnology } from '../../api-client/technologiesApi'
import {
  createTechnology,
  getTechnologies,
  getTechnologyById,
  updateTechnology
} from '../../api-client/technologiesApi'
import { useAdmin } from './AdminProvider'
import { toast } from 'react-toastify'
import {
  createProject,
  getProjectById,
  updateProject
} from '../../api-client/projectsApi'

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const FormBuilder = () => {
  const [allTechnologies, setAllTechnologies] = useState<ReturnedTechnology[]>(
    []
  )
  const [stack, setStack] = useState<ReturnedTechnology[]>([])

  const isStackFull = stack.length === 6

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

  const {
    schema,
    setIsMenuVisible,
    setReloadList,
    isLight,
    formMode,
    selectedItemId
  } = useAdmin()!
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

  useEffect(() => {
    if (formMode === 'update' && selectedItemId) {
      const fetchSkill = async () => {
        const data = await getSkillById(selectedItemId)
        setSkillData({ name: data.name, icon: data.icon })
      }

      const fetchTechnology = async () => {
        const data = await getTechnologyById(selectedItemId)
        setTechnologyData({
          name: data.name,
          icon: data.icon,
          appIcon: data.appIcon
        })
      }

      const fetchProject = async () => {
        const data = await getProjectById(selectedItemId)

        const stackTechnologies = await Promise.all(
          data.stack.map(async (techId: string) => {
            try {
              return await getTechnologyById(techId)
            } catch (error: any) {
              if (error.response?.status === 404) {
                // Tecnologia deletada, ignora
                return null
              }
              return null
            }
          })
        )
        if (!stackTechnologies || stackTechnologies.length === 0) return

        const validStack = stackTechnologies.filter(
          (tech): tech is ReturnedTechnology => tech !== null
        )

        setStack(validStack)

        setProjectData({
          logo: data.logo,
          mockup: data.mockup,
          repository: data.repository,
          siteUrl: data.siteUrl,
          stack: validStack,
          title: data.title,
          videoUrl: data.videoUrl
        })
      }

      if (schema === 'skill') {
        fetchSkill()
      } else if (schema === 'technology') {
        fetchTechnology()
      } else {
        fetchProject()
      }
    }
  }, [formMode, schema, selectedItemId])

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
        toast.error(`Error while ${formMode}d ${schema}`)
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
        toast.error(`Error while ${formMode}d ${schema}`)
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
        toast.error('Stack vazia')
      }

      if (Object.keys(newErrors).length > 0) {
        toast.error(`Error while ${formMode}d ${schema}`)
        setErrors(newErrors)
        return
      }
    }

    try {
      if (formMode === 'create') {
        if (schema === 'skill') {
          const newSkill = await createSkill(skillData)
          toast.success('Skill created successfully!')
          setIsMenuVisible(false)
          setReloadList(true)
        }
        if (schema === 'technology') {
          const newTechnology = await createTechnology(technologyData)
          toast.success('Technology created succesfully!')
          setIsMenuVisible(false)
          setReloadList(true)
        }

        if (schema === 'project') {
          const formattedProjectData = {
            ...projectData,
            stack: projectData.stack.map(tech => tech._id)
          }
          const newProject = await createProject(formattedProjectData)
          toast.success('Project created succesfully!')
          setIsMenuVisible(false)
          setReloadList(true)
        }
      } else {
        if (schema === 'skill') {
          if (!selectedItemId) return
          const skill = await updateSkill(skillData, selectedItemId)
          toast.success('Skill updated succesfully!')
          setIsMenuVisible(false)
          setReloadList(true)
        }
        if (schema === 'technology') {
          if (!selectedItemId) return
          const technology = await updateTechnology(
            technologyData,
            selectedItemId
          )
          toast.success('Technology updated succesfully!')
          setIsMenuVisible(false)
          setReloadList(true)
        }

        if (schema === 'project') {
          if (!selectedItemId) return
          const formattedProjectData = {
            ...projectData,
            stack: projectData.stack.map(tech => tech._id)
          }
          const project = await updateProject(
            formattedProjectData,
            selectedItemId
          )
          toast.success('Project updated succesfully!')
          setIsMenuVisible(false)
          setReloadList(true)
        }
      }
    } catch (error: any) {
      const message = error.response?.data?.message || error.message
      toast.error(`${message}`)
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
          <div
            className={`text-fields-container ${
              isLight && 'text-fields-container__light'
            }`}
          >
            <FormField
              label="title"
              placeholder={`${schema} title`}
              onChange={handleChange}
              error={errors.title}
              project={projectData}
            />
            <FormField
              label="logo"
              placeholder="logo url"
              onChange={handleChange}
              error={errors.logo}
              project={projectData}
            />
            <FormField
              label="mockup"
              placeholder="mockup url"
              onChange={handleChange}
              error={errors.mockup}
              project={projectData}
            />
            <FormField
              label="repository"
              placeholder="repository name"
              onChange={handleChange}
              error={errors.repository}
              project={projectData}
            />
            <FormField
              label="siteUrl"
              placeholder="site url"
              onChange={handleChange}
              error={errors.siteUrl}
              project={projectData}
            />
            <FormField
              label="videoUrl"
              placeholder="video url"
              onChange={handleChange}
              error={errors.videoUrl}
              project={projectData}
            />
          </div>
          <h3 style={isLight ? { color: 'black' } : {}}>Select Technologies</h3>
          {isStackFull ? <p className="stack-full-message">Stack Full</p> : ''}
          <div className="stack-fields create-stack-fields">
            {dropdownOpen ? (
              <div
                className={`stack-fields__add-button stack-fields__add-button-active ${
                  isLight &&
                  'stack-fields__add-button-light stack-fields__add-button-light-active'
                }`}
              >
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
                    <>
                      <div
                        className="stack-fields-item stack-fields-item-active"
                        key={technology._id}
                        onClick={() =>
                          !isStackFull && handleAddToStack(technology)
                        }
                      >
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          height={15}
                          width={15}
                        />
                        <p>{technology.name}</p>
                      </div>
                    </>
                  ))}
              </div>
            ) : (
              <div
                className={`stack-fields__add-button ${
                  isLight && 'stack-fields__add-button-light'
                }`}
              >
                <ChevronDown
                  onClick={() => setDropdownOpen(true)}
                  cursor={'pointer'}
                  size={20}
                />
                <p>Add</p>
              </div>
            )}

            <ArrowLeftRight color="#9CA3AF" />
            <p className={` stack-size ${isLight ? 'stack-size__light' : ''}`}>
              {stack.length}/6
            </p>
            <div className={`${errors.stack && 'error'} stack-card`}>
              {errors.stack ? (
                <span className="error-text">{errors.stack}</span>
              ) : (
                ''
              )}

              <div className="stack-fields">
                {stack.map(item => (
                  <div
                    key={item._id}
                    className={`stack-fields-item ${
                      isLight && 'stack-fields-item__light'
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      height={15}
                      width={15}
                    />
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
          <div
            className={`text-fields-container ${
              isLight && 'text-fields-container__light'
            }`}
          >
            <FormField
              label="icon"
              placeholder="icon url"
              onChange={handleChange}
              error={errors.icon}
              skill={skillData}
            />
            <FormField
              label="name"
              placeholder={`${schema} name`}
              onChange={handleChange}
              error={errors.name}
              skill={skillData}
            />
          </div>
        </>
      ) : schema === 'technology' ? (
        <>
          <div
            className={`text-fields-container ${
              isLight && 'text-fields-container__light'
            }`}
          >
            <FormField
              label="icon"
              placeholder="icon url"
              onChange={handleChange}
              error={errors.icon}
              technology={technologyData}
            />
            <FormField
              label="appIcon"
              placeholder="app icon url"
              onChange={handleChange}
              error={errors.appIcon}
              technology={technologyData}
            />
            <FormField
              label="name"
              placeholder={`${schema} name`}
              onChange={handleChange}
              error={errors.name}
              technology={technologyData}
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
            {`${formMode === 'update' ? 'Edit' : 'Add'} ${
              schema.charAt(0).toUpperCase() + schema.slice(1)
            }`}
          </button>
          <button
            className={`create-stack-fields__buttons-discard ${
              isLight && 'create-stack-fields__buttons-discard-light'
            }`}
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
