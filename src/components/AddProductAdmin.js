import Navbar from './Navbar';
import Footer from './Footer';
import ImageUploadPreviewComponent from './ImageUploadPreview'
 


function AddProduct() {
    return (
    <div className="Product" style={{height:"100%", backgroundColor:"green", position:"relative", width:"100%"}}>
    <Navbar />
    <div class="container" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%"}}>
        <div class="row align-items-center">
        <div class="col-2">
            
            </div>
            <div class="col-4">
            <ImageUploadPreviewComponent/>
            {/* <a href="https://placeholder.com"><img src="https://via.placeholder.com/150"/></a> */}
                    
            </div>
            <div class="col-4">
            <h1>Product Details:</h1>
            <br></br>
            <input class="form-control" type="text" placeholder="Price" aria-label="Price"/>
            <br></br>
            <input class="form-control" type="text" placeholder="Color" aria-label="Color"/>
            <br></br>
            <input class="form-control" type="text" placeholder="Dimensions(lxwxb)" aria-label="Dimensions"/>
            <br></br>
            <input class="form-control" type="text" placeholder="Product Description" aria-label="Product Description" rows="3"/>            
            <br></br>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-dark">Back</button>
            <button type="button" class="btn btn-success">Add</button>
            </div>
        </div>
    </div> 
    <Footer />
    
    </div>
  );
}

export default AddProduct;
