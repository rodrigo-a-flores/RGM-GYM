function ProductDetails( {item} ) {
    return (
        <div>
            <h1>{item.product_name}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    )
}

export default ProductDetails