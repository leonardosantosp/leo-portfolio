import { Clock } from './Clock'
import { AppList } from './AppList'
import onGif from '../assets/ligar-gif.gif'
import onPng from '../assets/ligar.png'
import { LoadingScreen } from './LoadingScreen'
import { usePhoneBoot } from '../hooks/usePhoneBoot'
import { PaginationDots } from './PaginationDots'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import type { ReturnedTechnology } from '../api-client/technologiesApi'
import { getTechnologies } from '../api-client/technologiesApi'

const Phone = () => {
  const { phoneOn, phoneLoading, text, showApps, appsLoading, bootPhone } =
    usePhoneBoot()

  const [technologies, setTechnologies] = useState<ReturnedTechnology[]>([])
  const pageSize = 16
  const [currentPage, setCurrentPage] = useState(0)
  const onChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTechnologies = async () => {
      const response = await getTechnologies()
      setTechnologies(response)
    }
    fetchTechnologies()
  }, [])

  useEffect(() => {
    if (technologies.length > 0) {
      setIsLoading(false)
    }
  }, [technologies])

  return (
    <>
      {isLoading ? (
        <div className="phone">
          <LoadingScreen />
        </div>
      ) : (
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
                          apps={technologies}
                          currentPage={currentPage}
                          pageSize={pageSize}
                        />
                        <PaginationDots
                          currentPage={currentPage}
                          pageSize={pageSize}
                          onChange={onChange}
                          array={technologies}
                        />
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Phone
