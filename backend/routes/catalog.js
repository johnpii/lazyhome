const express = require('express');
const router = express.Router();
const Product = require("../models/product");


router.get('/:id', async function (req, res) {
    const product = await Product.findById(req.params.id);
    res.json({
        product: product
    });
});

module.exports = router;