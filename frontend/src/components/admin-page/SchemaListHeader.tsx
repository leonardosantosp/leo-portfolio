import { useAdmin } from './AdminProvider'
import { Search } from 'lucide-react'

type SchemaListHeaderProps<T> = {
  itens: T[]
}

export const SchemaListHeader = <T,>({ itens }: SchemaListHeaderProps<T>) => {
  const { isLight, schema, setIsMenuVisible, setFormMode } = useAdmin()!

  return (
    <>
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
    </>
  )
}
