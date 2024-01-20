const Student = require("../models/index");
const studRouter = require("express").Router();

studRouter.post("/me-polling", async (req, res) => {
	try {
		const student = await Student.findOne({ studId: req.body.studId });
		if (!student) {
			throw new Error("Student not found with the given id.");
		}
		return res.status(200).json({
			success: true,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err,
		});
	}
});

studRouter.post("/me", async (req, res) => {
	try {
		const student = await Student.findOne({ studId: req.body.studId });
		if (!student) {
			throw new Error("Student not found with the given id.");
		}
		return res.status(200).json({
			success: true,
			student,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err,
		});
	}
});

studRouter.post("/post", async (req, res) => {
	try {
		let student = await Student.findOne({ studId: req.body.studId });
		student.postIds.push(req.body.postId);
		await student.save();
		return res.status(200).json({
			success: true,
			postId: req.body.postId,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err,
		});
	}
});

studRouter.post("/follow", async (req, res) => {
	try {
		let from = await Student.findOne({ studId: req.body.from });
		let to = await Student.findOne({ studId: req.body.to });
		from.followingIds.push(req.body.to);
		to.followerIds.push(req.body.from);
		await from.save();
		await to.save();
		res.status(200).json({
			success: true,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err,
		});
	}
});

studRouter.post("/follow-comm", async (req, res) => {
	try {
		let from = await Student.findOne({ studId: req.body.from });
		// let to = await Student.findOne({ studId: req.body.comm });

		// PENDING --- call community api to add to follower list of community here
		from.followedComms.push(req.body.to);
		await from.save();
		res.status(200).json({
			success: true,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err,
		});
	}
});

studRouter.post("add-project", async (req, res) => {
	try {
		// call add project api here with student id
		res.status(200).json({
			success: true,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err,
		});
	}
});

module.exports = studRouter;
