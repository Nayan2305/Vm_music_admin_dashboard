
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './Sidenav.css';
function Slidebar() {
    return(
        
        <div className="sidenav">
        <a href="#">Orders</a>
        <br>
        </br>
        <a href="#">Customers</a>
        <br>
        </br>
        <a href="#">Add product</a>
        <br>
        </br>
        <a href="#">Delete Product</a>
</div>
    );
};
export default Slidebar;

