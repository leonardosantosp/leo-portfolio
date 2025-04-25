import { Eye, Slice } from 'lucide-react'
import search from '../../assets/search.svg'
import { Trash2 } from 'lucide-react'
import { SquarePen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getSkills, ReturnedSkill } from '../../api-client/skillsApi'
import { DeleteCard } from '../admin-page/DeleteCard'
import { useAdmin } from './AdminProvider'

export const SkillList = () => {
  const {
    setSelectedItemId,
    schema,
    setFormMode,
    setIsMenuVisible,
    selectedItemId,
    reloadList,
    setReloadList
  } = useAdmin()!

  const [skills, setSkills] = useState<ReturnedSkill[]>([])
  const [showDeleteCard, setShowDeleteCard] = useState(false)

  const handleDelete = (idToDelete: string) => {
    setSkills(prev => prev.filter(skill => skill._id !== idToDelete))
  }

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getSkills()
      setSkills(data)
    }
    fetchSkills()
  }, [])

  useEffect(() => {
    if (!reloadList) return

    const fetchSkills = async () => {
      const data = await getSkills()
      setSkills(data)
      setReloadList(false)
    }

    fetchSkills()
  }, [reloadList])

  return (
    <>
      <div className="item-management-page__item-list">
        {showDeleteCard && selectedItemId && (
          <DeleteCard
            onClose={() => setShowDeleteCard(false)}
            onDelete={(id: string) => handleDelete(id)}
          />
        )}
        <div className="item-list__header">
          <h2 className="item-list__header-title">
            {schema.charAt(0).toUpperCase() + schema.slice(1)}
          </h2>
          <p className="item-list__header-results">{skills.length} results</p>
        </div>
        <div className="item-list__toolbar">
          <div className="item-search">
            <img src={search} alt="icon search" />
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
                <th>{schema.toUpperCase()} ICON</th>
                <th>{schema.toUpperCase()} NAME</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {skills.map(skill => (
                <>
                  <tr key={skill._id}>
                    <td className="item-table__icon">
                      <img src={skill.icon} alt="" height={35} width={35} />
                    </td>
                    <td className="item-table__name">
                      <strong>{skill.name}</strong>
                    </td>
                    <td className="item-table__actions">
                      <button
                        className="item-table__actions-edit"
                        type="button"
                        onClick={() => {
                          setIsMenuVisible(true)
                          setFormMode('update')
                        }}
                      >
                        <SquarePen
                          size={15}
                          className="item-table__actions-img"
                        />
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setIsMenuVisible(true)
                          setFormMode('preview')
                          setSelectedItemId(skill._id)
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
                        onClick={() => {
                          setSelectedItemId(skill._id)
                          setShowDeleteCard(true)
                        }}
                      >
                        <Trash2
                          size={15}
                          className="item-table__actions-img "
                        />
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="item-list__pagination"></div>
      </div>
    </>
  )
}
