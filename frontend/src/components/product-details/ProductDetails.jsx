import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../../services/product.service";
import ItemCard from "../home/ItemCard";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts.getById(id);
      setProduct(data);
      console.log(data);
    };
    fetchData();
  }, [id]);
  return product ? (
    <div>
      <h2>Product {id}</h2>
      <Link to="/">Вернуться</Link>
      <ItemCard key={product._id} product={product} _id={product._id} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductDetails;
