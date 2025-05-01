import { useAdmin } from './AdminProvider'
import { useEffect, useState } from 'react'
import { getSkillById } from '../../api-client/skillsApi'

type FormFieldProps = {
  label: string
  placeholder: string
  onChange: any
  error: string | undefined
}

export const FormField = ({
  label,
  placeholder,
  onChange,
  error
}: FormFieldProps) => {
  const { formMode, selectedItemId, schema } = useAdmin()!

  const [skillData, setSkillData] = useState({
    name: '',
    icon: ''
  })

  useEffect(() => {
    if (formMode === 'update' && schema === 'skill' && selectedItemId) {
      const fetchSkill = async () => {
        const data = await getSkillById(selectedItemId)
        setSkillData({ name: data.name, icon: data.icon })
      }

      fetchSkill()
    }
  }, [formMode, schema, selectedItemId])
  return (
    <>
      {formMode === 'create' ? (
        <div className="create-fields-container">
          <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>

          <div className="error-text">
            {error ? <span className="error-text">{error}</span> : ''}
          </div>

          <input
            className={error && 'error'}
            type="text"
            id={label}
            name={label}
            placeholder={`Type ${placeholder}`}
            onChange={onChange}
          />
        </div>
      ) : (
        <div className="create-fields-container">
          <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>

          <div className="error-text">
            {error ? <span className="error-text">{error}</span> : ''}
          </div>

          <input
            className={error && 'error'}
            type="text"
            id={label}
            name={label}
            placeholder={`Type ${placeholder}`}
            defaultValue={label === 'name' ? skillData.name : skillData.icon}
            onChange={onChange}
          />
        </div>
      )}
    </>
  )
}
