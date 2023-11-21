import { useState, useEffect } from "react";
import { getCart } from "../services/cart.service";
import CartItem from "../components/cart/CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  const [cart, setCart] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCart();
      setCart(data);
      console.log(data); //TODO: remove log
    };
    fetchData();
  }, []);
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <h1 className="mx-auto mt-20 text-3xl font-bold text-left">Корзина</h1>
      {isAuthed ? (
        <div className="mx-auto mt-20">
          {cart.length ? (
            cart.map((item) => <CartItem cart={item} />)
          ) : (
            <p>Корзина пуста</p>
          )}
        </div>
      ) : (
        <div className="mx-auto">
          <h1 className="text-2xl font-semibold mt-10">
            Просматривать корзину можно только авторизованным пользователям.
          </h1>
          <Link to="/login">
            <button
              className="mt-10 border-2 rounded-lg border-cyan-400 py-3 px-6 min-w-max
            font-semibold text-xl"
            >
              Войти
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
