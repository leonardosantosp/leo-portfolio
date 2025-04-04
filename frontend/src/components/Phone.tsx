import { useState } from 'react'
const Phone = () => {
  const [page, setPage] = useState(0)

  // Simula várias páginas
  const pages = [
    { id: 0, content: <h3>📱 Minha Stack de Tecnologias</h3> },
    { id: 1, content: <h3>🚀 Meus Projetos</h3> },
    { id: 2, content: <h3>📩 Contato</h3> }
  ]

  return <div className="phone">{''}</div>
}

export default Phone
