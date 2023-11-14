'use strict';
const express = require('express');
const router = express.Router();
const Cart = require("../models/cart");
const Product = require("../models/product");
const User = require("../models/user");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const bcrypt = require("bcryptjs")

router.get('/', function (req, res) {
    res.render('adminIndex');
});

router.get('/users', async function (req, res) {
    try {
        const users = await User.find({})
        res.render('adminUsers', {
            users: users
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/users/delete/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        await Cart.findOneAndDelete({ userId: req.params.id });
        res.redirect("/api/admin/users");
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/users/update/:id', async function (req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.render('editUser', {
            user: user
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/users/update/:id', async function (req, res) {
    try {
        if (!req.body.password || !req.body.username || !req.body.role) {
            return res.status(400).send("Please provide all the required fields");
        }
        const currentUser = await User.findById(req.params.id);
        if (!currentUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, currentUser.password);
        if(isPasswordValid){
            if(req.body.newPassword){
                const updatedUserHashedPassword = await bcrypt.hash(req.body.newPassword, 7);
                let updatedUser = {
                    username: req.body.username,
                    role: req.body.role,
                    password: updatedUserHashedPassword
                };
                await User.findByIdAndUpdate({_id: req.params.id }, updatedUser);
            }
            else{
                let updatedUser = {
                    username: req.body.username,
                    role: req.body.role,
                };
                await User.findByIdAndUpdate({_id: req.params.id }, updatedUser);
            }
            res.redirect("/api/admin/users");
        }
        else{
            return res.status(400).send("Wrong user data");
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})  


router.get('/products', async function (req, res) {
    try {
        const products = await Product.find({});
        res.render('adminProducts', {
            products: products
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/products/add', async function (req, res) {
    res.render('addProduct');
});
router.post('/products/add', upload.single("image"), async (req, res) => {
    try {
        if (!req.file || !req.body.title || !req.body.description || !req.body.price) {
            return res.status(400).send("Please provide all the required fields");
        }

        let imageUploadObject = {
            image: req.file.buffer,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        };
        const uploadObject = new Product(imageUploadObject);
        await uploadObject.save();
        res.redirect("/api/admin/products");
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/products/delete/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect("/api/admin/products");
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/products/update/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.render('editProduct', {
            product: product
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/products/update/:id', upload.single("image"), async (req, res) => {
    try{
        if (!req.body.title || !req.body.description || !req.body.price) {
            return res.status(400).send("Please provide all the required fields");
        }
        let updatedProduct;
        if (req.file && req.file.buffer) {
            updatedProduct = {
                image: req.file.buffer,
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            };
        } else {
            updatedProduct = {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            };
        }
        await Product.findByIdAndUpdate({_id: req.params.id }, updatedProduct);
        res.redirect("/api/admin/products");
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;