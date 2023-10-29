const db = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGO_URL

db.connect(MONGODB_URI);

module.exports = db;