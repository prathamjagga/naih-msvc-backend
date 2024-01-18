const mongoose = require("mongoose");

const CommSchema = new mongoose.Schema({
	commId: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	postIds: {
		type: Array,
		default: [],
	},
	followerIds: {
		type: Array,
		default: [],
	},
});

module.exports = mongoose.model("Community", CommSchema);
