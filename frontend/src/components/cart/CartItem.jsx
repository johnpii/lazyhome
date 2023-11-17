import { imagefrombuffer } from "imagefrombuffer";
import { Link } from "react-router-dom";
import { removeItem } from "../../services/cart.service";
import { formatPrice } from "../../services/price.service";
const CartItem = ({ cart, rerender }) => {
  return (
    <div className="flex justify-between py-10 text-2xl font-semibold border-b-2 last:border-0">
      <div className="w-fit">
        <Link to={`../product/${cart.product._id}`}>
          <img
            className="h-60 w-60"
            src={imagefrombuffer({
              type: cart.product.image.type,
              data: cart.product.image.data,
            })}
            alt="item"
          />
        </Link>
      </div>
      <div className="w-1/4 text-left">{cart.product.title}</div>
      <div className="">{cart.quantity}</div>
      <div className="text-left min-w-[100px]">{formatPrice(cart.total)}</div>
      <div className="text-xl">
        <button
          onClick={() => {
            removeItem(cart.product._id);
            rerender.setIsDeleted(!rerender.isDeleted);
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default CartItem;
