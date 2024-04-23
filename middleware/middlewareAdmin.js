const { getAuth } = require("firebase-admin/auth");
const { getAdmin } = require("../services/adminManager");

class Middleware {
	async decodeToken(req, res, next) {
		let token;

		try {
			token = req.headers.authorization.split(" ")[1];
		} catch (error) {
			res.status(401).send({
				message: "error reading authorization token : " + error,
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
			const decodedToken = await getAuth().verifyIdToken(token);

			const adminData = await getAdmin(decodedToken.uid);

			if (!adminData.exists) {
				res.status(401).send({
					message: "Vous n'êtes pas un administrateur",
				});
			}

			req.body.adminData = adminData;
			return next();
		} catch (error) {
			res.status(401).send({
				message: "Erreur d'authentification, veuillez vous reconnecter.",
			});
		}
	}
}

module.exports = new Middleware();
