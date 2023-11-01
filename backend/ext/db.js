const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require("mongoose");
//Connection strings:
const MONGODB_URI = process.env.MONGO_URL
//const MONGODB_URI = "mongodb://localhost:27017/lazyhome"
try{
    db.connect(MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('connected to mongodb successfully');
}catch(e){
    console.log(e);
}

module.exports = db;