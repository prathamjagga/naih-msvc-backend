const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	studId: {
		type: String,
		required: true,
	},
	name: {
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
	followerIds: {
		type: Array,
		required: true,
	},
	followingIds: {
		type: Array,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	universityOrCollege: {
		type: String,
		required: true,
	},
	community: {
		type: String,
		required: false,
	},
	skills: {
		type: Array,
		required: true,
	},
	githubUsername: {
		type: String,
		required: false,
	},
	linkedinURL: {
		type: String,
		required: false,
	},
	experience: {
		type: Number,
		required: true,
	},
	postIds: {
		type: Array,
		default: [],
	},
	followComms: {
		type: Array,
		default: [],
	},
});

module.exports = mongoose.model("Student", StudentSchema);
