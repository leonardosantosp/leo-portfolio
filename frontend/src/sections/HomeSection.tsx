import Phone from '../components/Phone'
import github from '../assets/github-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import zap from '../assets/whatsapp-icon.png'
import { SkillsTicker } from '../components/SkillsTicker'

export const HomeSection = () => {
  return (
    <div className="home" id="home">
      <div className="home-container">
        <div className="home__text">
          👋 Olá! eu sou Leonardo Paiva <br /> e sou desenvolvedor Junior Full
          Stack.
        </div>
        <div className="home__phone">
          <Phone />
        </div>
      </div>
      <div className="home__contact">
        <div className="home__contact-line">{''}</div>
        <a href="https://github.com/leonardosantosp" target="_blank">
          <img src={github} alt=" icon github" />
        </a>
        <a href="https://www.linkedin.com/in/leonardospaiva" target="_blank">
          <img src={linkedin} alt="icon linkedin" />
        </a>
        <a href="https://wa.me/35999754750" target="_blank">
          <img src={zap} alt="icon whatsapp" />
        </a>

        <div className="home__contact-line">{''}</div>
      </div>
      <SkillsTicker />
    </div>
  )
}
