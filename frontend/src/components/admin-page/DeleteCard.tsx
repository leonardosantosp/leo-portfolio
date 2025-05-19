import { CircleAlert, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { deleteSkill } from '../../api-client/skillsApi'
import { deleteTechnology } from '../../api-client/technologiesApi'
import { useAdmin } from './AdminProvider'
import { deleteProject } from '../../api-client/projectsApi'
import { toast } from 'react-toastify'

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

    const handleDelete = async () => {
      try {
        if (schema === 'skill') {
          await deleteSkill(selectedItemId)
        } else if (schema === 'technology') {
          await deleteTechnology(selectedItemId)
        } else if (schema === 'project') {
          await deleteProject(selectedItemId)
        }
        toast.success(`Deleted ${schema} successfully!`)
        onDelete(selectedItemId) // só remove localmente se sucesso
        onClose() // fecha modal depois de sucesso
      } catch (error: any) {
        if (error.response?.status === 401) {
          toast.error('Você precisa estar autenticado para deletar.')
        } else {
          toast.error('Erro ao deletar. Tente novamente.')
        }
      } finally {
        setDeleted(false) // reseta estado independente do resultado
      }
    }

    handleDelete()
  }, [selectedItemId, deleted, onClose, onDelete, schema])

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
