import { useAdmin } from './AdminProvider'
import { Trash2, SquarePen, Eye } from 'lucide-react'
import { useState } from 'react'
import { DeleteCard } from './DeleteCard'

type ItemCardProps<T> = {
  renderRow: (item: T) => React.ReactNode
  item: T
  onEdit: (item: T) => void
  onPreview: (item: T) => void
  onDelete: (item: T) => void
  onDeleteCard: (id: string) => void
}

export const ItemCard = <T,>({
  renderRow,
  item,
  onEdit,
  onPreview,
  onDelete,
  onDeleteCard
}: ItemCardProps<T>) => {
  const { isLight, selectedItemId } = useAdmin()!
  const [showDeleteCard, setShowDeleteCard] = useState(false)

  return (
    <>
      {showDeleteCard && selectedItemId && (
        <DeleteCard
          onClose={() => setShowDeleteCard(false)}
          onDelete={() => onDeleteCard(selectedItemId)}
        />
      )}

      <div
        className={`view-mode-card__item ${
          isLight ? 'view-mode-card__item-light' : ''
        }`}
      >
        <div className="view-mode-card__item-left">{renderRow(item)}</div>
        <div className="item-table__actions-container">
          <div className="item-table__actions">
            <button
              className="item-table__actions-edit"
              type="button"
              onClick={() => onEdit(item)}
            >
              <SquarePen size={15} className="item-table__actions-img" />
              Edit
            </button>
            <button
              onClick={() => onPreview(item)}
              className={`item-table__actions-preview ${
                isLight && 'item-table__actions-preview-light'
              }`}
              type="button"
            >
              <Eye size={15} className="item-table__actions-img" />
              Preview
            </button>
            <button
              className="item-table__actions-delete"
              type="button"
              onClick={() => {
                onDelete(item)
                setShowDeleteCard(true)
              }}
            >
              <Trash2 size={15} className="item-table__actions-img " />
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
