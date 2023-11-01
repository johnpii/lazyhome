'use strict';
const express = require('express');
const router = express.Router();
const Product = require("../models/product");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', async function (req, res) {
    const products = await Product.find({});
    res.render('adminIndex', {
        products: products
    });
});
router.get('/add', async function (req, res) {
    res.render('add');
});
router.post('/add', upload.single("image"), async (req, res) => {
    let imageUploadObject = {
        image: req.file.buffer,
        title: req.body.title,
        price: req.body.price
    };
    const uploadObject = new Product(imageUploadObject);
    // saving the object into the database
    const uploadProcess = await uploadObject.save();
    res.redirect("/admin");
});

router.get('/delete/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/admin");
});

router.get('/update/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('edit', {
        product: product
    });
});

router.post('/update/:id', upload.single("image"), async (req, res) => {
    const currentProduct = await Product.findById(req.params.id);
    let updatedProduct;
    if (req.file && req.file.buffer) {
        updatedProduct = {
            image: req.file.buffer,
            title: req.body.title,
            price: req.body.price
        };
    } else {
        updatedProduct = {
            title: req.body.title,
            price: req.body.price
        };
    }
    await Product.findByIdAndUpdate({_id: req.params.id }, updatedProduct);
    res.redirect("/admin");
});
module.exports = router;