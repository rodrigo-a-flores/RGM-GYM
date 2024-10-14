import React from 'react';
import './ProductList.css';

function ProductList( {products} ) {
    return (
        <div>
            <h1>Listado de productos</h1>
            <div className="list">
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.product_name}</h2>
                        <img src={product.img} alt={product.product_name} />
                        <p>{product.description}</p>
                        <span>{product.price}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList