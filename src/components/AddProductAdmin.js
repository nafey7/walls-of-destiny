

function AddProduct() {
    return (
    <div className="Product" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%"}}>
        <div className="container" style={{margin: "50px 150px", height:"100%", backgroundColor:"white", position:"relative", width:"100%"}}>
            <div className="row align-items-center">
                <div className="col-2">
                </div>
                <div className="col-4">
                    <form method="post" enctype="multipart/form-data">
                    <div>
                        <label for="image_uploads">Choose image to upload (PNG, JPG)</label>
                        <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png"/>
                    </div>
                    <div className="preview">
                        <p>No files currently selected for upload</p>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                    </form>
                        
                </div>
                <div className="col-4">
                    <h1>Product Details:</h1>
                    <br></br>
                    <input className="form-control" type="text" placeholder="Price" aria-label="Price"/>
                    <br></br>
                    <input className="form-control" type="text" placeholder="Color" aria-label="Color"/>
                    <br></br>
                    <input className="form-control" type="text" placeholder="Dimensions(lxwxb)" aria-label="Dimensions"/>
                    <br></br>
                    <input className="form-control" type="text" placeholder="Product Description" aria-label="Product Description" rows="3"/>            
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="button" class="btn btn-dark" style ={{margin: "Auto 10px"}}>Back</button>
                    <button type="button" class="btn btn-success" style = {{margin: "Auto 10px"}}>Add</button>
                </div>
            </div>
        </div> 
    </div>
    )
}

export default AddProduct
