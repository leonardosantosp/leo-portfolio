import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Projects } from '../sections/Projetcs'
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
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
