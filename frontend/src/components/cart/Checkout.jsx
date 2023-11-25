import { formatPrice } from "../../services/price.service";

const Checkout = ({ quantity, total }) => {
  return (
    <div
      className="flex flex-col jd:border-t-2 jd:border-gray-900 jd:flex-row jd:justify-between jd:items-center jd:absolute
      jd:bottom-0 jd:left-0 jd:max-w-full jd:w-full bg-[#2d2d2d] p-5 max-h-80
       max-w-xs min-w-[320px] text-left"
    >
      <h1 className="font-semibold text-2xl jd:text-base">Ваша корзина:</h1>
      <p className="mt-8 jd:mt-0 text-xl font-bold jd:text-base">
        {quantity} шт{" "}
      </p>
      <h1 className="mt-6 jd:mt-0 text-xl font-semibold jd:text-base">
        Итого: {formatPrice(total)}
      </h1>
      <button
        className="mt-20 jd:mt-0 border-2 rounded-lg border-cyan-400 py-3 px-6 min-w-max
            font-semibold text-xl jd:text-base"
      >
        Перейти к оформлению
      </button>
    </div>
  );
};

export default Checkout;
