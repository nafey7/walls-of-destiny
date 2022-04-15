import {BsGeoAltFill} from "react-icons/bs";
import {FiPhoneCall} from "react-icons/fi";
import {IoIosMail} from "react-icons/io";
import Avatar from '@mui/material/Avatar';

function Contactus(){
    return(
        <div class= "contact-us">
            <div class = "container" style = {{margin:"120px 100px 50px 180px", backgroundColor:"white",justifyContent:"center"}}>
                <h1 style = {{textAlign: "center"}}>Let's Chat.</h1>
                <p style = {{textAlign: "center"}}>We are here to help you and make your journey absolutely</p>
                <p style = {{textAlign: "center"}}>hassle-free.</p>
            </div>
            <div class = "row">
            <div class = "col-4">
                <div class = "row" style = {{margin:"0 0 40px 120px"}}>
                <Avatar
                alt="Remy Sharp"
                sx={{ margin:"0 70px 0 0", width: 50, height: 50, backgroundColor:"black" }}><BsGeoAltFill style = {{width:"20",height:"20"}}/></Avatar>
                Khayabane Jinnah, opposite sector U,
                <br></br>
                Phase 5 D.H.A, Lahore, Punjab 54792
                </div>
                <div class = "row" style = {{margin:"0 0 40px 120px"}}>
                    <Avatar
                    alt="Remy Sharp"
                    sx={{ margin:"0 70px 0px 0",width: 50, height: 50, backgroundColor:"black" }}><FiPhoneCall style = {{width:"20",height:"20"}}/></Avatar>
                    <br></br>
                    92 300 1231234
                </div>
                <div class = "row" style = {{margin:"0 0 40px 120px"}}>
                    <Avatar
                    alt="Remy Sharp"
                    sx={{ margin:"0 70px 0 0", width: 50, height: 50, backgroundColor:"black" }}><IoIosMail style = {{width:"20",height:"20"}}/></Avatar>
                    <br></br>
                    wod@gmail.com
                </div>
            </div>
            
            <div class = "col-4" style={{margin:"0 0 0 430px"}}>
            <div class="mb-3">
            <input type="text text-dark" style={{ height:"60px", backgroundColor:"#E5E5E5"}} class="form-control" id="subjectinput" placeholder="Subject"/>
            </div>
            <div class="mb-3">
            {/* <input type="text" style={{ height:"200px", backgroundColor:"black"}} class="form-control" id="queryinput" placeholder="Please write your query or the description of the problem you are facing."/> */}
            <textarea class="form-control text-dark" id="queryinput" style={{width:"4500px",margin:"25px 0 50px 0",backgroundColor:"#E5E5E5"}} rows="10" placeholder="Please write your query or the description of the problem you are facing."></textarea>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Contactus