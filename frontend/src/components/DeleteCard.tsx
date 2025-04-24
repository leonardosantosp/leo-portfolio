import { CircleAlert } from 'lucide-react'
import { X } from 'lucide-react'

type SchemaType = 'skill' | 'technology' | 'project'

type DeleteCardProps = {
  schema: SchemaType
  onClose: () => void
}

export const DeleteCard = ({ schema, onClose }: DeleteCardProps) => {
  return (
    <>
      <div className="blur">{}</div>

      <div className="delete-card">
        <div className="delete-card__header">
          <div className="delete-card__header-container">
            <CircleAlert size={60} />
          </div>
          <div className="close-component">
            <X size={20} onClick={() => onClose()} />
          </div>
        </div>
        <p>Are you sure you want to delete this {schema}?</p>
        <div className="delete-card__buttons">
          <button className="button-yes" type="button">
            Yes, I'm sure
          </button>
          <button className="button-no" type="button" onClick={() => onClose()}>
            No, cancel
          </button>
        </div>
      </div>
    </>
  )
}
