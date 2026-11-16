import React from "react";
import "./About.css";
function About() {
    return (
        <div className="page about">
            <h1>About PriceWise</h1>

            <p>
                PriceWise is a smart shopping price comparison
                website that helps users find affordable products.
            </p>

            <h2>Our Mission</h2>

            <p>
                Our mission is to make online shopping simple
                by helping users compare prices and save money.
            </p>

            <h2>Our Features</h2>

            <ul>
                <li>Product search</li>
                <li>Price sorting</li>
                <li>Store price comparison</li>
                <li>Wishlist management</li>
            </ul>
        </div>
    );
}

export default About;
