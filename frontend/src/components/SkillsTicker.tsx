import api from '../assets/bar-images/api-rest.png'
import clean_code from '../assets/bar-images/clean-code.png'
import ddd from '../assets/bar-images/ddd.png'
import elastic from '../assets/bar-images/elastic-search.png'
import git from '../assets/bar-images/git.png'
import microservices from '../assets/bar-images/microservices.png'
import mvc from '../assets/bar-images/mvc.png'
import solid from '../assets/bar-images/solid.png'
import tdd from '../assets/bar-images/tdd.png'
import sockets from '../assets/bar-images/web-sockets.png'

const skills = [
  { icon: api, label: 'REST API' },
  { icon: clean_code, label: 'Clean Code' },
  { icon: ddd, label: 'DDD' },
  { icon: elastic, label: 'Elastic' },
  { icon: git, label: 'GIT' },
  { icon: microservices, label: 'Microsserviços' },
  { icon: mvc, label: 'MVC' },
  { icon: solid, label: 'SOLID' },
  { icon: tdd, label: 'TDD' },
  { icon: sockets, label: 'WebSockets' }
]

export const SkillsTicker = () => {
  return (
    <div className="skills-ticker">
      <div className="skills-ticker__ticker">
        {[...skills, ...skills].map((item, index) => (
          <div className="skills-ticker__ticker-item" key={`${index}`}>
            <span className="icon">
              <img src={item.icon} alt={`Iconde de ${item.label}`} />
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
