import React from 'react'
import product from './product';
// import MediaCard from './card1';



const Block = (props) => {
  function productScreen(item){
    <product props={item}></product>
  }
  return (
    // <div className="container" style={{height:"100%", BackgroundColor:"red", margin:"0px", flexWrap: "wrap", position:"absolute", width:"100%", display: 'flex'}}>

        
    //    <div className="small-container">
    //        <h2 style={{textAlign:"center"}}>Featured Products</h2>
    //        <div className="row" style={{textAlign: "center", marginBottom: '3cm'}}>
    //            {props.featured.map((item)=>{
    //                return(
    //                    <>
    //                     <div className="col-4">
    //                     <a><img src={item.pic} onclick={productScreen(item)} style={{height:"150px", width:"150px"}}/></a>
    //                     <h5>{item.name} <b>Rs: {item.price}</b></h5>
    //                     </div>
    //                    </>
    //                )
    //            })}
    //        </div>
    //    </div>
    //   </div>
      // <MediaCard></MediaCard>
    <>
      <h2 style={{textAlign:"center"}}>Featured Products</h2>
             <div class="row">
                 {props.featured.map((item)=>{
                     return(
                        <div class="col-3" style={{textAlign: "center", padding: '2cm', margin:"0 0 0 3cm"}}>
                         <div className="card" style={{width: "22rem", outline: "3px ridge grey"}}>
                         <img className="card-img-top" src={item.pic} alt="Card image cap"/>
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
  )
}

export default Block