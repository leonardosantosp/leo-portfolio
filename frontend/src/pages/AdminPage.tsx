import { Header } from '../components/Header'
import { Table } from 'lucide-react'
import { LayoutPanelTop } from 'lucide-react'
import { Sun } from 'lucide-react'
import { MoonStar } from 'lucide-react'
import { SideBar } from '../components/admin-page/SideBar'
import { useAdmin } from '../components/admin-page/AdminProvider'
import { SchemaList } from '../components/admin-page/SchemaList'
import { useState } from 'react'

export const AdminPage = () => {
  const adminContext = useAdmin()
  if (!adminContext) return null
  const { isMenuVisible, setIsMenuVisible, setSchema } = adminContext
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [isTableView, setIsTableView] = useState(true)

  return (
    <>
      <Header showMenu={false} />
      <div className="item-management-container">
        <div
          className={`item-management-page ${
            isLightTheme && 'item-management-page__light-mode'
          }`}
        >
          <div
            className={`item-management-page__header ${
              isLightTheme && 'item-management-page__header-light-mode'
            }`}
          >
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
            <div className="header-right">
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-btn ${isTableView ? 'visible' : ''}`}
                  onClick={() => setIsTableView(false)}
                >
                  <Table cursor={'pointer'} />
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${!isTableView ? 'visible' : ''}`}
                  onClick={() => setIsTableView(true)}
                >
                  <LayoutPanelTop cursor={'pointer'} />
                </button>
              </div>
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-btn ${!isLightTheme ? 'visible' : ''}`}
                  onClick={() => setIsLightTheme(true)}
                >
                  <Sun cursor={'pointer'} />
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${isLightTheme ? 'visible' : ''}`}
                  onClick={() => setIsLightTheme(false)}
                >
                  <MoonStar cursor={'pointer'} />
                </button>
              </div>
            </div>
          </div>
          {isMenuVisible && <SideBar theme={isLightTheme} />}

          <div className="item-list-container">
            <SchemaList isLight={isLightTheme} />
          </div>
        </div>
      </div>
    </>
  )
}
