require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const indexRouter = require("./routes/index");
const getRouter = require("./routes/get");
const postRouter = require("./routes/post");
const putRouter = require("./routes/put");
const patchRouter = require("./routes/patch");
const deleteRouter = require("./routes/delete");

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);
			if (!allowedOrigins.includes(origin)) {
				var msg =
					"La politique CORS pour ce site ne permet pas l'accès à partir de l'origine spécifiée.";
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	}),
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "1mb" }));

app.use("/", indexRouter);
app.use("/get", getRouter);
app.use("/post", postRouter);
app.use("/put", putRouter);
app.use("/patch", patchRouter);
app.use("/delete", deleteRouter);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

module.exports = { app };
