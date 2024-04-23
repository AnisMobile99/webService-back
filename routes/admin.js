const express = require("express");
const middlewareAdmin = require("../middleware/middlewareAdmin");
const {
	getUsers,
	getUser,
	updateStatusDegree,
	updateStatusDocument,
} = require("../services/adminManager");
const { deleteUser } = require("../services/usersManager");
const router = express.Router();

// MIDDLEWARE VERIFY TOKEN
router.use(middlewareAdmin.decodeToken);

router.get("/sportifs", async (req, res, next) => {
	try {
		const sportifs = await getUsers("sportif");
		res.status(200).send(sportifs);
	} catch {
		res
			.status(500)
			.send({ message: "Erreur interne lors de la récupération des sportifs" });
	}
});

router.get("/coachs", async (req, res, next) => {
	try {
		const coachs = await getUsers("coach");
		res.status(200).send(coachs);
	} catch {
		res
			.status(500)
			.send({ message: "Erreur interne lors de la récupération des coachs" });
	}
});

router.get("/user/:uid", async (req, res, next) => {
	const { uid } = req.params;

	try {
		const coachs = await getUser(uid);
		res.status(200).send(coachs);
	} catch {
		res.status(500).send({
			message: "Erreur interne lors de la récupération de l'utilisateur",
		});
	}
});

router.patch("/coach/updateStatusDegree/:uid", async (req, res, next) => {
	const { uid } = req.params;
	const { degreeId, status } = req.body;

	try {
		await updateStatusDegree(uid, degreeId, status);
		res.status(200).send({
			success: true,
		});
	} catch {
		res.status(500).send({
			message: "Erreur interne lors du changement de status du diplome",
		});
	}
});

router.patch("/coach/updateStatusDocument/:uid", async (req, res, next) => {
	const { uid } = req.params;
	const { documentId, status } = req.body;

	try {
		await updateStatusDocument(uid, documentId, status);
		res.status(200).send({
			success: true,
		});
	} catch {
		res.status(500).send({
			message: "Erreur interne lors du changement de status du document",
		});
	}
});

router.delete("/user/:uid", async (req, res, next) => {
	const { uid } = req.params;

	try {
		const coachs = await deleteUser(uid);
		res.status(200);
	} catch {
		res.status(500).send({
			message: "Erreur interne lors de la suppression de l'utilisateur",
		});
	}
});

module.exports = router;
