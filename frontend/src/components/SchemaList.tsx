import { Eye } from 'lucide-react'
import search from '../assets/search.svg'
import { Trash2 } from 'lucide-react'
import { SquarePen } from 'lucide-react'
import microservices from '../assets/bar-images/microservices.png'

type SchemaType = 'skill' | 'technology' | 'project'

type ModeType = 'preview' | 'create' | 'update' | null

type SchemaListProps = {
  schema: SchemaType
  onOpenForm: () => void
  onDeleteClick: () => void
  onChangeFormMode: (mode: ModeType) => void
}

export const SchemaList = ({
  schema,
  onOpenForm,
  onDeleteClick,
  onChangeFormMode
}: SchemaListProps) => {
  return (
    <div className="item-management-page__item-list">
      <div className="item-list__header">
        <h2 className="item-list__header-title">
          {schema.charAt(0).toUpperCase() + schema.slice(1)}
        </h2>
        <p className="item-list__header-results">255 results</p>
      </div>
      <div className="item-list__toolbar">
        <div className="item-search">
          <img src={search} alt="icon search" />
          <input type="search" placeholder={`Search for ${schema}`} />
        </div>
        <button
          type="button"
          onClick={() => {
            onOpenForm()
            onChangeFormMode('create')
          }}
        >
          <span>+</span> {`Add a new ${schema}`}
        </button>
      </div>
      <div className="item-list__table">
        <table>
          <thead>
            <tr>
              <th>{schema.toUpperCase()} ICON</th>
              <th>{schema.toUpperCase()} NAME</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="item-table__icon">
                <img src={microservices} alt="" />
              </td>
              <td className="item-table__name">
                <strong>Microserviços</strong>
              </td>
              <td className="item-table__actions">
                <button
                  className="item-table__actions-edit"
                  type="button"
                  onClick={() => {
                    onOpenForm()
                    onChangeFormMode('update')
                  }}
                >
                  <SquarePen size={15} className="item-table__actions-img" />
                  Edit
                </button>
                <button
                  onClick={() => {
                    onOpenForm()
                    onChangeFormMode('preview')
                  }}
                  className="item-table__actions-preview"
                  type="button"
                >
                  <Eye size={15} className="item-table__actions-img" />
                  Preview
                </button>
                <button
                  className="item-table__actions-delete"
                  type="button"
                  onClick={() => onDeleteClick()}
                >
                  <Trash2 size={15} className="item-table__actions-img " />
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="item-list__pagination"></div>
    </div>
  )
}
