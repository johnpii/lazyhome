'use strict';
const express = require('express');
const router = express.Router();
const Product = require("../models/product");

router.get('/', async function (req, res) {
    try {
        const products = await Product.find({});
        res.json({
            title: 'Lazy Home',
            products: products
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
