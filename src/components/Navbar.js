import React, {useState} from 'react'
import { ReactComponent as Logo } from './logo.svg';

function Navbar() {
  return (
      <>
      <nav className="navbar">
          <div className="navbar-container">
            {/* Logo is an actual React component */}
            <Logo />
          </div>
      </nav>
      </>
  )
}

export default Navbar
