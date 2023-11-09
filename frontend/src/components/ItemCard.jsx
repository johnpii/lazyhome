import { imagefrombuffer } from "imagefrombuffer";

const ItemCard = ({product}) => {
  return (
    <div className='max-w-xs mx-auto max-w-100'>
      <div>name: {product.title}, price: {product.price}, 
      image: <img src={imagefrombuffer({
        type: product.image.type,
        data: product.image.data,
      })} alt="item"/> 
      </div>
    </div>
  )
}

export default ItemCard
