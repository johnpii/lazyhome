'use strict';
const express = require('express');
const router = express.Router();
const Product = require("../models/product");

router.get('/', async function (req, res) {
    //const test = new Product({ title: "Lamp", price: 41 });
    //await test.save();
    const products = await Product.find({});
    //const images = products[0].image;
    //const products = Product.find({});
    //const count=await products.estimatedDocumentCount();
    res.render('index', {
        title: 'Lazy Home',
        products: products
    });
});

module.exports = router;
