import { useState, useEffect } from "react";
import { getCart } from "../../http/cart";

const Cart = () => {
  const [cart, setCart] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCart();
      setCart(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return <div>Cart</div>;
};

export default Cart;
