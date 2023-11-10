'use strict';
const express = require('express');
const router = express.Router();
const Product = require("../models/product");
const User = require("../models/user");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', function (req, res) {
    res.render('adminIndex');
});

router.get('/users', async function (req, res) {
    const users = await User.find({})
    res.render('adminUsers', {
        users: users
    });
});

router.get('/users/add', function (req, res) {
    res.render('addUser');
});

router.get('/users/delete/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/api/admin/users");
});

router.get('/products', async function (req, res) {
    const products = await Product.find({});
    res.render('adminProducts', {
        products: products
    });
});
router.get('/products/add', async function (req, res) {
    res.render('addProduct');
});
router.post('/products/add', upload.single("image"), async (req, res) => {
    if (!req.file || !req.body.title || !req.body.price) {
        return res.status(400).send("Please provide all the required fields");
    }

    let imageUploadObject = {
        image: req.file.buffer,
        title: req.body.title,
        price: req.body.price
    };
    const uploadObject = new Product(imageUploadObject);
    // saving the object into the database
    const uploadProcess = await uploadObject.save();
    res.redirect("/api/admin/products");
});

router.get('/products/delete/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/api/admin/products");
});

router.get('/products/update/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('editProduct', {
        product: product
    });
});

router.post('/products/update/:id', upload.single("image"), async (req, res) => {
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
    res.redirect("/api/admin/products");
});
module.exports = router;