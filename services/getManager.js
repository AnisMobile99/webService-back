const { films } = require("../data/films");

const getFilms = async (search) => {
	if (!search) return films;
	return films.filter(
		(film) =>
			film.nom.toLowerCase().includes(search.toLowerCase()) ||
			film.description.toLowerCase().includes(search.toLowerCase()),
	);
};

const getFilm = (uid) => {
	return films.find((film) => film.id === parseInt(uid));
};

const getPaginatedFilms = async (search, startIndex, endIndex) => {
	// Récupérer tous les films (ou filtrer en fonction de la recherche)
	const allFilms = films;

	// Appliquer la recherche si un terme de recherche est fourni
	const filteredFilms = search
		? allFilms.filter((film) =>
				film.nom.toLowerCase().includes(search.toLowerCase()),
			)
		: allFilms;

	// Paginer les films en fonction des indices de début et de fin
	const paginatedFilms = filteredFilms.slice(startIndex, endIndex);

	return paginatedFilms;
};

module.exports = {
	getFilms,
	getFilm,
	getPaginatedFilms,
};
