const initDB = require("./db/initdb");
const { PORT } = require("./env/vars");
const studRouter = require("./routes");

const app = require("express")();

async function initApp() {
	await initDB();
	app.use(require("express").json());
	app.use("api/students", studRouter);
	app.listen(PORT, () => {
		console.log(`Students listening on ${PORT}`);
	});
}

initApp();
