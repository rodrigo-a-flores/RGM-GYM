import { useState } from "react";
import ProductCount from "./ProductCount.jsx";
function ProductDetails( {item} ) {
    const [addToCart, setAddToCart] = useState(1);
    const handleAdd = () => {
        addToCart < 10 && setAddToCart(addToCart + 1);
    }
    const handleRemove = () => {
        addToCart > 1 && setAddToCart(addToCart - 1);
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
                    <ProductCount addToCart={addToCart} handleAdd={handleAdd} handleRemove={handleRemove}/>
                </div>
            </section>
            <section className="reviews">
                
            </section>
        </div>
    )
}

export default ProductDetails