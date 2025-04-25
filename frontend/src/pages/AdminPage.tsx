import { Header } from '../components/Header'
import { Table } from 'lucide-react'
import { LayoutPanelTop } from 'lucide-react'
import { Sun } from 'lucide-react'
import { MoonStar } from 'lucide-react'
import { SideBar } from '../components/admin-page/SideBar'
import { AdminProvider, useAdmin } from '../components/admin-page/AdminProvider'
import { SchemaList } from '../components/admin-page/SchemaList'

export const AdminPage = () => {
  const adminContext = useAdmin()
  if (!adminContext) return null
  const { isMenuVisible, setIsMenuVisible, setSchema } = adminContext

  return (
    <>
      <Header showMenu={false} />
      <div className="item-management-container">
        <div className="item-management-page">
          <div className="item-management-page__header">
            <div className="item-management-page__header-schemas">
              <button
                type="button"
                onClick={() => {
                  setSchema('skill')
                  setIsMenuVisible(false)
                }}
              >
                Skills
              </button>
              <button
                type="button"
                onClick={() => {
                  setSchema('technology')
                  setIsMenuVisible(false)
                }}
              >
                Technologies
              </button>
              <button
                type="button"
                onClick={() => {
                  setSchema('project')
                  setIsMenuVisible(false)
                }}
              >
                Projects
              </button>
            </div>
            <div className="item-management-page__header-view-toggle">
              <button type="button">
                <Table cursor={'pointer'} />
              </button>
              <button type="button">
                <LayoutPanelTop cursor={'pointer'} />
              </button>
            </div>
            <div className="theme-toggle">
              <button type="button">
                <Sun cursor={'pointer'} />
              </button>
              <button type="button">
                <MoonStar cursor={'pointer'} />
              </button>
            </div>
          </div>
          {isMenuVisible && <SideBar />}

          <div className="item-list-container">
            <SchemaList />
          </div>
        </div>
      </div>
    </>
  )
}
