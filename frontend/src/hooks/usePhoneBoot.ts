import { useState, useEffect } from 'react'

const text = 'Minha stack de tecnologias'

export const usePhoneBoot = () => {
  const [phoneOn, setPhoneOn] = useState(false)
  const [index, setIndex] = useState(0)
  const [phoneLoading, setPhoneLoading] = useState(false)
  const [showApps, setShowApps] = useState(false)
  const [appsLoading, setAppsLoading] = useState(false)

  useEffect(() => {
    if (!phoneOn) return
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1)
      }, 25)
      return () => clearTimeout(timeout)
    }
    const time = setTimeout(() => {
      setShowApps(true)
      setAppsLoading(true)
    }, 25)
    return () => clearTimeout(time)
  }, [index, phoneOn])

  useEffect(() => {
    if (!phoneOn) return
    const time = setTimeout(() => {
      setPhoneLoading(false)
    }, 150)
    return () => clearTimeout(time)
  }, [phoneOn])

  useEffect(() => {
    if (!showApps) return
    const timer = setTimeout(() => {
      setAppsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [showApps])

  const bootPhone = () => {
    setPhoneOn(true)
    setPhoneLoading(true)
  }

  return {
    phoneOn,
    phoneLoading,
    text: text.slice(0, index),
    showApps,
    appsLoading,
    bootPhone
  }
}
