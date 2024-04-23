require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const http = require("http");
const { Server } = require("socket.io");
const cron = require("node-cron");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const coachRouter = require("./routes/coach");
const calendarRouter = require("./routes/calendar");
const stripeRouter = require("./routes/stripe");
const chatRouter = require("./routes/chat");
const reservationRouter = require("./routes/reservation");
const factureRouter = require("./routes/facture");
const notificationRouter = require("./routes/notification");
const sessionRouter = require("./routes/session");
const referralRouter = require("./routes/referral");
const appInformationRouter = require("./routes/appInformation");
const adminRouter = require("./routes/admin");
const {
	reminderNotificationRappel,
	GenerateFactureTaxForPrestationCoach,
	fetchAndUpdateSessions,
	cleanUP,
	testUP,
} = require("./services/automatisationManager");

const app = express();

const port = process.env.PORT || 5000;

const allowedOrigins = [
	"https://koacher.app",
	"https://www.koacher.app",
	"https://pro.koacher.app",
	"https://go.koacher.app",
	"https://dev.koacher.app",
	"http://localhost:5173", // Si vous souhaitez autoriser les requêtes locales en développement
	"http://localhost:3000", // Si vous souhaitez autoriser les requêtes locales en développement
	"http://localhost:3001", // Si vous souhaitez autoriser les requêtes locales en développement
	"capacitor://localhost", // Ajoutez cette ligne si votre application Capacitor sur iOS nécessite l'accès
];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true); // Permet les requêtes sans 'origin' (comme les requêtes mobiles ou curl)
			if (allowedOrigins.indexOf(origin) === -1) {
				var msg =
					"La politique CORS pour ce site ne permet pas l'accès à partir de l'origine spécifiée.";
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	}),
);

app.use(express.static("public")); // 'public' est le nom du dossier où se trouvent vos fichiers statiques
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//app.use(cors({ origin: true }));

app.use((req, res, next) => {
	console.log(`Receiving request for ${req.url}`); // Ajout d'un log pour chaque requête reçue, utile pour le débogage
	if (
		req.originalUrl.includes("/stripe/webhook") ||
		req.originalUrl.includes("/stripe/webhook/connect")
	) {
		next();
	} else {
		express.json({ limit: "1mb" })(req, res, next);
	}
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/coach", coachRouter);
app.use("/calendar", calendarRouter);
app.use("/stripe", stripeRouter);
app.use("/chat", chatRouter);
app.use("/reservation", reservationRouter);
app.use("/facture", factureRouter);
app.use("/notification", notificationRouter);
app.use("/session", sessionRouter);
app.use("/referral", referralRouter);
app.use("/appInformation", appInformationRouter);
app.use("/admin", adminRouter);

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: allowedOrigins, // Utilisez les mêmes origines autorisées que pour les requêtes HTTP
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("User connected");
	// Un client demande à rejoindre une room spécifique (par exemple, basée sur son ID utilisateur)
	socket.on("joinRoom", (roomID) => {
		socket.join(roomID);
		console.log("user connected room", roomID);
	});
});
app.io = io;

// Tâche cron pour exécuter reminderNotificationRappel toutes les 30 minutes
cron.schedule("*/30 * * * *", () => {
	console.log(
		"Exécution de la tâche reminderNotificationRappel toutes les 30 minutes",
	);
	//reminderNotificationRappel();
});

// Tâche cron pour exécuter GenerateFactureTaxForPrestationCoach à la fin de chaque mois
cron.schedule("59 23 28-31 * *", () => {
	const date = new Date();
	const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
	if (tomorrow.getDate() === 1) {
		console.log(
			"Exécution de la tâche GenerateFactureTaxForPrestationCoach à la fin de chaque mois",
		);
		GenerateFactureTaxForPrestationCoach();
	}
});

// Tâche cron pour exécuter fetchAndUpdateSessions tous les jours à 23h00
cron.schedule("0 23 * * *", () => {
	console.log(
		"Exécution de la tâche fetchAndUpdateSessions tous les jours à 23h00",
	);
	//fetchAndUpdateSessions();
});

server.listen(port, async () => {
	console.log(`server running port ${port}`);
	//testUP();
});

module.exports = { app, sgMail };
