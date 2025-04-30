import { useEffect, useState } from 'react'
import { getSkills, ReturnedSkill } from '../../api-client/skillsApi'
import { useAdmin } from './AdminProvider'
import { ItemTableList } from './ItemTableList'

export const SkillList = () => {
  const {
    setSelectedItemId,
    setFormMode,
    setIsMenuVisible,
    reloadList,
    setReloadList,
    isLight
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
              <img src={skill.icon} alt="" height={35} width={35} />
            </td>
            <td className="item-table__name">
              <strong>{skill.name}</strong>
            </td>
          </>
        )}
        headers={['ICON', 'NAME']}
      />
    </div>
  )
}
