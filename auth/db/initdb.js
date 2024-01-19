const mongoose = require("mongoose");
const { MONGO_URI } = require("../env/vars");

async function initDB() {
	const connect = await mongoose.connect(MONGO_URI);
}

module.exports = initDB;
