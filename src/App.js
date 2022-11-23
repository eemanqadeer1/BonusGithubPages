import React, { useEffect, useState } from 'react'
import { Products, Navbar } from './Components/exports.js'
import Axios from 'axios';


const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:5001/products")
            .then((response) => {
                setProducts(response.data);
            })
    }, [])

    const [cart, setCart] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5001/cart")
            .then((response) => {
                setCart(response.data);
                // console.log(cart)
            })
    })

    return (
        <div>
            <Navbar />
            <Products products={products} />

            {console.log(products)}
        </div>
    )
}

export default App