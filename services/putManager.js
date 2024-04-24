const updateFilm = (uid, updatedFilm) => {
	const index = films.findIndex((film) => film.id === parseInt(uid));
	if (index !== -1) {
		films[index] = { ...films[index], ...updatedFilm };
	}
};

module.exports = {
	updateFilm,
};
