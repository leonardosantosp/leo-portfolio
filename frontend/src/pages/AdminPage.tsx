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
export const AdminPage = () => {
  return (
    <>
      <Header showMenu={false} />
      <div className="item-management-container">
        <div className="item-management-page">
          <div className="item-management-page__header">
            <div className="item-management-page__header-schemas">
              <button type="button">Skills</button>
              <button type="button">Technologies</button>
              <button type="button">Projects</button>
            </div>
            <div className="item-management-page__header-view-toggle">
              <button type="button">
                <Table />
              </button>
              <button type="button">
                <LayoutPanelTop />
              </button>
            </div>
            <div className="theme-toggle">
              <button type="button">
                <Sun />
              </button>
              <button type="button">
                <MoonStar />
              </button>
            </div>
          </div>
          <div className="item-list-container">
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
                <button type="button">
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
                        >
                          <Trash2
                            size={15}
                            className="item-table__actions-img "
                          />
                          Delete
                        </button>
                      </td>
                    </tr>
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
                        >
                          <SquarePen
                            size={15}
                            className="item-table__actions-img"
                          />
                          Edit
                        </button>
                        <button
                          className="item-table__actions-preview"
                          type="button"
                        >
                          <Eye size={15} className="item-table__actions-img" />
                          Preview
                        </button>
                        <button
                          className="item-table__actions-delete"
                          type="button"
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
