import React, {useState} from 'react'
import { ReactComponent as Logo } from './logo.svg';

function Navbar() {
  return (
      <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
          <a className="navbar-brand" >
          <Logo width="100" height="40" className="d-inline-block" style={{backgroundColor:"white"}}/>
            Walls Of Destiny
          </a>
          <button className="navbar-toggler" type="button" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
            </ul>
            
          </div>
          
          <div className='justify-content-end'>
          <form className="d-flex" style={{display:'inline-flex'}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit"><a><i className="material-icons" style={{fontSize:"25px",color:"white"}}>search</i></a></button>
                
          </form>
          </div>
          <div>
          <button className='btn btn-outline-success' style={{fontSize:"20px"}}><a href='#' ><i className="glyphicon glyphicon-shopping-cart" style={{fontSize:"20px",color:"white"}}></i></a></button>
          <button className='btn btn-outline-success' style={{fontSize:"20px"}}><a><i className="fa fa-user" style={{fontSize:"20px",color:"white"}}/></a></button>
          </div>
        </div>
      </nav>
      
      </>
  )
}




export default Navbar
