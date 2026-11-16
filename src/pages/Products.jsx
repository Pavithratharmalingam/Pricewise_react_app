
import { useState } from "react";
import "./Products.css";
const productList = [
    {
        id: 1,
        name: "Headphones",
        price: 999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 1499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
        id: 3,
        name: "Wireless Mouse",
        price: 499,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
    },
    {
        id: 4,
        name: "Keyboard",
        price: 799,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
    },
    {
        id: 5,
        name: "Laptop",
        price: 45999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    },
    {
        id: 6,
        name: "Smartphone",
        price: 15999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
        id: 7,
        name: "Camera",
        price: 24999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        price: 1299,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"
    },
    {
        id: 9,
        name: "Tablet",
        price: 18999,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"
    },
    {
        id: 10,
        name: "Gaming Controller",
        price: 2499,
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400"
    },

    {
        id: 12,
        name: "Computer Monitor",
        price: 11999,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400"
    }
];

function Products() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("default");

    let products = productList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "low") {
        products.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        products.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="page">
            <h1>Our Products</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>

            <div className="product-grid">
                {products.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.image} alt={item.name} />

                        <h3>{item.name}</h3>

                        <p>₹{item.price}</p>

                        <button
                            onClick={() => {
                                const oldList = JSON.parse(
                                    localStorage.getItem("wishlist") || "[]"
                                );

                                if (!oldList.some((p) => p.id === item.id)) {
                                    localStorage.setItem(
                                        "wishlist",
                                        JSON.stringify([...oldList, item])
                                    );
                                    alert("Added to wishlist!");
                                } else {
                                    alert("Already in wishlist!");
                                }
                            }}
                        >
                            ♡ Add to Wishlist
                        </button>
                    </div>
                ))}

                {products.length === 0 && <p>No products found.</p>}
            </div>
        </div>
    );
}

export default Products;
