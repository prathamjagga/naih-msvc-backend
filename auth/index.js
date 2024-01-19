const initDB = require("./db/initdb");
const { PORT } = require("./env/vars");
const authRouter = require("./routes");

const app = require("express")();

async function initApp() {
	await initDB();
	app.use(require("express").json());
	app.use("/api/auth/", authRouter);
	app.listen(PORT, () => {
		console.log(`Auth listening on ${PORT}`);
	});
}

initApp();
