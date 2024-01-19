async function registerStudent(req, res) {
	if (req.body.username == "admin" && req.body.password == "admin") {
		return res.status(200).json({ success: true, token: "123admin" });
	} else {
		return res.status(401).json({
			success: false,
		});
	}
}

async function loginStudent(req, res) {
	if (req.body.username == "admin" && req.body.password == "admin") {
		return res.status(200).json({ success: true, token: "123admin" });
	} else {
		return res.status(401).json({
			success: false,
		});
	}
}

async function registerCommunity(req, res) {
	if (req.body.username == "admin" && req.body.password == "admin") {
		return res.status(200).json({ success: true, token: "123admin" });
	} else {
		return res.status(401).json({
			success: false,
		});
	}
}

async function loginCommunity(req, res) {
	if (req.body.username == "admin" && req.body.password == "admin") {
		return res.status(200).json({ success: true, token: "123admin" });
	} else {
		return res.status(401).json({
			success: false,
		});
	}
}

module.exports = {
	registerStudent,
	loginStudent,
	registerCommunity,
	loginCommunity,
};
