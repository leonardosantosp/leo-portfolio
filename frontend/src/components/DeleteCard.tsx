import { CircleAlert } from 'lucide-react'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { deleteSkill } from '../api-client/skillsApi'

type SchemaType = 'skill' | 'technology' | 'project'

type DeleteCardProps = {
  schema: SchemaType
  id: string | null
  onClose: () => void
  onDelete: (id: string) => void
}

export const DeleteCard = ({
  schema,
  onClose,
  id,
  onDelete
}: DeleteCardProps) => {
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    if (!id) return
    if (!deleted) return

    const cardDeleteSkill = async () => {
      const data = await deleteSkill(id)
      setDeleted(false)
      onClose()
      onDelete(id)
    }
    cardDeleteSkill()
  }, [id, deleted, onClose, onDelete])

  return (
    <>
      <div className="blur">{}</div>
      <div className="delete-card-container">
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
            <button
              className="button-yes"
              type="button"
              onClick={() => setDeleted(true)}
            >
              Yes, I'm sure
            </button>
            <button
              className="button-no"
              type="button"
              onClick={() => onClose()}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
