const db = require('../ext/db')

const ItemSchema = new db.Schema({
  productId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity can not be less then 1.']
  }
});
const CartSchema = new db.Schema({
  userId: {
    type: db.Schema.Types.ObjectId,
    ref: "users"
  },
  items: [ItemSchema]
});

module.exports = db.model('carts', CartSchema)