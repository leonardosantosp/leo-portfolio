import {
  getTechnologies,
  ReturnedTechnology
} from '../../api-client/technologiesApi'
import { useEffect, useState } from 'react'
import { useAdmin } from './AdminProvider'
import { ItemTableList } from './ItemTableList'

type TechnologyListProps = {
  isLight?: boolean
}

export const TechnologyList = ({ isLight }: TechnologyListProps) => {
  const [technologies, setTechnologies] = useState<ReturnedTechnology[]>([])
  const {
    setFormMode,
    setIsMenuVisible,
    setSelectedItemId,
    reloadList,
    setReloadList
  } = useAdmin()!

  const handleDelete = (idToDelete: string) => {
    setTechnologies(prev =>
      prev.filter(technology => technology._id !== idToDelete)
    )
  }

  useEffect(() => {
    const fetchTechnology = async () => {
      const data = await getTechnologies()
      setTechnologies(data)
    }
    fetchTechnology()
  }, [])

  useEffect(() => {
    if (!reloadList) return
    const fetchTechnology = async () => {
      const data = await getTechnologies()
      setTechnologies(data)
      setReloadList(false)
    }
    fetchTechnology()
  }, [reloadList])

  return (
    <div
      className={`item-management-page__item-list ${
        isLight && 'item-management-page__item-list-light'
      }`}
    >
      <ItemTableList
        isLight={isLight}
        headers={['NAME', 'ICON', 'SLUG', 'APPICON']}
        itens={technologies}
        onDelete={technology => setSelectedItemId(technology._id)}
        onDeleteCard={(id: string) => handleDelete(id)}
        onEdit={technology => {
          setFormMode('update')
          setIsMenuVisible(true)
          setSelectedItemId(technology._id)
        }}
        onPreview={technology => {
          setFormMode('preview')
          setIsMenuVisible(true)
          setSelectedItemId(technology._id)
        }}
        renderRow={technology => (
          <>
            <td className="item-table__name">
              <strong>{technology.name}</strong>
            </td>
            <td className="item-table__icon">
              <img src={technology.icon} alt="" height={35} width={35} />
            </td>
            <td className="item-table__name">
              <strong>{technology.slug}</strong>
            </td>
            <td className="item-table__icon">
              <img src={technology.appIcon} alt="" height={35} width={35} />
            </td>
          </>
        )}
      />
    </div>
  )
}
