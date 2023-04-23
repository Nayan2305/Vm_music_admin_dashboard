import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProduct() {
  return (
    <div className="container my-3 py-3" style={{ backgroundColor: 'white', color: '#343a40' }}>
    <h3 className="text-center">Add Product Information</h3>
    <hr />
    <div class="row my-4 h-100">
      <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
        <form>
          <div class="form my-3">
            <label for="Name">Name</label>
            <input
              type="text"
              class="form-control"
              id="Name"
              placeholder="Enter product name"
            />
          </div>
          <div class="form my-3">
            <label for="Rent_Price">Rent Price</label>
            <input
              type="number"
              class="form-control"
              id="Rent_Price"
              placeholder="0"
            />
            
          </div>
          <div class="form my-3">
            <label for="Sell_Price">Sell Price</label>
            <input
              type="number"
              class="form-control"
              id="Sell_Price"
              placeholder="0"
            />
            
          </div>
          <div class="form  my-3">
            <label for="Description">Description</label>
            <textarea
              rows={3}
              class="form-control"
              id="Description"
              placeholder="Enter product details"
            />
          </div>
          <div class="form my-3">
          <label for="Choose_image" class="text-primary">Choose image</label>
            <br></br>
            <input type="file"
             id="Choose_image"
               class="form-control"
             accept="image/png, image/jpeg" />     
            
          </div>
          
          <div className="text-center">
            <button
              class="my-2 px-4 mx-auto btn btn-dark"
              type="submit"
              
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddProduct;