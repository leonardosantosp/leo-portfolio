import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Projects } from '../sections/Projetcs'
import { Footer } from '../components/Footer'

export const Main = () => {
  return (
    <div className="main-page">
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}
