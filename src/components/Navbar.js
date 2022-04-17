import React from 'react'
import { ReactComponent as Logo } from './logo.svg';
import {Link} from 'react-router-dom'
import {reactLocalStorage} from 'reactjs-localstorage';
import {useLocation, useNavigate} from "react-router-dom";


function Navbar(props) {
  const [Check, setCheck] = React.useState(false);
  let navigate = useNavigate();
  function logout(){
    reactLocalStorage.remove('username');
    navigate("/login")
  }
  let username
  React.useEffect(() => {
    username = reactLocalStorage.get('username', "", true);
    if(username !== ""){
      setCheck(true);
    }

  }, username)
  

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
              <li className="nav-item">
                <Link to={{pathname: "/"}} style={{margin:"0 20px", fontSize:"18px", color: "#a7ac38"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/clocks"}} style={{margin:"0 20px", fontSize:"18px", color: "white"}}>Clocks</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/decor"}} style={{margin:"0 20px", fontSize:"18px", color: "white"}}>Decor</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/art"}} style={{margin:"0 20px", fontSize:"18px", color: "white"}}>Art</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname: "/lights"}} style={{margin:"0 20px", fontSize:"18px", color: "white"}}>Lights</Link>
              </li>
            </ul>
            
          </div>
          
          <div className='justify-content-end'>
          <form  id="search" className="d-flex" style={{display:'inline-flex'}}>
                <input id="searchbar" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{borderRadius: '15px', margin: "5px 0px 0px 0px"}}/>
                <button className="btn btn-outline-success" type="submit"><i className="material-icons" style={{fontSize:"25px",color:"white"}}>search</i></button>
                
          </form>
          </div>
          <div>
          <Link to={{pathname: "/cart",}}
            ><button className='btn btn-outline-success' style={{fontSize:"20px"}}><i className="glyphicon glyphicon-shopping-cart" style={{fontSize:"20px",color:"white"}}></i></button></Link>
          {Check?(
          <div className="btn-group dropleft">
          <button className='btn btn-outline-success dropdown-toggle' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"20px"}}><i className="fa fa-user" style={{fontSize:"20px",color:"white"}}/></button>
          <div className="dropdown-menu" style={{left:"auto",right:"-1em",align:"left"}}>
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
<button className='btn btn-outline-success btn-sm' onClick={() =>{logout()}} style={{fontSize:"15px"}}>Logout</button>
          </div>
          </div>):(<Link to={{pathname: "/login"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>
          <button className='btn btn-primary' style={{fontSize:"10px"}}>Sign In</button></Link>)}

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
