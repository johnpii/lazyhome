import { imagefrombuffer } from "imagefrombuffer";
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [productList, setProductList] = useState(null);
  const fetchProducts = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    fetchProducts();
  }, )
  return (
    <div className='App'>
      <h1>Products</h1>
      {productList ? productList.products.map((item) => (
      <div key={item._id}>name: {item.title}, price: {item.price}, 
      image: <img 
      src={imagefrombuffer({
        type: item.image.type,
        data: item.image.data,
      })} alt="item"/> </div>)) : 
      "An error occured connecting to server"}
    </div>
  )
}

export default App
