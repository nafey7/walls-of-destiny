import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'
import React from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';
import { useFormik } from 'formik';

function Profile() {
    let username = reactLocalStorage.get('username', "", true);
    const [cust, setCust] = React.useState({
        address: '',
        contact: '',
        username: username,
        password: 'password',
        name: '',
    })
    // const formik = useFormik({
    //     initialValues: {
    //         address: '',
    //         contact: '',
    //         username: '',
    //         password: '',
    //         name: '',
    //       },
    //       enableReinitialize: true,
    //       onSubmit: values =>{

    //         axios.post('http://localhost:8000/update_customer_info',{
    //             username: username,
    //             password: values.password, 
    //             name: values.name,
    //             address: values.address, 
    //             contact: values.contact
    //         })
    //         .then(function(res) {
    //             alert("Change Successful!");                        
    //         })
    //         .catch(function(err) {
    //             console.log(err);
    //     })}
    // })

    function changepassword(e){
        let x = cust;
        x.password = e;
        setCust(x)
    }
    function changeaddress(e){
        let x = cust;
        x.address = e;
        setCust(x)
    }
    function changename(e){
        let x = cust;
        x.name = e;
        setCust(x)
    }
    function changecontact(e){
        let x = cust;
        x.contact = e;
        setCust(x)
    }
    function done(){
        axios.post('http://localhost:8000/update_customer_info',cust)
            .then(function(res) {
                console.log(res)
                alert(res);                        
            })
            .catch(function(err) {
                console.log(err);
        })}

    return (
        <div className="container" style={{ margin: "50px 150px", height:"50%", backgroundColor:"white", position:"relative", width:"100%"}}>
        <div className="row">
            <h1 style={{textAlign: "center"}}>My Profile</h1>
        </div>
        <div className="row" style ={{ margin: "20px"}}>
            <Avatar
                alt="Remy Sharp"
                // src="https://via.placeholder.com/150"
                sx={{ width: 128, height: 128 }}>H</Avatar>
            <div className= "col" style ={{ margin: "50px"}}>
                <button type="button" className="btn btn-success btn-sm">Upload New Avatar</button>
            </div>
            
        </div>
        
        <div className="row">
            <div className="col">
            
            <label for="addressInput" className="form-label">House Address</label>
            <input className="form-control" type="text" id = "addressInput" name= "addressInput" onChange={(e)=>{changeaddress(e.target.value)}}  placeholder="House#,City"/>
            <br></br>
            <label for="contactInput" className="form-label">Contact</label>
            <input className="form-control" id = "contactInput" name="contactInput" onChange={(e)=>{changecontact(e.target.value)}}  type="text" placeholder="+92 300 *******" />
            <br></br>
            <Link to={{pathname: "/"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>
            <button type="button" className="btn btn-dark">Back</button></Link>
            <br></br>
            </div>
            <div className="col" style ={{ margin: "0 50px"}}>
            <label for="nameInput" className="form-label">Name</label>
            <input className="form-control" type="text" id = "nameInput" name= "nameInput" onChange={(e)=>{changename(e.target.value)}} placeholder="firstname lastname"/>
            <br></br>
            <label for="passwordInput" className="form-label">Password</label>
            <input className="form-control" type="text" id = "passwordInput" name= "passwordInput" oonChange={(e)=>{changepassword(e.target.value)}} placeholder="********"/>
            <br></br>
            <button type="button" onClick={done} className="btn btn-success">Apply</button>
            <br></br>
            </div>
            <div className="col-4">
            <button type="button" className="btn btn-danger">Delete My Account</button>
            </div>
        </div>
        </div>   
    )
}

export default Profile;