
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-about">
                    <h2>Price<span>Wise</span></h2>
                    <p>
                        Compare prices across online stores
                        and find the best deals. Save money
                        with smart shopping.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/compare">Compare</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/about">About Us</Link>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@pricewise.com</p>
                    <p>Smart Shopping, Better Savings!</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 PriceWise. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
