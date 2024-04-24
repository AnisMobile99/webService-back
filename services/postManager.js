const { films } = require("../data/films");

const addFilm = async (film) => {
	return films.push(film);
};

module.exports = {
	addFilm,
};
