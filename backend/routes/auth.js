const express = require('express');
const router = express.Router();
const User = require("../models/user")
const Cart = require("../models/cart");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const SECRET_KEY = process.env.SECRET_KEY

router.get('/login', function (req, res) {
    res.render('login');
});
router.get('/registration', function (req, res) {
    res.render('registration');
});

router.post('/registration', 
    [
        check('username', 'Username must be longer than 3 and shorter than 12').isLength({min:3, max:12}),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max:12})
    ],
    async (req, res) => {
    try {
        
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message: "Uncorrect request", errors})
        }

        const {username, password} = req.body

        const candidate = await User.findOne({username})

        if(candidate){
            return res.status(400).json({message: `User with username ${username} already exist`})
        }

        const hashPassword = await bcrypt.hash(password, 7)
        const user = new User({username, password: hashPassword})
        await user.save()
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
            { id: user._id, username, role: user.role },
            SECRET_KEY,
            {
              expiresIn: maxAge, // 3hrs in sec
            }
        );
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
        });
        const userId = user._id;
        let cart = new Cart({ userId });
        await cart.save();
        return res.json({message: "User was created"})

    } catch (error) {
        console.log(error)
        res.send({message: "Server error"})
    }
})

router.post('/login', 
    async (req, res) => {
    try {
        const maxAge = 3 * 60 * 60;
        const {username, password} = req.body

        const user = await User.findOne({username})
        
        if(!user){
            return res.status(404).json({message: `User not found`})
        }

        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid){
            return res.status(400).json({message: "invalid password"})
        }

        const token = jwt.sign({id: user._id, username, role: user.role}, SECRET_KEY, {expiresIn: maxAge});
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
        });
        res.status(201).json({
        message: "User successfully Logged in",
        user: user._id,
        });

    } catch (error) {
        console.log(error)
        res.send({message: "Server error"})
    }
})

router.get("/logout", (req, res) => {
    res.cookie("jwt", "", { maxAge: "1" })
    return res.json({message: "User was logout"})
  })

router.get('/checkJwt', (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: 'No token' });
        }

        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if(err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            res.status(200).json({ message: 'Valid token', decoded });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router