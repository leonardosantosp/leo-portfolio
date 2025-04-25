import { ChevronRight } from 'lucide-react'
import { PreviewSideBar } from './PreviewSideBar'
import { CreateSideBar } from './CreateSideBar'
import { useAdmin } from './AdminProvider'

export const SideBar = () => {
  const { formMode, setIsMenuVisible } = useAdmin()!
  return (
    <div className="menu-overlay">
      <div className="side-bar">
        <div className="side-bar__fields">
          {formMode === 'preview' ? (
            <PreviewSideBar />
          ) : formMode === 'create' ? (
            <CreateSideBar />
          ) : formMode === 'update' ? (
            ''
          ) : null}
        </div>
        <div className="sidebar-foot" onClick={() => setIsMenuVisible(false)}>
          <p>voltar</p>
          <ChevronRight size={30} />
        </div>
      </div>
      <div className="blur-layer"></div>
    </div>
  )
}
