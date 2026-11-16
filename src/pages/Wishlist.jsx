
import { useState } from "react";
import "./Wishlist.css";
function Wishlist() {
    const [items, setItems] = useState(() =>
        JSON.parse(localStorage.getItem("wishlist") || "[]")
    );

    function removeItem(id) {
        const updated = items.filter((item) => item.id !== id);

        setItems(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    }

    return (
        <div className="page">
            <h1>My Wishlist</h1>

            {items.length === 0 && (
                <p>Your wishlist is empty.</p>
            )}

            <div className="product-grid">
                {items.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.image} alt={item.name} />

                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>

                        <button onClick={() => removeItem(item.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
