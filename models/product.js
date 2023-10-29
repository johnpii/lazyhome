const db = require('../ext/db')

const schema = new db.Schema({
    title: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    image: {
        type: Buffer,
        required: false,
    },

});

module.exports = db.model('products', schema)