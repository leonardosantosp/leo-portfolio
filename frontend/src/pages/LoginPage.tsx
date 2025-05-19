import { Header } from '../components/Header'
import { UserRound, EyeOff, LockKeyhole, Eye, ChevronLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const LoginPage = () => {
  const [viewPassword, setViewPassword] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:3333/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password })
      })

      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        toast.error(data.message || 'Erro inesperado')
        console.error('Erro no login:', data)
        return
      }
      localStorage.setItem('token', data.token)
      toast.success('Logado com sucesso')
      navigate('/admin-page')
    } catch (error) {
      toast.error('Erro ao fazer login')
      console.error('Erro inesperado:', error)
    }
  }

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href =
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
    link.id = 'bootstrap-css'
    document.head.appendChild(link)

    return () => {
      const existing = document.getElementById('bootstrap-css')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <div className="admin-signin">
      <div className="admin-signin__left">
        <Header showMenu={false} text="admin" />
        <div className="admin-signin__greeting">
          <p>Sign in as</p>
          <span className="admin-signin__greeting-role">ADMIN!</span>
        </div>
      </div>
      <div className="admin-signin__right">
        <div className="admin-signin__right-container">
          <form className="admin-signin__form">
            <h2 className="admin-signin__title">SIGN IN</h2>
            <label className="admin-signin__label">Enter your username</label>
            <div className="input-group flex-nowrap admin-signin__input">
              <span className="input-group-text" id="addon-wrapping">
                <UserRound color="#aca7ad" />
              </span>
              <input
                type="text"
                className="form-control "
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={e => setUser(e.target.value)}
              />
            </div>
            <label className="admin-signin__label">Enter your password</label>
            <div className="input-group mb-3 admin-signin__input ">
              <span className="input-group-text">
                <LockKeyhole color="#aca7ad" />
              </span>
              <input
                type={viewPassword ? 'text' : 'password'}
                className="form-control "
                placeholder="Password"
                aria-label="Amount (to the nearest dollar)"
                onChange={e => setPassword(e.target.value)}
              />
              {!viewPassword ? (
                <span className="input-group-text">
                  <EyeOff
                    cursor={'pointer'}
                    color="#aca7ad"
                    onClick={() => setViewPassword(true)}
                  />
                </span>
              ) : (
                <span className="input-group-text">
                  <Eye
                    cursor={'pointer'}
                    color="#aca7ad"
                    onClick={() => setViewPassword(false)}
                  />
                </span>
              )}
            </div>
            <button
              type="button"
              className="admin-signin__button"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="admin-signin__footer">
          <div className="admin-signin__back">
            <Link to="/">
              <ChevronLeft size={25} />
              <p>voltar</p>
            </Link>
          </div>
          <div>
            <p className="admin-signin__note">Restricted to admin users</p>
          </div>
        </div>
      </div>
    </div>
  )
}
