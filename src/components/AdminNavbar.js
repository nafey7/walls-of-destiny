import React from 'react'
import { ReactComponent as Logo } from './logo.svg';
import {Link} from 'react-router-dom'
import {reactLocalStorage} from 'reactjs-localstorage';


function AdminNavbar() {

  

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
                <Link to={{pathname: "/adminHome"}} style={{margin:"0 20px", fontSize:"18px", color: "#a7ac38"}}>Products</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/clocks"}} style={{margin:"0 20px", fontSize:"18px", color: "white"}}>Summary</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/decor"}} style={{margin:"0 20px", fontSize:"18px", color: "white"}}>Orders</Link>
              </li>
            </ul>
            
          </div>
          
          <div>
          <div className="btn-group dropleft">
          <button className='btn btn-outline-success dropdown-toggle' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"20px"}}><i className="fa fa-user" style={{fontSize:"20px",color:"white"}}/></button>
          <div className="dropdown-menu">
          <Link to={{pathname: "/profile"}}
            ><button className='btn btn-outline-success btn-sm' style={{fontSize:"15px"}}>Profile</button></Link>
          <div className="dropdown-divider"></div>
          <Link to={{pathname: "/history"}}
            ><button className='btn btn-outline-success btn-sm' style={{fontSize:"15px"}}>History</button></Link>
          <div className="dropdown-divider"></div>
          <Link to={{pathname: "/track"}}
            ><button className='btn btn-outline-success btn-sm' style={{fontSize:"15px"}}>Track</button></Link>
          <div className="dropdown-divider"></div>
          <Link to={{pathname: "/rewards"}}
            ><button className='btn btn-outline-success btn-sm' style={{fontSize:"15px"}}>Rewards</button></Link>
          <div className="dropdown-divider"></div>
          <Link to={{pathname: "/history"}}
            ><button className='btn btn-outline-success btn-sm' style={{fontSize:"15px"}}>Logout</button></Link>
          </div>
          </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default AdminNavbar
