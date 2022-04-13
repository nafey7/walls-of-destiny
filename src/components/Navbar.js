import React from 'react'
import { ReactComponent as Logo } from './logo.svg';
import {Link} from 'react-router-dom'

function Navbar(props) {
  const [Check, setCheck] = React.useState(false);

  return (
      <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
          <Logo width="99" height="59" className="d-inline-block" style={{backgroundColor:"#a7ac38"}}/>
          <button className="navbar-toggler" type="button" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style= {{backgroundColor:"",margin:"0 40px 0px"}}>
            <ul className="navbar-nav"style= {{backgroundColor:"",margin:"0 225px 0px"}}>
              <li className="nav-item active">
                <Link to={{pathname: "/"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/clocks"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>Clocks</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/decor"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>Decor</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/art"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>Art</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/lights"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>Lights</Link>
              </li>
            </ul>
            
          </div>
          
          <div className='justify-content-end'>
          <form  id="search" className="d-flex" style={{display:'inline-flex'}}>
                <input id="searchbar" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit"><a><i className="material-icons" style={{fontSize:"25px",color:"white"}}>search</i></a></button>
                
          </form>
          </div>
          <div>
            <Link to={{pathname: "/cart",}}
            ><button className='btn btn-outline-success' style={{fontSize:"20px"}}><a href='#' ><i className="glyphicon glyphicon-shopping-cart" style={{fontSize:"20px",color:"white"}}></i></a></button></Link>
          {Check?(
          <button className='btn btn-outline-success' style={{fontSize:"20px"}}><a><i className="fa fa-user" style={{fontSize:"20px",color:"white"}}/></a></button>
          ):(<button className='btn btn-primary' style={{fontSize:"10px"}}><a>Sign In</a></button>)}
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
