import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Projects } from '../sections/Projetcs'

export const Main = () => {
  return (
    <div className="main-page">
      <Home />
      <About />
      <Projects />
    </div>
  )
}
