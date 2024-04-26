const express = require("express");
const {
	getFilms,
	getFilm,
	getPaginatedFilms,
} = require("../services/getManager");
const middlewareAdmin = require("../middleware/middlewareAdmin");
const router = express.Router();
const { parseString } = require("xml2js");

const jwt = require("jsonwebtoken");
const SECRET_KEY = "anis_secret_key";

function generateToken(userData) {
	return jwt.sign(userData, SECRET_KEY);
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

		// Récupérer les paramètres de pagination depuis les paramètres de requête, s'ils sont fournis
		const rowPerPage = parseInt(req.query.rowPerPage); // Nombre de lignes par page, par défaut 10
		const page = parseInt(req.query.page); // Numéro de page, par défaut 1

		// Récupérer la catégorie sélectionnée depuis les paramètres de requête
		const selectedCategory = req.query.selectedCategory || "";

		// Calculer l'indice de départ et de fin pour la pagination
		const startIndex = (page - 1) * rowPerPage;
		const endIndex = startIndex + rowPerPage;

		// Récupérer les films paginés en fonction des paramètres de pagination et de catégorie
		let paginatedFilms;
		let response;
		let data;

		if (rowPerPage && page) {
			paginatedFilms = await getPaginatedFilms(
				search,
				startIndex,
				endIndex,
				selectedCategory,
			);

			if (paginatedFilms.length === 0) {
				return res.status(404).send({
					message: "Aucun film ne correspond à cette recherche",
					isExists: false,
					search,
					selectedCategory,
					isPagined: true,
					pagination: {
						totalRows: paginatedFilms.length,
						totalPages: Math.ceil(paginatedFilms.length / rowPerPage),
						rowPerPage,
						currentPage: page,
					},
					_links: {
						self: { href: req.originalUrl },
						first: {
							href: `/films?page=1&rowPerPage=${rowPerPage}&search=${search}&selectedCategory=${selectedCategory}`,
						},
						prev:
							page > 1
								? {
										href: `/films?page=${
											page - 1
										}&rowPerPage=${rowPerPage}&search=${search}&selectedCategory=${selectedCategory}`,
									}
								: null,
						next:
							endIndex < paginatedFilms.length
								? {
										href: `/films?page=${
											page + 1
										}&rowPerPage=${rowPerPage}&search=${search}&selectedCategory=${selectedCategory}`,
									}
								: null,
						last: {
							href: `/films?page=${Math.ceil(
								paginatedFilms.length / rowPerPage,
							)}&rowPerPage=${rowPerPage}&search=${search}&selectedCategory=${selectedCategory}`,
						},
						search: { href: `/films?search=${search}` },
						category: { href: `/films?selectedCategory=${selectedCategory}` },
					},
				});
			}
			data = paginatedFilms;

			response = {
				data,
				isExists: true,
				search,
				selectedCategory,
				isPagined: true,
				pagination: {
					totalRows: paginatedFilms.length,
					totalPages: Math.ceil(paginatedFilms.length / rowPerPage),
					rowPerPage,
					currentPage: page,
				},
				_links: {
					self: { href: req.originalUrl },
					first: {
						href: `/films?page=1&rowPerPage=${rowPerPage}&search=${search}&selectedCategory=${selectedCategory}`,
					},
					prev:
						page > 1
							? {
									href: `/films?page=${
										page - 1
									}&rowPerPage=${rowPerPage}&search=${search}&selectedCategory=${selectedCategory}`,
								}
							: null,
					next:
						endIndex < paginatedFilms.length
							? {
									href: `/films?page=${
										page + 1
									}&rowPerPage=${rowPerPage}&search=${search}&selectedCategory=${selectedCategory}`,
								}
							: null,
					last: {
						href: `/films?page=${Math.ceil(
							paginatedFilms.length / rowPerPage,
						)}&rowPerPage=${rowPerPage}&search=${search}&selectedCategory=${selectedCategory}`,
					},
					search: { href: `/films?search=${search}` },
					category: { href: `/films?selectedCategory=${selectedCategory}` },
				},
			};
		} else {
			data = await getFilms(search, selectedCategory);

			if (data.length === 0) {
				return res.status(404).send({
					message: "Aucun film ne correspond à cette recherche",
					isExists: false,
					search,
					data,
					selectedCategory,
					isPagined: false,
					_links: {
						self: { href: req.originalUrl },
						search: { href: `/films?search=${search}` },
						category: { href: `/films?selectedCategory=${selectedCategory}` },
					},
				});
			} else {
				response = {
					data,
					isExists: true,
					search,
					selectedCategory,
					isPagined: false,
					_links: {
						self: { href: req.originalUrl },
						search: { href: `/films?search=${search}` },
						category: { href: `/films?selectedCategory=${selectedCategory}` },
					},
				};
			}
		}

		return res.status(200).send(response);
	} catch (error) {
		return res.status(500).send({
			message: "Erreur interne lors de la récupération des films",
			error: error.message,
		});
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
