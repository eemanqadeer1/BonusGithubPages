import React, { useEffect, useState } from 'react'
import { Products, Navbar } from './Components/exports.js'
import Axios from 'axios';
// import { products,cart } from './MockData.js';

const App = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     Axios.get("http://localhost:5001/products")
    //         .then((response) => {
    //             setProducts(response.data);
    //         })
    // }, [])

    // const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     Axios.get("http://localhost:5001/cart")
    //         .then((response) => {
    //             setCart(response.data);
    //             // console.log(cart)
    //         })
    // })
    const products = [

        {
            _id: "1a",
            name: "HOODIE",
            price: "Rs: 1599",
            Description: " 100% Polyester",
            image: "https://cdn.shopify.com/s/files/1/0671/0621/products/00000001_892a1d65-4fee-49c3-b3b6-ad6ebb0e1d5f_600x.jpg?v=1632226783"
        },
        {
            _id: "2a",
            name: "Jeans",
            price: "Rs: 1899",
            Description: " 100% Leather Denim Jeans",
            image: "https://cdn.shopify.com/s/files/1/1033/9361/products/JLZC2902-DBL_3_800x.jpg?v=1655718399",
        }
    ]
   
    return (
        <div>
            <Navbar />
            <Products products={products} />

            {console.log(products)}
        </div>
    )
}

export default App