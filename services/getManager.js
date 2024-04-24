const { films } = require("../data/films");

const getFilms = () => {
	return films;
};

const getFilm = (uid) => {
	return films.find((film) => film.id === parseInt(uid));
};

module.exports = {
	getFilms,
	getFilm,
};
