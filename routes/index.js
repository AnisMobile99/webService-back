const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/test", (req, res, next) => {
	const message = "Connexion with API success .....";
	res.end(JSON.stringify(message));
});

module.exports = router;
