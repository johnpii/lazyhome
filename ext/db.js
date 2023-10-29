const db = require("mongoose");
require("dotenv").config();
//const MONGODB_URI = process.env.MONGO_URL
const MONGODB_URI = "mongodb://localhost:27017/lazyhome"

db.connect(MONGODB_URI);

module.exports = db;