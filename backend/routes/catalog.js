const express = require('express');
const router = express.Router();
const Product = require("../models/product");


router.get('/:id', async function (req, res) {
    const products = await Product.findById(req.params.id);
    res.json({
        products: products
    });
});

module.exports = router;