const { films } = require("../data/films");

const getFilms = async (search, selectedCategory) => {
	let filteredFilms = films;

	// Filtrer par recherche
	if (search) {
		filteredFilms = filteredFilms.filter(
			(film) =>
				film.nom.toLowerCase().includes(search.toLowerCase()) ||
				film.description.toLowerCase().includes(search.toLowerCase()),
		);
	}

	// Filtrer par catégorie
	if (selectedCategory) {
		filteredFilms = filteredFilms.filter((film) =>
			film.categories.some((category) =>
				category.name.toLowerCase().includes(selectedCategory.toLowerCase()),
			),
		);
	}

	return filteredFilms;
};

const getFilm = (uid) => {
	return films.find((film) => film.id === parseInt(uid));
};

const getPaginatedFilms = async (
	search,
	startIndex,
	endIndex,
	selectedCategory,
) => {
	let filteredFilms = films;

	// Filtrer par recherche
	if (search) {
		filteredFilms = filteredFilms.filter(
			(film) =>
				film.nom.toLowerCase().includes(search.toLowerCase()) ||
				film.description.toLowerCase().includes(search.toLowerCase()),
		);
	}

	// Filtrer par catégorie
	if (selectedCategory) {
		filteredFilms = filteredFilms.filter((film) =>
			film.categories.some((category) =>
				category.name.toLowerCase().includes(selectedCategory.toLowerCase()),
			),
		);
	}

	// Paginer les films en fonction des indices de début et de fin
	const paginatedFilms = filteredFilms.slice(startIndex, endIndex);

	return paginatedFilms;
};

module.exports = {
	getFilms,
	getFilm,
	getPaginatedFilms,
};
