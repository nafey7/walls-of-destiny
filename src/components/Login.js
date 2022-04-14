import React from 'react'
import './Login.css'


function Login() {
  const [Check, setCheck] = React.useState(false);
  return (
    <div style={{ height: '275%' }}>
      <div className="split left">
        <div class="centered">
          {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpZbDo4CyRqjJD_lTxD1zLpgmcMA1te95cA&usqp=CAU' alt="Avatar woman"/>
          <h2>Jane Flex</h2>
          <p>Some text.</p> */}
        </div>
      </div>

      <div className="split right">
      <div className="centered">
        {Check?(
        <form id = "signup_form" style={{width: '400px', height: '500px', margin: '80px 0 0 0px', padding: '20px', background: 'white'}} >
          <legend style={{textAlign:'center'}}>Register</legend>
          <div className="form-group">
                  <input type="text" className="form-control" name="email" id="email" placeholder="Full Name" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="email" id="email" placeholder="User Name" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="email" id="email" placeholder="Address" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="email" id="email" placeholder="Contact Number" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="email" id="email" placeholder="Email" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" name="password" id="password" placeholder="password" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>

              <button type="submit" id="log" className="btn btn-primary" style={{display: "block", margin: '0 auto', textAlign: 'center'}}>Submit</button>
        </form>
        ):(
        <form id = "login_form" style={{width: '400px', height: '300px', overflow: 'hidden', margin: '0 0 0 0px', padding: '20px', background: 'white'}} >
              <legend style={{textAlign:'center'}}>Login</legend>
          
              <div className="form-group">
                  <input type="text" className="form-control" name="email" id="email" placeholder="Username" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" name="password" id="password" placeholder="password" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <button type="submit" id="log" className="btn btn-primary" style={{display: "block", margin: '0 auto', textAlign: 'center'}}>Submit</button>
              <br></br>
              <a href="#" style={{color: 'black'}}><p>Forgot your password?</p></a>
              <a href="#" style={{color: 'black'}} onClick={()=>{setCheck(true)}} ><p>Dont have an account yet?</p></a>
          </form>)}    
        </div>
      </div>
    </div>
  )
}

export default Login