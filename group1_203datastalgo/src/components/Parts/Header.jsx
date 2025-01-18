import React from 'react'
import { Link } from 'react-router-dom'
import { header } from '../CSS/foryoupage.css'

function HeaderNonUser() {
  return (
    <div className="header">
    <div className="logo"><Link to="/">EduHub</Link></div>

    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav className="nav">
      <Link to="/login" className="btn login">
        Login
      </Link>
      <Link to="/signup" className="btn signup">
        Sign Up
      </Link>
    </nav>
  </div>
  )
}

export default HeaderNonUser