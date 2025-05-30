import { useAdmin } from './AdminProvider'
import type { ReturnedTechnology } from '../../api-client/technologiesApi'

type Project = {
  title: string
  logo: string
  mockup: string
  repository: string
  siteUrl: string
  videoUrl: string
  stack: ReturnedTechnology[]
}

type Skill = {
  name: string
  icon: string
}

type Technology = {
  name: string
  icon: string
  appIcon: string
}

type FormFieldProps = {
  label: string
  placeholder: string
  onChange: any
  error: string | undefined
  skill?: Skill
  technology?: Technology
  project?: Project
}

export const FormField = ({
  label,
  placeholder,
  onChange,
  error,
  skill,
  technology,
  project
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
          ) : project ? (
            <input
              className={error && 'error'}
              type="text"
              id={label}
              name={label}
              placeholder={`Type ${placeholder}`}
              defaultValue={
                label === 'title'
                  ? project.title
                  : label === 'logo'
                  ? project.logo
                  : label === 'mockup'
                  ? project.mockup
                  : label === 'repository'
                  ? project.repository
                  : label === 'siteUrl'
                  ? project.siteUrl
                  : label === 'videoUrl'
                  ? project.videoUrl
                  : ''
              }
              onChange={onChange}
            />
          ) : null}
        </div>
      )}
    </>
  )
}
