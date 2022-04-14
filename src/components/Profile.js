import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'

function Profile() {
    return (
        <div class="container" style={{ margin: "50px 150px", height:"50%", backgroundColor:"white", position:"relative", width:"100%"}}>
        <div class="row">
            <h1 style={{textAlign: "center"}}>My Profile</h1>
        </div>
        <div class="row" style ={{ margin: "20px"}}>
            <Avatar
                alt="Remy Sharp"
                // src="https://via.placeholder.com/150"
                sx={{ width: 128, height: 128 }}>H</Avatar>
            <div class= "col" style ={{ margin: "50px"}}>
                <button type="button" class="btn btn-success btn-sm">Upload New Avatar</button>
            </div>
            
        </div>
        
        <div class="row">
            <div class="col">
            
            <label for="usernameInput" class="form-label">Username</label>
            <input class="form-control" id = "usernameInput" type="text" placeholder="Username" />
            <br></br>
            <label for="emailInput" class="form-label">Email</label>
            <input class="form-control" id = "emailInput" type="email" placeholder="email@example.com" />
            <br></br>
            <label for="contactInput" class="form-label">Contact</label>
            <input class="form-control" id = "contactInput" type="text" placeholder="+92 300 *******" />
            <br></br>
            <Link to={{pathname: "/"}} style={{backgroundColor:"",margin:"0 20px", fontSize:"18px"}}>
            <button type="button" class="btn btn-dark">Back</button></Link>
            <br></br>
            </div>

            <div class="col" style ={{ margin: "0 50px"}}>
            <label for="nameInput" class="form-label">Name</label>
            <input class="form-control" type="text" id = "nameInput" placeholder="firstname lastname"/>
            <br></br>
            <label for="passwordInput" class="form-label">Password</label>
            <input class="form-control" type="text" id = "passwordInput" placeholder="********"/>
            <br></br>
            <label for="addressInput" class="form-label">House Address</label>
            <input class="form-control" type="text" id = "addressInput" placeholder="House#,City"/>
            <br></br>
            <button type="button" class="btn btn-success">Apply</button>
            <br></br>
            </div>
            <div class="col-4">
            <button type="button" class="btn btn-danger">Delete My Account</button>
            </div>
        </div>
        </div>   
    )
}

export default Profile;