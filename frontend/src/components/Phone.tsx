import { Clock } from './Clock'
import search from '../assets/search-icon.png'
import { AppList } from './AppList'
import onGif from '../assets/ligar-gif.gif'
import onPng from '../assets/ligar.png'
import { LoadingScreen } from './LoadingScreen'
import { usePhoneBoot } from '../hooks/usePhoneBoot'
import { PaginationDots } from './PaginationDots'
import { useState } from 'react'
import react from '../assets/app-images/react.png'
import { Search } from 'lucide-react'

const Phone = () => {
  const { phoneOn, phoneLoading, text, showApps, appsLoading, bootPhone } =
    usePhoneBoot()

  const pageSize = 16
  const [currentPage, setCurrentPage] = useState(0)

  const onChange = (newPage: number) => {
    setCurrentPage(newPage)
  }
  const apps = Array(40).fill({ react })

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
                <Search size={14} className="phone__search-icon" />
                <p>{text}</p>
              </div>
              <div className={`phone__apps ${showApps ? 'show' : ''}`}>
                {appsLoading ? (
                  <div className="load__app">
                    <LoadingScreen />
                  </div>
                ) : (
                  <>
                    <AppList
                      apps={apps}
                      currentPage={currentPage}
                      pageSize={pageSize}
                    />
                    <PaginationDots
                      currentPage={currentPage}
                      pageSize={pageSize}
                      onChange={onChange}
                      array={apps}
                    />
                  </>
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
