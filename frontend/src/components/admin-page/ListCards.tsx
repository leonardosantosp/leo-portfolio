import { useState } from 'react'
import { ItemCard } from './ItemCard'
import { PaginationDots } from '../PaginationDots'
import { useAdmin } from './AdminProvider'

type ListCardsProps<T> = {
  renderRow: (item: T) => React.ReactNode
  itens: T[]
  onEdit: (item: T) => void
  onPreview: (item: T) => void
  onDelete: (item: T) => void
  onDeleteCard: (id: string) => void
  getId: (item: T) => string
}

export const ListCards = <T,>({
  renderRow,
  itens,
  onEdit,
  onPreview,
  onDelete,
  onDeleteCard,
  getId
}: ListCardsProps<T>) => {
  const [page, setPage] = useState(0)

  const size = 6
  const startIndex = page * size
  const endIndex = (page + 1) * size

  const { isLight } = useAdmin()!

  const paginatedItens = itens.slice(startIndex, endIndex)

  return (
    <>
      <div className="view-mode-card__container">
        {paginatedItens.map(item => (
          <ItemCard
            key={getId(item)}
            onDelete={onDelete}
            onDeleteCard={() => onDeleteCard(getId(item))}
            onEdit={onEdit}
            onPreview={onPreview}
            item={item}
            renderRow={renderRow}
          />
        ))}
      </div>
      <div className={` pagination-list ${isLight && 'pagination__light'}`}>
        <PaginationDots
          array={itens}
          currentPage={page}
          onChange={(page: number) => setPage(page)}
          pageSize={size}
          color="#7c3aed"
        />
      </div>
    </>
  )
}
