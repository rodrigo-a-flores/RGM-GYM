import React from 'react'
import { useState, useEffect } from 'react';
import data from '../../../assets/js/data.json';
import ProductList from './ProductList/ProductList';

const getData = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

function Products() {   

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
        .then(res =>{
            setProducts(res)
        })
    }, [])
    
    return (
        <>
            <ProductList products={products}/>
        </>
    )
}

export default Products