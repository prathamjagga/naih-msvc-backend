const mongoose = require("mongoose");

const CommSchema = new mongoose.Schema({
	commId: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Community", CommSchema);
