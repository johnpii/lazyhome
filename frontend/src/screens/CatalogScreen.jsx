import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "../components/catalog/ItemCard";
import { fetchProducts } from "../services/product.service";
import { Link } from "react-router-dom";

const CatalogScreen = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts.getAll();
      setProductList(data);
      console.log(data); //TODO: remove log
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-2xl mt-8">Товары</h1>
      <div className="flex justify-around flex-wrap gap-10 max-w-7xl mx-auto mt-9 pb-10">
        {productList
          ? productList.map((item) => (
              <Link to={`product/${item._id}`} key={item._id}>
                <ItemCard product={item} _id={item._id} />
              </Link>
            ))
          : "Loading..."}
      </div>
    </>
  );
};

export default CatalogScreen;
