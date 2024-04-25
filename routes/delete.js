const express = require("express");
const { deleteFilm } = require("../services/deleteManager");
const middlewareAdmin = require("../middleware/middlewareAdmin");
const router = express.Router();

// MIDDLEWARE VERIFY TOKEN
router.use(middlewareAdmin.decodeToken);

router.delete("/film/:uid", async (req, res) => {
	const { uid } = req.params;

	try {
		const deletedFilm = deleteFilm(uid);
		if (deletedFilm) {
			return res
				.status(200)
				.json({ message: "Film supprimé avec succès", deletedFilm });
		} else {
			return res.status(404).json({ message: "Film non trouvé" });
		}
	} catch (error) {
		return res.status(500).json({
			message: "Erreur interne lors de la suppression du film",
			error: error.message,
		});
	}
});
module.exports = router;
