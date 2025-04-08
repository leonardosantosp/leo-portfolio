import { Clock } from './Clock'
import search from '../assets/search-icon.png'
import { Apps } from './Apps'

const Phone = () => {
  return (
    <div className="phone">
      <Clock />
      <div className="phone__search">
        <img src={search} alt="Ícone de busca" />
        <p>Minha stack de tecnologias</p>
      </div>
      <div className="phone__apps">
        <Apps />
      </div>
    </div>
  )
}

export default Phone
