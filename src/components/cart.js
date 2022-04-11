import React from 'react'

function Cart(props) {
    const [Check, setCheck] = React.useState(false);
    function changequantity(value){
        console.log(value)
    }
//     function updateQuantity(quantityInput)
// {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children('.product-price').text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;
  
//   /* Update line price display and recalc cart totals */
//   productRow.children('.product-line-price').each(function () {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });  
// }
  return (
    <>
        <h2 style={{textAlign:"center", margin:"50px 0px 50px 0px"}}>Shopping Cart</h2>
        <hr style={{size:"8", width:"75%", color:"red", margin:"0px 0px 10px 200px"}}></hr>
        {props.featured.map((item)=>{return(
        <>
        <ul class="nav row">
            <li class="nav-item col">
                <><img className="card-img-top" src={item.pic} alt="Card image cap" style={{margin:"0px 0px 10px 200px", height:"70px", width:"70px"}}/></>
            </li>
            <li class="nav-item col-2" style={{margin:"25px 0 0 0", }}>
                <h5>{item.name}</h5>
            </li>
            <li class="nav-item col" style={{margin:"25px 0 0 0"}}>
                <h5>PKR: {item.price}</h5>
            </li>
            <li class="nav-item col" style={{margin:"25px 0 0 0"}}>
                {/* <h5>Quantity: {item.quantity}</h5> */}
                <div className="product-quantity" style={{float: "left", width: '10%'}}>
                    <input type="number"  value={item.quantity} min="1" style={{width: "40px"}}/>
                </div>
            </li>
            <li class="nav-item col" style={{margin:"25px 0 0 0"}}>
                <h5>PKR: 8000 </h5>
            </li>
            <li class="nav-item col" style={{margin:"25px 0 0 0"}}>
            <button className='btn btn-outline-success' style={{display: "inline-block", margin: '0 0 0 0px', textAlign: 'right'}}><i class='fas fa-times-circle' style={{fontSize:'28px',color:'red'}}></i></button>
            </li>
            
        </ul>
        <hr style={{size:"8", width:"75%", color:"red", margin:"0px 0px 0px 200px"}}></hr>
        <br></br>
        </>
        )})}
    <div class="card" style={{textAlign: "center", margin:"50px 50px 50px 620px", width:"300px"}}>
  <div class="card-header">
  <h4 class="card-title">Total Bill</h4>
  <h5>Subtotal: PKR 20000</h5>
  <h5>Delivery: PKR 200</h5>
  <h5>Total:    PKR 20200</h5>
  </div>
  <div class="card-body">
  <button className="btn btn-success">Checkout</button>

  </div>
</div>  
    </>
  );
}

export default Cart