const express = require("express");
const { getFilms } = require("../services/getManager");
const router = express.Router();

// MIDDLEWARE VERIFY TOKEN
//router.use(middlewareAdmin.decodeToken);

router.get("/films", async (req, res, next) => {
	try {
		const films = await getFilms();
		res.status(200).send(films);
	} catch {
		res
			.status(500)
			.send({ message: "Erreur interne lors de la récupération des films" });
	}
});

module.exports = router;
