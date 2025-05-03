import { Header } from '../components/Header'
import { Table, LayoutList, Sun, MoonStar } from 'lucide-react'
import { SideBar } from '../components/admin-page/SideBar'
import { useAdmin } from '../components/admin-page/AdminProvider'
import { SchemaList } from '../components/admin-page/SchemaList'

export const AdminPage = () => {
  const adminContext = useAdmin()
  if (!adminContext) return null
  const {
    isMenuVisible,
    setIsMenuVisible,
    setSchema,
    isLight,
    setIsLight,
    isTable,
    setIsTable
  } = adminContext

  return (
    <>
      <Header showMenu={false} />
      <div className="item-management-container">
        <div
          className={`item-management-page ${
            isLight && 'item-management-page__light-mode'
          }`}
        >
          <div
            className={`item-management-page__header ${
              isLight && 'item-management-page__header-light-mode'
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
                  className={`toggle-btn ${isTable ? 'visible' : ''}`}
                  onClick={() => setIsTable(false)}
                >
                  <Table cursor={'pointer'} />
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${!isTable ? 'visible' : ''}`}
                  onClick={() => setIsTable(true)}
                >
                  <LayoutList cursor={'pointer'} />
                </button>
              </div>
              <div className="toggle-group">
                <button
                  type="button"
                  className={`toggle-btn ${!isLight ? 'visible' : ''}`}
                  onClick={() => setIsLight(true)}
                >
                  <Sun cursor={'pointer'} />
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${isLight ? 'visible' : ''}`}
                  onClick={() => setIsLight(false)}
                >
                  <MoonStar cursor={'pointer'} />
                </button>
              </div>
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
