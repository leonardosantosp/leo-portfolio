import { Clock } from './Clock'
import search from '../assets/search-icon.png'
import { Apps } from './Apps'
import { useState } from 'react'
import onGif from '../assets/ligar-gif.gif'
import onPng from '../assets/ligar.png'

const Phone = () => {
  const [phoneOn, setPhoneOn] = useState(false)

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
            <p>Minha stack de tecnologias</p>
          </div>
          <div className="phone__apps">
            <Apps />
          </div>
        </>
      )}
    </div>
  )
}

export default Phone
