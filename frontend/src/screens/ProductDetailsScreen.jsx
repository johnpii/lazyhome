import { imagefrombuffer } from "imagefrombuffer";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../services/product.service";
import { formatPrice } from "../services/price.service";
import { addItem } from "../services/cart.service";

const ProductDetailsScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [itemCount, setItemCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts.getById(id);
      setProduct(data);
    };
    fetchData();
  }, [id]);

  const incrementCount = () => {
    //maximum amount to add to cart
    if (itemCount < 50) {
      setItemCount((n) => n + 1);
    }
  };
  const decrementCount = () => {
    if (itemCount > 1) {
      setItemCount((n) => n - 1);
    }
  };
  return (
    <>
      {product ? (
        <div className="text-left p-7">
          <Link to="/">Вернуться</Link>
          <h2 className="py-10 ml-24 font-bold text-3xl">{product.title}</h2>
          <div className="max-w-screen-2xl flex justify-between mx-auto text-left border-w-2 pt-10">
            <div>
              <img
                className="mt-15 min-w-[340px] min-h-[340px] max-w-[440px] max-h-[440px]  border-2 
            border-[#727272] border-solid rounded-xl overflow-hidden"
                src={imagefrombuffer({
                  type: product.image.type,
                  data: product.image.data,
                })}
                alt="item"
              />
            </div>
            <div className="flex flex-col max-w-lg min-w-[220px] mx-2">
              <h1 className="font-semibold text-2xl">Описание</h1>
              <p>{product.description}</p>
            </div>
            <div
              className="flex flex-col w-52 h-fit border-2 rounded-lg shadow-xl
          shadow-cyan-600 border-cyan-600 border-solid px-10 py-7 min-w-fit"
            >
              <p className="text-semibold text-2xl">
                {formatPrice(product.price * itemCount)}
              </p>
              <div className="max-w-[100px] mt-5 flex justify-between text-semibold items-center text-3xl">
                <button
                  className={itemCount === 1 ? "text-slate-500" : "text-white"}
                  onClick={decrementCount}
                >
                  -
                </button>
                <div className="text-2xl">{itemCount}</div>
                <button onClick={incrementCount}>+</button>
              </div>
              <button
                className="mt-5 border-2 rounded-lg border-cyan-400 py-3 px-6 min-w-max
            font-semibold text-xl"
                onClick={() => {
                  addItem(product._id, itemCount);
                }}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetailsScreen;
