'use strict';
const express = require('express');
const router = express.Router();
const Product = require("../models/product");

router.get('/', async function (req, res) {
    const products = await Product.find({});
    res.json({
        title: 'Lazy Home',
        products: products
    });
});

module.exports = router;
