import { imagefrombuffer } from "imagefrombuffer";

const ItemCard = ({ product }) => {
  const options1 = { style: "currency", currency: "RUB" };
  const numberFormat1 = new Intl.NumberFormat("ru-RU", options1);
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
      <h3 className="">{product.title}</h3>
      <p className="">{numberFormat1.format(product.price)}</p>
    </div>
  );
};

export default ItemCard;
