import Navbar from './Navbar';
import Footer from './Footer';


function Product() {
    return (
    <div className="Product" style={{height:"100%", backgroundColor:"green", position:"relative", width:"100%"}}>
    <Navbar />
    <div class="container" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%"}}>
        <div class="row align-items-center">
        <div class="col-2">
            
            </div>
            <div class="col-4">
            
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a>
                    
            </div>
            <div class="col-4">
            <h1>Product Details:</h1>
            <h5><b>Price: </b>Rs: 5000</h5>
            <h5><b>Color: </b>black</h5>
            <h5><b>Dimensions:(LxWxB) </b>idk</h5>
            <h5><b>Product Description:</b>nice product pls buy</h5>
            <br></br>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-dark">Add to cart</button>
            <button type="button" class="btn btn-success">Buy Now</button>
            </div>
        </div>
    </div> 
    <Footer />
    
    </div>
  );
}

export default Product;
