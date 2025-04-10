import { Clock } from './Clock'
import search from '../assets/search-icon.png'
import { Apps } from './Apps'
import { useState, useEffect } from 'react'
import onGif from '../assets/ligar-gif.gif'
import onPng from '../assets/ligar.png'

const text = 'Minha stack de tecnologias'

const Phone = () => {
  const [phoneOn, setPhoneOn] = useState(false)
  const [index, setIndex] = useState(0)
  const [showApps, setShowApps] = useState(false)

  useEffect(() => {
    if (!phoneOn) return
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1)
      }, 25)
      return () => clearTimeout(timeout)
    }
    setShowApps(true)
  }, [index, phoneOn])

  return (
    <div className="phone">
      {!phoneOn ? (
        <div className="img__container">
          <div className="power-btn-wrapper">
            <span className="pulse-ring"></span>
            <img
              className="phone__png"
              src={onPng}
              alt="imagem do ícone de ligar"
              onClick={() => setPhoneOn(true)}
            />
            <img
              className="phone__gif"
              src={onGif}
              alt="gif do ícone de ligar"
              onClick={() => setPhoneOn(true)}
            />
          </div>
        </div>
      ) : (
        <>
          <Clock />
          <div className="phone__search">
            <img src={search} alt="Ícone de busca" />
            <p>
              {text.slice(0, index)} {index !== text.length && '|'}
            </p>
          </div>
          <div className={`phone__apps ${showApps ? 'show' : ''}`}>
            {showApps && <Apps />}
          </div>
        </>
      )}
    </div>
  )
}

export default Phone
