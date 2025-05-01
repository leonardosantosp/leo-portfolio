import { Header } from '../components/Header'
import { UserRound, EyeOff, LockKeyhole, Eye } from 'lucide-react'
import arrow from '../assets/down-arrow.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const LoginPage = () => {
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css')
  }, [])

  return (
    <div className="admin-signin">
      <div className="admin-signin__left">
        <Header showMenu={false} />
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
              />
            </div>
            <label className="admin-signin__label">Enter your password</label>
            <div className="input-group mb-3 admin-signin__input ">
              <span className="input-group-text">
                <LockKeyhole color="#aca7ad" />
              </span>
              <input
                type="password"
                className="form-control "
                placeholder="Password"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text">
                <EyeOff color="#aca7ad" />
              </span>
            </div>
            <button type="button" className="admin-signin__button">
              Sign in
            </button>
          </form>
        </div>
        <div className="admin-signin__footer">
          <div className="admin-signin__back">
            <Link to="/">
              <img src={arrow} alt="arrow icon" height={25} width={25} />
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
