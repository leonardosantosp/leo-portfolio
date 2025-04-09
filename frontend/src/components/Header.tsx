interface headerProps {
  showMenu: boolean
}

export const Header = ({ showMenu }: headerProps) => {
  return (
    <div className="header">
      <h2 className="header__logo">
        <a href="/">
          <span>&lt; </span> L É O <span>&gt;</span>
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
        </ul>
      )}
    </div>
  )
}
