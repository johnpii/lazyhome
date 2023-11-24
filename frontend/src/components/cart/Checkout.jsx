import { formatPrice } from "../../services/price.service";

const Checkout = ({ quantity, total }) => {
  return (
    <div className="bg-[#2d2d2d] p-5 max-h-80 max-w-xs min-w-[320px] text-left">
      <h1 className="font-semibold text-2xl">Ваша корзина</h1>
      <p className="mt-8 text-xl font-bold">{quantity} шт </p>
      <h1 className="mt-6 text-xl font-semibold">
        Итого: {formatPrice(total)}
      </h1>
      <button
        className="mt-20 border-2 rounded-lg border-cyan-400 py-3 px-6 min-w-max
            font-semibold text-xl"
      >
        Перейти к оформлению
      </button>
    </div>
  );
};

export default Checkout;
