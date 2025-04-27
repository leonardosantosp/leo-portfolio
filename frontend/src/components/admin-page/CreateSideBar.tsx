import { ArrowLeftRight } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import { FormField } from './FormField'
import { useState } from 'react'
import { createSkill } from '../../api-client/skillsApi'
import { createTechnology } from '../../api-client/technologiesApi'
import { useAdmin } from './AdminProvider'

const itemStack = 'https://imgur.com/mpjlXh4.png'

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const CreateSideBar = () => {
  const [skillData, setSkillData] = useState({
    name: '',
    icon: ''
  })

  const [technologyData, setTechnologyData] = useState({
    name: '',
    icon: '',
    appIcon: ''
  })

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

  const handleSubmit = async () => {
    const newErrors: { name?: string; icon?: string; appIcon?: string } = {}

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
    } catch (error: any) {
      const message = error.response?.data?.message || error.message
      if (message.includes('already')) {
        newErrors.name = 'Campo com esse nome já existe'
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
    }
  }

  return (
    <>
      {schema === 'project' ? (
        <>
          <div className="text-fields-container">
            {/* <FormField label="Title" placeholder={`${schema} title`} />
            <FormField label="Logo" placeholder="logo url" />
            <FormField label="Mockup" placeholder="mockup url" />
            <FormField label="Repository" placeholder="repository name" />
            <FormField label="Site" placeholder="site url" />
            <FormField label="Video" placeholder="video url" /> */}
          </div>
          <h3>Select Technologies</h3>
          <div className="stack-fields create-stack-fields">
            <div className="stack-fields__add-button">
              <ChevronDown />
              <p>Add</p>
            </div>
            <ArrowLeftRight color="#9CA3AF" />

            <div className="stack-card">
              <h4>Stack</h4>
              <div className="stack-fields">
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
                <div className="stack-fields-item">
                  <img src={itemStack} alt="" />
                  <p>Css</p>
                  <div className="stack-fields-icon">
                    <Trash2 size={15} />
                  </div>
                </div>
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
