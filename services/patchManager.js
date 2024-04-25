const { films } = require("../data/films");

const patchFilm = (uid, updatedFilm) => {
	// Trouver l'index du film basé sur son id
	const index = films.findIndex((film) => film.id === parseInt(uid));

	if (index !== -1) {
		// Mise à jour du film avec les nouvelles données en s'assurant de ne pas écraser l'id
		films[index] = { ...films[index], ...updatedFilm };

		// Retourner le film mis à jour pour confirmation
		return films[index];
	} else {
		// Retourner null si aucun film n'est trouvé avec l'id fourni
		return null;
	}
};
module.exports = {
	patchFilm,
};
