import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'

function Profile() {
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
            
            <label for="usernameInput" className="form-label">Username</label>
            <input className="form-control" id = "usernameInput" type="text" placeholder="Username" />
            <br></br>
            <label for="emailInput" className="form-label">Email</label>
            <input className="form-control" id = "emailInput" type="email" placeholder="email@example.com" />
            <br></br>
            <label for="contactInput" className="form-label">Contact</label>
            <input className="form-control" id = "contactInput" type="text" placeholder="+92 300 *******" />
            <br></br>
            <Link to={{pathname: "/"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>
            <button type="button" className="btn btn-dark">Back</button></Link>
            <br></br>
            </div>

            <div className="col" style ={{ margin: "0 50px"}}>
            <label for="nameInput" className="form-label">Name</label>
            <input className="form-control" type="text" id = "nameInput" placeholder="firstname lastname"/>
            <br></br>
            <label for="passwordInput" className="form-label">Password</label>
            <input className="form-control" type="text" id = "passwordInput" placeholder="********"/>
            <br></br>
            <label for="addressInput" className="form-label">House Address</label>
            <input className="form-control" type="text" id = "addressInput" placeholder="House#,City"/>
            <br></br>
            <button type="button" className="btn btn-success">Apply</button>
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