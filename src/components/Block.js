import React from 'react'

import Product from './product';



const Block = (props) => {
  const [Check, setCheck] = React.useState(true);
  const [Index, setIndex] = React.useState(-1);
  function productScreen(id){
    console.log(props.featured[id])
    setIndex(id);
    setCheck(false);
  }
  return (
    Check?(
    <>
      <h2 style={{textAlign:"center"}}>Featured Products</h2>
             <div class="row">
                 {props.featured.map((item)=>{
                   
                     return(
                       
                        <div class="col-3" style={{textAlign: "center", padding: '2cm', margin:"0 0 0 3cm"}}>
                         <div className="card" style={{width: "22rem", outline: "3px ridge grey"}}>
                         <button onClick={()=>{productScreen(item.id)}}><img className="card-img-top" src={item.pic} alt="Card image cap"/></button>
                         <div className="card-body" style={{backgroundColor:"grey"}}>
                           <p className="card-text"><h4><b>{item.name}</b></h4></p>
                           <h4><b>Rs: {item.price} /-</b></h4>
                         </div>
                       </div>
                       </div>
                     )
                 })}
            </div>
      
    </>):(<><Product props={props.featured[Index]}></Product></>)
  )
}

export default Block