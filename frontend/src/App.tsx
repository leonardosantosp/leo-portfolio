import { Header } from './components/Header'
import { Main } from './components/Main'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Header showMenu={!loading} />
      <Main loading={loading} />
    </div>
  )
}

export default App
