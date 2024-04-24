const express = require("express");
const router = express.Router();
const { z } = require("zod");
const { addFilm } = require("../services/postManager");

// MIDDLEWARE VERIFY TOKEN
//router.use(middlewareAdmin.decodeToken);

router.post("/film", async (req, res, next) => {
	const { film } = req.body;

	const safeValues = z
		.object({
			nom: z.string().min(1, "Le nom du film ne peut pas être vide"),
			description: z.string().min(1, "La description ne peut pas être vide"),
			date_parution: z
				.string()
				.regex(
					/^\d{4}-\d{2}-\d{2}$/,
					"La date de parution doit être au format YYYY-MM-DD",
				),
			note: z
				.number()
				.int()
				.min(0, "La note ne peut pas être inférieure à 0")
				.max(5, "La note ne peut pas être supérieure à 5"),
		})
		.safeParse(film);

	if (!safeValues.success) {
		return res.status(422).json({
			message: "Validation des données échouée",
			errors: safeValues.error.errors,
		});
	}

	try {
		await addFilm(safeValues.data);
		return res.status(201).send(safeValues.data);
	} catch (error) {
		return res.status(500).send({
			message:
				"Erreur interne lors de la récupération des films :" + error.message,
		});
	}
});

module.exports = router;
