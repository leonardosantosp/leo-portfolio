import react from '../assets/app-images/react.png'

interface AppListProps {
  currentPage: number
  pageSize: number
  apps: string[]
}

export const AppList = ({ currentPage, pageSize, apps }: AppListProps) => {
  const visibleApps = apps.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  )
  return (
    <div className="apps">
      {visibleApps.map((app, i) => (
        <img key={i} src={react} alt="" />
      ))}
    </div>
  )
}
