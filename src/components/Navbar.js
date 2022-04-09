import React from 'react'
import { ReactComponent as Logo } from './logo.svg';
import Modal from 'react-modal';
import { render } from '@testing-library/react';

Modal.setAppElement('#root');

function Navbar() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);


  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    closeModal();
    setIsOpen2(true);
    
    render(
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Register"
      >
        <button className='btn btn-outline-success' onClick={closeModal2} style={{display: "inline-block", margin: '0 0 0 350px', textAlign: 'right'}}><i class='fas fa-times-circle' style={{fontSize:'28px',color:'red'}}></i></button>
      
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form id = "login_form" style={{width: '400px', height: '400px', overflow: 'hidden', margin: '0 0 0 0px', padding: '20px', background: 'green', borderRadius: '15px'}} >
                <legend style={{textAlign:'center'}}>Register</legend>

                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="____@____.com" style={{width: '400', height: '30px', border: 'none', borderRadius: '3px', paddingLeft: '8px'}}/>
                </div>
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="____@____.com" style={{width: '400', height: '30px', border: 'none', borderRadius: '3px', paddingLeft: '8px'}}/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="*********" style={{width: '400', height: '30px', border: 'none', borderRadius: '3px', paddingLeft: '8px'}}/>
                </div>
                <div className="form-group">
                    <label for="password">Confirm Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="*********" style={{width: '400', height: '30px', border: 'none', borderRadius: '3px', paddingLeft: '8px'}}/>
                </div>
                <button type="submit" id="log" className="btn btn-primary" style={{display: "block", margin: '0 auto', textAlign: 'center'}}>Submit</button>
            </form>
            
        </div>
        
    </div>
    </Modal>
    )
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"transparent"
    },
  };
  let subtitle;
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
          <button className='btn btn-outline-success' style={{fontSize:"20px"}} onClick= {openModal}
          ><a><i className="fa fa-user" style={{fontSize:"20px",color:"white"}}/></a></button>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login/Register"
      >
        <button className='btn btn-outline-success' onClick={closeModal} style={{display: "inline-block", margin: '0 0 0 350px', textAlign: 'right'}}><i class='fas fa-times-circle' style={{fontSize:'28px',color:'red'}}></i></button>
      
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form id = "login_form" style={{width: '400px', height: '350px', overflow: 'hidden', margin: '0 0 0 0px', padding: '20px', background: 'green', borderRadius: '15px'}} >
                <legend style={{textAlign:'center'}}>Login</legend>
            
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="____@____.com" style={{width: '400', height: '30px', border: 'none', borderRadius: '3px', paddingLeft: '8px'}}/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="*********" style={{width: '400', height: '30px', border: 'none', borderRadius: '3px', paddingLeft: '8px'}}/>
                </div>
                <button type="submit" id="log" className="btn btn-primary" style={{display: "block", margin: '0 auto', textAlign: 'center'}}>Submit</button>
                <br></br>
                <a href="#" style={{color: 'black'}}><p>Forgot your password?</p></a>
                <a href="#" style={{color: 'black'}} onClick={openModal2}><p>Dont have an account yet?</p></a>
            </form>
            
        </div>
        
    </div>
    </Modal>
    </>
  )
}

export default Navbar
