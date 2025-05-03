import { useAdmin } from './AdminProvider'
import { useState } from 'react'
import { DeleteCard } from './DeleteCard'
import { Eye, Trash2, SquarePen, Search } from 'lucide-react'
import { SchemaListHeader } from './SchemaListHeader'

type ItemTableListProps<T> = {
  itens: T[]
  renderRow: (item: T) => React.ReactNode
  onEdit: (item: T) => void
  onPreview: (item: T) => void
  onDelete: (item: T) => void
  headers: string[]
  onDeleteCard: (id: string) => void
}

export const ItemTableList = <T,>({
  itens,
  renderRow,
  onEdit,
  onPreview,
  onDelete,
  headers,
  onDeleteCard
}: ItemTableListProps<T>) => {
  const { schema, setIsMenuVisible, setFormMode, selectedItemId, isLight } =
    useAdmin()!

  const [showDeleteCard, setShowDeleteCard] = useState(false)

  return (
    <>
      {showDeleteCard && selectedItemId && (
        <DeleteCard
          onClose={() => setShowDeleteCard(false)}
          onDelete={() => onDeleteCard(selectedItemId)}
        />
      )}
      <SchemaListHeader itens={itens} />
      <div
        className={`item-list__table ${isLight && 'item-list__table-light'}`}
      >
        <table>
          <thead>
            <tr>
              {headers.map(item => (
                <th key={item}>{item}</th>
              ))}

              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {itens.map((item, index) => (
              <tr key={index}>
                {renderRow(item)}
                <td className="item-table__actions">
                  <div className="item-table__actions-container">
                    <button
                      className="item-table__actions-edit"
                      type="button"
                      onClick={() => onEdit(item)}
                    >
                      <SquarePen
                        size={15}
                        className="item-table__actions-img"
                      />
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="item-list__pagination"></div>
    </>
  )
}
