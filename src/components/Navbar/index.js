import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { Button } from 'components/Button'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handClick = () => setClick(!click)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          React<i className="fab fa-react"></i>
        </Link>
        <div className="menu-icon" onClick={handClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map(({ title, url, cName }, index) => (
            <li key={index}>
              <Link className={cName} to={url} onClick={() => setClick(false)}>
                {title}
              </Link>
            </li>
          ))}
          <li>
            <Button>Sign UP</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
