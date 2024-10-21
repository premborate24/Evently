import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item"><a href="#home">HOME</a></li>
              <li className="nav-item"><a href="#services">SERVICES</a></li>
              <li className="nav-item"><a href="#celebrations">CELEBRATIONS</a></li>
              <li className="nav-item"><a href="#about">ABOUT</a></li>
              <li className="nav-item"><a href="#contact">CONTACT US</a></li>
            </ul>
          </nav>
    </div>
  )
}

export default Navbar;
