import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RemoveProduct() {
  return (
    <div className="container my-3 py-3" style={{ backgroundColor: 'white', color: '#343a40' }}>
    <h3 className="text-center">Remove Product</h3>
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
            <label for="Quantity">Quantity</label>
            <input
              type="number"
              class="form-control"
              id="Quantity"
              placeholder="0"
            />
            
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

export default RemoveProduct;