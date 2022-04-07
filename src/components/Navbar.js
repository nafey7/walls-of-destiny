import React, {useState} from 'react'
import { ReactComponent as Logo } from './logo.svg';

function Navbar() {
  return (
      <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" >
          <Logo width="100" height="40" className="d-inline-block align-text-top"/>
            Walls Of Destiny
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Clocks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Decor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Art</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Lights</a>
              </li>
              
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Clocks</a></li>
                  <li><a class="dropdown-item" href="#">Decor</a></li>
                  <li><a class="dropdown-item" href="#">Art</a></li>
                  <li><a class="dropdown-item" href="#">Light</a></li>
                </ul>
            </li> */}
            </ul>
            
          </div>
          
          <div className='justify-content-end'>
          <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          </div>
          <div>
          <a href='#' ><i className="glyphicon glyphicon-shopping-cart" style={{color:"red"}}></i></a>
          <a  href='#'><i className="fa fa-user"></i></a>
          </div>
        </div>
      </nav>
      
      </>
  )
}




export default Navbar
