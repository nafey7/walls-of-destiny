import React from 'react'
import ChatBot from './ChatBot';
import product from './product';



const Block = (props) => {
  function productScreen(item){
    <product props={item}></product>
  }
  return (
    // <div className="container" style={{height:"100%", BackgroundColor:"red", margin:"0px", flexWrap: "wrap", position:"absolute", width:"100%", display: 'flex'}}>
    <div>
       <ChatBot /> 
       <div className="small-container">
           <h2 style={{textAlign:"center"}}>Featured Products</h2>
           <div className="row" style={{textAlign: "center", marginBottom: '3cm'}}>
               {props.featured.map((item)=>{
                   return(
                       <>
                        <div className="col-4">
                        <a><img src={item.pic} onclick={productScreen(item)} style={{height:"150px", width:"150px"}}/></a>
                        <h5>{item.name} <b>Rs: {item.price}</b></h5>
                        </div>
                       </>
                   )
               })}
           </div>
       </div>
    </div>
  )
}

export default Block