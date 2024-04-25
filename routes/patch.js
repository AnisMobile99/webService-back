const express = require("express");
const { z } = require("zod");
const { patchFilm } = require("../services/patchManager");
const middlewareAdmin = require("../middleware/middlewareAdmin");

const router = express.Router();

// MIDDLEWARE VERIFY TOKEN
router.use(middlewareAdmin.decodeToken);

router.patch("/film/:uid", async (req, res) => {
	const { uid } = req.params;
	const { film } = req.body;

	const safeValues = z
		.object({
			nom: z.string().min(1, "Le nom du film ne peut pas être vide").optional(),
			description: z
				.string()
				.min(1, "La description ne peut pas être vide")
				.optional(),
			date_parution: z
				.string()
				.regex(
					/^\d{4}-\d{2}-\d{2}$/,
					"La date de parution doit être au format YYYY-MM-DD",
				)
				.optional(),
			note: z
				.number()
				.int()
				.min(0, "La note ne peut pas être inférieure à 0")
				.max(5, "La note ne peut pas être supérieure à 5")
				.optional(),
		})
		.safeParse(film);

	if (!safeValues.success) {
		return res.status(422).json({
			message: "Validation des données échouée",
			errors: safeValues.error.errors,
		});
	}

	const updatedFilm = patchFilm(uid, safeValues.data);
	if (updatedFilm) {
		res.status(200).json(updatedFilm);
	} else {
		res.status(404).json({ message: "Film non trouvé" });
	}
});

module.exports = router;
