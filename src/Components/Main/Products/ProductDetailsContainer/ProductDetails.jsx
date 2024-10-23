import { useState } from "react";
function ProductDetails( {item} ) {
    const [addToCart, setAddToCart] = useState(0);
    const handleAdd = () => {
        setAddToCart(addToCart + 1);
    }
    const handleRemove = () => {
        setAddToCart(addToCart - 1);
    }
    return (
        <div>
            <section className="product-details">
                <div className="img-container">
                    <img src={item.img} alt={item.product_name} />
                </div>
                <div className="text-container">
                    <h1>{item.product_name}</h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <button onClick={addToCart > 0 ? handleRemove : null}>-</button>
                    <span>{addToCart}</span>
                    <button onClick={addToCart < 10 ? handleAdd : null}>+</button>
                    <p></p>
                    <button className="add-to-cart">Add to cart</button>
                </div>
            </section>
            <section className="reviews">
                
            </section>
        </div>
    )
}

export default ProductDetails