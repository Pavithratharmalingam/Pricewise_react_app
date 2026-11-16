import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
function Home() {
    return (
        <div className="home page">
            <section className="hero">
                <h1>Find the Best Deals with PriceWise</h1>

                <p>
                    Compare prices from different stores
                    and save your money.
                </p>

                <Link to="/products" className="btn">
                    Explore Products
                </Link>
            </section>

            <section className="features">
                <h2>Why Choose PriceWise?</h2>

                <div className="feature-cards">
                    <div className="card">
                        <h3>Best Prices</h3>
                        <p>Find products at affordable prices.</p>
                    </div>

                    <div className="card">
                        <h3>Easy Comparison</h3>
                        <p>Compare products in one place.</p>
                    </div>

                    <div className="card">
                        <h3>Wishlist</h3>
                        <p>Save your favourite products.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
