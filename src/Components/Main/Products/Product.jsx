import { Link } from 'react-router-dom';
function Product({producto}) {
    return (
        <div>
            <img src={producto.img} alt={producto.product_name} />
            <h2>{producto.product_name}</h2>
            <section>
                <span><Link to={`/products/${producto.id}`}>Ver más</Link></span>
                <span>{producto.price}</span>
            </section>
        </div>
    )
}

export default Product