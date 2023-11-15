const express = require('express');
const router = express.Router();
const Cart = require("../models/cart");
const Product = require("../models/product");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

router.get('/', async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded.id;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Получение информации о товарах в корзине
    const products = await Product.find({ _id: { $in: cart.items.map(item => item.productId) } });

    // Создание массива объектов товаров с количеством и общей стоимостью
    const cartItems = cart.items.map(item => {
      const product = products.find(p => p._id.toString() === item.productId.toString());
      return {
        product,
        quantity: item.quantity,
        total: item.quantity * product.price // Добавление общей стоимости
      };
    });
    res.json({cartItems: cartItems});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/add/:productId', async (req, res) => {
  try {
      const token = req.cookies.jwt;
      if (!token) {
          return res.status(401).json({ message: 'Unauthorized' });
      }
      const decoded = jwt.verify(token, SECRET_KEY);
      const userId = decoded.id;
      const quantity = parseInt(req.body.quantity);
      const productId = req.params.productId;
      if (quantity <= 0) {
          return res.status(400).json({ message: 'Quantity must be greater than 0' });
      }
      let cart = await Cart.findOne({ userId });
      if (!cart) {
          return res.status(404).json({ message: 'Cart not found' });
      }
      // Проверка существования товара с указанным идентификатором
      const product = await Product.findById(productId);
      if (!product) {
          return res.status(404).json({ message: 'Product not found' });
      }

      const item = cart.items.find(item => item.productId === productId);
      if (item) {
          // Если товар уже есть в корзине, добавляем его количество к существующему
          item.quantity += quantity;
      } else {
          // Если товара нет в корзине, добавляем его как новый элемент
          cart.items.push({ productId: product._id, quantity: quantity });
      }
      await cart.save();

      res.json(cart);
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
  }
});

router.get('/remove/:productId', async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded.id;
    const productId = req.params.productId;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Поиск товара в корзине по идентификатору
    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Удаление товара из массива
    cart.items.splice(itemIndex, 1);
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;