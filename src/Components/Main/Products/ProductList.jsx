import Product from './Product.jsx';

function ProductList({products}) {
    return (
        <div className='container-list'>
            <h1>Listado de producto</h1>
            <div className="list">
                {products.map((prod) => 
                    <Product producto={prod} key={prod.id}/>
                )}
            </div>
        </div>
    )
}

export default ProductList