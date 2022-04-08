import React from 'react'
import ChatBot from './ChatBot';



const Block = (props) => {
  return (
    // <div className="container" style={{height:"100%", BackgroundColor:"red", margin:"0px", flexWrap: "wrap", position:"absolute", width:"100%", display: 'flex'}}>
    <div>
       <ChatBot /> 
       <div className="small-container">
           <h2>Featured Products</h2>
           <div className="row" style={{textAlign: "center"}}>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product1: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product2: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product3: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product4: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product4: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product4: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product4: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product4: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product4: <b>Rs: 5000</b></h5>
               </div>
               <div className="col-4">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    <h5>Product4: <b>Rs: 5000</b></h5>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Block