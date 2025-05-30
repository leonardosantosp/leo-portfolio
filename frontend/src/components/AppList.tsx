import type { ReturnedTechnology } from '../api-client/technologiesApi'
import { Link } from 'react-router-dom'

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
        <Link to={`/projects/technology/${app.slug}`} key={app._id}>
          <img src={app.appIcon} alt="" />
        </Link>
      ))}
    </div>
  )
}
