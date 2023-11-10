import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Nav from "./Nav";

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
  }, []);
  return (
    <div className="">
      <Nav/>
      <h1 className="text-2xl">Товары</h1>
      <div className="flex justify-around flex-wrap gap-10 max-w-7xl mx-auto mt-9">
        {productList
          ? productList.products.map((item) => (
              <ItemCard key={item._id} product={item}/>
            ))
          : "An error occured connecting to server"}
      </div>
    </div>
  );
};

export default Home;
