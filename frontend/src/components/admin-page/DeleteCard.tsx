import { CircleAlert } from 'lucide-react'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { deleteSkill } from '../../api-client/skillsApi'
import { deleteTechnology } from '../../api-client/technologiesApi'
import { useAdmin } from './AdminProvider'

type DeleteCardProps = {
  onClose: () => void
  onDelete: (id: string) => void
}

export const DeleteCard = ({ onClose, onDelete }: DeleteCardProps) => {
  const [deleted, setDeleted] = useState(false)
  const { schema, selectedItemId } = useAdmin()!

  useEffect(() => {
    if (!selectedItemId) return
    if (!deleted) return

    const cardDeleteSkill = async () => {
      const data = await deleteSkill(selectedItemId)
    }

    const cardDeelteTechnology = async () => {
      const data = await deleteTechnology(selectedItemId)
    }
    setDeleted(false)
    onClose()
    onDelete(selectedItemId)
    if (schema === 'skill') {
      cardDeleteSkill()
    } else if (schema === 'technology') {
      cardDeelteTechnology()
    }
  }, [selectedItemId, deleted, onClose, onDelete])

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
