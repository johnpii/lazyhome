import { useState, useEffect } from "react";
import { getCart } from "../services/cart.service";
import CartItem from "../components/cart/CartItem";
import Checkout from "../components/cart/Checkout";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  const [cart, setCart] = useState({});
  const [totalAmount, setTotalAmount] = useState(null);
  const [totalSum, setTotalSum] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCart();
      setCart(data);
      console.log(data); //TODO: remove log
    };
    fetchData();
  }, []);
  useEffect(() => {
    function isEmpty(obj) {
      for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
          return false;
        }
      }
      return true;
    }
    console.log(cart);
    if (!isEmpty(cart)) {
      let amount = 0;
      let total = 0;
      cart.forEach((el) => {
        amount += el.quantity;
        total += el.total;
      });
      setTotalAmount(amount);
      setTotalSum(total);
    }
    console.log(totalAmount, totalSum);
  }, [cart]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-4">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="mx-auto mt-20 jd:mt-10 text-3xl font-bold text-left">
          Корзина
        </h1>
        {isAuthed ? (
          <div className="mx-auto mt-20 jd:mt-10">
            {cart.length ? (
              <div className="flex justify-between jd:block">
                <div>
                  {cart.map((item) => (
                    <CartItem cart={item} key={item.product._id} />
                  ))}
                </div>
                <Checkout quantity={totalAmount} total={totalSum} />
              </div>
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
    </div>
  );
};

export default CartScreen;
