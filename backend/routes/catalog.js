const express = require('express');
const router = express.Router();
const Product = require("../models/product");


router.get('/:id', async function (req, res) {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // res.json({
        //     product: product
        // });
        res.render('product', {
            product: product
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;