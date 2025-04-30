import { Link } from 'react-router-dom'
import { useAdmin } from './AdminProvider'

type PreviewFieldType = 'text' | 'image' | 'url'

type PreviewFieldProps = {
  label: string
  value: string
  type: PreviewFieldType
  width?: number
  height?: number
}

export const PreviewField = ({
  label,
  value,
  type,
  width,
  height
}: PreviewFieldProps) => {
  const { isLight } = useAdmin()!

  return (
    <>
      {type === 'image' ? (
        <div className={`image-fields ${isLight && 'image-fields__light'}`}>
          <h3>{label}</h3>
          <img
            src={value}
            alt={`${label} preview`}
            width={width ? width : 60}
            height={height ? height : 60}
          />
        </div>
      ) : type === 'text' ? (
        <div className={`text-fields ${isLight && 'text-fields__light'}`}>
          <h3>{label}</h3>
          <p>{value}</p>
        </div>
      ) : type === 'url' ? (
        <div className={`text-fields ${isLight && 'text-fields__light'}`}>
          <h3>{label}</h3>
          <Link to={value}>{value}</Link>
        </div>
      ) : null}
    </>
  )
}
