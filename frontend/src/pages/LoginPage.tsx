import { Header } from '../components/Header'
import user from '../assets/user.png'
import password from '../assets/password.png'
// import visible from '../assets/visible.png'
import invisible from '../assets/invisible.png'
import arrow from '../assets/down-arrow.png'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
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
            <div className="admin-signin__input-group">
              <img src={user} alt="icon user" height={30} width={30} />
              <input
                type="text"
                placeholder="your username"
                className="admin-signin__input"
              />
            </div>
            <label className="admin-signin__label">Enter your password</label>
            <div className="admin-signin__input-group">
              <img src={password} alt="icon password" height={30} width={30} />
              <input
                type="password"
                placeholder="your password"
                className="admin-signin__input"
              />
              <img
                src={invisible}
                alt="icon closed eye"
                height={25}
                width={25}
              />
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
