const Router = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const router = new Router()
const SECRET_KEY = process.env.SECRET_KEY

router.post('/api/registration', 
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
        return res.json({message: "User was created"})

    } catch (error) {
        console.log(error)
        res.send({message: "Server error"})
    }
})

router.post('/api/login', 
    async (req, res) => {
    try {
        
        const {username, password} = req.body

        const user = await User.findOne({username})
        
        if(!user){
            return res.status(404).json({message: `User not found`})
        }

        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid){
            return res.status(400).json({message: "invalid password"})
        }

        const token = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: "1h"})
        return res.json({
            token,
            user: {
                id: user.id,
                username: user.username
            }
        })

    } catch (error) {
        console.log(error)
        res.send({message: "Server error"})
    }
})

module.exports = router