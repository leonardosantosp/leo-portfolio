import { useAdmin } from './AdminProvider'
import type { ReturnedSkill } from '../../api-client/skillsApi'
import type { ReturnedTechnology } from '../../api-client/technologiesApi'
import type { ReturnedProject } from '../../api-client/projectsApi'

type FormFieldProps = {
  label: string
  placeholder: string
  onChange: any
  error: string | undefined
  skill?: ReturnedSkill
  technology?: ReturnedTechnology
  project?: ReturnedProject
}

export const FormField = ({
  label,
  placeholder,
  onChange,
  error,
  skill,
  technology
}: FormFieldProps) => {
  const { formMode } = useAdmin()!

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

          {skill ? (
            <input
              className={error && 'error'}
              type="text"
              id={label}
              name={label}
              placeholder={`Type ${placeholder}`}
              defaultValue={label === 'name' ? skill.name : skill.icon}
              onChange={onChange}
            />
          ) : technology ? (
            <input
              className={error && 'error'}
              type="text"
              id={label}
              name={label}
              placeholder={`Type ${placeholder}`}
              defaultValue={
                label === 'name'
                  ? technology.name
                  : label === 'icon'
                  ? technology.icon
                  : technology.appIcon
              }
              onChange={onChange}
            />
          ) : null}
        </div>
      )}
    </>
  )
}
