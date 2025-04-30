import { useEffect, useState } from 'react'
import { getProjects, ReturnedProject } from '../../api-client/projectsApi'
import { ItemTableList } from './ItemTableList'
import { useAdmin } from './AdminProvider'
import { Link } from 'lucide-react'

export const ProjectList = () => {
  const [projects, setProjects] = useState<ReturnedProject[]>([])
  const {
    setFormMode,
    setIsMenuVisible,
    setSelectedItemId,
    reloadList,
    setReloadList,
    isLight
  } = useAdmin()!

  const handleDelete = (idToDelete: string) => {
    setProjects(prev => prev.filter(project => project._id !== idToDelete))
  }

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects()
      setProjects(data)
    }
    fetchProjects()
  }, [])

  useEffect(() => {
    if (!reloadList) return
    const fetchProjects = async () => {
      const data = await getProjects()
      setProjects(data)
      setReloadList(false)
    }
    fetchProjects()
  }, [reloadList])

  return (
    <div
      className={`item-management-page__item-list ${
        isLight ? 'item-management-page__item-list-light' : ''
      }`}
    >
      <ItemTableList
        headers={[
          'TITLE',
          'LOGO',
          'MOCKUP',
          'REPOSIOTRY',
          'SITE URL',
          'VIDEO URL',
          'SLUG'
        ]}
        itens={projects}
        onDelete={project => {
          setSelectedItemId(project._id)
        }}
        onDeleteCard={(id: string) => {
          handleDelete(id)
        }}
        onEdit={project => {
          setIsMenuVisible(true)
          setFormMode('update')
          setSelectedItemId(project._id)
        }}
        onPreview={project => {
          setFormMode('preview')
          setIsMenuVisible(true)
          setSelectedItemId(project._id)
        }}
        renderRow={project => (
          <>
            <td className="item-table__name">
              <strong>{project.title}</strong>
            </td>
            <td className="item-table__icon">
              <img
                src={project.logo}
                alt="logo do projeto"
                height={35}
                width={35}
              />
            </td>
            <td className="item-table__icon">
              <img
                src={project.mockup}
                alt="mocckup do projeto"
                height={60}
                width={80}
              />
            </td>
            <td className="item-table__name">
              <strong>{project.repository}</strong>
            </td>
            <td className="item-table__name">
              <strong>
                <Link height={15} width={15} />
                <a href={project.siteUrl} target="_blank" rel="noreferrer">
                  Site
                </a>
              </strong>
            </td>
            <td className="item-table__name">
              <strong>
                <Link height={15} width={15} />
                <a
                  href="https://www.youtube.com/watch?v=VBQD3Ib5-zc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video
                </a>
              </strong>
            </td>
            <td className="item-table__name">
              <strong>{project.slug}</strong>
            </td>
          </>
        )}
      />
    </div>
  )
}
