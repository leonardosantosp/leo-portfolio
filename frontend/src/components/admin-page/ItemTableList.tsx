import { useAdmin } from './AdminProvider'
import { useState } from 'react'
import { DeleteCard } from './DeleteCard'
import search from '../../assets/search.svg'
import { Eye } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import { SquarePen } from 'lucide-react'
import { Search } from 'lucide-react'
type ItemTableListProps<T> = {
  itens: T[]
  renderRow: (item: T) => React.ReactNode
  onEdit: (item: T) => void
  onPreview: (item: T) => void
  onDelete: (item: T) => void
  headers: string[]
  onDeleteCard: (id: string) => void
  isLight?: boolean
}

export const ItemTableList = <T,>({
  itens,
  renderRow,
  onEdit,
  onPreview,
  onDelete,
  headers,
  onDeleteCard,
  isLight
}: ItemTableListProps<T>) => {
  const { schema, setIsMenuVisible, setFormMode, selectedItemId } = useAdmin()!

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
        className={`item-list__header ${isLight && 'item-list__header-light'}`}
      >
        <h2 className="item-list__header-title">
          {schema.charAt(0).toUpperCase() + schema.slice(1)}
        </h2>
        <p className="item-list__header-results">{itens.length} results</p>
      </div>
      <div
        className={`item-list__toolbar ${
          isLight && 'item-list__toolbar-light'
        }`}
      >
        <div className="item-search">
          <Search size={18} className="item-search-img" />
          <input type="search" placeholder={`Search for ${schema}`} />
        </div>

        <button
          type="button"
          onClick={() => {
            setIsMenuVisible(true)
            setFormMode('create')
          }}
        >
          <span>+</span> {`Add a new ${schema}`}
        </button>
      </div>
      <div className="item-list__table">
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
                      className="item-table__actions-preview"
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
