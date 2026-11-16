
import { useState } from "react";
import "./Compare.css";

const comparison = [
    {
        id: 1,
        name: "Headphones",
        amazon: 999,
        flipkart: 1099,
        store: 950
    },
    {
        id: 2,
        name: "Smart Watch",
        amazon: 1499,
        flipkart: 1399,
        store: 1599
    },
    {
        id: 3,
        name: "Wireless Mouse",
        amazon: 499,
        flipkart: 449,
        store: 550
    },
    {
        id: 4,
        name: "Keyboard",
        amazon: 799,
        flipkart: 899,
        store: 749
    },
    {
        id: 5,
        name: "Laptop",
        amazon: 45999,
        flipkart: 44999,
        store: 46999
    },
    {
        id: 6,
        name: "Smartphone",
        amazon: 15999,
        flipkart: 15499,
        store: 16299
    },
    {
        id: 7,
        name: "Camera",
        amazon: 24999,
        flipkart: 23999,
        store: 25499
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        amazon: 1299,
        flipkart: 1199,
        store: 1399
    },
    {
        id: 9,
        name: "Tablet",
        amazon: 18999,
        flipkart: 19499,
        store: 18499
    },
    {
        id: 10,
        name: "Gaming Controller",
        amazon: 2499,
        flipkart: 2299,
        store: 2599
    },
    {
        id: 11,
        name: "Power Bank",
        amazon: 999,
        flipkart: 899,
        store: 1099
    },
    {
        id: 12,
        name: "Computer Monitor",
        amazon: 11999,
        flipkart: 11499,
        store: 12499
    }
];

function Compare() {
    const [search, setSearch] = useState("");

    const filteredProducts = comparison.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase().trim())
    );

    return (
        <div className="compare-page">

            <h1>Compare Prices</h1>

            <p className="compare-subtitle">
                Compare prices across stores and find the best deals.
            </p>

            <input
                className="compare-search"
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="compare-list">

                {filteredProducts.map((item) => {
                    const lowest = Math.min(
                        item.amazon,
                        item.flipkart,
                        item.store
                    );

                    let lowestStore = "";

                    if (lowest === item.amazon) {
                        lowestStore = "Amazon";
                    } else if (lowest === item.flipkart) {
                        lowestStore = "Flipkart";
                    } else {
                        lowestStore = "Meesho";
                    }

                    return (
                        <div className="compare-card" key={item.id}>

                            <h3>{item.name}</h3>

                            <div
                                className={
                                    item.amazon === lowest
                                        ? "store-price best-price"
                                        : "store-price"
                                }
                            >
                                <span>Amazon</span>
                                <strong>
                                    ₹{item.amazon.toLocaleString("en-IN")}
                                </strong>
                            </div>

                            <div
                                className={
                                    item.flipkart === lowest
                                        ? "store-price best-price"
                                        : "store-price"
                                }
                            >
                                <span>Flipkart</span>
                                <strong>
                                    ₹{item.flipkart.toLocaleString("en-IN")}
                                </strong>
                            </div>

                            <div
                                className={
                                    item.store === lowest
                                        ? "store-price best-price"
                                        : "store-price"
                                }
                            >
                                <span>Meesho</span>
                                <strong>
                                    ₹{item.store.toLocaleString("en-IN")}
                                </strong>
                            </div>

                            <div className="lowest-price">
                                <span>Lowest Price</span>

                                <h4>
                                    ₹{lowest.toLocaleString("en-IN")}
                                </h4>

                                <p>Best deal: {lowestStore}</p>
                            </div>

                        </div>
                    );
                })}

                {filteredProducts.length === 0 && (
                    <p className="no-results">
                        No products found. Try another product name.
                    </p>
                )}

            </div>
        </div>
    );
}

export default Compare;
