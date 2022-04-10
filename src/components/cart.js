import React from 'react'
import './cart.css';
import CartItem from './CartItem';

const Cart = (props) =>{

    function removeFromCart(id){
    }
    var total = 0;

    return(
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {props.length > 0 && (
                            <div className="cart__body">
                                {props.featured.map(item => (
                                    <CartItem props={item} onClick={() => removeFromCart(item)} />
                                ))}
                            </div>
                            
                        )}
                        {props.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} PKR/- </div>
                    </div>
                </div>
            </div>
        </div>
    );

    
//     return (
//         <>
        
//         <h2 style={{textAlign:"center"}}>Cart</h2>

//         <div className="shopping-cart" style={{marginTop: "3%", display: "table", content: '', clear: 'both', zoom: "1"}}>

//         <div className="column-labels" style={{paddingBottom: "15px", marginBottom: "15px", borderBottom: "1px solid black"}}>
//         <label className="product-image" style={{textIndent: "-9999px"}}>Image</label>
//         <label className="product-details" style={{textIndent: "-9999px"}}>Product</label>
//         <label className="product-price">Price</label>
//         <label className="product-quantity">Quantity</label>
//         <label className="product-removal" style={{textIndent: "-9999px"}}>Remove</label>
//         <label className="product-line-price">Total</label>
//         </div>
//         <div>
//                  {props.featured.map((item)=>{
//                      return(
//                         <div className="product" style={{marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid black"}}>
//                             <div className="product-image" style={{ textAlign: "center", float: "left", width: '20%'}}>
//                             <img src={item.pic} style={{height:"100px", width:"100px"}}/>
//                             </div>
//                             <div className="product-details" style={{float: "left", width: "37%"}}>
//                             <div className="product-title" style={{marginRight: "20px"}}>{item.name}</div>
//                             <p className="product-description" style={{margin: "5px 20px 5px 0", lineHeight: "1.4em"}}>{item.details}</p>
//                             </div>
//                             <div className="product-price" style={{float: "left", width: '12%'}}>{item.price}</div>
//                             <div className="product-quantity" style={{float: "left", width: '10%'}}>
//                             <input type="number" value="1" min="1" style={{width: "40px"}}/>
//                             </div>
//                             <div className="product-removal" style={{float: "left", width: '9%'}} >
//                             <button className="remove-product">
//                                 Remove
//                             </button>
//                             </div>
//                             <div className="product-line-price" style={{float: "left", width: '12%', textAlign: 'right'}}>25.98</div>
//                         </div>
                        
//                      )
//                  })}
//                  </div>

  

//   <div className="totals">
//     <div className="totals-item">
//       <label>Subtotal</label>
//       <div className="totals-value" id="cart-subtotal">71.97</div>
//     </div>
//     <div className="totals-item">
//       <label>Tax (5%)</label>
//       <div className="totals-value" id="cart-tax">3.60</div>
//     </div>
//     <div className="totals-item">
//       <label>Shipping</label>
//       <div className="totals-value" id="cart-shipping">15.00</div>
//     </div>
//     <div className="totals-item totals-item-total">
//       <label>Grand Total</label>
//       <div className="totals-value" id="cart-total">90.57</div>
//     </div>
//   </div>
      
//     <button className="checkout">Checkout</button>

//     </div>          
      
//     </>
//   );
}



export default Cart;