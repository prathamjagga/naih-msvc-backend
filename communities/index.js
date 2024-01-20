const initDB = require("./db/initdb");
const { PORT } = require("./env/vars");
const commRouter = require("./routes");

const app = require("express")();

async function initApp() {
	await initDB();
	app.use(require("express").json());
	app.use("api/communities", commRouter);
	app.listen(PORT, () => {
		console.log(`Communities listening on ${PORT}`);
	});
}

initApp();
