import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../../Helper/getData.js';
import './Products.css';
import ProductDetails from './ProductDetails.jsx';

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
        <div>
            {item && <ProductDetails item={item} key={item.id}/>}            
        </div>
    )
}

export default ProductDetailsContainer