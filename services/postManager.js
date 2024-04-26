const { films } = require("../data/films");

const addFilm = async (film) => {
	try {
		const index = films.unshift(film); // Insérer le film au début du tableau et récupérer l'index
		films[0].id = index; // Ajouter l'index comme identifiant unique (l'index est +1 par rapport au tableau JavaScript)
		return index; // Renvoyer l'index attribué au film ajouté
	} catch (error) {
		return false;
	}
};

module.exports = {
	addFilm,
};
