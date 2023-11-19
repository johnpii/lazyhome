import { useState, useEffect } from "react";
import { getCart } from "../services/cart.service";
import CartItem from "../components/cart/CartItem";

const CartScreen = () => {
  const [cart, setCart] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCart();
      setCart(data);
      console.log(data); //TODO: remove log
    };
    fetchData();
  }, [isDeleted]);
  return (
    <div className="px-4">
      <h1 className="max-w-screen-2xl mx-auto mt-20 text-3xl font-bold text-left">
        Корзина
      </h1>
      <div className="max-w-screen-2xl mx-auto mt-20">
        {cart.length ? (
          cart.map((item) => (
            <CartItem cart={item} rerender={{ isDeleted, setIsDeleted }} />
          ))
        ) : (
          <p>Корзина пуста</p>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
