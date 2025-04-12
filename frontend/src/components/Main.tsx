import { Home } from '../sections/Home'
import { About } from '../sections/About'
import { Projects } from '../sections/Projetcs'
import { Footer } from '../components/Footer'
import { useState, useEffect } from 'react'
import { LoadingScreen } from '../components/LoadingScreen'

export const Main = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

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
