const { films } = require("../data/films");

const getFilms = () => {
	return films;
};

const getFilm = (uid) => {
	return films.find((film) => film.id === parseInt(uid));
};

const addFilm = (film) => {
	films.push(film);
};

const updateFilm = (uid, updatedFilm) => {
	const index = films.findIndex((film) => film.id === parseInt(uid));
	if (index !== -1) {
		films[index] = { ...films[index], ...updatedFilm };
	}
};
module.exports = {
	getFilms,
	getFilm,
	addFilm,
	updateFilm,
};
