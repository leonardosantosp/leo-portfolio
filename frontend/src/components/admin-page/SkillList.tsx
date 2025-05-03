import { useEffect, useState } from 'react'
import type { ReturnedSkill } from '../../api-client/skillsApi'
import { getSkills } from '../../api-client/skillsApi'
import { useAdmin } from './AdminProvider'
import { ItemTableList } from './ItemTableList'
import { ItemCard } from './ItemCard'
import { SchemaListHeader } from './SchemaListHeader'

export const SkillList = () => {
  const {
    setSelectedItemId,
    setFormMode,
    setIsMenuVisible,
    reloadList,
    setReloadList,
    isLight,
    isTable
  } = useAdmin()!

  const [skills, setSkills] = useState<ReturnedSkill[]>([])

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
    <div
      className={`item-management-page__item-list ${
        isLight ? 'item-management-page__item-list-light' : ''
      }`}
    >
      {isTable ? (
        <ItemTableList
          itens={skills}
          onDelete={skill => {
            setSelectedItemId(skill._id)
          }}
          onDeleteCard={(id: string) => {
            handleDelete(id)
          }}
          onEdit={skill => {
            setFormMode('update')
            setSelectedItemId(skill._id)
            setIsMenuVisible(true)
          }}
          onPreview={skill => {
            setFormMode('preview')
            setSelectedItemId(skill._id)
            setIsMenuVisible(true)
          }}
          renderRow={skill => (
            <>
              <td className="item-table__icon">
                <img src={skill.icon} alt={skill.name} height={35} width={35} />
              </td>
              <td className="item-table__name">
                <strong>{skill.name}</strong>
              </td>
            </>
          )}
          headers={['ICON', 'NAME']}
        />
      ) : (
        <>
          <SchemaListHeader itens={skills} />
          <div className="view-mode-card__container">
            {skills.map(skill => (
              <ItemCard
                onDelete={skill => {
                  setSelectedItemId(skill._id)
                }}
                onDeleteCard={(id: string) => {
                  handleDelete(id)
                }}
                onEdit={skill => {
                  setFormMode('update')
                  setSelectedItemId(skill._id)
                  setIsMenuVisible(true)
                }}
                onPreview={skill => {
                  setFormMode('preview')
                  setSelectedItemId(skill._id)
                  setIsMenuVisible(true)
                }}
                item={skill}
                key={skill._id}
                renderRow={skill => (
                  <>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      height={35}
                      width={35}
                    />
                    <strong>{skill.name}</strong>
                  </>
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
