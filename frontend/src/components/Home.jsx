import React from 'react'
import { useState, useEffect } from 'react'
import ItemCard from "./ItemCard"

const Home = () => {
    const [productList, setProductList] = useState(null);
    const fetchProducts = async () => {
        const response = await fetch("/api");
        const data = await response.json();
        console.log(data);
        setProductList(data);
    };
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className=''>
        <h1>Products</h1>
        {productList ? productList.products.map((item) => (
            <ItemCard key={item._id} product={item}/>
        )) : 
        "An error occured connecting to server"}
        </div>
    )
}

export default Home