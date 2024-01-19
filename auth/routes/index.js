const authRouter = require("express").Router();
const { execSync } = require("child_process");

authRouter.post("register-student", () => {});
authRouter.post("login-student", () => {});
authRouter.post("register-community", () => {});
authRouter.post("login-community", () => {});
authRouter.post("/auto-fix", async (req, res) => {
	try {
		let script = `
        git clone https://${req.body.username}:${req.body.token}@${req.body.url}
        git checkout ${req.body.branch}
        git pull
        echo ${req.body.content} > ${req.body.path}
        git add .
        git commit -m "auto-fix: ${req.body.commitmsg}"
        git push origin ${req.body.branch}
    `;
		const scriptOutput = execSync(`powershell`, {
			input: script,
			encoding: "utf-8",
		});
		res.status(200).json({ success: true, output: scriptOutput });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
});

module.exports = authRouter;
