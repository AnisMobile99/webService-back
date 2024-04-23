const jwt = require("jsonwebtoken");
const SECRET_KEY = "anis_secret_key"; // Vous devriez utiliser une clé plus sécurisée et la stocker de manière sécurisée

class Middleware {
	async decodeToken(req, res, next) {
		let token;

		try {
			token = req.headers.authorization.split(" ")[1];
		} catch (error) {
			res.status(401).send({
				message: "Erreur de lecture du token d'autorisation : " + error,
			});
			return;
		}

		if (!token) {
			res.status(401).send({
				message: "Erreur d'authentification, veuillez vous reconnecter.",
			});
			return;
		}

		try {
			const decodedToken = jwt.verify(token, SECRET_KEY);

			// Vous pouvez ajouter ici une logique pour vérifier si l'utilisateur est un administrateur
			// par exemple en vérifiant une propriété spécifique dans le token

			req.user = decodedToken; // Stocker les données de l'utilisateur dans l'objet requête
			return next();
		} catch (error) {
			res.status(401).send({
				message: "Token invalide ou expiré : " + error,
			});
		}
	}
}

module.exports = new Middleware();
