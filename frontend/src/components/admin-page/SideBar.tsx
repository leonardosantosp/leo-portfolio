import { ChevronRight } from 'lucide-react'
import { PreviewSideBar } from './PreviewSideBar'
import { CreateSideBar } from './CreateSideBar'
import { useAdmin } from './AdminProvider'

type SideBarProps = {
  theme?: boolean
}

export const SideBar = ({ theme }: SideBarProps) => {
  const { formMode, setIsMenuVisible } = useAdmin()!
  return (
    <div className="menu-overlay">
      <div className={`side-bar ${theme && 'side-bar__light'}`}>
        <div className="side-bar__fields">
          {formMode === 'preview' ? (
            <PreviewSideBar theme={theme} />
          ) : formMode === 'create' ? (
            <CreateSideBar />
          ) : formMode === 'update' ? (
            ''
          ) : null}
        </div>
        <div
          className={`sidebar-foot ${theme && 'sidebar-foot__light'}`}
          onClick={() => setIsMenuVisible(false)}
        >
          <p>voltar</p>
          <ChevronRight size={30} />
        </div>
      </div>
      <div className="blur-layer"></div>
    </div>
  )
}
