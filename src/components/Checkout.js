import React from 'react'
import { useLocation } from "react-router-dom";



function Checkout(props) {
    const location = useLocation();
    const { x } = location.state;
    console.log(x)


    return (
        <div className="row">
            <h2 style={{textAlign: "center", margin:"50px 100px 0px -35px"}}>Checkout</h2>
            <div className="col-sm-3" style={{textAlign: "center", padding: '2cm', margin:"0px 0px 0cm 30%"}}>
                <div className="card" style={{width: "400px", outline: "3px ridge grey", height:"400px"}}>
                {/* <img className="card-img-top" src={props.pic} alt="Card image cap" style={{height:"400px", width:"400px"}}/> */}
                <h4><b>Bill: </b>{x} PKR</h4>
                <h5><b>Enter Valid Promocode</b></h5>
                <form className="row">
                    <div class="form-group" style={{margin:"0px 0px 20px 0px"}}>
                    <input type="text" class="form-control" name="address" id="address" placeholder="GhabranaNahi30" style={{margin:"0px 0px 0px 20px", display: "inline", width:"250px", border: 'none', borderRadius: '3px', paddingLeft: '18px'}}/>
                    <button type="submit" id="log" className="btn btn-dark" style={{display: "inline", margin: '0 auto', textAlign: 'center'}}>Verify</button>
                    </div>
                </form>
                <form>
                <div class="form-group" style={{margin:"0px 0px 20px 0px"}}>
                    <label htmlFor="email">Address</label>
                    <input type="text" className="form-control" name="address" id="address" placeholder="House, Street, Area, City, Province" style={{margin:"0px 0px 0px 20px",width: '350px', height: '30px', border: 'none', borderRadius: '3px', paddingLeft: '18px'}}/>
                </div>
                <div class="form-group" style={{margin:"0px 0px 20px 0px"}}>
                    <label htmlFor="email">Phone Number</label>
                    <input type="text" className="form-control" name="number" id="number" placeholder="+92-XXX-XXXXXXX" style={{margin:"0px 0px 0px 20px", width: '350px', height: '30px', border: 'none', borderRadius: '3px', paddingLeft: '18px'}}/>
                </div>
                <button type="submit" id="log" className="btn btn-primary" style={{display: "block", margin: '0 auto', textAlign: 'center'}}>Place Order</button>
                </form>
                <br></br>
                <br></br>
                <h5><b>Note: </b> Currently, only Cash on Delivery is available</h5>

                
            </div>
            </div>
      
    </div>
    
      );
}

export default Checkout