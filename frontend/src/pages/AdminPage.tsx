import { Header } from '../components/Header'
import microservices from '../assets/bar-images/microservices.png'
import { Table } from 'lucide-react'
import { Eye } from 'lucide-react'
import search from '../assets/search.svg'
import { Trash2 } from 'lucide-react'
import { SquarePen } from 'lucide-react'
import { LayoutPanelTop } from 'lucide-react'
import { Sun } from 'lucide-react'
import { MoonStar } from 'lucide-react'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import react from '../assets/react.png'
import reactApp from '../assets/app-images/react.png'
import { Link } from 'react-router-dom'
import { CircleAlert } from 'lucide-react'
import { X } from 'lucide-react'
import { ArrowLeftRight } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
export const AdminPage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [schema, setSchema] = useState<'skills' | 'technologies' | 'projects'>(
    'skills'
  )
  const [showDeleteCard, setShowDeleteCard] = useState(false)
  const [formMode, setFormMode] = useState<
    'preview' | 'create' | 'update' | null
  >(null)
  const logo = 'https://imgur.com/i9UWRS8.png'
  const mockup = 'https://imgur.com/LtdTASQ.png'
  const itemStack = 'https://imgur.com/mpjlXh4.png'

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
                  setSchema('skills')
                  setIsMenuVisible(false)
                }}
              >
                Skills
              </button>
              <button
                type="button"
                onClick={() => {
                  setSchema('technologies')
                  setIsMenuVisible(false)
                }}
              >
                Technologies
              </button>
              <button
                type="button"
                onClick={() => {
                  setSchema('projects')
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
                    schema === 'skills' ? (
                      <>
                        <div>
                          <h2>Microsserviços</h2>
                          <div className="image-fields">
                            <h3>Icon</h3>
                            <img
                              src={microservices}
                              alt=""
                              width={60}
                              height={60}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-fields">
                            <h3>Title</h3>
                            <p>Microsserviços</p>
                          </div>
                        </div>
                      </>
                    ) : schema === 'technologies' ? (
                      <>
                        <h2>React</h2>
                        <>
                          <div className="images-container">
                            <div className="image-fields">
                              <h3>Icon</h3>
                              <img src={react} alt="" width={60} height={60} />
                            </div>
                            <div className="image-fields">
                              <h3>AppIcon</h3>
                              <img
                                src={reactApp}
                                alt=""
                                width={60}
                                height={60}
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className="text-fields">
                                <h3>Slug</h3>
                                <p>react</p>
                              </div>
                              <div className="text-fields">
                                <h3>Name</h3>
                                <p>React</p>
                              </div>
                            </div>
                          </div>
                        </>
                      </>
                    ) : schema === 'projects' ? (
                      <>
                        <h2>Full Stack Spotify</h2>
                        <div className="images-container">
                          <div className="image-fields">
                            <h3>Logo</h3>
                            <img src={logo} alt="" width={60} height={60} />
                          </div>
                          <div className="image-fields">
                            <h3>Mockup</h3>
                            <img src={mockup} alt="" width={177} height={134} />
                          </div>
                        </div>
                        <div className="text-fields-container">
                          <div className="text-fields">
                            <h3>Title</h3>
                            <p>Full Stack Spotify</p>
                          </div>
                          <div className="text-fields">
                            <h3>Repository</h3>
                            <p>full-stack-spotify</p>
                          </div>
                          <div className="text-fields">
                            <h3>Slug</h3>
                            <p>full-stack-spotify</p>
                          </div>
                          <div className="text-fields">
                            <h3>Site URL</h3>
                            <Link to="https://github.com/leonardosantosp/full-stack-spotify">
                              https://github.com/leonardosantosp/full-stack-spotify
                            </Link>
                          </div>
                          <div className="text-fields">
                            <h3>Video URL</h3>
                            <Link to="https://github.com/leonardosantosp/full-stack-spotify">
                              https://github.com/leonardosantosp/full-stack-spotify
                            </Link>
                          </div>
                          <div className="text-fields">
                            <h3>Stack</h3>
                            <div className="stack-fields">
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ''
                    )
                  ) : formMode === 'create' ? (
                    schema === 'projects' ? (
                      <>
                        <div className="text-fields-container">
                          <div className="create-fields-container">
                            <h3>Title</h3>

                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder={`Type ${schema} title`}
                            />
                          </div>
                          <div className="create-fields-container">
                            <h3>Logo</h3>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type logo url"
                            />
                          </div>
                          <div className="create-fields-container">
                            <h3>Mockup</h3>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type mockup url"
                            />
                          </div>
                          <div className="create-fields-container">
                            <h3>Repository</h3>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type repository name"
                            />
                          </div>
                          <div className="create-fields-container">
                            <h3>Site</h3>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type site url"
                            />
                          </div>
                          <div className="create-fields-container">
                            <h3>Video</h3>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type video url"
                            />
                          </div>
                        </div>
                        <h3>Select Technologies</h3>
                        <div className="stack-fields create-stack-fields">
                          <div className="stack-fields__add-button">
                            <ChevronDown />
                            <p>Add</p>
                          </div>
                          <ArrowLeftRight color="#9CA3AF" />

                          <div className="stack-card">
                            <h4>Stack</h4>
                            <div className="stack-fields">
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                                <div className="stack-fields-icon">
                                  <Trash2 size={15} />
                                </div>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                                <div className="stack-fields-icon">
                                  <Trash2 size={15} />
                                </div>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                                <div className="stack-fields-icon">
                                  <Trash2 size={15} />
                                </div>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                                <div className="stack-fields-icon">
                                  <Trash2 size={15} />
                                </div>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                                <div className="stack-fields-icon">
                                  <Trash2 size={15} />
                                </div>
                              </div>
                              <div className="stack-fields-item">
                                <img src={itemStack} alt="" />
                                <p>Css</p>
                                <div className="stack-fields-icon">
                                  <Trash2 size={15} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="create-stack-fields__buttons">
                          <button
                            className="create-stack-fields__buttons-add"
                            type="button"
                          >
                            Add Project
                          </button>
                          <button
                            className="create-stack-fields__buttons-discard"
                            type="button"
                            onClick={() => setIsMenuVisible(false)}
                          >
                            Discard
                          </button>
                        </div>
                      </>
                    ) : schema === 'skills' ? (
                      <>
                        <div className="text-fields-container">
                          <div className="create-fields-container">
                            <h3>Icon</h3>

                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type icon url"
                            />
                          </div>
                          <div className="create-fields-container">
                            <h3>Title</h3>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type skill title"
                            />
                          </div>
                        </div>
                        <div className="create-stack-fields__buttons">
                          <button
                            className="create-stack-fields__buttons-add"
                            type="button"
                          >
                            Add Skill
                          </button>
                          <button
                            className="create-stack-fields__buttons-discard"
                            type="button"
                            onClick={() => setIsMenuVisible(false)}
                          >
                            Discard
                          </button>
                        </div>
                      </>
                    ) : schema === 'technologies' ? (
                      <>
                        <div className="text-fields-container">
                          <div className="create-fields-container">
                            <h3>Icon</h3>

                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type icon url"
                            />
                          </div>
                          <div className="create-fields-container">
                            <h3>AppIcon</h3>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type app icon url"
                            />
                          </div>

                          <div className="create-fields-container">
                            <h3>Name</h3>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Type technologie name"
                            />
                          </div>
                        </div>
                        <div className="create-stack-fields__buttons">
                          <button
                            className="create-stack-fields__buttons-add"
                            type="button"
                          >
                            Add Skill
                          </button>
                          <button
                            className="create-stack-fields__buttons-discard"
                            type="button"
                            onClick={() => setIsMenuVisible(false)}
                          >
                            Discard
                          </button>
                        </div>
                      </>
                    ) : (
                      ''
                    )
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
            {showDeleteCard === true && (
              <>
                <div className="blur">{}</div>

                <div className="delete-card">
                  <div className="delete-card__header">
                    <div className="delete-card__header-container">
                      <CircleAlert size={60} />
                    </div>
                    <div className="close-component">
                      <X size={20} onClick={() => setShowDeleteCard(false)} />
                    </div>
                  </div>
                  <p>Are you sure you want to delete this {schema}?</p>
                  <div className="delete-card__buttons">
                    <button className="button-yes" type="button">
                      Yes, I'm sure
                    </button>
                    <button
                      className="button-no"
                      type="button"
                      onClick={() => setShowDeleteCard(false)}
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </>
            )}
            <div className="item-management-page__item-list">
              <div className="item-list__header">
                <h2 className="item-list__header-title">Skills</h2>
                <p className="item-list__header-results">255 results</p>
              </div>
              <div className="item-list__toolbar">
                <div className="item-search">
                  <img src={search} alt="" />
                  <input type="search" placeholder="Search for skills" />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuVisible(true)
                    setFormMode('create')
                  }}
                >
                  <span>+</span> Add new skill
                </button>
              </div>
              <div className="item-list__table">
                <table>
                  <thead>
                    <tr>
                      <th>SKILL ICON</th>
                      <th>SKILL NAME</th>
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
                          onClick={() => setShowDeleteCard(true)}
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="item-list__pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
