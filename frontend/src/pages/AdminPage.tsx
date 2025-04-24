import { Header } from '../components/Header'
import { Table } from 'lucide-react'

import { LayoutPanelTop } from 'lucide-react'
import { Sun } from 'lucide-react'
import { MoonStar } from 'lucide-react'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
// import { DeleteCard } from '../components/DeleteCard'
import { PreviewSideBar } from '../components/PreviewSideBar'
import { CreateSideBar } from '../components/CreateSideBar'
import { SchemaList } from '../components/SchemaList'

export const AdminPage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [schema, setSchema] = useState<'skill' | 'technology' | 'project'>(
    'skill'
  )
  // const [showDeleteCard, setShowDeleteCard] = useState(false)

  const [formMode, setFormMode] = useState<
    'preview' | 'create' | 'update' | null
  >(null)

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)

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
          {isMenuVisible && (
            <div className="menu-overlay">
              <div className="side-bar">
                <div className="side-bar__fields">
                  {formMode === 'preview' ? (
                    <PreviewSideBar
                      schema={schema}
                      selectedItem={selectedItemId}
                    />
                  ) : formMode === 'create' ? (
                    <CreateSideBar
                      schema={schema}
                      onDiscard={() => setIsMenuVisible(false)}
                    />
                  ) : formMode === 'update' ? (
                    ''
                  ) : null}
                </div>
                <div
                  className="sidebar-foot"
                  onClick={() => setIsMenuVisible(false)}
                >
                  <p>voltar</p>
                  <ChevronRight size={30} />
                </div>
              </div>
              <div className="blur-layer"></div>
            </div>
          )}

          <div className="item-list-container">
            {/* {showDeleteCard === true && (
              <DeleteCard
                schema={schema}
                onClose={() => setShowDeleteCard(false)}
                id={selectedItemId}
              />
            )} */}

            <SchemaList
              schema={schema}
              onOpenForm={() => setIsMenuVisible(true)}
              onChangeFormMode={(
                mode: 'preview' | 'create' | 'update' | null
              ) => setFormMode(mode)}
              // onDeleteClick={() => setShowDeleteCard(true)}
              setSelectedItemId={(id: string) => setSelectedItemId(id)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
