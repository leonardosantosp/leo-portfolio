import { HomeSection } from '../sections/HomeSection'
import { AboutSection } from '../sections/AboutSection'
import { ProjectsSection } from '../sections/ProjetcsSection'
import { Footer } from '../components/Footer'
import { LoadingScreen } from '../components/LoadingScreen'

interface mainProps {
  loading: boolean
}

export const Main = ({ loading }: mainProps) => {
  return (
    <div className="main-page">
      {loading && <LoadingScreen />}
      <div
        style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}
      >
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  )
}
