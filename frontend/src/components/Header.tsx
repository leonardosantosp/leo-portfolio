import { Link } from 'react-router-dom'

interface headerProps {
  showMenu: boolean
  text: string
}

export const Header = ({ showMenu, text }: headerProps) => {
  const formatNameWithSpaces = (text: string): string => {
    let newText = ''
    for (let i = 0; i < text.length; i++) {
      newText += text.charAt(i).toUpperCase() + ' '
    }
    return newText.trim()
  }

  return (
    <div className="header">
      <h2 className="header__logo">
        <a href="/">
          <span>&lt; </span> {formatNameWithSpaces(text)} <span>&gt;</span>
        </a>
      </h2>
      {showMenu && (
        <ul className="header__menu">
          <li>
            {' '}
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre Mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  )
}
