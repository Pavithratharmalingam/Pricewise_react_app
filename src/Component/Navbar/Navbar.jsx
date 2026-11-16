
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                Price<span>Wise</span>
            </Link>

            <div className="navlinks">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/compare">Compare</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;
