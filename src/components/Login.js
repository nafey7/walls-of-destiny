import React from 'react'
import './Login.css'


function Login() {
  const [Check, setCheck] = React.useState(false);
  return (
      <div className="split left">
        <div class="centered">
          <img style ={{width:"110vh",height:"100vh"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpZbDo4CyRqjJD_lTxD1zLpgmcMA1te95cA&usqp=CAU' alt="Avatar woman"/>
        </div>

      <div className="split right">
      <div className="centered">
        {Check?(
        <form id = "signup_form" style={{width: '400px', height: '100%', margin: '20px 0 0 0px', padding: '20px', background: 'white'}} >
          <h2 style={{margin:"0 0 30px 0", textAlign:'left'}}>Sign Up</h2>
              <div className="form-group">
                  <input type="text" className="form-control" name="username" id="username" placeholder="User Name" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="fullname" id="fullname" placeholder="Full Name" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="email" id="email" placeholder="Email Address" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="password" id="password" placeholder="Password" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="contact" id="contact" placeholder="Contact Number" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}}/>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" name="address" id="address" placeholder="Home Address" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}}/>
              </div>

              <button type="submit" id="log" className="btn" style={{color:"white",backgroundColor:"#a7ac38", width:"100px", display: "block", margin: '30px auto', textAlign: 'center'}}>SIGN UP</button>
              <p>Already have an account? <a href="#" style={{color: '#a7ac38'}}>Sign In</a></p>

        </form>
        ):(
        <form id = "login_form" style={{width: '400px', height: '500px', overflow: 'hidden', margin: '200px 0 0px 0px', padding: '20px', background: 'white'}} >
              <h2 style={{margin:"0 0 30px 0",textAlign:'left'}}>Sign In</h2>
          
              <div className="form-group">
                  <input type="text" className="form-control" name="email" id="email" placeholder="Email Address" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:""}}/>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" name="password" id="password" placeholder="Password" style={{width: '400', height: '40px', paddingLeft: '8px', backgroundColor:"white"}}/>
              </div>
              <a href="#" style={{color: '#a7ac38',textAlign:'right'}}><p>Forgot password?</p></a>
              <br></br>
              <button type="submit" id="log" className="btn" style={{width:"100px",display: "block", margin: '0 auto', textAlign: 'center',backgroundColor:"#a7ac38"}}>SIGN IN</button>
              <br></br>
              <p>Don't have an account? <a href="#" style={{color: '#a7ac38'}} onClick={()=>{setCheck(true)}} >Sign Up</a></p>
          </form>)}    
        </div>
      </div>
    </div>
  )
}

export default Login