import { useState, useEffect } from 'react'

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date()
      setTime(newTime)
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="clock">
      <p className="clock__time">
        {time.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>
      <p className="clock__date">{time.toLocaleDateString()}</p>
    </div>
  )
}
