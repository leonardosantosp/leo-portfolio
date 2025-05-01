import { ChevronRight } from 'lucide-react'
import { PreviewSideBar } from './PreviewSideBar'
import { CreateSideBar } from './CreateSideBar'
import { EditSideBar } from './EditSidebar'
import { useAdmin } from './AdminProvider'

export const SideBar = () => {
  const { formMode, setIsMenuVisible, isLight } = useAdmin()!
  return (
    <div className="menu-overlay">
      <div className={`side-bar ${isLight && 'side-bar__light'}`}>
        <div className="side-bar__fields">
          {formMode === 'preview' ? (
            <PreviewSideBar />
          ) : formMode === 'create' ? (
            <CreateSideBar />
          ) : formMode === 'update' ? (
            <EditSideBar />
          ) : null}
        </div>
        <div
          className={`sidebar-foot ${isLight && 'sidebar-foot__light'}`}
          onClick={() => setIsMenuVisible(false)}
        >
          <p>voltar</p>
          <ChevronRight size={30} />
        </div>
      </div>
      <div className="blur-layer">{}</div>
    </div>
  )
}
