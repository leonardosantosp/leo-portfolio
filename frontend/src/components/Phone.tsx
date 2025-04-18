import { Clock } from './Clock'
import search from '../assets/search-icon.png'
import { Apps } from './Apps'
import onGif from '../assets/ligar-gif.gif'
import onPng from '../assets/ligar.png'
import { LoadingScreen } from './LoadingScreen'
import { usePhoneBoot } from '../hooks/usePhoneBoot'

const Phone = () => {
  const { phoneOn, phoneLoading, text, showApps, appsLoading, bootPhone } =
    usePhoneBoot()

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
              onClick={bootPhone}
            />
            <img
              className="phone__gif"
              src={onGif}
              alt="gif do ícone de ligar"
              onClick={bootPhone}
            />
          </div>
        </div>
      ) : (
        <>
          {phoneLoading ? (
            <LoadingScreen />
          ) : (
            <>
              <Clock />
              <div className="phone__search">
                <img src={search} alt="Ícone de busca" />
                <p>{text}</p>
              </div>
              <div className={`phone__apps ${showApps ? 'show' : ''}`}>
                {appsLoading ? (
                  <div className="load__app">
                    <LoadingScreen />
                  </div>
                ) : (
                  <Apps />
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Phone
