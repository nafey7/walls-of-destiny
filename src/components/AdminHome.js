import React from 'react'


function AdminHome(props) {
    

    return (
      <>
    <button className="btn btn-dark">Add Product</button>

        <h2 style={{textAlign:"center"}}>{props.title}</h2>
               <div class="row" style={{margin:"0 0 55px 0cm"}}>
                   {props.featured.map((item)=>{
                     
                       return(
                         
                          <div class="col-3" style={{textAlign: "center", padding: '2cm', margin:"0 0 0 3cm"}}>
                           <div className="card" style={{width: "22rem", outline: "3px ridge grey"}}>
                           <button ><img className="card-img-top" src={item.pic} alt="Card image cap"/></button>
                           <div className="card-body" style={{backgroundColor:"grey"}}>
                             <p className="card-text"><h4><b>{item.name}</b></h4></p>
                             <h4><b>Rs: {item.price} /-</b></h4>
                           </div>
                         </div>
                         </div>
                       )
                   })}
              </div>
        
      </>
  );
}

export default AdminHome;
