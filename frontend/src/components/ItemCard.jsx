import { imagefrombuffer } from "imagefrombuffer";

const ItemCard = ({ product }) => {
  return (
    <div className="max-w-[240px] flex flex-col justify-between">
      <img className="h-60"
        src={imagefrombuffer({
          type: product.image.type,
          data: product.image.data,
        })}
        alt="item"
      />
      <h3 className="">{product.title}</h3>
      <p className="">price: {product.price}</p>
    </div>
  );
};

export default ItemCard;
