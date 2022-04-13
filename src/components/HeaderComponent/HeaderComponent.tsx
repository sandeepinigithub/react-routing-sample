import React from "react"
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'
const HeaderComponent = () => {
  const navigate = useNavigate();
  let login: any = JSON.parse(localStorage.getItem('login') || '{}');

  const logoutHandler = () => {
    localStorage.setItem('login', JSON.stringify({ isLoggedIn: false }));
    navigate('/')
  }
  const loginHandler = () => {
    localStorage.setItem('login', JSON.stringify({ isLoggedIn: true }));
    navigate('/home')
  }

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src={logo} className="bi me-2" width="40" height="32" />
          </Link>

          {login?.isLoggedIn && <>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/home" className="nav-link px-2 text-white">Home</Link></li>
              <li><Link to="/features" className="nav-link px-2 text-white">Features</Link></li>
              <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form></>

          }

          <div className="text-end">
            {!login?.isLoggedIn && <>
              <button type="button" className="btn btn-outline-light me-2" onClick={loginHandler}>Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </>}
            {login?.isLoggedIn && <>
              <button type="button" className="btn btn-warning" onClick={logoutHandler}>Logout</button></>}
          </div>
        </div>
      </div>
    </header>
  )

}

export default HeaderComponent;