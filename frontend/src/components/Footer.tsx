import { Header } from './Header'
import github from '../assets/github-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import zap from '../assets/whatsapp-icon.png'

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <Header showMenu={false} text="léo" />
        <div className="footer__contact">
          <p>Contato: </p>
          <a href="https://github.com/leonardosantosp" target="_blank">
            <img src={github} alt=" icon github" />
          </a>
          <a href="https://www.linkedin.com/in/leonardospaiva" target="_blank">
            <img src={linkedin} alt="icon linkedin" />
          </a>
          <a href="https://wa.me/35999754750" target="_blank">
            <img src={zap} alt="icon whatsapp" />
          </a>
        </div>
      </div>
    </div>
  )
}
