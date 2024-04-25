const { films } = require("../data/films");

const deleteFilm = (uid) => {
	const index = films.findIndex((film) => film.id === parseInt(uid));
	if (index !== -1) {
		films.splice(index, 1); // Supprimer le film du tableau
		return true;
	}
	return false; // Retourner false si aucun film correspondant n'est trouvé
};
module.exports = {
	deleteFilm,
};
