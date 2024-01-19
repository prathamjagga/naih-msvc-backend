module.exports = {
	PORT: process.env.PORT || 5001,
	MONGO_URI:
		process.env.MONGO_URI ||
		"mongodb+srv://pratham:pratham@cluster0.6b0ku.mongodb.net/?retryWrites=true&w=majority",
};
