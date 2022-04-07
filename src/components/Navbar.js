import React, {useState} from 'react'
import { ReactComponent as Logo } from './logo.svg';

function Navbar() {
  return (
      <>
      <nav className="navbar" bg="dark" variant="dark">
          <div className="navbar-container">
            <Logo width= "200" height= "80"/>
            Bootstrap
            
        </div>
      </nav>
      </>
  )
}

export default Navbar
