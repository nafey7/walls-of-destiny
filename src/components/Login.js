import React from 'react'
import './Login.css'
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";



function Login() {
  const [Check, setCheck] = React.useState(false);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios.post('http://104.131.61.109/api/login', {
        username: values.username,
        password: values.password
      })
      .then(function (response) {
        reactLocalStorage.set('username',values.username);
        console.log(response.data);
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  });

  const formikRegister = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      address: '',
      contact: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios.post('http://104.131.61.109/api/login', {
        username: values.username,
        name: values.name,
        email: values.email,
        contact: values.contact,
        address: values.address,
        password: values.password
      })
      .then(function (response) {
        console.log(response.data);
        navigate('/login');
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  });

  return (
    <div style={{ height: '166%' }}>
      <div className="split left">
        <div className="centered">
          {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpZbDo4CyRqjJD_lTxD1zLpgmcMA1te95cA&usqp=CAU' alt="Avatar woman"/>
          <h2>Jane Flex</h2>
          <p>Some text.</p> */}
        </div>
      </div>

      <div className="split right">
      <div className="centered">
        {Check?(
        <form id = "signup_form" onSubmit={formikRegister.handleSubmit} style={{width: '400px', height: '500px', margin: '80px 0 0 0px', padding: '20px', background: 'white'}} >
          <legend style={{textAlign:'center'}}>Register</legend>
          <div className="form-group">
                  <input type="text" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.name} name="name" id="name" placeholder="Full Name" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.username} name="username" id="username" placeholder="User Name" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.address} name="address" id="address" placeholder="Address" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.contact} name="contact" id="contact" placeholder="Contact Number" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.email} name="email" id="email" placeholder="Email" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" onChange={formikRegister.handleChange} value={formikRegister.values.password} name="password" id="password" placeholder="password" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>

              <button type="submit" id="log" className="btn btn-primary" style={{display: "block", margin: '0 auto', textAlign: 'center'}}>Submit</button>
        </form>
        ):(
        <form id = "login_form" onSubmit={formik.handleSubmit} style={{width: '400px', height: '300px', overflow: 'hidden', margin: '0 0 0 0px', padding: '20px', background: 'white'}} >
              <legend style={{textAlign:'center'}}>Login</legend>
          
              <div className="form-group">
                  <input type="text" className="form-control" id="username" name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="Username" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="password" style={{width: '400', height: '30px', border: 'none', borderRadius: '15px', paddingLeft: '8px', backgroundColor:"#69d2f1"}}/>
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