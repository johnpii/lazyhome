const db = require('../ext/db')

const userSchema = new db.Schema({
    username: {type: String, 
        required: true,
        unique: true
        },
    password: {type: String, 
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
}, { versionKey: false })

module.exports = db.model('users', userSchema)