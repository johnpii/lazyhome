import { imagefrombuffer } from "imagefrombuffer";
import { formatPrice } from "../../services/price.service";

const ItemCard = ({ product }) => {
  return (
    <div
      className="w-[240px] h-[338.26px] flex flex-col justify-between border-2 
    border-[#727272] border-solid rounded-xl overflow-hidden"
    >
      <img
        className="h-60"
        src={imagefrombuffer({
          type: product.image.type,
          data: product.image.data,
        })}
        alt="item"
      />
      <h1 className="">{product.title}</h1>
      <p className="">{formatPrice(product.price)}</p>
    </div>
  );
};

export default ItemCard;
