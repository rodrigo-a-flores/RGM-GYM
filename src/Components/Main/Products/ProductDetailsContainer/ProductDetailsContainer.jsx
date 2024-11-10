import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../../Helper/getData.js';
import ProductDetails from './ProductDetails.jsx';
import './Products.css';

function ProductDetailsContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductById(Number(id))
        .then(res => {
            setItem(res);
        })
    }, [id])

    return (
        <div className='container'>
            {item && <ProductDetails item={item} key={item.id}/>}            
        </div>
    )
}

export default ProductDetailsContainer