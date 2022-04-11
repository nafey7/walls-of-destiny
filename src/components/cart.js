import React from 'react'

function Cart(props) {
    const [items, setItems] = React.useState(props.featured)
    let x = items.reduce((accumulator, object) => {
        return accumulator + object.price * object.quantity;
      }, 0);
    function removeItem(id){
        const newItems = items.filter(function(item) {
            return item.id !== id
        })
        setItems(newItems);      
    }
    function handleChange(e,id){
        const { value } = e.target;
        if (value<1){
            removeItem(id);
        }else{

        
        const newItems = items.map(item => {
          if (item.id !== id) {
            return { ...item };
          }
        let name, price, pic, color
        for (const item of items) {
            if(item.id === id){
                name = item.name
                price = item.price
                pic = item.pic
                color = item.color
            }
        }   
          return { id, name, price, color, pic, quantity: value };
        })
        setItems(newItems);
    }
    };
    if(items.length < 1){
        return(
            <div style={{height:"380px", textAlign:"center", backgroundColor:"white", margin: "4cm 0cm 0cm 9cm", position:"relative", width:"850px"}}>
    <h2>Nothing in Cart</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PokqMe-w1F3IzUuz8b8xcvHessPvz_TCAw&usqp=CAU"/>
    </div>
        )
    }

  return (
    <>
        <h2 style={{textAlign:"center", margin:"50px 0px 50px 0px"}}>Shopping Cart</h2>
        <hr style={{size:"8", width:"75%", color:"red", margin:"0px 0px 10px 200px"}}></hr>
        {items.map((item)=>{
            return(
        <>
        <ul class="nav row">
            <li class="nav-item col">
                <><img className="card-img-top" src={item.pic} alt="Card image cap" style={{margin:"0px 0px 10px 200px", height:"70px", width:"70px"}}/></>
            </li>
            <li class="nav-item col-2" style={{margin:"25px 0 0 0", }}>
                <h5>{item.name}</h5>
            </li>
            <li class="nav-item col" style={{margin:"25px 0 0 0"}}>
                <h5>{item.color}</h5>
            </li>
            <li class="nav-item col" style={{margin:"25px 0 0 0"}}>
                <h5>PKR: {item.price}</h5>
            </li>
            <li class="nav-item col" style={{margin:"25px 0 0 0"}}>
                <div className="product-quantity" style={{float: "left", width: '10%'}}>
                    <input type="number" onChange={(e) => handleChange(e, item.id)} value={item.quantity} min="0" style={{width: "40px"}}/>
                    {console.log(item.quantity)}
                </div>
            </li>
            <li class="nav-item col" style={{margin:"25px 0 0 0"}}>
            <button className='btn btn-outline-success' onClick={()=>removeItem(item.id)} style={{display: "inline-block", margin: '0 0 0 0px', textAlign: 'right'}}><i class='fas fa-times-circle' style={{fontSize:'28px',color:'red'}}></i></button>
            </li>
            
        </ul>
        <hr style={{size:"8", width:"75%", color:"red", margin:"0px 0px 0px 200px"}}></hr>
        <br></br>
        </>
        )})}
    <div class="card" style={{textAlign: "center", margin:"50px 50px 50px 620px", width:"300px"}}>
  <div class="card-header">
  <h4 class="card-title" >Total Bill</h4>
  <h5>Subtotal: PKR {x}</h5>
  <h5>Delivery: PKR 200</h5>
  <h5>Total:    PKR {x+200}</h5>
  </div>
  <div class="card-body">
  <button className="btn btn-success">Checkout</button>

  </div>
</div>  
    </>
  );
}

export default Cart