import react from '../assets/app-images/react.png'
import type { ReturnedTechnology } from '../api-client/technologiesApi'

interface AppListProps {
  currentPage: number
  pageSize: number
  apps: ReturnedTechnology[]
}

export const AppList = ({ currentPage, pageSize, apps }: AppListProps) => {
  const visibleApps = apps.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  )
  return (
    <div className="apps">
      {visibleApps.map(app => (
        <img key={app._id} src={app.appIcon} alt="" />
      ))}
    </div>
  )
}
