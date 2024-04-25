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

module.exports = {
	getFilms,
	getFilm,
};
