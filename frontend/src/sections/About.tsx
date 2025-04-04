import assinatura from '../assets/assinatura-portfolio.png'
import foto from '../assets/foto.png'
import { useState, useEffect, useRef } from 'react'

const text = `Olá me chamo Leonardo Paiva! 
Sou um desenvolvedor Full Stack. 
Com experiência em criar soluções completas, 
trabalhando tanto no front-end quanto no back-end, 
busco transformar ideias em aplicações funcionais, 
eficientes e escaláveis. Vamos construir juntos o seu próximo projeto!`

export const About = () => {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.05 } // Só ativa quando 5% estiver visível
    )

    if (chatRef.current) {
      observer.observe(chatRef.current)
    }

    return () => {
      if (chatRef.current) {
        observer.unobserve(chatRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (visible && index < text.length) {
      const interval = setInterval(() => {
        setIndex(prevIndex => prevIndex + 1)
      }, 20)
      return () => clearInterval(interval)
    }
  }, [visible, index])

  return (
    <div className="about" id="about">
      <h1 className="about__title">Sobre Mim</h1>
      <div className="about-container">
        <div className="chat" ref={chatRef}>
          <img src={foto} alt="imagem de leonardo" />
          <div className="chat-bubble">{text.slice(0, index)}</div>
        </div>
        <img
          className="signature"
          src={assinatura}
          alt="assinatura de leonardo"
        />
      </div>
    </div>
  )
}
