const express = require("express");
const { getFilms, getFilm } = require("../services/getManager");
const middlewareAdmin = require("../middleware/middlewareAdmin");
const router = express.Router();
const { parseString } = require("xml2js");

const jwt = require("jsonwebtoken");
const SECRET_KEY = "anis_secret_key";

function generateToken(userData) {
	return jwt.sign(userData, SECRET_KEY, { expiresIn: "1h" }); // Expire dans 1 heure
}

router.post("/getToken", (req, res) => {
	const { username, password } = req.body;

	if (username === "admin" && password === "admin") {
		// Remplacez par votre logique de vérification des identifiants
		const userData = {
			id: 1,
			username: "admin",
			role: "admin",
		};
		const token = generateToken(userData);
		res.send({ token });
	} else {
		res.status(401).send({ message: "Identifiants incorrects" });
	}
});

// MIDDLEWARE VERIFY TOKEN
router.use(middlewareAdmin.decodeToken);

router.get("/films", async (req, res, next) => {
	try {
		// Récupérer le terme de recherche depuis les paramètres de requête
		const search = req.query.search || "";
		console.log("seearch param", search);
		const films = await getFilms(search);
		if (films.length === 0) {
			return res.status(200).send({
				message: "Aucun film ne correspond à cette recherche",
				isExists: false,
			});
		}

		return res.status(200).send({
			data: films,
			isExists: true,
		});
	} catch {
		return res
			.status(500)
			.send({ message: "Erreur interne lors de la récupération des films" });
	}
});

router.get("/film/:uid", async (req, res, next) => {
	const { uid } = req.params;
	try {
		const film = await getFilm(uid);
		if (film) {
			res.status(200).send(film);
		} else {
			res.status(404).send({ message: "Film non trouvé" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).send({
			message: "Erreur interne lors de la récupération du film",
			error: error.message,
		});
	}
});

module.exports = router;
