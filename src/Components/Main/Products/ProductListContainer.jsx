import { useState, useEffect } from 'react';
import { APIAllProducts } from '../../../Helper/getData.js';
import ProductList from './ProductList.jsx';
import './Products.css';
// import { useParams } from 'react-router-dom';  Solo importar en caso de filtrar por categoria

function ProductListContainer() {
    const [products, setProducts] = useState([]);
    /* Codigo para filtrar productos por categoria */
    /* 
        Tambien debemos tener en cuenta que para esto se debe crear un pequeño navbar dentro del ProductListContainer
        para que se use la ruta dinamica y se pueda filtrar por categoria
    */
    // const {category} = useParams();
    // useEffect(() => {
    //     getData()
    //         .then(res =>{
    //             if (category) {
    //                 setProducts(res.filter(item => item.category === category))
    //             }else{
    //                 setProducts(res)
    //             }
    //         })
    // }, [category])

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await APIAllProducts();
            if (data) {
                setProducts(data.data);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <ProductList products={products} />
        </>
    );
}

export default ProductListContainer;
