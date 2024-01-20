async function authGuard(req, res, next) {
	if (req.body.token == "123admin") {
		next();
	} else {
		return res.status(401).json({
			success: false,
		});
	}
}

module.exports = authGuard;
