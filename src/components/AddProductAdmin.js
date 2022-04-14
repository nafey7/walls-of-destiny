import Navbar from './Navbar';
import Footer from './Footer';
import ImageUploadPreviewComponent from './ImageUploadPreview'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 


function AddProduct() {
    return (
    <div className="Product" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%"}}>
    <div class="container" style={{margin: "50px 150px", height:"100%", backgroundColor:"white", position:"relative", width:"100%"}}>
        <div class="row align-items-center">
        <div class="col-2">
            
            </div>
            <div class="col-4">
            {/* <ImageUploadPreviewComponent/> */}
            <form method="post" enctype="multipart/form-data">
                <div>
                    <label for="image_uploads">Choose image to upload (PNG, JPG)</label>
                    <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png"/>

                    {/* {
    const fileInput = document.querySelector('input');

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result);
        };
        reader.readAsDataURL(file);
    });} */}
                </div>
                <div class="preview">
                    <p>No files currently selected for upload</p>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
                    
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
            <button type="button" class="btn btn-dark" style ={{margin: "Auto 10px"}}>Back</button>
            <button type="button" class="btn btn-success" style = {{margin: "Auto 10px"}}>Add</button>
            </div>
        </div>
    </div> 
    
    </div>
  );
}

export default AddProduct;
