import { imagefrombuffer } from "imagefrombuffer";
import { Link } from "react-router-dom";
import { removeItem } from "../../services/cart.service";
import { formatPrice } from "../../services/price.service";
const CartItem = ({ cart }) => {
  return (
    <div
      className="flex justify-between py-10 jd:py-5 text-xl font-semibold sm:font-normal border-b-2 
       max-w-5xl hd:max-w-2xl jd:min-w-full bg-[#2d2d2d] px-5 jd:px-3 last:border-0
       "
    >
      <div className="w-auto min-w-max">
        <Link to={`../product/${cart.product._id}`}>
          <img
            className="h-40 w-40 sm:h-20 sm:w-20 jd:h-32 jd:w-32"
            src={imagefrombuffer({
              type: cart.product.image.type,
              data: cart.product.image.data,
            })}
            alt="item"
          />
        </Link>
      </div>
      <div className="w-1/4 text-left jd:text-base sm:text-xs">
        {cart.product.title}
      </div>
      <div className=" jd:text-base sm:text-xs">{cart.quantity} шт</div>
      <div className="text-left min-w-[100px] jd:text-base sm:text-xs">
        {formatPrice(cart.total)}
      </div>
      <div className="text-xl jd:text-base sm:text-xs">
        <button
          onClick={() => {
            removeItem(cart.product._id);
            window.location.reload();
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default CartItem;
